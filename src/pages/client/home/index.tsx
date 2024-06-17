import { useState } from 'react'
import "./index.scss";




export const HomePage = () => {
  const [basketInfo, setBasketInfo] = useState(true)
  const [basketInfo1, setBasketInfo1] = useState(false)
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);

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
  return (
    <section>
      <div id="hous">
        <div className="container">
          <div className="home">
            <div className='home-block'>
              <img src="/img/div.main-slider__inner.png" alt="" />
              <h1>Ноутбуки и ПК</h1>
              <button>перейти</button>
            </div>
          </div>

        </div>
      </div>



      <div id="basket22">

        <div className="container">

          <div className="basket22">
            <h1>Производитель игровых ПК</h1>

            <div className='basket22-block'>
              <div className='basket22-block-block' onClick={basInfo} style={{
                background: isClicked ? "rgba(26, 34, 46, 0.771)" : "none",
                borderTop: isClicked ? "4px solid aqua" : "none",
              }}>
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.072 4.57462V2.65619C13.072 1.97462 12.5149 1.41747 11.8343 1.41747H6.88126L5.64348 0.179688H1.92919C1.24855 0.179688 0.691406 0.73683 0.691406 1.41747V8.84604C0.691406 9.52762 1.24855 10.0848 1.92919 10.0848H6.38633C7.12919 11.199 8.49141 11.9419 9.97712 11.9419C12.3914 11.9419 14.3098 10.0225 14.3098 7.60826C14.3098 6.43176 13.8149 5.37969 13.072 4.57462ZM5.82919 8.84604H1.92919V2.65619H11.8343V3.70826C11.2771 3.39904 10.6578 3.27462 9.97712 3.27462C9.40702 3.27104 8.84188 3.38069 8.31449 3.59721C7.78709 3.81373 7.30793 4.13281 6.9048 4.53594C6.50167 4.93907 6.18259 5.41823 5.96607 5.94562C5.74955 6.47302 5.6399 7.03816 5.64348 7.60826C5.64348 8.0419 5.70569 8.47462 5.82919 8.84604ZM9.97712 10.7032C9.56947 10.7074 9.16508 10.6302 8.78763 10.4762C8.41017 10.3222 8.06725 10.0944 7.77894 9.80617C7.49063 9.51795 7.26273 9.17509 7.10859 8.79768C6.95445 8.42028 6.87716 8.01591 6.88126 7.60826C6.87729 7.20064 6.95466 6.79633 7.10885 6.41898C7.26304 6.04163 7.49094 5.69883 7.77922 5.41063C8.06751 5.12243 8.41038 4.89463 8.78778 4.74056C9.16517 4.58649 9.56951 4.50924 9.97712 4.51333C10.3847 4.50923 10.789 4.58649 11.1663 4.74057C11.5437 4.89466 11.8865 5.12247 12.1747 5.41068C12.4629 5.69889 12.6907 6.04171 12.8448 6.41905C12.9989 6.7964 13.0761 7.20069 13.072 7.60826C13.0761 8.01583 12.9989 8.42012 12.8448 8.79747C12.6907 9.17481 12.4629 9.51762 12.1747 9.80583C11.8865 10.094 11.5437 10.3219 11.1663 10.4759C10.789 10.63 10.3847 10.7073 9.97712 10.7032ZM10.5955 6.37047H9.35776V5.13176H10.5955V6.37047ZM10.5955 10.0848H9.35776V6.9889H10.5955V10.0848Z" fill="#49DCFF" />
                </svg>
                <h3 onClick={basInfo}
                >  {isClicked ? 'Ноутбуки' : 'Ноутбуки'}
                </h3>
              </div>
              <div className='basket22-block-block' onClick={basInfo1} style={{
                background: isClicked1 ? "rgba(26, 34, 46, 0.771)" : "none",
                borderTop: isClicked1 ? "4px solid aqua" : "none",
              }} >
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_570_25175)">
                    <path d="M11.5725 9.84376C11.5728 9.95575 11.5424 10.0657 11.4847 10.1616C11.4269 10.2575 11.3439 10.3358 11.2448 10.3879L6.35398 13.1365C6.25151 13.2108 6.1277 13.2499 6.00112 13.2479C5.87454 13.2499 5.75073 13.2108 5.64826 13.1365L0.757478 10.3879C0.658339 10.3358 0.575369 10.2575 0.517581 10.1616C0.459793 10.0657 0.429396 9.95575 0.429693 9.84376V4.27233C0.429226 4.16018 0.459543 4.05006 0.51734 3.95395C0.575137 3.85784 0.658199 3.77943 0.757478 3.72726L5.64826 0.97869C5.75073 0.904347 5.87454 0.865247 6.00112 0.867262C6.13112 0.867262 6.25462 0.904404 6.35398 0.97869L11.2448 3.72726C11.344 3.77943 11.4271 3.85784 11.4849 3.95395C11.5427 4.05006 11.573 4.16018 11.5725 4.27233V9.84376ZM6.00112 2.1979L4.83112 2.8609L8.47762 4.95948L9.69033 4.27233L6.00112 2.1979ZM2.31191 4.27233L6.00112 6.34583L7.21476 5.66519L3.57476 3.56012L2.31191 4.27233ZM1.66748 9.4779L5.38176 11.5709V7.41648L1.66748 5.3309V9.4779ZM10.3348 9.4779V5.3309L6.62048 7.41648V11.5709L10.3348 9.4779Z" fill="#8490A4" />
                  </g>
                  <defs>
                    <clipPath id="clip0_570_25175">
                      <rect width="12" height="13" fill="white" transform="translate(0 0.558594)" />
                    </clipPath>
                  </defs>
                </svg>
                <h3 > {isClicked1 ? 'ПК' : 'ПК'} </h3>
              </div>
            </div>
            <div className='large2'>

            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
