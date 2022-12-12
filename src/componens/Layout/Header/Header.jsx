import style from '../Header/header.module.scss';
import {Link} from 'react-router-dom'

const plusBtn = () =>{
    alert("Umar Ganiev")
}
const userBtn = () => {
    prompt("How old you?")
}
function Header(props) {
  return (
    <div style={props.bg && { background: props.bg }} className={style.main}>
      <div className={style.menu}>
        <ul className={style.list}>
          <li>
          <Link to='/' > <img width={120} src="/img/icons/logo.png" alt="" /></Link> 
          </li>
          <li><Link className={style.link} to="/catalog">Каталог</Link></li>
          <li>Новости</li>
          <li>Доставка</li>
          <li> <Link to="/about" className={style.link}>О нас</Link></li>
          <li>Контакты</li>
        </ul>
        <div>
          <ul className={style.icons}>
            <li onClick={userBtn}>
              <img src="/img/icons/heart.png" alt="" />
            </li>
            <li onClick={ plusBtn }>
              <img src="/img/icons/user.png" alt="" />
            </li>
            <li>
              <img src="/img/icons/shopping.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
