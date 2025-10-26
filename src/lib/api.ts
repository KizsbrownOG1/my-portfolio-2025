
export const getApiUrl = () => {
  if (window.location.hostname === "localhost") {
    return "http://localhost:8000/send-mail.php";
  }
  return "https://email-api.iceiy.com/send-mail.php";
};
