import { FC, ReactNode, useEffect, useState } from "react";
import { Button, Flex, Grid, Image, SimpleGrid, Text } from "@mantine/core";
import { Dropzone, FileWithPath, MIME_TYPES } from "@mantine/dropzone";
import { HoverText } from "../hover-text";
import { FaRegTrashAlt } from "react-icons/fa";

type Props = {
    label: string;
    isLoading?: boolean;
    defaultValue?: string;
    error?: ReactNode;
    onChange: (files: File[]) => void;
    accept?: string[];
};

export const CustomDropzone: FC<Props> = ({
    label,
    isLoading,
    defaultValue,
    error,
    onChange,
    accept,
}) => {
    const [files, setFiles] = useState<FileWithPath[]>([]);

    const handleDrop = (acceptedFiles: FileWithPath[]) => {
        setFiles((current) => [...current, ...acceptedFiles]);
    };

    const handleDelete = (index: number) => {
        setFiles((current) => {
            const newFiles = [...current];
            newFiles.splice(index, 1);
            return newFiles;
        });
    };

    const handlePreview = (file: FileWithPath, index: number) => {
        let fileUrl: string;

        switch (file.type) {
            case MIME_TYPES.pdf:
                fileUrl = "/pdf.png";
                break;
            case MIME_TYPES.docx:
                fileUrl = "/word.png";
                break;
            case MIME_TYPES.xlsx:
                fileUrl = "/excel.png";
                break;
            case MIME_TYPES.xls:
                fileUrl = "/excel.png";
                break;
            case MIME_TYPES.zip:
                fileUrl = "/zip.png";
                break;
            case MIME_TYPES.jpeg:
                fileUrl = URL.createObjectURL(file);
                break;
            case MIME_TYPES.png:
                fileUrl = URL.createObjectURL(file);
                break;
            case MIME_TYPES.gif:
                fileUrl = URL.createObjectURL(file);
                break;
            case MIME_TYPES.webp:
                fileUrl = URL.createObjectURL(file);
                break;
            default:
                fileUrl = "";
        }

        return (
            <Grid display="flex" justify="center" align="center">
                <Image
                    w={"100%"}
                    defaultValue={defaultValue ? defaultValue : ""}
                    key={index}
                    src={fileUrl}
                    m={"xs"}
                    onLoad={() => URL.revokeObjectURL(fileUrl)}
                    onClick={() =>
                        window.open(URL.createObjectURL(file), "_blank")
                    }
                    style={{
                        cursor: "pointer",
                    }}
                    alt=""
                />
                {file.name.length > 10 ? (
                    <HoverText
                        size="xs"
                        width={300}
                        text={""}
                        hoverText={file.name}
                    />
                ) : (
                    <Text>{file.name}</Text>
                )}
            </Grid>
        );
    };

    const previews = files.map((file, index) => {
        return (
            <Grid w={100} p="xs" key={index}>
                <Flex gap={10}>
                    <Flex style={{ cursor: "pointer" }}
                        onClick={() => handleDelete(index)}
                        color="red"
                    >
                        <FaRegTrashAlt size={20} color="red" />
                    </Flex>
                    {handlePreview(file, index)}
                </Flex>
            </Grid>
        );
    });

    useEffect(() => {
        onChange(files);
    }, [files]);

    return (
        <div>
            <Dropzone h={150} w={150}
                loading={isLoading ?? false}
                accept={
                    accept ?? [
                        MIME_TYPES.jpeg,
                        MIME_TYPES.png,
                        MIME_TYPES.pdf,
                        MIME_TYPES.docx,
                        MIME_TYPES.xlsx,
                        MIME_TYPES.zip,
                    ]
                }
                onDrop={handleDrop}
                style={(theme) => ({
                    border: error
                        ? `0.125rem dashed ${theme.colors.red[5]}`
                        : "0.125rem dashed #ced4da",
                    borderRadius: "0.25rem",
                    padding: "1rem",
                    cursor: "pointer",
                })}
            >
                <Text c="white" ta="center">{label}</Text>
            </Dropzone>
            {error && (
                <Text
                    color="white"
                    mt="xs"
                    style={{
                        fontSize: "calc(0.875rem - 0.125rem)",
                        lineHeight: "1.2",
                    }}
                >
                    {error}
                </Text>
            )}
            <SimpleGrid cols={1} mt="md">
                {previews}
            </SimpleGrid>
        </div>
    );
};
