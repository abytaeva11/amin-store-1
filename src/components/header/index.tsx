import { HeaderInfoModule, HeaderTabsModule } from "./modules";

export const Header = () => {
    return (
        <div>
            <HeaderInfoModule />
            <HeaderTabsModule />
        </div>
    );
};
