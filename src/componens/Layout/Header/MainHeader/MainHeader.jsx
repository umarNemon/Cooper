import Header from "../Header"
import style from '../MainHeader/mainheader.module.scss'

const MainHeader = ()=>{
    return(
        <div>
          <div className={style.main}>
          <Header/>
        <div className={style.title}>
            <div>
             <h1>ХИТ ПРОДАЖ</h1>
             <div className={style.line}></div>
            </div>
            <div>
                <h3>Дистиллятор для <br /> эфирных масел </h3>
            </div>
            <div className={style.prices}>
                <span className={style.price}>ЦЕНА</span> <span className={style.priceNumber}>4 096 som</span>
            </div>
            <div className={style.btnBuy}>Купить</div>
        </div>
          </div>
        </div>
    )
}
export default MainHeader;
