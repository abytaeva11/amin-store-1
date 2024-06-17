import { NavLink } from "react-router-dom";
import { VscCircleSmallFilled } from 'react-icons/vsc';
import { SiWhatsapp } from "react-icons/si";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

export const FooterTabsModule = () => {
    return (
        <div className="footer-tabs">
            <div className="footer-tabs-inside">
                <div className="footer-tabs-right">
                    <div className="footer-tabs-top-icons">
                        <NavLink to={"/"}><SiWhatsapp /></NavLink>
                        <NavLink to={"/"}> <FaTelegramPlane /> </NavLink>
                        <NavLink to={"/"}><FaInstagram /></NavLink>
                    </div>
                    <div className="block-first">
                        <h3>г. Бишкек, Буденного 138/1
                            Токтогула 211 </h3>
                        <h4>Обработка и прием заказов по телефону:</h4>
                        <h5> <a href="+ 996 700 99 19 23"> + 996 700 99 19 23</a> </h5>
                        <div className="days">
                            <h6> Пн-Пт: 09:00 - 18:00 <br />
                                Сб-Вс: 09:00 - 18:00
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="footer-tabs-left">
                    <h2>Каталог AMIN STORE</h2>
                    <div className="footer-tabs-block">
                        <div className="block-second">
                            <NavLink to="/tab-accessories"> <span><VscCircleSmallFilled /></span> <h4>Аксессуары для пк</h4></NavLink>
                            <NavLink to="/tab-installments"> <span><VscCircleSmallFilled /></span> <h4>КОМПЬЮТЕРЫ В рассрочку</h4></NavLink>
                            <NavLink to="/tab-extreme-series"> <span><VscCircleSmallFilled /></span> <h4>ЭКСТРЕМАЛЬНАЯ СЕРИЯ</h4></NavLink>
                            <NavLink to="/tab-graphic-stations"> <span><VscCircleSmallFilled /></span> <h4>ГРАФИЧЕСКИЕ СТАНЦИИ</h4></NavLink>
                            <NavLink to="/tab-computers-forPhotos"> <span><VscCircleSmallFilled /></span>  <h4>КОМПЬЮТЕРЫ ДЛЯ ФОТО</h4></NavLink>
                        </div>
                        <div className="block-second">
                            <NavLink to="/tab-Gtx-16Хх"> <span><VscCircleSmallFilled /></span> <h4>ПК с GEFORCE GTX 16ХХ</h4></NavLink>
                            <NavLink to="/tab-Rtx-4060"> <span><VscCircleSmallFilled /></span> <h4>ПК с GEFORCE RTX 4060</h4></NavLink>
                            <NavLink to="/tab-Rtx-4070"> <span><VscCircleSmallFilled /></span> <h4>ПК с GEFORCE RTX 4070</h4></NavLink>
                            <NavLink to="/tab-Rtx-4080"> <span><VscCircleSmallFilled /></span> <h4>ПК с GEFORCE RTX 4080</h4></NavLink>
                            <NavLink to="/tab-Rtx-4090"> <span><VscCircleSmallFilled /></span><h4>ПК с GEFORCE RTX 4090</h4></NavLink>
                        </div>
                        <div className="block-second">
                            <NavLink to="/tab-gaming-station"> <span><VscCircleSmallFilled /></span> <h4>Игровые станции от 30 000</h4></NavLink>
                            <NavLink to="/tab-gaming-station-hundred"> <span><VscCircleSmallFilled /></span> <h4>Игровые станции от 100 000</h4></NavLink>
                            <NavLink to="/tab-gaming-station-two"> <span><VscCircleSmallFilled /></span> <h4>Игровые станции от 200 000</h4></NavLink>
                            <NavLink to="/tab-pickup-gaming"> <span><VscCircleSmallFilled /></span>  <h4>Подобрать игровой ПК</h4></NavLink>
                        </div>
                        <div className="block-second">
                            <NavLink to="/tab-core-i3"> <span><VscCircleSmallFilled /></span> <h4>КОМПЬЮТЕРЫ с INTEL CORE i3</h4></NavLink>
                            <NavLink to="/tab-core-i5"> <span><VscCircleSmallFilled /></span> <h4>КОМПЬЮТЕРЫ с INTEL CORE i5</h4></NavLink>
                            <NavLink to="/tab-core-i7"> <span><VscCircleSmallFilled /></span> <h4>КОМПЬЮТЕРЫ с INTEL CORE i7</h4></NavLink>
                            <NavLink to="/tab-core-i9"> <span><VscCircleSmallFilled /></span> <h4>КОМПЬЮТЕРЫ с INTEL CORE i9</h4></NavLink>
                            <NavLink to="/tab-water-cooled"> <span><VscCircleSmallFilled /></span><h4>ПК с ВОДЯНЫМ ОХЛАЖДЕНИЕМ</h4></NavLink>
                        </div>
                        <div className="block-second">
                            <NavLink to="/tab-office "><span><VscCircleSmallFilled /></span> <h4> Офисный </h4></NavLink>
                            <NavLink to="/tab-pc-game "><span><VscCircleSmallFilled /></span> <h4>Игровой </h4></NavLink>
                            <NavLink to="/tab-business "><span><VscCircleSmallFilled /></span> <h4>Для бизнесса </h4></NavLink>
                            <NavLink to="/tab-programming "><span><VscCircleSmallFilled /></span> <h4>Для программирование </h4></NavLink>
                            <NavLink to="/tab-d-modeling "><span><VscCircleSmallFilled /></span> <h4>3д моделирование </h4></NavLink>
                            <NavLink to="/tab-for-installation "><span><VscCircleSmallFilled /></span> <h4>Для монтажа </h4></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
