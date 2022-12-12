import React, { Component } from 'react';
import Like from './Like';
import Slider from 'react-slick';
import style from '../Slid/slid.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Slid/slid.scss';

const array = [
  {imgUrl:"/img/products/1.png" , title:'Для эфирных масел',price: "1 974"},
  {imgUrl:"/img/products/2.png" , title:'Для гидролатов' ,price: "1 967"},
  {imgUrl:"/img/products/3.png" , title:'Медная посуда' ,price:'1 564'},
  {imgUrl:"/img/products/4.png" , title:'Аксессуары из меди' ,price:'1 674'},
  {imgUrl:"/img/products/5.png" , title:'Индивидуальный заказ' ,price:'1 894'},
  {imgUrl:"/img/products/3.png" , title:'Скидки и предложения' ,price: '1 768'}
]

export default class Slid extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };


    return (
      <div className="slid">
        <div className={style.main} style={this.props.bg && { background: `${this.props.bg}` }}>
          <h2>{this.props.title}</h2>
          <Slider className={style.sliderMain} {...settings}>
            {
              array.map((obj) =>(
                <div>
                <div className={style.imgMain}>
                 <div className={style.parent}>
                   <img width={300} height={350} src={obj.imgUrl} alt="" />
                  <div className={style.child}>
                    <Like/>
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
              ))
            }
          </Slider>
          <div className={style.btn}>Перейти в каталог</div>
        </div>
      </div>
    );
  }
}
