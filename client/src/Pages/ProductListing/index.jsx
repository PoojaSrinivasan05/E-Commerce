import React,{useState} from "react";
import Sidebar from "../../components/Sidebar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../../components/ProductItem";
import ProductItemListView from "../../components/ProductItemListView";
import Button from "@mui/material/Button";
import { IoGridSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from '@mui/material/Pagination';



const ProductListing = () => {
  const [itemView,setItemView]=useState('grid');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="py-5">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            Fashion
          </Link>
        </Breadcrumbs>
      </div>

      <div className=" bg-white p-2 mt-4">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white p-3">
            <Sidebar />
          </div>

          <div className="rightContent w-[80%] py-3">
            <div className="bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex-items-center justify-between">
              <div className="col1 flex items-center  ItemViewActions">
                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#00-] ${itemView === "list"&&'active'}`}
                onClick={()=>setItemView('list')}
                >
                  <IoMenu className="text-[rgba(0,0,0,0.7)]" />
                </Button>
                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#00-]${itemView === "grid"&&'active'}`}
                onClick={()=>setItemView('grid')}>
                  <IoGridSharp className="text-[rgba(0,0,0,0.7)]" />
                </Button>
                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7]">
                  There are 27 products..
                </span>
                <div className="col2 ml-auto flex items-center justify-end gap-3 pr-4">
                  <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7]">
                    Sort By
                  </span>
                  <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="bg-white !text-[14px] !text-[#000] !capitalize border-z !border-[#000]"
      >
        Relevance
      </Button>

                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      list: {
                        "aria-labelledby": "basic-button",
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}className=" !text-[13px] !text-[#000] !capitalize">Name A to Z</MenuItem>
                    <MenuItem onClick={handleClose}className=" !text-[13px] !text-[#000] !capitalize">Name Z to A</MenuItem>
                    <MenuItem onClick={handleClose}className=" !text-[13px] !text-[#000] !capitalize">Price A to Z</MenuItem>
                    <MenuItem onClick={handleClose}className=" !text-[13px] !text-[#000] !capitalize">Price Z to A</MenuItem>
                  </Menu>
                </div>
              </div>
            </div>

            <div className={`grid ${itemView ==='grid'? 'grid-cols-5 md:grid-cols-4':'grid-cols-1 md :grid-cols-1'} gap-3`}>
              {
                itemView === 'grid'?(
                <>
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
                </>
  ):(
                <>
              <ProductItemListView />
              <ProductItemListView />
              <ProductItemListView />
              <ProductItemListView />
              <ProductItemListView />
              <ProductItemListView />
              <ProductItemListView />
              <ProductItemListView />
              <ProductItemListView />
               </>
              )}
              
            </div>
            <div className="flex items-center justify-center mt-">
                  <Pagination count={10} showFirstButton showLastButton />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
