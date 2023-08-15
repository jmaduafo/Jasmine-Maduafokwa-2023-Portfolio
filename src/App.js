import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home';
import WorksDisplay from './pages/WorksDisplay/WorksDisplay';
import WrongPage from './pages/WrongPage/WrongPage';
import { Routes, Route} from 'react-router-dom';
import { LayoutGroup } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LayoutGroup>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/works/:workTitle' element={<WorksDisplay/>}/>
          <Route path='/*' element={<WrongPage/>}/>
      </Routes>
      </LayoutGroup>
      <Footer/>
    </div>
  );
}

export default App;
