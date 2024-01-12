import TopBar from './components/topbar/topbar';
import Navbar from './components/navbar/navbar';
import Home from './components/Home/body';
import Footer from './components/footer/footer';
import Shop from './components/Shop/Shop';
import Detail from './components/ShopDetail/detail';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
   <>
    <Router>
    <nav>
    <TopBar/>
    <Navbar/>
    </nav>


<Routes>
    <Route path={'/'}  exact  element={<Home/>} />
    <Route path='/Shop' element={<Shop/>}/>
    <Route path='/ShopDetails' element={<Detail/>}/>

</Routes>
      


    <footer>
    <Footer/>
    </footer>
    </Router>
   </>
  );
}

export default App;
