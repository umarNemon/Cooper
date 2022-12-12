import {Link} from 'react-router-dom'
import style from '../CatalogTitle/catalogtitle.module.scss'
function CatalogTitle(){
    return(
        <div className={style.main}>
         <span><Link className={style.link} to="/" >Главное</Link>  / </span> <span className={style.linkk}> Каталог</span>
          <div>
            <h1>КАТАЛОГ</h1>
          </div>
        </div>
    )
}
export default CatalogTitle;