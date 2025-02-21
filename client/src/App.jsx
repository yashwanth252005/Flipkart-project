import React from 'react';
import Header from './components/header/Header';
import { Box } from '@mui/material';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailView from './components/detailPage/DetailView';
import Cart from './components/cartPage/Cart';
import Footer from './components/footer/Footer';

const App = () => {

  return (
    <Provider store={store}>
      <DataProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: '70px' }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<DetailView />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </Box>
          <Footer />
        </BrowserRouter>
      </DataProvider>
      </Provider>
  )
}

export default App;