// import Header from "./componens/Layout/Header/Header";
import {Routes, Route} from 'react-router-dom'
import Mainpage from './componens/MainPage/Mainpage';
import AboutHeader from './componens/About/Header/AboutHeader'
import Catalog from './componens/Catalog/Catalog';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/about' element={<AboutHeader/>}/>
      <Route path='/catalog' element={<Catalog/>}/>
    </Routes>
    </div>
  );
}

export default App;
