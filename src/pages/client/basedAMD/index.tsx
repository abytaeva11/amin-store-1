import { AiFillHome, AiFillStar } from 'react-icons/ai';
import {AmdBackend, GameBack} from 'src/datas';
import "src/styles/section.scss"
import "./index.scss";

import {useEffect, useState} from "react";
import {useGetAllComputersQuery} from "src/store";

export const BasedAMDPage = () => {
  const backend = AmdBackend[0]
  const backend2 = AmdBackend[1]
  const backend3 = AmdBackend[2]

  const [computers, setComputers] = useState<any []>([])
  const {data} = useGetAllComputersQuery({})

  useEffect(() => {
    const filtered: any [] = data?.filter((item) => item.videoCard.brand === "AMD") ?? []
    setComputers(filtered)
    console.log(computers)
  }, [data])

  return (
      <div className="section-module">
        <div className="section1" style={{ background: `linear-gradient(to bottom, rgba(24, 23, 26, 0.5), rgba(24, 23, 26, 0.88), rgba(24, 23, 26, 1)), url("/img/footer-tabs-bg.jpg")` }}>            {/* <div className="container"> */}
          <div className="section1-top ">
            <span> <AiFillHome /> </span>
            <h2>{backend.text1}</h2>
          </div>
          <div className="section1-text">
            <h3>{backend2.title}</h3>
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


        <section className="user-powerful">
          <div className="power">
            <div className="power-text">
              <h1>{backend3.title}</h1>
              <p>{backend3.text1}</p>
              <h1>{backend3.title2}</h1>
              <h2>{backend3.text2}</h2>
              <p>{backend3.text3}</p>
            </div>
            <img src={backend3.img} alt="" className='power-img' />
          </div>
          <div className="power2">
            <img src={backend3.img2} alt="" className='power-img' />
            <div className="power-text">
              <h1>{backend3.title3}</h1>
              <p>{backend3.text4}</p>
              <h3>{backend3.text5}</h3>
              <p>{backend3.text6}</p>
            </div>
          </div>
          <div className="power">
            <div className="power-text">
              <h1>Amin store предлагает</h1>
              <p>{backend3.text7}</p>
              <h3>{backend3.text8}</h3>
              <p>{backend3.text9}</p>
            </div>
          </div>
        </section>
      </div>
  );
};
