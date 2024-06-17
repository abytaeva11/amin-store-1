import { AiFillHome } from 'react-icons/ai';
import "./index.scss";


export const ClientsPage = () => {
  return (
    <section>
      <div id="home">
        <div className="container">
          <div className="home">
            <h3> <AiFillHome /></h3>

            <a href="/">Условия доставки и оплаты</a>

          </div>
        </div>
      </div>
      <div id='clients' style={{ backgroundImage: "url('/img/colorful-keyboard.jpeg')" }}>
        <div className="container">
          <div className="clients">
            <h1> Тех.поддержка </h1>

          </div>
        </div>
      </div>
      <div id="clients2">
        <div className="container">
          <div className="clients2">
            <div className="clients-inside">
              <div className="clients-block">
                <img src="/img/clients-info.png" alt="" />
                <h2>Служба поддержки клиентов</h2>
                <h3>Специалисты компании AMIN STORS стремится обеспечить своим клиентам услуги наивысшего качества. Вы можете получить  <br />квалифицированную помощь в режиме реального времени любым удобным для вас способом.</h3>
                <li><a href=" +996 700-48-56-39;"> Телефон: +996 700-48-56-39</a></li>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};
