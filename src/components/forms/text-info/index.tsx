import { ReactNode } from "react";
import { CustomText } from "../custom-text";
import { SpacingValue, SystemProp } from "@mantine/styles";

type Data = {
    label: ReactNode;
    value?: ReactNode;
    display?: boolean;
};

type Props = {
    data: Data[];
    display?: boolean;
    spanFirst?: number;
    spanTwo?: number;
    my?: SystemProp<SpacingValue>;
};

export const TextInfo = ({
    data,
    display,
    spanFirst,
    spanTwo,
    my = 10,
}: Props) => {
    return (
        <>
            {data.map(
                (item, index) =>
                    !item.display && (
                        <CustomText
                            key={index}
                            label={item.label}
                            value={item.value}
                            my={my}
                            display={display}
                            spanFirst={spanFirst}
                            spanTwo={spanTwo}
                        />
                    )
            )}
        </>
    );
};
