import { GameBack } from "src/datas";
import "src/styles/game-section.scss"

export const Game3Module = () => {
    const backend3 = GameBack[2]

    return (
        <section className="user-powerful">
            <div className="power">
                <div className="power-text">
                    <h1>{backend3.title}</h1>
                    <p>{backend3.text1}</p>
                    <h2>{backend3.text2}</h2>
                    <p>{backend3.text3}</p>
                </div>
                <img src={backend3.img} alt="" className='power-img' />
            </div>
            <div className="power2">
                <img src={backend3.img2} alt="" className='power-img' />
                <div className="power-text">
                    <h1>{backend3.title2}</h1>
                    <p>{backend3.text4}</p>
                    <h3>{backend3.text5}</h3>
                    <p>{backend3.text6}</p>
                </div>
            </div>
            <div className="power">
                <div className="power-text">
                    <h1>{backend3.title3}</h1>
                    <p>{backend3.text7}</p>
                    <h2>{backend3.text8}</h2>
                    <p>{backend3.text9} <span>{backend3.text10}</span></p>
                </div>
                <img src="/img/div.seo__end.png" alt="" className='power-img' />
            </div>
        </section>
    );
};
