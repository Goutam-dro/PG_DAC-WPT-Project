import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigationbar } from './components/Navigationbar';
import { Home } from './components/Home';
import { About } from './components/About';
//import { Col, Row } from 'react-bootstrap';
//import { Aircrafts } from './components/Aircrafts';
import { Registration } from './components/Registration';
import { Mission } from './components/Mission';
import { Login } from './components/Login';
import { Footer } from './components/Footer';
import { Services } from './components/Services';
import { Product } from './components/Product';
import { MemberList } from './components/MemberList';
import { MemberUpdate } from './components/MemberUpdate';

function App() {
  return (
    <BrowserRouter>
    {/* <Row id="navigate">
      <Col lg="4">
        <h1>SPACEROOT</h1>
        <h6>AEROSPACE</h6>
      </Col>
      <Col lg="8">
        <Navigationbar id="navbar"></Navigationbar>
      </Col>
    </Row> */}
    <Navigationbar id="navbar"></Navigationbar>
    <Routes>
      <Route path='/registration' element={<Registration/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/mission' element={<Mission/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/member-list' element={<MemberList/>}></Route>
      <Route path='/edit/:email' element={<MemberUpdate/>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
