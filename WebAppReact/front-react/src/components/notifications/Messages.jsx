import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Message({
  type,
  message,
  options, // Asegura que 'options' tiene un valor predeterminado si no se proporciona
}) {
  switch (type) {
    case "error":
      toast.error(message, { ...options, toastId: message });
      break;
    case "info":
      toast.info(message, { ...options, toastId: message });
      break;
    case "success":
      toast.success(message, { ...options, toastId: message });
      break;
    case "warn":
      toast.warn(message, { ...options, toastId: message });
      break;
    default:
      toast(message, { ...options, toastId: message });
      break;
  }
}

export default Message;
