import React,{useState} from "react";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
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
import Chip from '@mui/material/Chip';
import { useContext } from "react";
import { MyContext } from "../../App"; 




const label = { inputProps: { "aria-label": "Checkbox demo" } };


const columns = [
  { id: "image", label: "CATEGORY IMAGE", minWidth: 250 },
  { id: "catName", label: "CATEGORY NAME", minWidth: 250 },
  { id: "subCatName", label: "SUB CATEGORY IMAGE", minWidth: 400 },
  { id: "action", label: "ACTION", minWidth: 100 }
];

export const SubCategoryList=()=>{

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
                     Sub Category List
                     <span className="font-[400] text-[12px]"> (Material UI Table)</span>
                   </h2>
                    <div className="col w-[30%] ml-auto flex items-center justify-end gap-3">
                       <Button className="btn !bg-green-600 btn-sm !text-white flex items-center">Export</Button>
                       <Button className="btn-blue  !text-white btn-sm" onClick ={()=>context.setIsOpenFullScreenPanel({
                        open:true,
                        model:'Add  New Sub Category'
                       })}>Add Sub New Category</Button>
                     </div>
                 </div>

        

          <div className="card my-4 shadow-md sm:rounded-lg bg-white">
         
                   <br />
         
                 <TableContainer sx={{ maxHeight: 440 }}>
                   <Table stickyHeader aria-label="sticky table">
                     <TableHead>
                       <TableRow>
                         <TableCell width={60}>
                           <Checkbox {...label} size="small" />
                         </TableCell>
         
                         {columns.map((column) => (
                           <TableCell
                           width={column.minWidth }
                             key={column.id}
                             align={column.align}
                           >
                             {column.label}
                           </TableCell>
                         ))}
                       </TableRow>
                     </TableHead>
                     <TableBody>
                       <TableRow>
                         <TableCell>
                           <Checkbox {...label} size="small" />
                         </TableCell>
                         <TableCell width={100}>
                           <div className="flex items-center gap-4 w-[80px]">
                             <div className="img w-full rounded-md overflow-hidden group">
                               <Link to="/product/45745">
                                 <img
                                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLrFC9dsJ4q660AkKdaei8DTWUDEm7RwjSg&s"
                                   className="w-full group-hover:scale-105 transition-all"
                                 />
                               </Link>
                               </div>
                           </div>
                         </TableCell>
                         <TableCell>
                         <Chip label="Fashion" />
                         </TableCell>
                          <TableCell>
                          <div className="flex items-center gap-3">
                             <Chip label="Men" color="primary"/>
                             <Chip label="Women" color="primary" />
                             <Chip label="Kids" color="primary" />
                          </div>
                         </TableCell>
                         <TableCell width={100}>
                           <div className="flex items-center gap-1 ">
                             <Tooltip title="Edit Product" placement="top-start">
                               <Button className="!w-[35px] !h-[35px]  !border !border-[rgba(0,0,0,0.4)] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                                 <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
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

export default SubCategoryList;
