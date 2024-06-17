import { HeaderTabsModule } from "../header/modules";
import { FooterTabsModule } from "./modules";
import "./index.scss"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-tabs-modules-info"> <HeaderTabsModule /></div>
            <div className="footer-tabs-modules"> <FooterTabsModule /></div>

        </div>
    );
}
