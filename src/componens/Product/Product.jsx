import style from '../Product/product.module.scss';
import React from 'react';

function Product() {

    const [item, setItem] = React.useState([ ])

   React.useEffect(()=> {
    fetch('https://63a888b7100b7737b98121db.mockapi.io/Items').then((res) =>{
        return res.json();
    }).then(json =>{
        setItem(json)
    })
   },[])

  return (
    <div className={style.main}>
      <div className={style.title}>
        <h2> НАША ПРОДУКЦИЯ </h2>
      </div>
      <div className={style.imgMain}>
        {item.map((obj) => (
          <div className={style.img_title}>
            <img src={obj.imgUrl} alt="" />
            <div className={style.overflow}></div>
            <p>{obj.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Product;
