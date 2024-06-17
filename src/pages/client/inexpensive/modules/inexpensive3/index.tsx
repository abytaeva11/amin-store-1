import { InexpensiveBack } from "src/datas";
import "src/styles/game-section.scss"

export const Inexpensive3Module = () => {
    const backend3 = InexpensiveBack[2]
    return (
        <section className="user-powerful">
            <div className="power">
                <div className="power-text">
                    <h1>{backend3.title}</h1>
                    <p>{backend3.text1}</p>
                    <p>{backend3.text2}</p>
                    <p>{backend3.text3}</p>
                    <h1>{backend3.title2}</h1>
                    <p>{backend3.text4}</p>
                    <p>{backend3.text5}</p>
                    <p>{backend3.text6}</p>
                </div>
                <img src={backend3.img} alt="" className='power-img' />
            </div>
        </section>
    );
};
