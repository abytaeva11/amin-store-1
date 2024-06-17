import { useState } from 'react'
import { AiFillHome } from 'react-icons/ai';
import { GoTriangleDown } from 'react-icons/go';
import { IconProduct } from "src/icons";
import { basketBack } from 'src/datas';
import "./index.scss";
// @ts-ignore
import img from "../../../../public/img/amin-logo.png"

export const BasketPage = () => {

 const  backend2 =[
    {
      id:1,
      title: "HUNTER ",
      text1: " HUNTER - недорогой компьютер для\n" +
          "                       игр. Прекрасно справляется с CS:GO, Dota 2,\n" +
          "                         ortnite, Minecraft и другим современными\n" +
          "                          игровыми приложениями, показывая достаточно\n" +
          "                          высоким показатели FPS. Прекрасный помощник в учебе для школьника.",
      price: 54000,
      img:" "
    },
   {

   }
  ]



  const [basketInfo, setBasketInfo] = useState(true)
  const [basketInfo1, setBasketInfo1] = useState(false)
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);

  const [isBasketVisible, setIsBasketVisible] = useState(true);

  const basInfo = () => {
    setBasketInfo(!basketInfo)
    setBasketInfo1(false);
    setBasketInfo(true);
    setIsClicked(true);
    setIsClicked1(false);
  }
  const basInfo1 = () => {
    setBasketInfo1(!basketInfo1)
    setBasketInfo(false);
    setBasketInfo1(true);
    setIsClicked(false);
    setIsClicked1(true);
  }


  const handleRemoveBasket = () => {
    setIsBasketVisible(false);
  };
  const backend = basketBack[0]

  const [isBasketEmpty, setIsBasketEmpty] = useState(true);
  const [quantity, setQuantity] = useState(1)


  return (
    <section >
      < div id="basket" style={{ backgroundImage: "url('/img/unsplash_pfR18JNEMv8.png')" }}>
        <div className='homeee'>
          <h1> <AiFillHome /></h1>
          <h4>{backend.title}</h4>
        </div>
        <div className="basket">
          <h1>{backend.title}</h1>
          <h5>{backend.text1}</h5>

          {isBasketEmpty ? (
            <h6>Ваша корзина пустая</h6>
          ) : (

            <div>

              <p>Товар 1</p>
              <p>Товар 2</p>
            </div>
          )}
        </div>
      </div>
      <div className="basket2">
        <div className='basket2-block'>
          <div className='basket2-block-block' onClick={basInfo} style={{
            background: isClicked ? "rgba(26, 34, 46, 0.771)" : "none",
            borderTop: isClicked ? "4px solid aqua" : "none",
          }}>
            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.072 4.57462V2.65619C13.072 1.97462 12.5149 1.41747 11.8343 1.41747H6.88126L5.64348 0.179688H1.92919C1.24855 0.179688 0.691406 0.73683 0.691406 1.41747V8.84604C0.691406 9.52762 1.24855 10.0848 1.92919 10.0848H6.38633C7.12919 11.199 8.49141 11.9419 9.97712 11.9419C12.3914 11.9419 14.3098 10.0225 14.3098 7.60826C14.3098 6.43176 13.8149 5.37969 13.072 4.57462ZM5.82919 8.84604H1.92919V2.65619H11.8343V3.70826C11.2771 3.39904 10.6578 3.27462 9.97712 3.27462C9.40702 3.27104 8.84188 3.38069 8.31449 3.59721C7.78709 3.81373 7.30793 4.13281 6.9048 4.53594C6.50167 4.93907 6.18259 5.41823 5.96607 5.94562C5.74955 6.47302 5.6399 7.03816 5.64348 7.60826C5.64348 8.0419 5.70569 8.47462 5.82919 8.84604ZM9.97712 10.7032C9.56947 10.7074 9.16508 10.6302 8.78763 10.4762C8.41017 10.3222 8.06725 10.0944 7.77894 9.80617C7.49063 9.51795 7.26273 9.17509 7.10859 8.79768C6.95445 8.42028 6.87716 8.01591 6.88126 7.60826C6.87729 7.20064 6.95466 6.79633 7.10885 6.41898C7.26304 6.04163 7.49094 5.69883 7.77922 5.41063C8.06751 5.12243 8.41038 4.89463 8.78778 4.74056C9.16517 4.58649 9.56951 4.50924 9.97712 4.51333C10.3847 4.50923 10.789 4.58649 11.1663 4.74057C11.5437 4.89466 11.8865 5.12247 12.1747 5.41068C12.4629 5.69889 12.6907 6.04171 12.8448 6.41905C12.9989 6.7964 13.0761 7.20069 13.072 7.60826C13.0761 8.01583 12.9989 8.42012 12.8448 8.79747C12.6907 9.17481 12.4629 9.51762 12.1747 9.80583C11.8865 10.094 11.5437 10.3219 11.1663 10.4759C10.789 10.63 10.3847 10.7073 9.97712 10.7032ZM10.5955 6.37047H9.35776V5.13176H10.5955V6.37047ZM10.5955 10.0848H9.35776V6.9889H10.5955V10.0848Z" fill="#49DCFF" />
            </svg>
            <h3 onClick={basInfo}
            >  {isClicked ? 'Корзина' : 'Корзина'}
            </h3>
          </div>
          <div className='basket2-block-block' onClick={basInfo1} style={{
            background: isClicked1 ? "rgba(26, 34, 46, 0.771)" : "none",
            borderTop: isClicked1 ? "4px solid aqua" : "none",
          }} >
            <IconProduct />
            <h3 > {isClicked1 ? 'Заказы' : 'Заказы'} </h3>
          </div>
        </div>
        <div className='large'>

          {/*{*/}
          {/*  basketInfo &&*/}
          {/*  <>*/}
          {/*    {*/}
          {/*      isBasketVisible &&*/}
          {/*      productsInCart.map(el => (*/}
          {/*        <div key={el.id} className="basket3-block3">*/}
          {/*          <div className='gros'>*/}
          {/*            <img src={el.img} alt="" />*/}
          {/*            <div className='gros-title'>*/}
          {/*              <h1>{el.title}</h1>*/}
          {/*              <p> HUNTER - недорогой компьютер для*/}
          {/*             игр. Прекрасно справляется с CS:GO, Dota 2,*/}
          {/*               ortnite, Minecraft и другим современными*/}
          {/*                игровыми приложениями, показывая достаточно*/}
          {/*                высоким показатели FPS. Прекрасный помощник в учебе для школьника.</p>*/}
          {/*            </div>*/}
          {/*          </div>*/}

          {/*          <div className='gros-title2'>*/}
          {/*            <div className='gros-plus'>*/}
          {/*              <h1>*/}
          {/*                <button>-</button>*/}
          {/*                <span> | {quantity} |</span>*/}
          {/*                <button>+</button>*/}
          {/*              </h1>*/}
          {/*              <button onClick={handleRemoveBasket}>x</button>*/}
          {/*            </div>*/}

          {/*            <div className='grup1'>*/}
          {/*              <div className='gros-btn'>*/}
          {/*                <button>купить</button>*/}
          {/*                <div className='btn-btn'>*/}
          {/*                  <div className='btn22'>*/}
          {/*                    <h2>{ }</h2>*/}
          {/*                    <span>c</span>*/}
          {/*                  </div>*/}
          {/*                  <p>от 5 490 сом в месяц </p>*/}
          {/*                </div>*/}
          {/*              </div>*/}

          {/*              <button className='croup'>изменить конфигурацию</button>*/}
          {/*              <button className='croup2'>изменить конфигурацию</button>*/}
          {/*            </div>*/}

          {/*          </div>*/}
          {/*        </div>*/}
          {/*      ))*/}
          {/*    }*/}
          {/*  </>*/}
          {/*}*/}

          <div className='syzyk'></div>
          {
            basketInfo1 && (
              <>
                <div className='res'>
                  <div className='cop'>
                    <div className='res-title'>
                      <svg width="80" height="56" viewBox="0 0 80 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M79.2061 19.799C79.2061 19.799 71.815 9.90023 71.8106 9.8946C71.8087 9.89196 71.6475 9.60506 71.1509 9.44666L40.3512 0.727681C40.1248 0.66369 39.8857 0.66369 39.6593 0.727681L8.85955 9.44666C8.85955 9.44666 8.43905 9.56832 8.18637 9.91025C8.08519 10.0472 0.80453 19.799 0.80453 19.799C0.560438 20.1263 0.48714 20.5511 0.607783 20.9415C0.728602 21.332 1.02863 21.6409 1.41458 21.7722L7.93263 23.9899V41.7236C7.93263 42.2401 8.24318 42.7054 8.71944 42.9027L39.5193 55.6624C39.6109 55.7004 39.727 55.7593 40.0052 55.7593C40.2835 55.7593 40.4911 55.6624 40.4911 55.6624L71.2912 42.9027C71.7675 42.7054 72.0779 42.2399 72.0779 41.7236V23.9895L78.5959 21.7718C78.9819 21.6405 79.2819 21.3315 79.4027 20.9412C79.5233 20.5511 79.4501 20.1263 79.2061 19.799ZM3.89337 19.9205L9.70423 12.1361L12.0545 12.7851L25.2815 16.4379L37.7904 19.8927L30.4541 28.9578L3.89337 19.9205ZM38.7327 52.575L10.4781 40.8701V24.8557L30.4753 31.6606C30.6093 31.7065 30.7473 31.7281 30.8843 31.7281C31.2604 31.7281 31.6262 31.5606 31.8724 31.2559L38.7329 22.779L38.7327 52.575ZM40.0052 17.858L13.9425 10.6597L40.0052 3.28135L66.068 10.6597L40.0052 17.858ZM69.5326 40.8701L41.2778 52.575V22.7793L48.1383 31.2562C48.3845 31.5606 48.7503 31.7284 49.1264 31.7284C49.2634 31.7284 49.4014 31.7068 49.5355 31.6609L69.5326 24.8561V40.8701ZM49.5566 28.9582L42.2203 19.8931L70.3064 12.1361L76.1175 19.9205L49.5566 28.9582Z" fill="#49DCFF" />
                      </svg>

                    </div>
                    <div className='res-title2'>
                      <h1>Заказ #1234567890</h1>
                      <p>Товары  4 шт</p>
                      <h3>Доставлено<span>03.05.2022</span></h3>
                    </div>
                    <div className='res-title3'>
                      <GoTriangleDown className='res-title3-icon' />
                      <div className='res3-title3'>
                        <h3>Итого</h3>
                        <h4>54 900</h4>
                        <span>c</span>

                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          }
        </div>
      </div>


    </section>
  )
}
