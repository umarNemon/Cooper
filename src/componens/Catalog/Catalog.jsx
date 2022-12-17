import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import CatalogTitle from './CatalogTitle/CatalogTitle';
import Search from './Search/Search';
import Like from '../Slid/Like';
import style from '../Catalog/catalog.module.scss';

const array = [
  { imgUrl: '/img/products/1.png', title: 'Для эфирных масел', price: '1 974' },
  { imgUrl: '/img/products/2.png', title: 'Для гидролатов', price: '1 967' },
  { imgUrl: '/img/products/3.png', title: 'Медная посуда', price: '1 564' }
 
];

function Catalog() {
  return (
    <div>
      <Header bg={'linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)'} />
      <CatalogTitle />
      <Search />
      <div className={style.producs}>
        
      {array.map((obj) => (
          <div>
            <div className={style.imgMain}>
              <div className={style.parent}>
                <img width={300} height={350} src={obj.imgUrl} alt="" />
                <div className={style.child}>
                  <Like />
                </div>
              </div>
              <div className={style.title}>
                <p>
                  Медный чайник с <br /> фарфоровой ручкой
                </p>
                <h4>{obj.price} som</h4>
              </div>
            </div>
          </div>
        ))}
          {array.map((obj) => (
          <div>
            <div className={style.imgMain}>
              <div className={style.parent}>
                <img width={300} height={350} src={obj.imgUrl} alt="" />
                <div className={style.child}>
                  <Like />
                </div>
              </div>
              <div className={style.title}>
                <p>
                  Медный чайник с <br /> фарфоровой ручкой
                </p>
                <h4>{obj.price} som</h4>
              </div>
            </div>
          </div>
        ))}
          {array.map((obj) => (
          <div>
            <div className={style.imgMain}>
              <div className={style.parent}>
                <img width={300} height={350} src={obj.imgUrl} alt="" />
                <div className={style.child}>
                  <Like />
                </div>
              </div>
              <div className={style.title}>
                <p>
                  Медный чайник с <br /> фарфоровой ручкой
                </p>
                <h4>{obj.price} som</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
export default Catalog;
