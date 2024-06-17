import { FaTools } from "react-icons/fa";
import {
    Icon10Power,
    Icon11Wifi, Icon13Sound,
    Icon1Proses,
    Icon2Cooler,
    Icon3Mother,
    Icon4Ram,
    Icon5Video,
    Icon7Disk1, Icon9Body
} from "src/icons";
import { useSelector } from "react-redux";
import { RootState } from "src/store/store";

export const BlockComputerModule = () => {


    return (
        <div className="inexpensive-second">
            {/* {products.map(el => (
                <div key={el.id} className="inexpensive-second-product" >
                    <img src={el.img} alt="" />
                    <div className="inexpensive-second-inside">
                        <h1>{el.title}</h1>
                        <h2>{el.price}
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10.4619" cy="10.4062" r="9" fill="#49DCFF" />
                                <path
                                    d="M10.4161 14.0213C9.67699 14.0213 9.04063 13.8539 8.50701 13.5192C7.97671 13.1811 7.56904 12.7154 7.284 12.1222C6.99896 11.5289 6.85645 10.8494 6.85645 10.0838C6.85645 9.30824 7.00228 8.62382 7.29395 8.03054C7.58561 7.43395 7.9966 6.96828 8.5269 6.63352C9.0572 6.29877 9.68197 6.13139 10.4012 6.13139C10.9812 6.13139 11.4983 6.23911 11.9523 6.45455C12.4064 6.66667 12.7726 6.96496 13.051 7.34943C13.3328 7.7339 13.5001 8.183 13.5532 8.69673H12.1064C12.0269 8.33878 11.8446 8.03054 11.5596 7.77202C11.2778 7.51349 10.9 7.38423 10.426 7.38423C10.0117 7.38423 9.64882 7.49361 9.33727 7.71236C9.02903 7.92779 8.78874 8.23603 8.61639 8.63707C8.44404 9.0348 8.35787 9.50545 8.35787 10.049C8.35787 10.6058 8.44238 11.0864 8.61142 11.4908C8.78045 11.8951 9.01909 12.2083 9.32733 12.4304C9.63888 12.6525 10.0051 12.7635 10.426 12.7635C10.7078 12.7635 10.963 12.7121 11.1917 12.6094C11.4237 12.5033 11.6176 12.3525 11.7733 12.157C11.9324 11.9614 12.0435 11.7261 12.1064 11.451H13.5532C13.5001 11.9448 13.3394 12.3857 13.0709 12.7734C12.8025 13.1612 12.4429 13.4661 11.9921 13.6882C11.5447 13.9103 11.0193 14.0213 10.4161 14.0213Z"
                                    fill="#1C232E" />
                            </svg>
                        </h2>
                        <div className="inexpensive-second-btns">
                            <button className="inexpensive-btn-first"><h3>купить</h3></button>
                            <button className="inexpensive-btn-second"><h3>Подробнее</h3></button>
                            <button className="inexpensive-btn-three"><h4><FaTools /></h4></button>

                        </div>
                        <h4>{el.text}</h4>
                        <hr />

                    </div>
                    <div className="section-list">
                        <div className="section-list-inside">
                            <span> <Icon5Video /></span>
                            <div className="section-list-inside-both">
                                <h5>{el.video.url}</h5>
                                <h3> {el.video.text}</h3>
                            </div>
                        </div>
                        <div className="section-list-inside">
                            <span> <Icon1Proses /></span>
                            <div className="section-list-inside-both">
                                <h5>{el.prosessor.url}</h5>
                                <h3>{el.prosessor.text}</h3>
                            </div>
                        </div>
                        <div className="section-list-inside">
                            <span> <Icon2Cooler /></span>
                            <div className="section-list-inside-both">
                                <h5>{el.cooler.url}</h5>
                                <h3> {el.cooler.text}</h3>
                            </div>
                        </div>
                        <div className="section-list-inside">
                            <span> <Icon4Ram /></span>
                            <div className="section-list-inside-both">
                                <h5>{el.oc.url}</h5>
                                <h3> {el.oc.text}</h3>
                            </div>
                        </div>
                        <div className="section-list-inside">
                            <span> <Icon3Mother /></span>
                            <div className="section-list-inside-both">
                                <h5>{el.mother.url}</h5>
                                <h3> {el.mother.text}</h3>
                            </div>
                        </div>
                        <div className="section-list-inside">
                            <span> <Icon7Disk1 /></span>
                            <div className="section-list-inside-both">
                                <h5>{el.disk.url}</h5>
                                <h3> {el.disk.text}</h3>
                            </div>
                        </div>
                        <div className="section-list-inside">
                            <span> <Icon11Wifi /></span>
                            <div className="section-list-inside-both">
                                <h5>{el.privod.url}</h5>
                                <h3>{el.privod.text}</h3>
                            </div>
                        </div>
                        <div className="section-list-inside">
                            <span> <Icon10Power /></span>
                            <div className="section-list-inside-both">
                                <h5>{el.block.url}</h5>
                                <h3>{el.block.text}</h3>
                            </div>
                        </div>
                        <div className="section-list-inside">
                            <span> <Icon9Body /></span>
                            <div className="section-list-inside-both">
                                <h5>{el.body.url}</h5>
                                <h3>{el.body.text}</h3>
                            </div>
                        </div>
                        <div className="section-list-inside">
                            <span> <Icon13Sound /></span>
                            <div className="section-list-inside-both">
                                <h5>{el.system.url}</h5>
                                <h3>{el.system.text}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            ))} */}

        </div>

    );
};
