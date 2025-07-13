import React,{useState} from "react";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import Progress from "../../Components/ProgressBar";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import SearchBox from "../../Components/SearchBox";
import { useContext } from "react";
import { MyContext } from "../../App"; 




const label = { inputProps: { "aria-label": "Checkbox demo" } };


const columns = [
  { id: "product", label: "PRODUCT", minWidth: 150 },
  { id: "category", label: "CATEGORY", minWidth: 100 },
  {
    id: "subcategory",
    label: "SUB CATEGORY",
    minWidth: 170,
  },
  {
    id: "price",
    label: "PRICE",
    minWidth: 130,
  },
  {
    id: "sales",
    label: "SALES",
    minWidth: 100,
  },
  {
    id: "action",
    label: "ACTION",
    minWidth: 120,
  },
];

export const Products=()=>{

      const[categoryFilterVal,setcategoryFilterVal]= useState('');
      const [rowsPerPage, setRowsPerPage] = React.useState(10);
      const [page, setPage] = React.useState(0);

           const context = useContext(MyContext);
       const handleChangeCatFilter = (event) => {
    setcategoryFilterVal(event.target.value);
  };

  const handleChangePage = (event,newPage) => {
    setPage(newPage);
  };
   const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
    return(
        <>
         <div className="flex items-center justify-between px-2 py-2 mt-3">
                   <h2 className="text-[18px] font-[600]">
                     Products
                     <span className="font-[400] text-[12px]"> (Material UI Table)</span>
                   </h2>
                    <div className="col w-[25%] ml-auto flex items-center justify-end gap-3">
                       <Button className="btn !bg-green-600 btn-sm !text-white flex items-center">Export</Button>
                       <Button className="btn-blue  !text-white btn-sm" onClick ={()=>context.setIsOpenFullScreenPanel({
                        open:true,
                        model:'Add Product'
                       })}>Add Product</Button>
                     </div>
                 </div>

        

          <div className="card my-4 shadow-md sm:rounded-lg bg-white">
            
                 <div className="flex items-center w-full px-5 justify-between ">
                     <div className="col w-[20%]">
                       <h4 className=" font-[600] text-[13px] mb-2 mt-1">Category By</h4>
                       
                  <Select
                  className="w-full"
                  size="small"
                   labelId="demo-simple-select-standard-label"
                   id="demo-simple-select-standard"
                   value={categoryFilterVal}
                   onChange={handleChangeCatFilter}
                   label="Category"
                 >
                   <MenuItem value="">
                     <em>None</em>
                   </MenuItem>
                   <MenuItem value={10}>Men</MenuItem>
                   <MenuItem value={20}>Women</MenuItem>
                   <MenuItem value={30}>Kids</MenuItem>
                 </Select>
                     </div>
                      <div className="col w-[20%] ml-auto">
                       <SearchBox/>
                      </div>
                    
                   </div>
         
                   <br />
         
                 <TableContainer sx={{ maxHeight: 440 }}>
                   <Table stickyHeader aria-label="sticky table">
                     <TableHead>
                       <TableRow>
                         <TableCell>
                           <Checkbox {...label} size="small" />
                         </TableCell>
         
                         {columns.map((column) => (
                           <TableCell
                             key={column.id}
                             align={column.align}
                             style={{ minWidth: column.minWidth }}
                           >
                             {column.label}
                           </TableCell>
                         ))}
                       </TableRow>
                     </TableHead>
                     <TableBody>
                       <TableRow>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <Checkbox {...label} size="small" />
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex items-center gap-4 w-[300px]">
                             <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                               <Link to="/product/45745">
                                 <img
                                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg5eipZ2fMYRlTkAh5vH6H4UP7Uq_4DzSjA&s"
                                   className="w-full group-hover:scale-105 transition-all"
                                 />
                               </Link>
                             </div>
                             <div className="info w-[75%]">
                               <h3 className="font-[600] text-[12px] leading-4 hover:text-primary">
                                 <a to="/product/45745" data-discover="true">
                                   Photo booth anim 8-bit hella, PBR 3 wolf moon beard
                                   Helvetica. Salvia esse nihil, flexitarian Truffaut
                                   synth art party deep v chillwave.
                                 </a>
                               </h3>
                               <span className="text-[12px]">Wooden Chair</span>
                             </div>
                           </div>
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           Furniture
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           seater
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex  gap-1 flex-col">
                             <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                               ₹900
                             </span>
                             <span className="price text-primary font-bold text-[13px]">
                               ₹600
                             </span>
                           </div>
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <p className="text-[14px] w-[100px]">
                             <span className="font-[600]">554 </span>sale
                           </p>
                           <Progress value={40} type="success" />
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex items-center gap-1 ">
                             <Tooltip title="Edit Product" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                               </Button>
                             </Tooltip>
                             <Tooltip title="View Product Details" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                               </Button>
                             </Tooltip>
                             <Tooltip title="Delete Product" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <FaRegTrashAlt className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                               </Button>
                             </Tooltip>
                           </div>
                         </TableCell>
                       </TableRow>
         
                       <TableRow>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <Checkbox {...label} size="small" />
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex items-center gap-4 w-[300px]">
                             <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                               <Link to="/product/45745">
                                 <img
                                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg5eipZ2fMYRlTkAh5vH6H4UP7Uq_4DzSjA&s"
                                   className="w-full group-hover:scale-105 transition-all"
                                 />
                               </Link>
                             </div>
                             <div className="info w-[75%]">
                               <h3 className="font-[600] text-[12px] leading-4 hover:text-primary">
                                 <a to="/product/45745" data-discover="true">
                                   Photo booth anim 8-bit hella, PBR 3 wolf moon beard
                                   Helvetica. Salvia esse nihil, flexitarian Truffaut
                                   synth art party deep v chillwave.
                                 </a>
                               </h3>
                               <span className="text-[12px]">Wooden Chair</span>
                             </div>
                           </div>
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           Furniture
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           seater
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex  gap-1 flex-col">
                             <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                               ₹900
                             </span>
                             <span className="price text-primary font-bold text-[13px]">
                               ₹600
                             </span>
                           </div>
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <p className="text-[14px] w-[100px]">
                             <span className="font-[600]">554 </span>sale
                           </p>
                           <Progress value={40} type="success" />
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex items-center gap-1 ">
                             <Tooltip title="Edit Product" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                               </Button>
                             </Tooltip>
                             <Tooltip title="View Product Details" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                               </Button>
                             </Tooltip>
                             <Tooltip title="Delete Product" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <FaRegTrashAlt className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                               </Button>
                             </Tooltip>
                           </div>
                         </TableCell>
                       </TableRow>
         
                       <TableRow>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <Checkbox {...label} size="small" />
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex items-center gap-4 w-[300px]">
                             <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                               <Link to="/product/45745">
                                 <img
                                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg5eipZ2fMYRlTkAh5vH6H4UP7Uq_4DzSjA&s"
                                   className="w-full group-hover:scale-105 transition-all"
                                 />
                               </Link>
                             </div>
                             <div className="info w-[75%]">
                               <h3 className="font-[600] text-[12px] leading-4 hover:text-primary">
                                 <a to="/product/45745" data-discover="true">
                                   Photo booth anim 8-bit hella, PBR 3 wolf moon beard
                                   Helvetica. Salvia esse nihil, flexitarian Truffaut
                                   synth art party deep v chillwave.
                                 </a>
                               </h3>
                               <span className="text-[12px]">Wooden Chair</span>
                             </div>
                           </div>
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           Furniture
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           seater
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex  gap-1 flex-col">
                             <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                               ₹900
                             </span>
                             <span className="price text-primary font-bold text-[13px]">
                               ₹600
                             </span>
                           </div>
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <p className="text-[14px] w-[100px]">
                             <span className="font-[600]">554 </span>sale
                           </p>
                           <Progress value={40} type="success" />
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex items-center gap-1 ">
                             <Tooltip title="Edit Product" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                               </Button>
                             </Tooltip>
                             <Tooltip title="View Product Details" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                               </Button>
                             </Tooltip>
                             <Tooltip title="Delete Product" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <FaRegTrashAlt className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                               </Button>
                             </Tooltip>
                           </div>
                         </TableCell>
                       </TableRow>

                        <TableRow>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <Checkbox {...label} size="small" />
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex items-center gap-4 w-[300px]">
                             <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                               <Link to="/product/45745">
                                 <img
                                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg5eipZ2fMYRlTkAh5vH6H4UP7Uq_4DzSjA&s"
                                   className="w-full group-hover:scale-105 transition-all"
                                 />
                               </Link>
                             </div>
                             <div className="info w-[75%]">
                               <h3 className="font-[600] text-[12px] leading-4 hover:text-primary">
                                 <a to="/product/45745" data-discover="true">
                                   Photo booth anim 8-bit hella, PBR 3 wolf moon beard
                                   Helvetica. Salvia esse nihil, flexitarian Truffaut
                                   synth art party deep v chillwave.
                                 </a>
                               </h3>
                               <span className="text-[12px]">Wooden Chair</span>
                             </div>
                           </div>
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           Furniture
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           seater
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex  gap-1 flex-col">
                             <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                               ₹900
                             </span>
                             <span className="price text-primary font-bold text-[13px]">
                               ₹600
                             </span>
                           </div>
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <p className="text-[14px] w-[100px]">
                             <span className="font-[600]">554 </span>sale
                           </p>
                           <Progress value={40} type="success" />
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex items-center gap-1 ">
                             <Tooltip title="Edit Product" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                               </Button>
                             </Tooltip>
                             <Tooltip title="View Product Details" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                               </Button>
                             </Tooltip>
                             <Tooltip title="Delete Product" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <FaRegTrashAlt className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                               </Button>
                             </Tooltip>
                           </div>
                         </TableCell>
                       </TableRow>
         
                       <TableRow>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <Checkbox {...label} size="small" />
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex items-center gap-4 w-[300px]">
                             <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                               <Link to="/product/45745">
                                 <img
                                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg5eipZ2fMYRlTkAh5vH6H4UP7Uq_4DzSjA&s"
                                   className="w-full group-hover:scale-105 transition-all"
                                 />
                               </Link>
                             </div>
                             <div className="info w-[75%]">
                               <h3 className="font-[600] text-[12px] leading-4 hover:text-primary">
                                 <a to="/product/45745" data-discover="true">
                                   Photo booth anim 8-bit hella, PBR 3 wolf moon beard
                                   Helvetica. Salvia esse nihil, flexitarian Truffaut
                                   synth art party deep v chillwave.
                                 </a>
                               </h3>
                               <span className="text-[12px]">Wooden Chair</span>
                             </div>
                           </div>
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           Furniture
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           seater
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex  gap-1 flex-col">
                             <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                               ₹900
                             </span>
                             <span className="price text-primary font-bold text-[13px]">
                               ₹600
                             </span>
                           </div>
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <p className="text-[14px] w-[100px]">
                             <span className="font-[600]">554 </span>sale
                           </p>
                           <Progress value={40} type="success" />
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex items-center gap-1 ">
                             <Tooltip title="Edit Product" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                               </Button>
                             </Tooltip>
                             <Tooltip title="View Product Details" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                               </Button>
                             </Tooltip>
                             <Tooltip title="Delete Product" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <FaRegTrashAlt className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                               </Button>
                             </Tooltip>
                           </div>
                         </TableCell>
                       </TableRow>

                        <TableRow>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <Checkbox {...label} size="small" />
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex items-center gap-4 w-[300px]">
                             <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                               <Link to="/product/45745">
                                 <img
                                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg5eipZ2fMYRlTkAh5vH6H4UP7Uq_4DzSjA&s"
                                   className="w-full group-hover:scale-105 transition-all"
                                 />
                               </Link>
                             </div>
                             <div className="info w-[75%]">
                               <h3 className="font-[600] text-[12px] leading-4 hover:text-primary">
                                 <a to="/product/45745" data-discover="true">
                                   Photo booth anim 8-bit hella, PBR 3 wolf moon beard
                                   Helvetica. Salvia esse nihil, flexitarian Truffaut
                                   synth art party deep v chillwave.
                                 </a>
                               </h3>
                               <span className="text-[12px]">Wooden Chair</span>
                             </div>
                           </div>
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           Furniture
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           seater
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex  gap-1 flex-col">
                             <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                               ₹900
                             </span>
                             <span className="price text-primary font-bold text-[13px]">
                               ₹600
                             </span>
                           </div>
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <p className="text-[14px] w-[100px]">
                             <span className="font-[600]">554 </span>sale
                           </p>
                           <Progress value={40} type="success" />
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex items-center gap-1 ">
                             <Tooltip title="Edit Product" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                               </Button>
                             </Tooltip>
                             <Tooltip title="View Product Details" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                               </Button>
                             </Tooltip>
                             <Tooltip title="Delete Product" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <FaRegTrashAlt className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                               </Button>
                             </Tooltip>
                           </div>
                         </TableCell>
                       </TableRow>
         
                       <TableRow>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <Checkbox {...label} size="small" />
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex items-center gap-4 w-[300px]">
                             <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                               <Link to="/product/45745">
                                 <img
                                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg5eipZ2fMYRlTkAh5vH6H4UP7Uq_4DzSjA&s"
                                   className="w-full group-hover:scale-105 transition-all"
                                 />
                               </Link>
                             </div>
                             <div className="info w-[75%]">
                               <h3 className="font-[600] text-[12px] leading-4 hover:text-primary">
                                 <a to="/product/45745" data-discover="true">
                                   Photo booth anim 8-bit hella, PBR 3 wolf moon beard
                                   Helvetica. Salvia esse nihil, flexitarian Truffaut
                                   synth art party deep v chillwave.
                                 </a>
                               </h3>
                               <span className="text-[12px]">Wooden Chair</span>
                             </div>
                           </div>
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           Furniture
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           seater
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex  gap-1 flex-col">
                             <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                               ₹900
                             </span>
                             <span className="price text-primary font-bold text-[13px]">
                               ₹600
                             </span>
                           </div>
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <p className="text-[14px] w-[100px]">
                             <span className="font-[600]">554 </span>sale
                           </p>
                           <Progress value={40} type="success" />
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <div className="flex items-center gap-1 ">
                             <Tooltip title="Edit Product" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                               </Button>
                             </Tooltip>
                             <Tooltip title="View Product Details" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                               </Button>
                             </Tooltip>
                             <Tooltip title="Delete Product" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <FaRegTrashAlt className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                               </Button>
                             </Tooltip>
                           </div>
                         </TableCell>
                       </TableRow>
                     </TableBody>
                   </Table>
                 </TableContainer>
                 <TablePagination
                   rowsPerPageOptions={[10, 25, 100]}
                   component="div"
                   count={10}
                   rowsPerPage={rowsPerPage}
                   page={page}
                   onPageChange={handleChangePage}
                   onRowsPerPageChange={handleChangeRowsPerPage}
                 />
               </div>
               </>
    )
}

export default Products;