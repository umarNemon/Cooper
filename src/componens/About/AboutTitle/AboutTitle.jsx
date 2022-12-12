import style from '../AboutTitle/abouttitlt.module.scss';
import {Link} from 'react-router-dom'
function AboutTitle() {
  return (
    <div className={style.main}>
      <div className={style.mainLeft}>
        <div className={style.link}>
          <span><Link className={style.link} to="/" >Главное</Link>  / </span> <span className={style.linkk}> О нас</span>
        </div>
        <div className={style.title}>
            <div>
                <h1> О НАС</h1>
                <div className={style.line}></div>
                  <div className={style.secondTitle}>
                  "Мы любим все, <br /> что сделано из меди"
                  </div>
                   <div className={style.names}>
                        <div>
                            <h4>Иван <br /> Иванов</h4>
                        </div>
                        <div>
                            <img src="/img/about/pod.png" alt="" />
                        </div>
                   </div>
            </div>
            <div>
                <img width={500} src="/img/about/img.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}
export default AboutTitle;
