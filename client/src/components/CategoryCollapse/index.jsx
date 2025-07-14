import React,{useState} from "react";
import { MdArrowDropDownCircle } from "react-icons/md";
import {Link} from "react-router-dom";
import { IoMdArrowDropupCircle } from "react-icons/io";
import Button from '@mui/material/Button';

export const CategoryCollapse =() =>{
    const [submenuIndex,setSubmenuIndex]=useState(null);
   const [innerSubmenuIndex,setInnerSubmenuIndex]=useState(null);

   const openSubmenu=(index)=>{
    if(submenuIndex===index){
       setSubmenuIndex(null);
    }else{
         setSubmenuIndex(index);
    }
  }
    const openInnerSubmenu=(index)=>{
    if(innerSubmenuIndex===index){
       setInnerSubmenuIndex(null);
    }else{
         setInnerSubmenuIndex(index);
    }
   
   
  }
    return (
        <>
        
        <div className='scroll'>
            <ul className='w-full'>
                <li className='list-none flex items-center relative flex-col'>
                    <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Fashion
                    </Button>
                    </Link>
                    {
                      submenuIndex===0 
                      ?(<IoMdArrowDropupCircle className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openSubmenu(0)}/> )
                      :(<MdArrowDropDownCircle  className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openSubmenu(0)}/> )
                    }

                    
                    {
                        submenuIndex===0 && (<ul className='submenu absolute top-[100%] left-[0%] w-full pl-3  '>
                      <li className='list-none relative '>
                          <Link to="/" className=" link w-full !text-left !justify-start !px-3 transition text-[14px] hover:!text-[#ac5555] "><Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Men
                    </Button>
                    </Link>
                    {
                      innerSubmenuIndex===0 
                      ?(<IoMdArrowDropupCircle className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openInnerSubmenu(0)}/> )
                      :(<MdArrowDropDownCircle  className="absolute top-[10px] right-[15px] cursor-pointer" onClick={()=>openInnerSubmenu(0)}/> )
                    }
                      {
                        innerSubmenuIndex===0 &&(<ul className='inner-submenu absolute top-[100%] left-[0%] w-full pl-3'>
                      <li className='list-none relative mb-1'>
                        <Link to="/"
                        className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Shirts</Link>
                      </li>
                      <li className='list-none relative mb-1'>
                        <Link to="/"
                        className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Shirts</Link>
                      </li>
                      <li className='list-none relative mb-1'>
                        <Link to="/"
                        className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>Shirts</Link>
                      </li>
                    </ul>)
                      }
                      
                      
                      
                    
</li>
</ul>
                        )
                      }
                      
                      
                      </li>
                     

                      </ul>
                      </div>
        </>
    )
}

export default CategoryCollapse;