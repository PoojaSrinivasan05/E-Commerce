import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoClose } from "react-icons/io5";
import CategoryCollapse from '../../CategoryCollapse';



const CategoryPanel =(props)=>{
  

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
 
  };
  
    const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="CategoryPanel">
        <h3 className="p-3 text-[16px] font-[500] flex item-center justify-between">Shop by Categories<IoClose onClick={toggleDrawer(false)} className='cursor-pointer text-[20px]'/></h3>
        <CategoryCollapse />
                      
                      </Box>
                      
    );
    return (
        <>
      
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
        </>
    )
    
  };

export default CategoryPanel;
