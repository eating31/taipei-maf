import React from 'react';
import { BrowserRouter, Route, Routes,Navigate  } from 'react-router-dom';

import About from './Page/About';
import Activity from './Page/Activity';
import Source from './Page/Source';
import News from './Page/News';
import Index from './Page/Index';
import Footer from './Component/Common/Footer';
import TopNavbar from './Component/Common/TopNavbar';



import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextProvider } from './Contexts/Context';
import NotFound from './Page/NotFound';

function App() {
  const isLogin = localStorage.getItem('token')
  return (
    <div>
      <ContextProvider>
      <TopNavbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* <Route path="/" element={isLogin ? <Navigate to="/backend/manage" />:<Navigate to="/login" />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/source" element={<Source />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;
