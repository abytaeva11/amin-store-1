import dayjs from "dayjs";

type RawDate = string | number | Date | dayjs.Dayjs;

export const DateFormatTo = (value?: RawDate, format_ = "DD-MM-YYYY HH:mm") => {
    if (!value) return "";

    const d = dayjs(value);

    switch (format_) {
        case "datetime-local":
            return d.format("YYYY-MM-DD HH:mm");
        case "date":
            return d.format("YYYY-MM-DD");
        case "time":
            return d.format("HH:mm");
        default:
            return d.format(format_);
    }
};
