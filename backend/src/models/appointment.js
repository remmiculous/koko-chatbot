import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
	{
		sessionId: {
			type: String,
			required: true,
			index: true,
		},

		ownerName: {
			type: String,
			required: true,
			trim: true,
		},

		petName: {
			type: String,
			required: true,
			trim: true,
		},

		phoneNumber: {
			type: String,
			required: true,
			match: [/^\+?[0-9]{7,15}$/, "Invalid phone number"],
		},

		preferredDateTime: {
			type: Date,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
