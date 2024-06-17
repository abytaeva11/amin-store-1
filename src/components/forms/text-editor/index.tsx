import React, { useEffect, useRef, useState, useCallback } from "react";
import { Text } from "@mantine/core";
import { useQuill } from "react-quilljs";
import BlotFormatter from "quill-blot-formatter";
import "quill/dist/quill.snow.css";

type Props = {
    label?: string | null;
    labelButton?: React.ReactNode;
    onChange: (value: string) => void;
    error?: React.ReactNode;
    required?: boolean;
    formData?: string | null;
    style?: { [key: string]: string | number };
};

export const TextEditor = ({
                               label,
                               required,
                               onChange,
                               formData,
                               error,
                               labelButton,
                               style = { height: "200px" },
                           }: Props) => {
    const { quill, quillRef, Quill } = useQuill({
        modules: { blotFormatter: { image: { resize: {} } } },
    });

    const editorContent = useRef<string | null>(null);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    if (Quill && !quill) {
        Quill.register("modules/blotFormatter", BlotFormatter);
    }

    const handleTextChange = useCallback(() => {
        if (quill) {
            const editorHtml = quill.root.innerHTML;
            onChange(editorHtml);
        }
    }, [quill, onChange]);

    useEffect(() => {
        if (quill) {
            quill.on("text-change", handleTextChange);

            if (formData && isInitialLoad) {
                setIsInitialLoad(false);
                editorContent.current = formData || null;
                if (editorContent.current) {
                    const delta = quill.clipboard.convert({ html: editorContent.current });
                    quill.setContents(delta);
                }
            }

            return () => {
                quill.off("text-change", handleTextChange);
            };
        }
    }, [quill, handleTextChange, formData, isInitialLoad]);

    return (
        <>
            <Text style={{ fontWeight: 600, fontSize: 14 }}>
                {label}
                <span style={{ color: "red" }}>{required && "*"}</span>
                {labelButton}
            </Text>
            <div>
                <div style={style} ref={quillRef} />
            </div>
            {error && (
                <Text
                    color="red"
                    style={{
                        lineHeight: "1.2",
                        fontSize: "calc(0.875rem - 0.125rem)",
                    }}
                >
                    {error}
                </Text>
            )}
        </>
    );
};
