import {Link} from 'react-router-dom'
import style from '../BasketTitle/basketTitle.module.scss'
function BasketTitle(){
    return(
        <div className={style.main}>
         <span><Link className={style.link} to="/" >Главное</Link>  / </span> <span className={style.linkk}> Корзина</span>
          <div>
            <h1>КОРЗИНА</h1>
          </div>
        </div>
    )
}
export default BasketTitle;