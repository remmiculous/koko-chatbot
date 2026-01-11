import Appointment from "../models/Appointment.js";

const STEPS = {
	OWNER_NAME: "OWNER_NAME",
	PET_NAME: "PET_NAME",
	PHONE: "PHONE",
	DATETIME: "DATETIME",
	CONFIRM: "CONFIRM",
};

export const handleAppointmentFlow = async (conversation, message) => {
	const state = conversation.conversationState;

	// Initialize flow
	if (!state.step) {
		state.step = STEPS.OWNER_NAME;
		return "Sure! What is the pet owner's name?";
	}

	switch (state.step) {
		case STEPS.OWNER_NAME:
			conversation.context.ownerName = message;
			state.step = STEPS.PET_NAME;
			return "Thanks! What is your pet's name?";

		case STEPS.PET_NAME:
			conversation.context.petName = message;
			state.step = STEPS.PHONE;
			return "Got it. Please share your phone number.";

		case STEPS.PHONE:
			if (!/^\+?[0-9]{7,15}$/.test(message)) {
				return "Please enter a valid phone number (digits only).";
			}
			conversation.context.phoneNumber = message;
			state.step = STEPS.DATETIME;
			return "When would you like to schedule the appointment? (Date & time)";

		case STEPS.DATETIME: {
			const parsedDate = new Date(message);
			if (Number.isNaN(parsedDate.getTime())) {
				return "Please provide a valid date and time.";
			}

			conversation.context.preferredDateTime = parsedDate;
			state.step = STEPS.CONFIRM;

			return `
Please confirm your appointment details:
- Owner: ${conversation.context.ownerName}
- Pet: ${conversation.context.petName}
- Phone: ${conversation.context.phoneNumber}
- Date & Time: ${parsedDate.toLocaleString()}

Reply with "yes" to confirm or "no" to cancel.
      `.trim();
		}

		case STEPS.CONFIRM:
			if (!/^yes$/i.test(message)) {
				state.step = null;
				state.intent = "chat";
				conversation.context = {};
				return "Okay, appointment booking cancelled. How else can I help you?";
			}

			await Appointment.create({
				sessionId: conversation.sessionId,
				ownerName: conversation.context.ownerName,
				petName: conversation.context.petName,
				phoneNumber: conversation.context.phoneNumber,
				preferredDateTime: conversation.context.preferredDateTime,
			});

			// Reset conversation state
			state.step = null;
			state.intent = "chat";

			return "✅ Your appointment has been booked successfully! How else can I help you?";

		default:
			state.step = null;
			state.intent = "chat";
			return "Something went wrong. Let's start over.";
	}
};
