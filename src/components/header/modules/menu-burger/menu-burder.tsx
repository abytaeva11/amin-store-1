import React from 'react';
import "../menu-burger/menu-burger.scss"
import {MdSubdirectoryArrowRight} from "react-icons/md";
import {NavLink} from "react-router-dom";

const MenuBurder = () => {
    return (
        <div className="menu-burger">
            <div className="menu">
                <NavLink to="/"><h4>Конфигуратор ПК</h4></NavLink>
                <NavLink to="/inexpensive"><h4>Недорогие ПК </h4></NavLink>
                <NavLink to="/game"><h4>Игровые ПК </h4></NavLink>
                <NavLink to="/powerful"><h4>Мощнейшие ПК </h4></NavLink>
                <NavLink to="/basedAMD"><h4>ПК на базе AMD </h4></NavLink>
            </div>
            <div className="menu">
                <h4>Статьи</h4>
                <h3><MdSubdirectoryArrowRight/> FAQ</h3>
                <h3><MdSubdirectoryArrowRight/> О компании</h3>
                <h3><MdSubdirectoryArrowRight/> Отзывы </h3>
            </div>
            <div className="menu">
                <NavLink to="/clients"><h4>клентам</h4></NavLink>
                <NavLink to="/contact"><h3><MdSubdirectoryArrowRight/> Контакты интернет-магазин Amin store</h3>
                </NavLink>
            </div>

        </div>
    );
};

export default MenuBurder;
