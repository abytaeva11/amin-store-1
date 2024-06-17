import { useEffect } from "react";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";

const yupObject: Record<string, yup.StringSchema> = {
    password: yup.string().required("required").min(6, 'minSix'),
    login: yup.string(),
    oldPassword: yup.string().min(6, "minSix").required("required"),
    newPassword: yup.string().min(6, "minSix").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/, "includesNumberLowercaseUppercase"),
    confirmPassword: yup.string().test("passwords-match", "passwordMismatch", function (value) {
        return this.parent.newPassword === value;
    }),
    email: yup.string().email("email").required("required")
};

const createValidationSchema = <T extends Record<string, any>>(initialValues: T) => {
    let schemaObject: Record<string, yup.AnySchema> = {};
    for (const key in initialValues) {
        if (yupObject.hasOwnProperty(key)) {
            schemaObject[key] = yupObject[key];
        }
    }
    const schema = yup.object().shape(schemaObject);
    return schema;
}

const checkFieldsAreEmpty = <T>(obj: T) => {
    let status = false;
    for (const key in obj) {
        if (obj[key]) {
            status = true
        }
    }
    return status
}

export const useCustomForm = <T extends Record<string, any>>(initialValues: T) => {
    const validationSchema = createValidationSchema<T>(initialValues);
    const form = useForm<T>({
        initialValues,
        validate: yupResolver(validationSchema),
    });
    useEffect(() => {
        if (checkFieldsAreEmpty<T>(form.values)) {
            form.validate();
        }
    }, [form.values]);
    return { form };
};
