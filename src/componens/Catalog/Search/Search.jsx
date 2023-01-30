import style from '../Search/search.module.scss';
import React from 'react';
import Sorting from './sorting/Sorting';
const Search = () => {

  const [sortingOpen , setSortngOpen] = React.useState(false)

  const [ seachValue , setSearchValue] = React.useState(' ')

  const onChangSeachInput = (eventt)=> {
    setSearchValue(eventt.target.value)
  }

  const chengSorting = ()=>{
    setSortngOpen(!sortingOpen)
  }
  return (
      <section>
        <div>
          <div className={style.main}>
            <div className={style.line}></div>
            <div className={style.flex}>
              <div className={style.input}>
                {seachValue && (<img onClick={()=> setSearchValue('')} className={style.iconsX} src="/img/icons/x.png" alt="" />)}
                <input  onChange={ onChangSeachInput} value={seachValue} placeholder="Поиск" name="" id="" />
              </div>
                 <h1>{`Инпут "${seachValue}"`}</h1>
              <div className={style.sorting}> <span onClick={chengSorting}> Сортировка &#9660;</span>
                <div className={style.sortingChild}>
                  {sortingOpen && <Sorting/>}
                  </div>
                 </div>
        
              </div>
             <div>
        
            </div>
          </div>
        </div>
      </section>
   
  );
};
export default Search;
