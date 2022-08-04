import './css/basic.css'
import './css/reset.css'
import './css/main.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Section01 from './doc/Section01';
import Section02 from './doc/Section02';
import Section03 from './doc/Section03';
import Nav from './doc/Nav';

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Section01 />} />
          <Route path="/sc01" element={<Section01 />} />
          <Route path="/sc02" element={<Section02 />} />
          <Route path="/sc03" element={<Section03 />} />
        </Routes>
      </BrowserRouter>
    </>



  );
}

export default App;
