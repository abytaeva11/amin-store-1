import { Box, Center, Group, Progress, Text } from "@mantine/core";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export const PasswordBar = ({ value }: { value: string }) => {
    const strength = getStrength(value);
    const checks = requirements.map((requirement, index) => (
        <PasswordRequirement
            key={index}
            label={requirement.label}
            meets={requirement.re.test(value)}
        />
    ));

    const bars = Array(4)
        .fill(0)
        .map((_, index) => (
            <Progress
                style={{ transitionDuration: "0ms" }}
                value={
                    value.length > 0 && index === 0
                        ? 100
                        : strength >= ((index + 1) / 4) * 100
                            ? 100
                            : 0
                }
                color={
                    strength > 80 ? "teal" : strength > 50 ? "yellow" : "red"
                }
                key={index}
                size={4}
            />
        ));

    return (
        <>
            <Group gap={5} grow mt="xs" mb="md">
                {bars}
            </Group>
            {checks}
            <PasswordRequirement
                label="form.validation.hasSixCharacters"
                meets={value.length > 5}
            />
        </>
    );
};

const requirements = [
    { re: /[0-9]/, label: "form.validation.includesNumber" },
    { re: /[a-z]/, label: "form.validation.includesLowercaseLetter" },
    { re: /[A-Z]/, label: "form.validation.includesUppercaseLetter" },
];

const PasswordRequirement = ({
    meets,
    label,
}: {
    meets: boolean;
    label: string;
}) => {

    return (
        <Text color={meets ? "teal" : "red"} mt={5} size="sm">
            <Center inline>
                {meets ? (
                    <FaCheck size={14} />
                ) : (
                    <IoClose size={14} />
                )}
                <Box ml={7}>{label}</Box>
            </Center>
        </Text>
    );
};

const getStrength = (password: string) => {
    let multiplier = password.length > 5 ? 0 : 1;
    requirements.forEach((requirement) => {
        if (!requirement.re.test(password)) {
            multiplier += 1;
        }
    });
    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
};
