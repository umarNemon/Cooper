import {Link} from 'react-router-dom'
import style from '../NewsTitle/newsTitle.module.scss'

const NewsTitle = ()=>{
    return(
        <div className={style.main}>
        <span><Link className={style.link} to="/" >Главное</Link>  / </span> <span className={style.linkk}> Новости</span>
         <div>
           <h1>НОВОСТИ</h1>
         </div>
       </div>
    )
}
export default NewsTitle;