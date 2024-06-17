import { showNotification } from "@mantine/notifications";

type notifyType = (success?: boolean, message?: string) => Promise<void>

export const notify: notifyType = async (isSuccess, message = "Ошибка") => {
    showNotification({
        message: message,
        color: isSuccess ? "green" : "red"
    });
};