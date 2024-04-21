import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';

import 'swiper/css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
