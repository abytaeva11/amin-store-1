import { FaExclamationTriangle } from 'react-icons/fa';
import { FcAddImage } from 'react-icons/fc';
import "./index.scss";



export const DecorPage = () => {
  return (
    <div>


      <div id="box-block">
        <div className="container">
          <div className='box-block'>
            <div className='box1'>
              <h1>Личные данные</h1>
              <div className='input1'>
                <h4>Ваше полное имя</h4>
                <input type="text" placeholder='ФИО' required />
              </div>
              <div className='input1'>
                <h4>E-mail</h4>
                <input type="text" placeholder='E-mail' required />
              </div>
              <div className='input1'>
                <h4>Телефон</h4>
                <input type="text" placeholder='+996XXXXXX' required />
              </div>
              <div className='radio'>
                <input type="radio" name="" id="" required />
                <h5>Доставка по Кыргызстану</h5>
              </div>
              <div className='radio'>
                <input type="radio" name="" id="" required />
                <h5>Самовывоз</h5>
              </div>
              <div className='radio1'>
                <FaExclamationTriangle className='radio-input' />
                <h6>-Поля обьязательны для заполнения</h6>
              </div>
              <div className='price'>
                <h2>Всего к оплате </h2>
                <div className='price-box'>
                  <h3>54 900 </h3>
                  <span>c</span>
                </div>


              </div>

            </div>

            <div className='box2'>
              <h1>Оплата</h1>
              <h4>Оплата</h4>
              <div className='radio'>
                <input type="radio" name="" id="" required />
                <h5>Оформить в рассрочку</h5>
              </div>
              <div className='radio'>
                <input type="radio" name="" id="" required />
                <h5>Оплата наличными </h5>
              </div>
              <div className='radio'>
                <input type="radio" name="" id="" required />
                <h5>Перевод по номеру</h5>
              </div>
              <div className='addfoto'>
                <FcAddImage className='addimg' />
                <h6>Вы можете прикрепить чек</h6>
              </div>
              <div className='area'>
                <h3>Комментарий к заказу</h3>
                <textarea
                  name="orderComment"
                  id="orderComment"

                ></textarea>
              </div>
              <div className='checkbox'>
                <input type="checkbox" name="" id="" required />
                <h6>Я согласен на обработку персональных данных</h6>
              </div>
            </div>
            {/* <button>Оформить заказ</button> */}
          </div>
          <div className='box-btn'>
            <button>Оформить заказ</button>
            <p>После оформления с вами свяжется оператор <br />для уточнения деталей</p>
          </div>

        </div>
      </div>




    </div>
  )
}

