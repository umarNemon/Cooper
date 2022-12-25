import style from '../Search/search.module.scss';
import React from 'react';
import Sorting from './sorting/Sorting';
const Search = () => {

  const [sortingOpen , setSortngOpen] = React.useState(false)

  const chengSorting = ()=>{
    setSortngOpen(!sortingOpen)
  }
  return (
    <div>
      <div className={style.main}>
        <div className={style.line}></div>
        <div className={style.flex}>
          <input placeholder="Поиск" name="" id="" />

          <div className={style.sorting}> <span onClick={chengSorting}> Сортировка &#9660;</span> 
            <div className={style.sortingChild}>
              {sortingOpen ? <Sorting/> : null}
              </div>
             </div>
           
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};
export default Search;
