// src/utils/api.ts
export const getApiUrl = () => {
  // If running on laptop, use localhost
  if (window.location.hostname === "localhost") {
    return "http://localhost:8000/send-mail.php";
  }
  // Otherwise (e.g., phone), use the laptop's local IP
  return "http://192.168.162.30:8000/send-mail.php";
};
