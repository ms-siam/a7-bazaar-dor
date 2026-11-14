import { toast } from "react-toastify";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

export const showSuccess = (message: string) =>
    toast.success(message, {
        toastId: "success",
        icon: <FaCircleCheck className="text-2xl text-green-500" />,
    });

export const showError = (message: string) =>
    toast.error(message, {
        toastId: "error",
        icon: <FaCircleXmark className="text-2xl text-red-500" />,
    });