import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <h1>App Comp</h1>
      <Header />
      {/* <Home />
      <About /> */}
      {/* //handle routing */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>

    </>
  );
}

export default App;
