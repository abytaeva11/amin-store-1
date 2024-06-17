import { BsExclamationTriangle } from "react-icons/bs"
import { BsCheckSquare } from "react-icons/bs"
import { AiOutlineBorder } from "react-icons/ai"
import { BsCaretDownSquare } from "react-icons/bs"
import "./index.scss"
import { CustomAppShell } from "src/components"

export const OrderDetailPage = () => {
    const handleSearch = (value: string) => {

    }

    return (
        <CustomAppShell handleSearch={handleSearch}>
            <div className="order-information">
                <div className="order-information-inside">
                    <div className="order-information-profile">
                        <img src="/img/orders-box.png" alt="" />
                        <div className="order-information-order">
                            <h1>Заказ #1234567890</h1>
                            <h2>Товары 4 шт</h2>
                        </div>
                        <div className="order-information-delivery">
                            <h4>Доставка</h4>
                            <h3>03.05.2022</h3>
                        </div>
                    </div>
                    <div className="order-information-both">
                        <div className="order-information-inputs">

                            <h4>Ваше полное имя</h4>
                            <div className="information-input">
                                <h3> Айгерим Сабурова</h3>
                                <h5><BsExclamationTriangle /></h5>
                            </div>

                            <h4>E-mail</h4>
                            <div className="information-input">
                                <h3> c_j_mccoy@gmail.com </h3>
                                <h5><BsExclamationTriangle /></h5>
                            </div>

                            <h4>Телефон</h4>
                            <div className="information-input">
                                <h3> 996 555 66 77 88 </h3>
                                <h5><BsExclamationTriangle /></h5>
                            </div>
                            <h4>Комментарий к заказу</h4>
                            <div className="information-comment">
                                <h3>
                                    Здравствуйте, доставку можете оставить на ресепшене.
                                    Здравствуйте, доставку можете оставить на ресепшене.
                                    Здравствуйте, доставку можете оставить на ресепшене.

                                </h3>
                            </div>
                            <div className="information-agree">

                                <h6><AiOutlineBorder />
                                    <BsCheckSquare /></h6>

                                <h5>
                                    Я согласен на обработку персональных данных
                                </h5>
                            </div>
                            <div className="info-see-order">
                                <h5>Просмотреть заказ</h5>
                                <h4><BsCaretDownSquare /></h4>
                            </div>

                        </div>

                        <div className="order-information-checkbox">
                            <div className="info-check">
                                <input type="radio" /> <h2>Доставка по Кыргызстану</h2>
                            </div>
                            <div className="info-check">
                                <input type="radio" /> <h2>Самовывоз</h2>
                            </div>
                            <div className="info-order-place">
                                <h5><BsExclamationTriangle /></h5>
                                <h3>-Поля обьязательны для заполнения</h3>
                            </div>
                            <div className="info-check">
                                <h5>Оплата</h5>
                            </div>
                            <div className="info-check">
                                <input type="radio" /> <h6>Оформить в рассрочку</h6>
                            </div>
                            <div className="info-check">
                                <input type="radio" /> <h6>Оплата наличными </h6>
                            </div>
                            <div className="info-check">
                                <input type="radio" /> <h6>Перевод по номеру</h6>
                            </div>
                            <div className="info-show-check">
                                <img src="/img/add-photo.png" alt="" />
                                <h3>Просмотреть чек об оплате</h3>
                            </div>
                            <div className="info-price">
                                <h1> Итого</h1>
                                <h3>54900</h3>
                            </div>
                        </div>
                    </div>
                    <div className="order-information-buttons">
                        <button> <h2>Отклонить</h2></button>
                        <button> <h3>Принять</h3></button>
                    </div>
                </div>
            </div>
        </CustomAppShell>
    );
};
