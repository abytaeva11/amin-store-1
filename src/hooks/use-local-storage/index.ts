export const useLocalStorage = <T>(key: "profile" | "i18nextLng") => {
    const setItem = (data: T) => {
        try {
            const serializedData = JSON.stringify(data);
            localStorage.setItem(key, serializedData);
        } catch (error) {
            console.error('Error while setting item in localStorage:', error);
        }
    };

    const getItem = (): T | null => {
        const data = localStorage.getItem(key);
        if (data === null) {
            return null;
        }
        try {
            return JSON.parse(data);
        } catch (error) {
            return data as T;
        }
    };

    const removeItem = () => {
        localStorage.removeItem(key);
    };

    return {
        setItem,
        getItem,
        removeItem,
    };
};
