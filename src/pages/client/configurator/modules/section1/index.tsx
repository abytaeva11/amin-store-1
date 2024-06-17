import { AiFillHome, AiFillStar } from 'react-icons/ai';
import { ConfigurationBack } from 'src/datas';
import "src/styles/section.scss"

export const Section1Module = () => {
    const backend = ConfigurationBack[0]
    const backend2 = ConfigurationBack[1]

    return (
        <div className="section-module">
            <div className="section1" style={{ background: `linear-gradient(to bottom, rgba(24, 23, 26, 0.5), rgba(24, 23, 26, 0.88), rgba(24, 23, 26, 1)), url("/img/footer-tabs-bg.jpg")` }}>            {/* <div className="container"> */}
                <div className="section1-top ">
                    <span> <AiFillHome /> </span>
                    <h2>{backend.text1}</h2>
                </div>
                <div className="section1-text">
                    <h3>{backend.title}</h3>
                    <h4>{backend.text}</h4>
                </div>

            </div>
            <div className="section2-global">
                <div className="section2-block-first">
                    <h6>{backend2.title}</h6>
                    <div className="section2-block">
                        <div className="section2-first">
                            <span> <AiFillStar /> </span>
                            <h5>{backend2.text1}</h5>
                        </div>
                        <hr />
                        <div className="section2-first">
                            <span> <AiFillStar /> </span>
                            <h5>{backend2.text2}</h5>
                        </div>
                        <hr />
                        <div className="section2-first">
                            <span> <AiFillStar /> </span>
                            <h5>{backend2.text3}</h5>
                        </div>
                    </div>
                </div>
                <div className="section2-img">
                    <img src={backend2.img} alt="" />
                </div>
            </div>

            <div className="search-container">
                <input type="text" placeholder="ПОИСК " className="search-input" />
                <button className="search-button">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7" cy="7" r="6.5" stroke="white"/>
                        <line x1="10.7071" y1="10.2929" x2="15.7071" y2="15.2929" stroke="white"/>
                    </svg>
                </button>
            </div>
        </div>

    );
};
