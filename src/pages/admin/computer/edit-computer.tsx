import { Center, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import { ComputerForm } from "src/modules";
import { useGetComputerQuery } from "src/store";
import { CustomAppShell, CustomLoader } from "src/components";
import { usePageTitle } from "src/hooks";

type Params = {
    computerId: string;
};

export const EditComputer = () => {
    const title = "Редактировать комьютер";
    usePageTitle(title);

    const { computerId } = useParams<Params>();
    const { data, isLoading } = useGetComputerQuery(computerId as unknown as string, {
        refetchOnMountOrArgChange: !!computerId,
    });

    return (
        <CustomAppShell>
            {computerId}
            {isLoading ? (
                <CustomLoader />
            ) : (
                data && (
                    <>
                        <Center>
                            <Title c="white" fw="normal" mb="1rem">
                                {title}
                            </Title>
                        </Center>
                        <ComputerForm computer={data} />
                    </>
                )
            )}
        </CustomAppShell>
    );
};
