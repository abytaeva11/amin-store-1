import { SiMaplibre } from 'react-icons/si';
import "./index.scss";



export const ContactPage = () => {
  return (
    <section >
      <div id="contact" style={{ backgroundImage: "url('/img/shutter-stock.jpeg')" }}>
        <div className="container">
          <div className="contact">
            <h1>Контакты интернет-магазин Amin store</h1>
          </div>
        </div>
      </div>

      <div id="contactinfo">
        <div className="container">
          <div className="contactinfo">
            <div className='call'>
              <h1>Контактная информация</h1>
              <h4>Место работы магазина:</h4>
              <p>г. Бишкек, улица Жибек жолу 150
                <br />ТК Табылга 2 этаж А14</p>
              <h4>Время работы магазина:</h4>
              <div className='days'>
                <div className='days-p'>
                  <p>Понедельник </p>
                  <p> Вторник </p>
                  <p> Среда </p>
                  <p> Четверг </p>
                  <p> Пятница </p>
                  <p> Суббота </p>
                  <p>Воскресенье </p>
                </div>
                <div className='days-p'>
                  <p> 09:00 - 18:00</p>
                  <p> 09:00 - 18:00</p>
                  <p> 09:00 - 18:00</p>
                  <p> 09:00 - 18:00</p>
                  <p> 09:00 - 18:00</p>
                  <p> 09:00 - 18:00</p>
                  <p> 09:00 - 18:00</p>
                </div>
              </div>
              <h6>Контактный телефон</h6>
              <a href="tel:+996 700 99 19 23">+ 996 700 99 19 23</a>
              <h6>Электронная почта</h6>
            </div>
            <div className='map'>
              <h1>Местоположение</h1>
              <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11693.632123480402!2d74.62216504693922!3d42.88533724431382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb77569c70685%3A0x1ccb4f20bf82ff9d!2zMTM4INGD0LvQuNGG0LAg0KHQtdC80ZHQvdCwINCR0YPQtNGR0L3QvdC-0LPQviwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1697214243006!5m2!1sru!2skg" width="744" height="206" style={{ border: "0px", color: "" }} loading="lazy" ></iframe>
              <h4>На общественном транспорте.</h4>
              <iframe title="transport" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.9763839997167!2d74.5792174102843!3d42.87334260240152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8232dfe7211%3A0x34d333e7a4627103!2zMjExINGD0LsuINCi0L7QutGC0L7Qs9GD0LvQsCwg0JHQuNGI0LrQtdC6IDcyMDAxMA!5e0!3m2!1sru!2skg!4v1697214376187!5m2!1sru!2skg" width="744" height="206" style={{ border: "0px", color: "" }} loading="lazy" ></iframe>

              <h4>  <SiMaplibre />На общественном транспорте.</h4>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};
