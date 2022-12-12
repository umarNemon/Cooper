import style from '../Search/search.module.scss';

const Search = () => {
  return (
    <div>
      <div className={style.main}>
        <div className={style.line}></div>
        <div className={style.flex}>
          <input placeholder="Поиск" name="" id="" />

          <div>Сортировка</div>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};
export default Search;
