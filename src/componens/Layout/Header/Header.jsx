import style from '../Header/header.module.scss';
import Order from '../../Order/Order';
import {Link} from 'react-router-dom'

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
          <li><Link className={style.link} to="/news">Новости</Link></li>
          <li>Доставка</li>
          <li> <Link to="/about" className={style.link}>О нас</Link></li>
          <li>Контакты</li>
        </ul>
        <div>
          <ul className={style.icons}>
            <li onClick={userBtn}>
              <img src="/img/icons/heart.png" alt="" />
            </li>
            <li >
             <Link to="/order"><img src="/img/icons/user.png" alt="" /></Link> 
            </li>
            <li>
            <Link to="/basket" className={style.link}>  <img src="/img/icons/shopping.png" alt="" /></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
