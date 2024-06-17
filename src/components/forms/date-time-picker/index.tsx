import React, { FC, useEffect, useRef, useState } from "react";
import "dayjs/locale/ru";
import "dayjs/locale/ky";
import { DateValue } from "@mantine/dates";
import { DateFormatTo } from "./date-formta-to";

type Props = {
    label: string;
    required?: boolean;
    error?: React.ReactNode;
    defaultValue?: string;
    formData?: string | undefined;
    onChange: (value: DateValue) => void;
};

export const DateTimePicker: FC<Props> = ({
    label,
    required,
    error,
    formData,
    onChange,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [value, setValue] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (formData) {
            setValue(formData);
        }
    }, [formData]);

    const handleValueChange = (date: DateValue) => {
        if (value) {
            date?.setHours(new Date(value).getHours());
            date?.setMinutes(new Date(value).getMinutes());
        }
        setValue(`${date}`);
        date && onChange(new Date(DateFormatTo(date, "YYYY-MM-DDTHH:mm")));
        document?.getElementById(`${label}`)?.focus();
    };

    return (
        <div ref={ref}>
            <DateTimePicker
                onChange={handleValueChange}
                error={error}
                formData={formData}
                defaultValue={value}
                required={required}
                label={label}
            />
        </div>
    );
};
