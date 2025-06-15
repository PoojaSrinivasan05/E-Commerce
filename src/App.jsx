import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,{useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing";
import ProductDetails from "./Pages/ProductDetails";
import {createContext} from "react";
import { IoClose } from "react-icons/io5";
import ProductDetailsComponent from "./components/ProductDetails";
import Login from "./Pages/Login";
import Register from "./Pages/Register"


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ProductZoom from "./components/ProductZoom";

const MyContext= createContext();

function App() {

  
   const [openProductDetailsModel, setOpenProductDetailsModel] =useState(false);
    const [maxWidth] = React.useState('lg');
     const [fullWidth] = React.useState(true);




  const handleCloseProductDetailsModel = () => {
    setOpenProductDetailsModel(false);
  };

  const values={
    setOpenProductDetailsModel

  }

  return (
    <>
      <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path={"/"} exact={true} element={<Home />} />
          <Route path={"productListing"} exact={true} element={<ProductListing />} />
           <Route path={"/product/:id"} exact={true} element={<ProductDetails />} />
           <Route path={"/login"} exact={true} element={<Login />} />
            <Route path={"/register"} exact={true} element={<Register />} />
        </Routes>
        <Footer />
        </MyContext.Provider>
      </BrowserRouter>
      <Dialog
       fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProductDetailsModel}
        onClose={handleCloseProductDetailsModel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModel"
      >
      
        <DialogContent>
          <div className="flex  items-center w-full productDetailsModelContainer relative">
            <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] 
            !absolute top-[15px] right-[15px] !bg-[#f1f1f1]" onClick={handleCloseProductDetailsModel}><IoClose className="text-[20px]" /></Button>
            <div className="col1 w-[40%] px-3">
              <ProductZoom />
            </div>

            <div className="col2 w-[60%] productContent px-8 py-8 pr-16 ">
              <ProductDetailsComponent />
            </div>
          </div>
          
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;

export {MyContext};
