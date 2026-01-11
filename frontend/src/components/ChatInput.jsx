import { useState } from "react";

export default function ChatInput({ onSend }) {
	const [text, setText] = useState("");

	const submit = () => {
		if (!text.trim()) return;
		onSend(text);
		setText("");
	};

	return (
		<div style={inputWrapper}>
			<input
				value={text}
				onChange={(e) => setText(e.target.value)}
				onKeyDown={(e) => e.key === "Enter" && submit()}
				placeholder="Type your message…"
				style={inputStyle}
			/>
			<button type="button" onClick={submit} style={sendBtnStyle}>
				➤
			</button>
		</div>
	);
}

const inputWrapper = {
	display: "flex",
	alignItems: "center",
	padding: "12px",
	borderTop: "1px solid #e5e7eb",
	background: "#ffffff",
};

const inputStyle = {
	flex: 1,
	padding: "10px 14px",
	fontSize: "14px",
	borderRadius: "999px",
	border: "1px solid #d1d5db",
	outline: "none",
};

const sendBtnStyle = {
	marginLeft: "10px",
	width: "40px",
	height: "40px",
	borderRadius: "50%",
	background: "#2563eb",
	color: "#fff",
	border: "none",
	cursor: "pointer",
	fontSize: "16px",
	boxShadow: "0 4px 10px rgba(37,99,235,0.4)",
};
