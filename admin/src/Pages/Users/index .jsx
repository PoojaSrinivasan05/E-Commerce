import React,{useState} from "react";
import { FaPhone } from "react-icons/fa6";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import { MdOutlineMarkEmailRead } from "react-icons/md";
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
  { id: "userImg", label: "USER IMAGE", minWidth: 80 },
  { id: "userName", label: "USER NAME", minWidth: 100 },
  {
    id: "userEmail",
    label: "USER EMAIL",
    minWidth: 170,
  },
  {
    id: "userPh",
    label: "USER PHONE NO",
    minWidth: 130,
  },

];

export const Users=()=>{

    
      const [rowsPerPage, setRowsPerPage] = React.useState(10);
      const [page, setPage] = React.useState(0);

           const context = useContext(MyContext);
    

  const handleChangePage = (event,newPage) => {
    setPage(newPage);
  };
   const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
    return(
        <>


        

          <div className="card my-4 shadow-md sm:rounded-lg bg-white">
            
                 <div className="flex items-center w-full px-5 justify-between ">
                     <div className="col w-[40%]">
                        <h2 className="text-[18px] font-[600]">
                     Users List
                     <span className="font-[400] text-[12px]"> (Material UI Table)</span>
                   </h2>
                     </div>
                      <div className="col w-[40%] ml-auto">
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
                                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBSXlY1UTgcbqbMqbQMv5FJ2ZTL5dcFeZA2g&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg5eipZ2fMYRlTkAh5vH6H4UP7Uq_4DzSjA&s"
                                   className="w-full group-hover:scale-105 transition-all"
                                 />
                               </Link>
                             </div>
                             
                           </div>
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           Amera
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <span className="flex items-center gap-2"><MdOutlineMarkEmailRead/>amera@123gmail.com</span>
                         </TableCell>
                         <TableCell style={{ minWidth: columns.minWidth }}>
                           <span className="flex items-center gap-2"><FaPhone/>6794857689</span>
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

export default Users;