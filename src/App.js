import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form1 from './Forms/Form1';
import Form2 from './Forms/Form2';
import Form3 from './Forms/Form3';
import Form4 from './Forms/Form4';
import Engineer from './Pages/Engineer'
import Management from './Pages/Management'
import Marketing from './Pages/Marketing'
import Sales from './Pages/Sales'
import Contact from './Pages/Contact'
import Nav from './Component/Nav';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Form1></Form1>} />
          <Route path='/form2' element={<Form2></Form2>} />
          <Route path='/form3' element={<Form3></Form3>} />
          <Route path='/form4' element={<Form4></Form4>} />
          <Route path='/engineering' element={<Engineer></Engineer>} />
          <Route path='/management' element={<Management></Management>} />
          <Route path='/marketing' element={<Marketing></Marketing>} />
          <Route path='/sales' element={<Sales></Sales>} />
          <Route path='/contact' element={<Contact></Contact>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
