import style from '../BasketProduct/basketproduct.module.scss';
import React from 'react';
const BasketProduct = () => {

  return (
    <div className={style.main}>
      <div className={style.title}>
        <span className={style.titleOne}>Товар</span>{' '}
        <span className={style.titleTwo}>Количество</span>
        <span className={style.titleThree}>Цена</span>
      </div>
      <div className={style.flex}>
        <div>
          <div className={style.mainProduct}>
            <div className={style.line}></div>
            <div className={style.product}>
              <div>
                <img width={90} height={100} src="/img/products/1.png" alt="" />
              </div>
              <div>
                <h3>Дистиллятор для получения гидролата 8л</h3>
              </div>
              <div>
                <h4> 2 шт</h4>
              </div>
              <div className={style.price}>
                <h4>5 000 грн</h4>
              </div>
              <div className={style.trash}>
                <img src="/img/basket/trash.png" alt="" />
              </div>
            </div>
          </div>
          <div className={style.mainProduct}>
            <div className={style.line}></div>
            <div className={style.product}>
              <div>
                <img width={90} height={100} src="/img/products/1.png" alt="" />
              </div>
              <div>
                <h3>Дистиллятор для получения гидролата 8л</h3>
              </div>
              <div>
                <h4> 2 шт</h4>
              </div>
              <div className={style.price}>
                <h4>5 000 грн</h4>
              </div>
              <div className={style.trash}>
                <img src="/img/basket/trash.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={style.order}>
          <h4>Итоги</h4>
          <h2>10 000 сом</h2>
          <img className={style.img} src='/img/basket/2.png' alt="" />
          <div className={style.line}></div>
          <div className={style.car}>
            <img src="/img/basket/car.png" alt="" />
            <div>У вас бесплатная <br /> доставка!</div>
          </div>
          <div className={style.btnOrder}>Оформить заказ</div>
        </div>
      </div>
    </div>
  );
};
export default BasketProduct;
