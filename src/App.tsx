import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import {} from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react';
import { ProductList } from './pages/Products/ProductsList';
import { SaveProduct } from './pages/SaveProducts/SaveProduct';
import './global.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AuthContextProvider } from './contexts/context';
import { Edit } from './pages/Edit/Edit';

function App() {
  return (
    <div className="app">
      <AuthContextProvider>
    <BrowserRouter>
    
    <ChakraProvider>
      
       <Header/>
    <Routes>
      <Route path='/' element={<SaveProduct/>}/>
      <Route path='/products' element={<ProductList/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
    </Routes>
    </ChakraProvider>
    <ToastContainer position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover/>
                   
    </BrowserRouter>
    </AuthContextProvider>
    </div>
  );
}

export default App;
