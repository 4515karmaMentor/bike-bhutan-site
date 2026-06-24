import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Ride from './pages/Ride';
import Culture from './pages/Culture';
import WhatIncluded from './pages/WhatIncluded';
import BookNow from './pages/BookNow';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="ride" element={<Ride />} />
        <Route path="culture" element={<Culture />} />
        <Route path="what-included" element={<WhatIncluded />} />
        <Route path="book-now" element={<BookNow />} />
      </Route>
    </Routes>
  );
}

export default App;