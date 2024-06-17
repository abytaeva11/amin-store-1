export async function convertToBase64(imageFile: File | null): Promise<string | undefined> {
    if (imageFile) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(imageFile);
            reader.onload = () => {
                const result = reader.result as string;
                const base64String = result.split(',')[1];
                resolve(base64String);
            };
            reader.onerror = error => reject(error);
        });
    }
    return;
}