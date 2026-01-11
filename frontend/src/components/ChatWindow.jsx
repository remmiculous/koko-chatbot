import { useChat } from "../hooks/useChat";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

export default function ChatWindow({ config, onClose }) {
	const { messages, sendMessage, loading } = useChat(config);

	return (
		<div style={windowStyle}>
			{/* Header */}
			<div style={headerStyle}>
				<div>
					<div style={{ fontWeight: 600 }}>Vet Assistant</div>
					<div style={subHeader}>Online • Ask anything about pet care</div>
				</div>
				<button type="button" onClick={onClose} style={closeBtnStyle}>
					✕
				</button>
			</div>

			{/* Messages */}
			<div style={messagesStyle}>
				{messages.map((msg, i) => (
					<MessageBubble key={i} message={msg} />
				))}

				{loading && <div style={typingStyle}>Typing…</div>}
			</div>

			{/* Input */}
			<ChatInput onSend={sendMessage} />
		</div>
	);
}

const windowStyle = {
	position: "fixed",
	bottom: "90px",
	right: "20px",
	width: "340px",
	height: "460px",
	background: "#fff",
	borderRadius: "14px",
	boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
	display: "flex",
	flexDirection: "column",
	zIndex: 9999,
	overflow: "hidden",
};

const headerStyle = {
	background: "linear-gradient(135deg, #2563eb, #1e40af)",
	color: "#fff",
	padding: "14px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
};

const subHeader = {
	fontSize: "11px",
	opacity: 0.85,
};

const closeBtnStyle = {
	background: "transparent",
	border: "none",
	color: "#fff",
	fontSize: "18px",
	cursor: "pointer",
};

const messagesStyle = {
	flex: 1,
	padding: "14px",
	overflowY: "auto",
	background: "#f8fafc",
	display: "flex",
	flexDirection: "column",
};

const typingStyle = {
	fontSize: "12px",
	color: "#6b7280",
	marginTop: "6px",
};
