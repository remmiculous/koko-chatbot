import { useState } from "react";
import ChatWindow from "./ChatWindow";

export default function ChatWidget({ config }) {
	const [open, setOpen] = useState(false);

	return (
		<>
			{open && <ChatWindow config={config} onClose={() => setOpen(false)} />}

			<button
				type="button"
				onClick={() => setOpen(!open)}
				style={widgetBtn}
				title="Chat with Vet Assistant"
			>
				🐶
			</button>
		</>
	);
}

const widgetBtn = {
	position: "fixed",
	bottom: "20px",
	right: "20px",
	width: "58px",
	height: "58px",
	borderRadius: "50%",
	background: "linear-gradient(135deg, #2563eb, #1e40af)",
	color: "#fff",
	fontSize: "24px",
	border: "none",
	cursor: "pointer",
	zIndex: 9999,
	boxShadow: "0 12px 28px rgba(0,0,0,0.3)",
	transition: "transform 0.2s ease, box-shadow 0.2s ease",
};
