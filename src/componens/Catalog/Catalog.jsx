import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import CatalogTitle from './CatalogTitle/CatalogTitle';
import Search from './Search/Search';
import Like from '../Slid/Like';
import style from '../Catalog/catalog.module.scss';
import React from 'react';
import Sorting from './Search/sorting/Sorting';
import axios from 'axios';


function Catalog() {
  const [item, setItem] = React.useState([ ])

  React.useEffect(()=>{
    // fetch('https://63d4af1320b08498cbc08d83.mockapi.io/pro').then((run)=>{
    //   return run.json();
    // }).then(json=>{
    //   setItem(json)
    // })
    axios.get('https://63d4af1320b08498cbc08d83.mockapi.io/pro').then((run) =>{
      setItem(run.data)
    })
  },[])
  const [sortingOpen, setSortngOpen] = React.useState(false);

  const [seachValue, setSearchValue] = React.useState(' ');

  const onChangSeachInput = (eventt) => {
    setSearchValue(eventt.target.value);
  };

  const chengSorting = () => {
    setSortngOpen(!sortingOpen);
  };

  return (
    <div>
      <Header bg={'linear-gradient(285.45deg, #0B3F37 38.27%, #CB8D62 141.81%)'} />
      <CatalogTitle />
      <div className={style.producs}>

        <section>
          <div>
            <div className={style.main}>
              <div className={style.line}></div>
              <div className={style.flex}>
                <div className={style.input}>
                  {seachValue && (
                    <img
                      onClick={() => setSearchValue('')}
                      className={style.iconsX}
                      src="/img/icons/x.png"
                      alt=""
                    />
                  )}
                  <input
                    onChange={onChangSeachInput}
                    value={seachValue}
                    placeholder="Поиск"
                    name=""
                    id=""
                  />
                </div>
                <h1>{`Инпут "${seachValue}"`}</h1>
                <div className={style.sorting}>
                  <span onClick={chengSorting}> Сортировка &#9660;</span>
                  <div className={style.sortingChild}>{sortingOpen && <Sorting />}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        { item.filter((array) => array.title.toLowerCase().includes(seachValue.toLowerCase())).map((obj) => (
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
               {obj.title}
                </p>
                <h4>{obj.price} som</h4>
              </div>
            </div>
          </div>
        ))}

      </div>
      <Footer />
    </div>
  );
}
export default Catalog;
