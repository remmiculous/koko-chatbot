import { createRoot } from "react-dom/client";
import ChatWidget from "./components/ChatWidget";

(function initVetChatbot() {
	// Prevent double injection
	if (window.__VET_CHATBOT_LOADED__) return;
	window.__VET_CHATBOT_LOADED__ = true;

	// Create container
	const container = document.createElement("div");
	container.id = "vet-chatbot-root";
	document.body.appendChild(container);

	// Read optional config
	const config = window.VetChatbotConfig || {};

	const root = createRoot(container);
	root.render(<ChatWidget config={config} />);
})();
