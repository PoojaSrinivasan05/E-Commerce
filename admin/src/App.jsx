import "./App.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import {createContext ,useState} from "react";
import  Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Products from "./Pages/Products";
import AddProduct from "./Pages/Products/addProduct";

const MyContext = createContext();

function App()
{

  const[isSidebarOpen,setisSidebarOpen]=useState(true);
const[isLogin,setIsLogin]=useState(false);
const [isOpenFullScreenPanel,setIsOpenFullScreenPanel] = useState(false);

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
            <div className={`contentRight py-4 px-5 ${ isSidebarOpen=== false ? 'w-[100%]': 'w-[82%]'} transition-all}`}>
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
            <div className={`contentRight py-4 px-5 ${ isSidebarOpen=== false ? 'w-[100%]': 'w-[82%]'} transition-all}`}>
              <Products/>
              </div>
              </div>
              </section>
            </>
      ),
    },
    {
      path:"/addproduct",
      exact:true,
      element:(
        <>
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div className={`overflow-hidden sidebarWrapper ${ isSidebarOpen=== true? 'w-[18%]':'w-[0px] opacity-0'} transition-all`}>
              <Sidebar />
            </div>
            <div className={`contentRight py-4 px-5 ${ isSidebarOpen=== false ? 'w-[100%]': 'w-[82%]'} transition-all}`}>
              <AddProduct/>
              </div>
              </div>
              </section>
            </>
      ),
    },
    
    
  ]);
  const values={
    isSidebarOpen,
    setisSidebarOpen,
    isLogin,
    setIsLogin,,
    setIsOpenFullScreenPanel,
    isOpenFullScreenPanel
  }

  return(
    <>
    <MyContext.Provider value={values}>
    <RouterProvider router={router}  />
    </MyContext.Provider>
    </>
  )
}

export default App;
export  {MyContext};

