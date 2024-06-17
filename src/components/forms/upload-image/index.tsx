import { FC, useRef, useState } from "react";
import { Button, FileButton } from "@mantine/core";

type Props = {
    clear?: boolean;
    disabled?: boolean;
    defaultVal?: string | null;
    onChange?: (value: string | File | null) => void;
    fileType?: boolean;
    setState?: (value: string) => void;
};

export const ImageUpload: FC<Props> = ({
    clear,
    disabled,
    onChange,
    defaultVal,
    fileType,
    setState,
}) => {
    const [file, setFile] = useState<File | null>(
        defaultVal ? new File([defaultVal], "image.png") : null
    );
    const resetRef = useRef<() => void>(null);

    const clearFile = () => {
        setFile(null);
        onChange && onChange(null);
        resetRef.current?.();
    };

    const handleSetImage = (image: File | null) => {
        setFile(image);

        if (image && !fileType) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onChange && onChange(reader.result as string);
            };
            reader.readAsDataURL(image);
        } else {
            const reader = new FileReader();
            reader.onloadend = () => {
                setState && setState(reader.result as string);
            };
            image && reader.readAsDataURL(image);
            onChange && onChange(image ?? null);
        }
    };

    return (
        <>
            <Button.Group orientation={"vertical"}>
                <FileButton
                    resetRef={resetRef}
                    onChange={handleSetImage}
                    accept="image/png,image/jpeg"
                >
                    {(props) => (
                        <Button
                            disabled={disabled}
                            fullWidth
                            {...props}
                            style={{ backgroundColor: "#438891" }}
                        >
                            Загрузить фото
                        </Button>
                    )}
                </FileButton>
                {clear && (
                    <Button
                        fullWidth
                        disabled={!file}
                        color="red"
                        onClick={clearFile}
                    >
                        Очистить
                    </Button>
                )}
            </Button.Group>
        </>
    );
};
