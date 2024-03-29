// import Header from "./componens/Layout/Header/Header";
import {Routes, Route} from 'react-router-dom'
import Mainpage from './componens/MainPage/Mainpage';
import AboutHeader from './componens/About/Header/AboutHeader'
import Catalog from './componens/Catalog/Catalog';
import News from './componens/news/News';
import Basket from './componens/Basket/Basket';
import Order from './componens/Order/Order';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/about' element={<AboutHeader/>}/>
      <Route path='/catalog' element={<Catalog/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/basket' element={<Basket/>}/>
      <Route path='/order' element={<Order/>}/>
    </Routes>
    </div>
  );
}

export default App;
