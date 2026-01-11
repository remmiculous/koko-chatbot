import { useState } from "react";
import { generateSessionId } from "../lib/utils.js";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
const API_URL = `${API_BASE.replace(/\/$/, "")}/api/chat`;

export function useChat(config) {
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(false);

	const sessionId =
		config.sessionId ||
		localStorage.getItem("vet_session") ||
		generateSessionId();

	localStorage.setItem("vet_session", sessionId);

	const sendMessage = async (text) => {
		setMessages((m) => [...m, { role: "user", content: text }]);
		setLoading(true);

		const res = await fetch(API_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				sessionId,
				message: text,
				context: config,
			}),
		});

		const data = await res.json();

		setMessages((m) => [...m, { role: "bot", content: data.reply }]);
		setLoading(false);
	};

	return { messages, sendMessage, loading };
}
