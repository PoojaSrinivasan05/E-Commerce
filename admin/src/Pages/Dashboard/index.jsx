import React, { useState,useContext } from "react";
import DashboardBoxes from "../../Components/DasboardBoxes";
import { FaPlus } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "@mui/material";
import Badge from "../../Components/Badge";
import { FaAngleUp } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Progress from "../../Components/ProgressBar";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import Pagination from "@mui/material/Pagination";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {MyContext} from "../../App";

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

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
];

const Dashboard = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);

  const isShowOrderedProduct = (index) => {
    if (isOpenOrderedProduct === index) {
      setIsOpenOrderedProduct(null);
    } else {
      setIsOpenOrderedProduct(index);
    }
  };
  

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const[categoryFilterVal,setcategoryFilterVal]= React.useState('');
  const[chart1Data,setChart1Data]=useState([
  {
    name: 'JAN',
    TotalUsers: 4000,
    TotalSales: 2400,
    amt: 2400,
  },
  {
    name: 'FEB',
    TotalUsers: 3000,
    TotalSales: 1398,
    amt: 2210,
  },
  {
    name: 'MAR',
    TotalUsers: 2000,
    TotalSales: 9800,
    amt: 2290,
  },
  {
    name: 'APR',
    TotalUsers: 2780,
    TotalSales: 3908,
    amt: 2000,
  },
  {
    name: 'MAY',
    TotalUsers: 1890,
    TotalSales: 4800,
    amt: 2181,
  },
  {
    name: 'JUN',
    TotalUsers: 2390,
    TotalSales: 3800,
    amt: 2500,
  },
  {
    name: 'JUL',
    TotalUsers: 3490,
    TotalSales: 4300,
    amt: 2100,
  },
]);
  
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
   const context = useContext(MyContext);


  return (
    <>
      <div className="w-full py-2 bg-[#1faff] px-5 border border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between rounded-md">
        <div className="info">
          <h1 className="text-[35px] font-bold leading-10 mb-3">
            Good Morning,
            <br />
            Pooja
          </h1>
          <p>
            Here's Whats happening on your store today. See the statistics at
            once.
          </p>
          <br />
          <Button className="btn-blue !capitalize" onClick={()=>context.setIsOpenFullScreenPanel({
                              open:true,
                              model:"Add Product"
                             })}>
            <FaPlus /> Add Product
          </Button>
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5vHj-vSbynrZTu_jmsQC2Tuyb3E-UYOTNRA&s"
          className="w-[250px]"
        />
      </div>
      <DashboardBoxes />

      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">
            Products
            <span className="font-[400] text-[12px]">
              (Tailwind CSS Table)
            </span>
          </h2>
        </div>

  


        <div className="flex items-center w-full pl-5 justify-between pr-5">
            <div className="col w-[20%]">
              <h4 className=" font-[600] text-[13px] mb-2">Category By</h4>
              
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
            <div className="col w-[25%] ml-auto flex items-center gap-3">
              <Button className="btn !bg-green-600 btn-sm !text-white flex items-center">Export</Button>
              <Button className="btn-blue  !text-white btn-sm" onClick={()=>context.setIsOpenFullScreenPanel({
                              open:true,
                              model:"Add Product"
                             })}>Add Product</Button>
            </div>
          </div>

          <br />

        <div class="relative overflow-x-auto mt-5 pb-5">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 pr-0 py-3">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </th>
                <th scope="col" class="px-0 py-3 whitespace-nowrap">
                  Product
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Category
                </th>

                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Sub Category
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Price
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Sales
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 pr-2 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                <td className="px-0 py-2">
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
                        <Link to="/product/45745">
                          Photo booth anim 8-bit hella, PBR 3 wolf moon beard
                          Helvetica. Salvia esse nihil, flexitarian Truffaut
                          synth art party deep v chillwave.
                        </Link>
                      </h3>
                      <span className="text-[12px]">Wooden Chair</span>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-2">Furniture</td>

                <td className="px-6 py-2">seater</td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                      ₹900
                    </span>
                    <span className="price text-primary font-bold text-[13px]">
                      ₹600
                    </span>
                  </div>
                </td>

                <td className="px-2 py-2">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">554</span>sale
                  </p>
                  <Progress value={40} type="warning" />
                </td>

                <td className="px-6 py-2">
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
                </td>
              </tr>

              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 pr-2 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                <td className="px-0 py-2">
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
                        <Link to="/product/45745">
                          Photo booth anim 8-bit hella, PBR 3 wolf moon beard
                          Helvetica. Salvia esse nihil, flexitarian Truffaut
                          synth art party deep v chillwave.
                        </Link>
                      </h3>
                      <span className="text-[12px]">Wooden Chair</span>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-2">Furniture</td>

                <td className="px-6 py-2">seater</td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                      ₹900
                    </span>
                    <span className="price text-primary font-bold text-[13px]">
                      ₹600
                    </span>
                  </div>
                </td>

                <td className="px-2 py-2">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">554</span>sale
                  </p>
                  <Progress value={40} type="warning" />
                </td>

                <td className="px-6 py-2">
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
                </td>
              </tr>

              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 pr-2 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                <td className="px-0 py-2">
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
                        <Link to="/product/45745">
                          Photo booth anim 8-bit hella, PBR 3 wolf moon beard
                          Helvetica. Salvia esse nihil, flexitarian Truffaut
                          synth art party deep v chillwave.
                        </Link>
                      </h3>
                      <span className="text-[12px]">Wooden Chair</span>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-2">Furniture</td>

                <td className="px-6 py-2">seater</td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                      ₹900
                    </span>
                    <span className="price text-primary font-bold text-[13px]">
                      ₹600
                    </span>
                  </div>
                </td>

                <td className="px-2 py-2">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">554</span>sale
                  </p>
                  <Progress value={40} type="warning" />
                </td>

                <td className="px-6 py-2">
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
                </td>
              </tr>

              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 pr-2 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                <td className="px-0 py-2">
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
                        <Link to="/product/45745">
                          Photo booth anim 8-bit hella, PBR 3 wolf moon beard
                          Helvetica. Salvia esse nihil, flexitarian Truffaut
                          synth art party deep v chillwave.
                        </Link>
                      </h3>
                      <span className="text-[12px]">Wooden Chair</span>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-2">Furniture</td>

                <td className="px-6 py-2">seater</td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                      ₹900
                    </span>
                    <span className="price text-primary font-bold text-[13px]">
                      ₹600
                    </span>
                  </div>
                </td>

                <td className="px-2 py-2">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">554</span>sale
                  </p>
                  <Progress value={40} type="warning" />
                </td>

                <td className="px-6 py-2">
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
                </td>
              </tr>

              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 pr-2 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                <td className="px-0 py-2">
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
                        <Link to="/product/45745">
                          Photo booth anim 8-bit hella, PBR 3 wolf moon beard
                          Helvetica. Salvia esse nihil, flexitarian Truffaut
                          synth art party deep v chillwave.
                        </Link>
                      </h3>
                      <span className="text-[12px]">Wooden Chair</span>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-2">Furniture</td>

                <td className="px-6 py-2">seater</td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-1 flex-col">
                    <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
                      ₹900
                    </span>
                    <span className="price text-primary font-bold text-[13px]">
                      ₹600
                    </span>
                  </div>
                </td>

                <td className="px-2 py-2">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">554</span>sale
                  </p>
                  <Progress value={40} type="warning" />
                </td>

                <td className="px-6 py-2">
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
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-end pt-4 pb-4 px-4">
          <Pagination count={100} color="primary" />
        </div>
      </div>

      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">
            Products
            <span className="font-[400] text-[12px]"> (Material UI Table)</span>
          </h2>
        </div>
        <div className="flex items-center w-full pl-5 justify-between pr-5">
            <div className="col w-[20%]">
              <h4 className=" font-[600] text-[13px] mb-2">Category By</h4>
              
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
            <div className="col w-[25%] ml-auto flex items-center gap-3">
              <Button className="btn !bg-green-600 btn-sm !text-white flex items-center">Export</Button>
              <Button className="btn-blue  !text-white btn-sm" onClick={()=>context.setIsOpenFullScreenPanel({
                              open:true,
                              model:"Add Product"
                             })}>Add Product</Button>
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

      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">Recent Orders</h2>
        </div>

        <div class="relative overflow-x-auto mt-5">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3"></th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Order Id
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Payment Id
                </th>

                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Phone Number
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Address
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Pin Code
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Total Amount
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Email
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  User Id
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Order Status
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td className="px-py-4 font-[500]">
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full  !bg-[f1f1f1]"
                    onClick={() => isShowOrderedProduct(0)}
                  >
                    {isOpenOrderedProduct === 0 ? (
                      <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                </td>
                <td class="px-6 py-4 font-[500]">
                  <span className="text-primary font-[500]">
                    345237d5235d36456
                  </span>
                </td>

                <td class="px-6 py-4 font-[500]">
                  <span className="text-primary font-[500]">
                    pay_PTP6avhghsga98797
                  </span>
                </td>

                <td class="px-6 py-4 font-[500] whitespace-nowrap">Pooja</td>
                <td class="px-6 py-4 font-[500]">865786989</td>
                <td class="px-6 py-4 font-[500]">
                  <span className="block w-[400px]">
                    Y 56 NSJDG SFTY ,njgyd ng,khdjjdg{" "}
                  </span>
                </td>
                <td class="px-6 py-4 font-[500]">463648</td>

                <td class="px-6 py-4 font-[500]">7800</td>
                <td class="px-6 py-4 font-[500]">hdgfyudsbchdb@gamil.com</td>
                <td class="px-6 py-4 font-[500]">
                  <span className="text-primary">345237d5235d36456</span>
                </td>
                <td class="px-6 py-4 font-[500]">
                  <Badge status="confirm" />
                </td>
                <td class="px-6 py-4 font-[500] whitespace-nowrap">2025-4-5</td>
              </tr>
              {isOpenOrderedProduct === 0 && (
                <tr>
                  <td className=" pl-20" colSpan="6">
                    <div class="relative overflow-x-auto ">
                      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Product Id
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Product Title
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Image
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Quantity
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Price
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Sub Total
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td class="px-6 py-4 font-[500]">
                              <span className="text-gray-600">
                                345237d5235d36456
                              </span>
                            </td>

                            <td class="px-6 py-4 font-[500]">
                              Apple Smart Watch
                            </td>
                            <td class="px-6 py-4 font-[500]">
                              <img
                                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-medium_default/brown-bear-printed-sweater.jpg"
                                className="w-[40px] h-[40px] object-cover rounded-md"
                              />
                            </td>
                            <td class="px-6 py-4 font-[500] whitespace-nowrap">
                              1
                            </td>
                            <td class="px-6 py-4 font-[500]">15,000</td>
                            <td class="px-6 py-4 font-[500]">15,000</td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td class="px-6 py-4 font-[500]">
                              <span className="text-gray-600">
                                345237d5235d36456
                              </span>
                            </td>

                            <td class="px-6 py-4 font-[500]">
                              Apple Smart Watch
                            </td>
                            <td class="px-6 py-4 font-[500]">
                              <img
                                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-medium_default/brown-bear-printed-sweater.jpg"
                                className="w-[40px] h-[40px] object-cover rounded-md"
                              />
                            </td>
                            <td class="px-6 py-4 font-[500] whitespace-nowrap">
                              1
                            </td>
                            <td class="px-6 py-4 font-[500]">15,000</td>
                            <td class="px-6 py-4 font-[500]">15,000</td>
                          </tr>

                          <tr>
                            <td className="bg-[#ccc]" colSpan="12"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}

              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td className="px-py-4 font-[500]">
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full  !bg-[f1f1f1]"
                    onClick={() => isShowOrderedProduct(1)}
                  >
                    {isOpenOrderedProduct === 1 ? (
                      <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                </td>
                <td class="px-6 py-4 font-[500]">
                  <span className="text-primary font-[500]">
                    345237d5235d36456
                  </span>
                </td>

                <td class="px-6 py-4 font-[500]">
                  <span className="text-primary font-[500]">
                    pay_PTP6avhghsga98797
                  </span>
                </td>

                <td class="px-6 py-4 font-[500] whitespace-nowrap">Pooja</td>
                <td class="px-6 py-4 font-[500]">865786989</td>
                <td class="px-6 py-4 font-[500]">
                  <span className="block w-[400px]">
                    Y 56 NSJDG SFTY ,njgyd ng,khdjjdg{" "}
                  </span>
                </td>
                <td class="px-6 py-4 font-[500]">463648</td>

                <td class="px-6 py-4 font-[500]">7800</td>
                <td class="px-6 py-4 font-[500]">hdgfyudsbchdb@gamil.com</td>
                <td class="px-6 py-4 font-[500]">
                  <span className="text-primary ">345237d5235d36456</span>
                </td>
                <td class="px-6 py-4 font-[500]">
                  <Badge status="confirm" />
                </td>
                <td class="px-6 py-4 font-[500] whitespace-nowrap">2025-4-5</td>
              </tr>
              {isOpenOrderedProduct === 1 && (
                <tr>
                  <td className=" pl-20" colSpan="6">
                    <div class="relative overflow-x-auto ">
                      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Product Id
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Product Title
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Image
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Quantity
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Price
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Sub Total
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td class="px-6 py-4 font-[500]">
                              <span className="text-gray-600">
                                345237d5235d36456
                              </span>
                            </td>

                            <td class="px-6 py-4 font-[500]">
                              Apple Smart Watch
                            </td>
                            <td class="px-6 py-4 font-[500]">
                              <img
                                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-medium_default/brown-bear-printed-sweater.jpg"
                                className="w-[40px] h-[40px] object-cover rounded-md"
                              />
                            </td>
                            <td class="px-6 py-4 font-[500] whitespace-nowrap">
                              1
                            </td>
                            <td class="px-6 py-4 font-[500]">15,000</td>
                            <td class="px-6 py-4 font-[500]">15,000</td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td class="px-6 py-4 font-[500]">
                              <span className="text-gray-600">
                                345237d5235d36456
                              </span>
                            </td>

                            <td class="px-6 py-4 font-[500]">
                              Apple Smart Watch
                            </td>
                            <td class="px-6 py-4 font-[500]">
                              <img
                                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-medium_default/brown-bear-printed-sweater.jpg"
                                className="w-[40px] h-[40px] object-cover rounded-md"
                              />
                            </td>
                            <td class="px-6 py-4 font-[500] whitespace-nowrap">
                              1
                            </td>
                            <td class="px-6 py-4 font-[500]">15,000</td>
                            <td class="px-6 py-4 font-[500]">15,000</td>
                          </tr>

                          <tr>
                            <td className="bg-[#ccc]" colSpan="12"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">Total Users & Total Sales</h2>
        </div>

        <div  className="flex items-center gap-5 px-5 py-5 pt-1">
          <span className="block w-[8px] h-[8px] rounded-full bg-green-600"></span>
          Total Users
        

         <span  className="flex items-center gap-1 text-[15px]">
          <span className="block w-[8px] h-[8px] rounded-full bg-primary"></span>
          </span>
          Total Sales
        </div>
       
        <LineChart
          width={1000}
          height={500}
          data={chart1Data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="none" />
          <XAxis dataKey="name"tick={{fontSize:12}} />
          <YAxis tick={{fontSize:12}} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="TotalSales" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="TotalUsers" stroke="#82ca9d"  strokeWidth={3} />
         
        </LineChart>
      </div>

    </>
  );
};

export default Dashboard;
