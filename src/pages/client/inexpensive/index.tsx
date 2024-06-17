import { Inexpensive1Module, Inexpensive2Module, Inexpensive3Module } from "./modules";
import "./index.scss"


export const InexpensivePage = () => {
    return (
        <div className="inexpensive">
            <Inexpensive1Module />
            <Inexpensive2Module />
            <Inexpensive3Module />
        </div>
    );
};