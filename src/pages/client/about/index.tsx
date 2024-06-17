import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import "./index.scss";
import Review from "src/pages/client/about/review";




export const AboutPage = () => {
  const [showInfo, setShowInfo] = useState(true)
  const [showInfo1, setShowInfo1] = useState(false)
  const [showInfo2, setShowInfo2] = useState(false)
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);


  const [accordionState, setAccordionState] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
    question6: false,
    question7: false,
    question8: false,
    question9: false,
    question10: false,
    question11: false,
    question12: false,
    question13: false,
    question14: false,
    question15: false,
    question16: false,
    question17: false,
    question18: false,
    question19: false,
    question20: false,
    question21: false,
    question22: false,
    question23: false,
  });

  const toggleAccordion = (question: string) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [question]: !prevState[question as keyof typeof accordionState],
    }));
  };


  const tagInfo = () => {
    setShowInfo(!showInfo)
    setShowInfo1(false);
    setShowInfo2(false);
    setIsClicked(true);
    setIsClicked1(false);
    setIsClicked2(false);


  }
  const tagInfo1 = () => {
    setShowInfo1(!showInfo1)
    setShowInfo(false);
    setShowInfo2(false);
    setIsClicked(false);
    setIsClicked1(true);
    setIsClicked2(false);


  }
  const tagInfo2 = () => {
    setShowInfo2(!showInfo2)
    setShowInfo1(false);
    setShowInfo(false);
    setIsClicked(false);
    setIsClicked1(false);
    setIsClicked2(true);



  }
  return (
    <section>
      <div id="about" style={{ backgroundImage: "url('/img/div.title-page.png')" }}>
        <div className="container">
          <div className="about">
          </div>
        </div>
      </div>
      <div id="about2">
        <div className={`about-block ${showInfo1 ? 'second-info-bg' : '' || showInfo2 ? 'second-info-bg' : ''}`}>
          <div className='about-block2'>
            <div className='svg1' onClick={tagInfo} style={{
              background: isClicked ? "rgba(26, 34, 46, 0.771)" : "none",
              borderTop: isClicked ? "4px solid aqua" : "none",
            }}>
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_59_19972)">
                  <path d="M11.0843 9.52736C11.0846 9.63935 11.0542 9.74928 10.9964 9.84521C10.9386 9.94114 10.8556 10.0194 10.7565 10.0715L5.8657 12.8201C5.76323 12.8944 5.63942 12.9335 5.51284 12.9315C5.38626 12.9335 5.26245 12.8944 5.15998 12.8201L0.269197 10.0715C0.170058 10.0194 0.087088 9.94114 0.0293 9.84521C-0.028488 9.74928 -0.0588848 9.63935 -0.0585884 9.52736V3.95593C-0.0590548 3.84378 -0.0287384 3.73365 0.0290588 3.63754C0.0868559 3.54143 0.169918 3.46302 0.269197 3.41086L5.15998 0.662284C5.26245 0.587941 5.38626 0.548841 5.51284 0.550855C5.64284 0.550855 5.76634 0.587998 5.8657 0.662284L10.7565 3.41086C10.8558 3.46302 10.9388 3.54143 10.9966 3.63754C11.0544 3.73365 11.0847 3.84378 11.0843 3.95593V9.52736ZM5.51284 1.8815L4.34284 2.5445L7.98934 4.64307L9.20205 3.95593L5.51284 1.8815ZM1.82363 3.95593L5.51284 6.02943L6.72648 5.34878L3.08648 3.24371L1.82363 3.95593ZM1.1792 9.1615L4.89348 11.2545V7.10007L1.1792 5.0145V9.1615ZM9.84648 9.1615V5.0145L6.1322 7.10007V11.2545L9.84648 9.1615Z" fill="#49DCFF" />
                </g>
                <defs>
                  <clipPath id="clip0_59_19972">
                    <rect width="12" height="13" fill="white" transform="translate(0 0.570312)" />
                  </clipPath>
                </defs>
              </svg>
              <button onClick={tagInfo} style={{
                background: isClicked ? "rgba(26, 34, 46, 0.771)" : "none",
              }}> О компании </button>
            </div>
            <div className='svg1' onClick={tagInfo1} style={{
              background: isClicked1 ? "rgba(26, 34, 46, 0.771)" : "none",
              borderTop: isClicked1 ? "4px solid aqua" : "none",
            }}>
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_59_19979)">
                  <path d="M13.2439 5.2543V3.33588C13.2439 2.6543 12.6868 2.09716 12.0061 2.09716H7.05314L5.81535 0.859375H2.10107C1.42042 0.859375 0.863281 1.41652 0.863281 2.09716V9.52573C0.863281 10.2073 1.42042 10.7644 2.10107 10.7644H6.55821C7.30107 11.8787 8.66328 12.6216 10.149 12.6216C12.5633 12.6216 14.4817 10.7022 14.4817 8.28795C14.4817 7.11145 13.9868 6.05938 13.2439 5.2543ZM6.00107 9.52573H2.10107V3.33588H12.0061V4.38795C11.449 4.07873 10.8296 3.9543 10.149 3.9543C9.57889 3.95073 9.01376 4.06038 8.48636 4.2769C7.95896 4.49342 7.47981 4.8125 7.07668 5.21563C6.67355 5.61876 6.35447 6.09792 6.13795 6.62531C5.92143 7.15271 5.81178 7.71785 5.81535 8.28795C5.81535 8.72159 5.87757 9.1543 6.00107 9.52573ZM10.149 11.3829C9.74135 11.3871 9.33695 11.3099 8.9595 11.1559C8.58205 11.0019 8.23913 10.7741 7.95082 10.4859C7.66251 10.1976 7.43461 9.85478 7.28047 9.47737C7.12632 9.09997 7.04904 8.6956 7.05314 8.28795C7.04917 7.88033 7.12654 7.47602 7.28072 7.09867C7.43491 6.72132 7.66281 6.37852 7.9511 6.09032C8.23938 5.80212 8.58225 5.57432 8.95965 5.42025C9.33705 5.26617 9.74138 5.18892 10.149 5.19302C10.5566 5.18892 10.9609 5.26618 11.3382 5.42026C11.7155 5.57434 12.0584 5.80216 12.3466 6.09037C12.6348 6.37858 12.8626 6.7214 13.0167 7.09874C13.1708 7.47608 13.248 7.88038 13.2439 8.28795C13.248 8.69552 13.1708 9.09981 13.0167 9.47715C12.8626 9.8545 12.6348 10.1973 12.3466 10.4855C12.0584 10.7737 11.7155 11.0015 11.3382 11.1556C10.9609 11.3097 10.5566 11.387 10.149 11.3829ZM10.7674 7.05016H9.52964V5.81145H10.7674V7.05016ZM10.7674 10.7644H9.52964V7.66859H10.7674V10.7644Z" fill="#8490A4" />
                </g>
                <defs>
                  <clipPath id="clip0_59_19979">
                    <rect width="15" height="13" fill="white" transform="translate(0.660156 0.570312)" />
                  </clipPath>
                </defs>
              </svg>
              <button onClick={tagInfo1} style={{
                background: isClicked1 ? "rgba(26, 34, 46, 0.771)" : "none",
              }} >FAQ</button>
            </div>
            <div className='svg1' onClick={tagInfo2} style={{
              background: isClicked2 ? "rgba(26, 34, 46, 0.771)" : "none",
              borderTop: isClicked2 ? "4px solid aqua" : "none",
            }}>
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_59_19979)">
                  <path d="M13.2439 5.2543V3.33588C13.2439 2.6543 12.6868 2.09716 12.0061 2.09716H7.05314L5.81535 0.859375H2.10107C1.42042 0.859375 0.863281 1.41652 0.863281 2.09716V9.52573C0.863281 10.2073 1.42042 10.7644 2.10107 10.7644H6.55821C7.30107 11.8787 8.66328 12.6216 10.149 12.6216C12.5633 12.6216 14.4817 10.7022 14.4817 8.28795C14.4817 7.11145 13.9868 6.05938 13.2439 5.2543ZM6.00107 9.52573H2.10107V3.33588H12.0061V4.38795C11.449 4.07873 10.8296 3.9543 10.149 3.9543C9.57889 3.95073 9.01376 4.06038 8.48636 4.2769C7.95896 4.49342 7.47981 4.8125 7.07668 5.21563C6.67355 5.61876 6.35447 6.09792 6.13795 6.62531C5.92143 7.15271 5.81178 7.71785 5.81535 8.28795C5.81535 8.72159 5.87757 9.1543 6.00107 9.52573ZM10.149 11.3829C9.74135 11.3871 9.33695 11.3099 8.9595 11.1559C8.58205 11.0019 8.23913 10.7741 7.95082 10.4859C7.66251 10.1976 7.43461 9.85478 7.28047 9.47737C7.12632 9.09997 7.04904 8.6956 7.05314 8.28795C7.04917 7.88033 7.12654 7.47602 7.28072 7.09867C7.43491 6.72132 7.66281 6.37852 7.9511 6.09032C8.23938 5.80212 8.58225 5.57432 8.95965 5.42025C9.33705 5.26617 9.74138 5.18892 10.149 5.19302C10.5566 5.18892 10.9609 5.26618 11.3382 5.42026C11.7155 5.57434 12.0584 5.80216 12.3466 6.09037C12.6348 6.37858 12.8626 6.7214 13.0167 7.09874C13.1708 7.47608 13.248 7.88038 13.2439 8.28795C13.248 8.69552 13.1708 9.09981 13.0167 9.47715C12.8626 9.8545 12.6348 10.1973 12.3466 10.4855C12.0584 10.7737 11.7155 11.0015 11.3382 11.1556C10.9609 11.3097 10.5566 11.387 10.149 11.3829ZM10.7674 7.05016H9.52964V5.81145H10.7674V7.05016ZM10.7674 10.7644H9.52964V7.66859H10.7674V10.7644Z" fill="#8490A4" />
                </g>
                <defs>
                  <clipPath id="clip0_59_19979">
                    <rect width="15" height="13" fill="white" transform="translate(0.660156 0.570312)" />
                  </clipPath>
                </defs>
              </svg>
              <button onClick={tagInfo2} style={{
                background: isClicked2 ? "rgba(26, 34, 46, 0.771)" : "none",

              }}>Отзывы</button>
            </div>

          </div>
          <div className='about-block3'>
            {
              showInfo && (
                <>
                  <p>EDELWEISS – компьютерная студия, основанная в 2014 году командой единомышленников. Главное направление производство и
                    <br />тюнинг мощных игровых компьютеров высочайшей степени сложности. За время существования компании мы стали официальными
                    <br />партнёрами самых известных корпораций в компьютерном бизнесе: NVIDIA, MSI, THERMALTAKE, ASUS, Intel и очень гордимся этим
                    <br />результатом.</p>
                  <p>Раз Вы читаете вкладку “О компании”, то определенно интересуетесь: компьютерными играми; графикой и 3D моделированием;
                    <br />приобретением офисного ПК для себя или своих сотрудников. Какой бы пункт Вас не интересовал, компания Эдельвейс опираясь на
                    <br />огромный опыт и команду профессионалов всегда готова помочь.</p>
                  <div className='about-img'>
                    <img src="/img/img-27.jpg.png" alt="" />
                    <img src="/img/img-28.png.png" alt="" />
                  </div>
                  <h2>Для игроков и киберспортсменов</h2>
                  <p>Предположим Вы играете пару часов в день для того что бы расслабится после рабочего дня, мы сможем создать для такой задачи <br />сбалансированный игровой системный блок, на котором без проблем можно запустить World of Tanks и подбить парочку вражеских <br />экипажей.</p>
                  <p>Проводите много времени в онлайн играх, например таких как: PUBG, CS:GO, Dota 2, Overwatch, в таком случае потребуется надежный
                    <br />и производительный ПК, достаточно тихий, чтобы шум системы охлаждения не мешал вам активно общаться в голосовом чате.
                    <br />Определённо важным аспектом является внешний вид игрового компьютера, ассортимент корпусов в нашей компании позволит
                    <br />выбрать Вам подходящий вариант по внешнему виду, цене, размерам и форм-фактору.</p>
                  <p>Относитесь к категории геймеров которые не терпят компромиссов, запускаю третью часть Ведьмка в разрешении 4К, с выкрученными
                    <br />бегунками Настроек графики на уровень "ультра», ожидают выхода продолжения легендарного шутера Red Dead Redemption 2, тут
                    <br />мы готовы предложить Вашему вниманию линейку мощнейших игровых компьютеров, построенных на базе топовых видеокарт
                    <br />GEFORCE RTX 20 серии. Максимальная производительность, надежность, эффективное охлаждение, стильный дизайн - вот основные
                    <br />принципы на которые опираются наша инженеры, при производстве игровых ПК премиум класса.</p>
                  <img src="/img/nvidiasert2021.jpg.png" alt="" className='img-img' />
                  <h2>Решения для бизнеса</h2>
                  <p>Если Вы работаете с такими приложениями как: Coral, 3DMax, Adobe, и т.п., производите тяжелые инженерные расчеты и т.п., мы
                    <br />поможем выбрать достойную графические станции, построенные на базе процессоров Intel последнего поколения и
                    <br />профессиональных видеокарт NVIDIA Quadro. С такой аппаратной мощностью можно быть уверенным, проект будет завершён в срок.</p>
                  <p>В любой компании независимо от ее размера всегда присутствует потребность в надежных рабочих компьютерах для ведения базы     question1: false,

                    <br />данных, обслуживания клиентов, доступа к информационным серверам, обработки и ведения бухгалтерских отчетов и множества
                    <br />других подобных задач. Наша компания готова предложить качественные, мощные офисные компьютеры линейки Edelweiss. При их
                    <br />создании мы стараемся использовать бюджетные, проверенные и качественные модели комплектующих. Поэтому не сомневайтесь в
                    <br />стабильности и надежности их работы.</p>
                </>
              )
            }
          </div>


          {
            showInfo1 && (
              <>
                <div className='big'>
                  <div className='about-block4'>
                    <div className='block-title'>
                      <h4>Вопросы по доставке</h4>
                      <div className='block-title1' onClick={() => toggleAccordion('question1')}>
                        <h6>Сколько ждать доставку если я живу в другом городе? </h6>
                        <span>{accordionState.question1 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question1 && (
                        <p>
                          Зависит от расстояния и транспортной доступности.
                          <br />В среднем на доставку по РФ уходит около 7 рабочих дней.
                        </p>
                      )}
                    </div>
                    <div className='block-title'>
                      <div className='block-title1' onClick={() => toggleAccordion('question2')}>
                        <h6>Как долго ждать доставку компьютера по Москве?</h6>
                        <span>{accordionState.question2 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question2 && (
                        <p>
                          Зависит от сложности сборки, как правило компьютеры стоимостью до 200 000 рублей мы доставляем в течении одного рабочего дня <br />с момента оформления заказа.
                        </p>
                      )}
                    </div>
                    <div className='block-title'>
                      <div className='block-title1' onClick={() => toggleAccordion('question3')}>
                        <h6>Сколько стоит доставка по Москве?</h6>
                        <span>{accordionState.question3 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question3 && (
                        <p>
                          Доставка по Москве производится бесплатно.
                        </p>
                      )}
                    </div>
                    <div className='block-title'>
                      <div className='block-title1' onClick={() => toggleAccordion('question4')}>
                        <h6>Сколько стоит доставка до моего города?</h6>
                        <span>{accordionState.question4 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question4 && (
                        <p>
                          Зависит от расстояния и транспортной доступности.
                          <br />В среднем на доставку по РФ уходит около 7 рабочих дней.
                        </p>
                      )}
                    </div>

                  </div>
                  <div className='about-block4'>
                    <div className='block-title'>
                      <h4>Вопросы по сборке</h4>
                      <div className='block-title1' onClick={() => toggleAccordion('question5')}>
                        <h6>Могу ли я заказать компьютер с комплектующими которые не представлены на вашем сайте? </h6>
                        <span>{accordionState.question5 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question5 && (
                        <p>
                          Да, для этого нужно связаться с менеджером по телефону указанному на сайте или отправить запрос на электронную почту <br />info@edelws.ru
                        </p>
                      )}
                    </div>
                    <div className='block-title'>
                      <div className='block-title1' onClick={() => toggleAccordion('question6')}>
                        <h6>Компьютер будет опломбирован?</h6>
                        <span>{accordionState.question6 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question6 && (
                        <p>
                          Компьютеры EDELWEISS не пломбируются, вы имеете полный доступ к компонентам вашего ПК.
                        </p>
                      )}
                    </div>
                    <div className='block-title'>
                      <div className='block-title1' onClick={() => toggleAccordion('question7')}>
                        <h6>Тестируете ли вы собранные компьютеры?</h6>
                        <span>{accordionState.question7 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question7 && (
                        <p>
                          Каждый ПК собранный нашими специалистами проходит тестирование в течении 6-12 часов с использование специализированного <br />программного обеспечения - FurMark, 3D Mark, Aida64, OCCT и др.
                        </p>
                      )}
                    </div>
                    <div className='block-title'>
                      <div className='block-title1' onClick={() => toggleAccordion('question8')}>
                        <h6>Можно ли добавить в сборку мои комплектующие?</h6>
                        <span>{accordionState.question8 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question8 && (
                        <p>
                          Да, это возможно.
                        </p>
                      )}
                    </div>
                    <div className='block-title'>
                      <div className='block-title1' onClick={() => toggleAccordion('question9')}>
                        <h6>Можно ли вносить изменения в представленные на сайте конфигурации?</h6>
                        <span>{accordionState.question9 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question9 && (
                        <p>
                          Да, для этого на странице с понравившемся вам ПК нажмите кнопку "изменить конфигурацию".

                        </p>
                      )}
                    </div>
                    <div className='block-title'>
                      <div className='block-title1' onClick={() => toggleAccordion('question10')}>
                        <h6>Сколько времени занимает изготовление компьютеров EDELWEISS?</h6>
                        <span>{accordionState.question10 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question10 && (
                        <p>
                          Как правило на сборку компьютера уходит 1-2 рабочих дня (исключение составляют компьютеры со сложными системами <br />жидкостного охлаждения).
                        </p>
                      )}
                    </div>
                    <div className='block-title'>
                      <div className='block-title1' onClick={() => toggleAccordion('question11')}>
                        <h6>Если я соберу ПК в конфигураторе после оформления заказа ко мне приедет уже собранный
                          <br />компьютер или мне нужно будет его собирать самому?</h6>
                        <span>{accordionState.question11 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question11 && (
                        <p>
                          Компьютер будет собран нашими инженерами, вы получаете уже готовый к работе компьютер
                        </p>
                      )}
                    </div>
                  </div>
                  <div className='about-block4'>
                    <div className='block-title'>
                      <h4>Вопросы по оплате</h4>
                      <div className='block-title12' onClick={() => toggleAccordion('question12')}>
                        <h6>Не повредят ли мой заказ во время транспортировки? </h6>
                        <span>{accordionState.question12 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question12 && (
                        <p>
                          Ваш заказ будет застрахован на полную стоимость от любых повреждений в процессе доставки. Вы можете быть полностью спокойны <br />за сохранность вашей посылки.
                        </p>
                      )}
                    </div>

                    <div className='block-title'>
                      <div className='block-title13' onClick={() => toggleAccordion('question13')}>
                        <h6>Каковы гарантии что после внесения предоплаты я получу свой заказ?</h6>
                        <span>{accordionState.question13 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question13 && (
                        <p>
                          В момент внесения предоплаты вы получите документ который подтверждает получение нами денежных средств от вас в качестве <br />предоплаты за заказанный вами товар (согласно законодательству Российской Федерации) Вы можете ознакомиться с <br />многочисленными отзывами клиентов о работе нашей компании на ресурсе Яндекс Маркет, на котором мы размещаемся уже более <br />пяти лет. Наша компания является официальным партнером: NVIDIA, Intel, ASUS, MSI, Thermaltake и др., имеются подтверждающие <br />сертификаты.
                        </p>
                      )}
                    </div>
                    <div className='block-title'>
                      <div className='block-title14' onClick={() => toggleAccordion('question14')}>
                        <h6>Нужно ли мне вносить предоплату если я заказываю компьютер с доставкой по России?</h6>
                        <span>{accordionState.question14 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question14 && (
                        <p>
                          Размер предоплаты для клиентов проживающих в России составляет 100%.
                        </p>
                      )}
                    </div>
                    <div className='block-title'>
                      <div className='block-title15' onClick={() => toggleAccordion('question15')}>
                        <h6>Нужно ли мне вносить предоплату если я заказываю компьютер в Москве или МО?</h6>
                        <span>{accordionState.question15 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question15 && (
                        <p>
                          Предоплата для клиентов проживающих в Москве требуется только в случае если общая стоимость заказа превышает 250 000 руб. <br />(размер предоплаты - 20% от стоимости заказа). В остальных случаях предоплата не требуется.
                        </p>
                      )}
                    </div>
                    <div className='block-title'>
                      <div className='block-title16' onClick={() => toggleAccordion('question16')}>
                        <h6>Как я могу оплатить свой заказ?</h6>
                        <span>{accordionState.question16 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question16 && (
                        <p>
                          Заказ можно оплатить: - наличными при получении (доступно для жителей Москвы и МО); - пластиковой картой; -безналичным <br />расчетом для юр. лиц.
                        </p>
                      )}
                    </div>
                  </div>
                  <div className='about-block4'>
                    <div className='block-title'>
                      <h4>Вопросы по гарантии</h4>
                      <div className='block-title17' onClick={() => toggleAccordion('question17')}>
                        <h6>Можете ли вы приехать ко мне домой/работу и устранить неисправность? </h6>
                        <span>{accordionState.question17 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question17 && (
                        <p>
                          Компьютер - это сложное техническое устройство, для диагностики и устранения неисправности требуется специальное <br />оборудование. Поэтому, в случае возникновения проблемы вы можете либо самостоятельно доставить ваш ПК в сервисный центр или <br />воспользоваться услугами курьерской службы.
                        </p>
                      )}
                    </div>
                    <div className='block-title'>
                      <div className='block-title18' onClick={() => toggleAccordion('question18')}>
                        <h6>Сколько времени уходит на решение проблемы в случае возникновения гарантийного случая?</h6>
                        <span>{accordionState.question18 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question18 && (
                        <p>
                          Как правило любая неисправность устраняется в течении одного рабочего дня.
                        </p>
                      )}
                    </div>
                    <div className='block-title'>
                      <div className='block-title19' onClick={() => toggleAccordion('question19')}>
                        <h6>Какая гарантия дается на компьютеры?</h6>
                        <span>{accordionState.question19 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question19 && (
                        <p>
                          На каждый компьютер EDELWEISS дается официальная гарантия на один год и 2 года постгарантийного сервисного обслуживания.
                        </p>
                      )}
                    </div>









                  </div>


                  <div className='about-block4'>
                    <div className='block-title'>
                      <h4>Вопросы по кредиту</h4>
                      <div className='block-title20' onClick={() => toggleAccordion('question20')}>
                        <h6>Как узнать одобрили ли мне кредит? </h6>
                        <span>{accordionState.question20 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question20 && (
                        <p>
                          \ Отслеживайте статус своей заявки в личном кабинете, доступ к которому Вы получите во время оформления заявки.

                        </p>
                      )}
                    </div>
                    <div className='block-title'>
                      <div className='block-title21' onClick={() => toggleAccordion('question21')}>
                        <h6>Какой будет ежемесячный платеж?</h6>
                        <span>{accordionState.question21 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question21 && (
                        <p>
                          Размер ежемесячного платежа зависит от выбранных сроков кредитного договора и стоимости заказа. На вопросы связанные с <br />деталями кредитного договора Вам ответит финансовый специалист.
                        </p>
                      )}
                    </div>
                    <div className='block-title'>
                      <div className='block-title22' onClick={() => toggleAccordion('question22')}>
                        <h6>Для оформления кредита мне нужно приезжать в ваш магазин?</h6>
                        <span>{accordionState.question22 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question22 && (
                        <p>
                          Нет, заявки оформляются онлайн.
                        </p>
                      )}
                    </div>
                    <div className='block-title'>
                      <div className='block-title23' onClick={() => toggleAccordion('question23')}>
                        <h6>Можно ли купить компьютер в кредит?</h6>
                        <span>{accordionState.question23 ? '-' : '+'}</span>
                      </div>
                      {accordionState.question23 && (
                        <p>
                          Да, во время оформления заказа выбирайте способ оплаты "Купить в кредит". Как только заказ будет обработан менеджером, Вы <br />тполучите ссылку на анкету. После ее заполнения ожидайте звонка от финансового специалиста.
                        </p>
                      )}
                    </div>









                  </div>
                </div>
              </>
            )
          }


          {
            showInfo2 && (
              <>
               <Review/>
              </>
            )
          }
          <div>
          </div>
        </div>
      </div>
    </section>

  );
};
