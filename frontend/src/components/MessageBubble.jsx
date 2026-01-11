export default function MessageBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <div
      style={{
        maxWidth: "78%",
        padding: "10px 14px",
        borderRadius: isUser
          ? "16px 16px 4px 16px"
          : "16px 16px 16px 4px",
        marginBottom: "10px",
        fontSize: "14px",
        lineHeight: 1.4,
        alignSelf: isUser ? "flex-end" : "flex-start",
        background: isUser ? "#2563eb" : "#ffffff",
        color: isUser ? "#ffffff" : "#111827",
        border: isUser ? "none" : "1px solid #e5e7eb",
        boxShadow: isUser
          ? "0 4px 12px rgba(37,99,235,0.3)"
          : "0 2px 8px rgba(0,0,0,0.08)"
      }}
    >
      {message.content}
    </div>
  );
}
