import './App.css';
import PrevNavbar from './componest/PrevNavbar'
import NavBar from './componest/NavBar'
import { Routes, Route } from 'react-router-dom';
import Slider from './componest/Slider';
import Offers from './componest/Offers'
import Data from "./Data/data"
import Heading from './componest/Heading';
import Starproduct from './componest/Starproduct';
import HotAccessoriseMenu from './componest/HotAccessoriseMenu';
import HotAccessorise from './componest/HotAccessorise';


function App() {
  return (
    <>
      <PrevNavbar />
      <NavBar />
      <Slider Data={Data['banner']['start']} />
      <Offers offers={Data['offer']} />
      <Heading text={'START PRODUCT'} />
      <Starproduct starproduct={Data['starProduct']} />
      <Heading text={'HOT ACCESSORIS'} />
      <HotAccessoriseMenu />
      <Routes>

        <Route path='/music' element={
          <HotAccessorise music={Data['hotAccessories']['music']} musicCouer={Data['hotAccessoriesCover']['music']} 
/>
        } />


      </Routes>

<HotAccessorise music={Data['hotAccessories']['music']} musicCouer={Data['hotAccessoriesCover']['music']} 
/>
    </>
  );
}

export default App;
