import style from '../Footer/footer.module.scss';

const Footer = () => {
  return (
    <div className={style.main}>
      <div className={style.footerFirsPart}>
        <div className={style.footerLogo}>
          <img src="/img/icons/logo.png" alt="" />
          <p>
            © 2021 “Copper Pro” <br />
            Все права защищенны
          </p>
          <h5>Политика конфиденциальности</h5>
        </div>
        <div className={style.footerSecondPart}>
          <div>
            <ul>
              <li className={style.titleBig}>Навигация</li>
              <li>Каталог</li>
              <li>Новости</li>
              <li>Доставка</li>
              <li>О нас</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div>
            <ul>
              <li  className={style.titleBig}>Каталог</li>
              <li>Для эфирных масел</li>
              <li>Для гидролатов</li>
              <li>Медная посуда</li>
              <li>Аксессуары из меди</li>
              <li>Индивидуальный заказ</li>
              <li>Скидки и предложения</li>
            </ul>
          </div>
          <div>
            <ul>
              <li  className={style.titleBig}>Контакты</li>
              <li>
                Бажана 8-Б, Киев, <br />
                02132 Украина
              </li>
              <li> +38 (096) 990 67 56</li>
              <li>a.alambik@gmail.com</li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
