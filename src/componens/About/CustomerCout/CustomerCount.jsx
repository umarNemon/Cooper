import style from '../CustomerCout/customercount.module.scss';
function CustomerCount() {
  return (
    <div className={style.main}>
      <div className={style.flex}>
        <div>
          <h2>
            НАШИ <br /> КЛЕНТЫ
          </h2>
          <p>
            Мы требовательны к себе, чтобы каждый день <br /> становится лучше для наших клиентов и{' '}
            <br /> находить лучшие решения для каждого из них
          </p>
        </div>
        <div>
            <h3>Счетчик клиентов</h3>
            <img width={500} src="/img/about/count.png" alt="" />
        </div>
      </div>
    </div>
  );
}
export default CustomerCount;
