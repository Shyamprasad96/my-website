import Navigationbar from './Navigationbar';
import './App.css';
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Code from "./components/Code/Code";
import Personal from "./components/Personal/Personal";
import Work from "./components/Work/Work";

import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Navigationbar />
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/code' element={<Code/>}/>
                <Route path='/personal' element={<Personal/>}/>
                <Route path='/work' element={<Work/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
