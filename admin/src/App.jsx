import "./App.css";
import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import {createContext ,useState} from "react";
import  Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Products from "./Pages/Products";
import AddProduct from "./Pages/Products/addProduct";
import CategoryList from "./Pages/Category";
import SubCategoryList from "./Pages/Category/subCatList";

import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { IoClose } from "react-icons/io5";
import Slide from '@mui/material/Slide';
import HomeSliderBanners from "./Pages/HomeSliderBanners";
import AddHomeSlide from "./Pages/HomeSliderBanners/addHomeSlide";
import AddCategory from "./Pages/Category/addCategory";
import AddSubCategory from "./Pages/Category/addSubCategory ";
import Users from "./Pages/Users/index ";
import Orders from "./Pages/Orders";
import VerifyAccount from "./Pages/verifyAccount";
import ForgotPassword from "./Pages/ForgotPasword";
import ChangePassword from "./Pages/ChangePassword";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyContext = createContext();

function App()
{

  const[isSidebarOpen,setisSidebarOpen]=useState(true);
const[isLogin,setIsLogin]=useState(false);
const [isOpenFullScreenPanel,setIsOpenFullScreenPanel] = useState({
  open:false,
  model:''
});

  const  router=createBrowserRouter([
    {
      path:"/",
      exact:true,
      element:(
        <>
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`overflow-hidden sidebarWrapper ${ isSidebarOpen=== true? 'w-[18%]':'w-[0px] opacity-0'} transition-all`}>
              <Sidebar />
            </div>
            <div className={`contentRight py-4 px-5 ${ isSidebarOpen=== false ? 'w-[100%]': 'w-[82%]'} transition-all`}>
              <Dashboard/>
              </div>
              </div>
              </section>
            </>
      ),
    },
    {
       path:"/login",
      exact:true,
      element:(
        <>
        <Login />
        </>
      ),
    },
    {
       path:"/sign-up",
      exact:true,
      element:(
        <>
        <SignUp />
        </>
      ),
    },
    {
      path:"/products",
      exact:true,
      element:(
        <>
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`overflow-hidden sidebarWrapper ${ isSidebarOpen=== true? 'w-[18%]':'w-[0px] opacity-0'} transition-all`}>
              <Sidebar />
            </div>
            <div className={`contentRight py-4 px-5 ${ isSidebarOpen=== false ? 'w-[100%]': 'w-[82%]'} transition-all`}>
              <Products/>
              </div>
              </div>
              </section>
            </>
      ),
    },
     {
      path:"/homeSlider/list",
      exact:true,
      element:(
        <>
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`overflow-hidden sidebarWrapper ${ isSidebarOpen=== true? 'w-[18%]':'w-[0px] opacity-0'} transition-all`}>
              <Sidebar />
            </div>
            <div className={`contentRight py-4 px-5 ${ isSidebarOpen=== false ? 'w-[100%]': 'w-[82%]'} transition-all`}>
              <HomeSliderBanners/>
              </div>
              </div>
              </section>
            </>
      ),
    },
     {
      path:"/category/list",
      exact:true,
      element:(
        <>
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`overflow-hidden sidebarWrapper ${ isSidebarOpen=== true? 'w-[18%]':'w-[0px] opacity-0'} transition-all`}>
              <Sidebar />
            </div>
            <div className={`contentRight py-4 px-5 ${ isSidebarOpen=== false ? 'w-[100%]': 'w-[82%]'} transition-all`}>
              <CategoryList/>
              </div>
              </div>
              </section>
            </>
      ),
    },
     {
      path:"/subCategory/list",
      exact:true,
      element:(
        <>
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`overflow-hidden sidebarWrapper ${ isSidebarOpen=== true? 'w-[18%]':'w-[0px] opacity-0'} transition-all`}>
              <Sidebar />
            </div>
            <div className={`contentRight py-4 px-5 ${ isSidebarOpen=== false ? 'w-[100%]': 'w-[82%]'} transition-all`}>
              <SubCategoryList/>
              </div>
              </div>
              </section>
            </>
      ),
    },
     {
      path:"/users",
      exact:true,
      element:(
        <>
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`overflow-hidden sidebarWrapper ${ isSidebarOpen=== true? 'w-[18%]':'w-[0px] opacity-0'} transition-all`}>
              <Sidebar />
            </div>
            <div className={`contentRight py-4 px-5 ${ isSidebarOpen=== false ? 'w-[100%]': 'w-[82%]'} transition-all`}>
              <Users/>
              </div>
              </div>
              </section>
            </>
      ),
    },
      {
      path:"/orders",
      exact:true,
      element:(
        <>
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`overflow-hidden sidebarWrapper ${ isSidebarOpen=== true? 'w-[18%]':'w-[0px] opacity-0'} transition-all`}>
              <Sidebar />
            </div>
            <div className={`contentRight py-4 px-5 ${ isSidebarOpen=== false ? 'w-[100%]': 'w-[82%]'} transition-all`}>
              <Orders/>
              </div>
              </div>
              </section>
            </>
      ),
    },
     {
       path:"/forgot-password",
      exact:true,
      element:(
        <>
        <ForgotPassword/>
        </>
      ),
    },
    {
       path:"/verify-account",
      exact:true,
      element:(
        <>
        <VerifyAccount/>
        </>
      ),
    },
     {
       path:"/change-password",
      exact:true,
      element:(
        <>
        <ChangePassword/>
        </>
      ),
    },   
    
  ]);
   

  const values={
    isSidebarOpen,
    setisSidebarOpen,
    isLogin,
    setIsLogin,
    setIsOpenFullScreenPanel,
    isOpenFullScreenPanel
  }

  return(
    <>
    <MyContext.Provider value={values}>
    <RouterProvider router={router}  />


    <Dialog
        fullScreen
        open={ isOpenFullScreenPanel.open}
       onClose={()=>setIsOpenFullScreenPanel({
        open:false
       })}
        slots={{
          transition: Transition,
        }}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={()=>setIsOpenFullScreenPanel({
        open:false
       })}
              aria-label="close"
            >
              <IoClose className="text-gray-800" />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              <span className="text-gray-800">{isOpenFullScreenPanel?.model}</span>
            </Typography>
           
          </Toolbar>
        </AppBar>
     
                       {
                        isOpenFullScreenPanel ?.model === "Add Product" && <AddProduct /> 
                       }

                        {
                        isOpenFullScreenPanel ?.model === "Add Home Slide" && <AddHomeSlide /> 
                       }
                       {
                        isOpenFullScreenPanel ?.model === "Add  New Category" && <AddCategory /> 
                       }
                       {
                        isOpenFullScreenPanel ?.model === "Add  New Sub Category" && <AddSubCategory /> 
                       }
      </Dialog>
    </MyContext.Provider>
    </>
  )
}

export default App;
export  {MyContext};

