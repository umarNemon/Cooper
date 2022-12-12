import SimpleSlider from '../Layout/Header/Slick/SimpleSlider';
import Product from '../Product/Product';
import Slid from '../Slid/Slid';
import Footer from '../Layout/Footer/Footer';
import { Link } from 'react-router-dom';
function Mainpage() {
  return (
    <div>
      <SimpleSlider />
      <Product />
      <Slid title="ЛУЧШИЕ В ПРОДАЖИ" />
      <Slid bg="white" title="НОВИНКИ" />
      <img width={1347} className="" src="/img/1+1.jpg" />
      <Slid bg="white" title="МЫ РЕКАМЕНДУЕМ" />
      <Slid title="СКИДКИ" />
      <Footer />
    </div>
  );
}
export default Mainpage;
