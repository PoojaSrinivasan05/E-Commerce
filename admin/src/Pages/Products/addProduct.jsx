import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import UploadBox from "../../Components/UploadBox";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoClose } from "react-icons/io5";

const AddProduct = () => {
  const [productCat, setProductCat] = React.useState("");
  const [productSubCat, setProductSubCat] = React.useState("");
  const [productFeatured, setProductFeatured] = React.useState("");
  const [productRams, setProductRams] = React.useState("");
  const [productWeight, setProductWeight] = React.useState("");
  const [productSize, setProductSize] = React.useState("");

  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };

  const handleChangeProductSubCat = (event) => {
    setProductSubCat(event.target.value);
  };
  const handleChangeProductFeatured = (event) => {
    setProductFeatured(event.target.value);
  };
  const handleChangeProductRams = (event) => {
    setProductRams(event.target.value);
  };
  const handleChangeProductWeight = (event) => {
    setProductWeight(event.target.value);
  };

  const handleChangeProductSize = (event) => {
    setProductSize(event.target.value);
  };

  return (
    <section className="p-5bg-gray-50">
      <form className="form py-3 p-8">
        <div className="grid grid-cols-1 mb-3">
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Name
            </h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline:none focus:border-rgba[(0,0,0,0.4)] rounded-smp-3 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 mb-3">
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Description
            </h3>
            <textarea
              type="text"
              className="w-full h-[110px] border border-[rgba(0,0,0,0.2)] focus:outline:none focus:border-rgba[(0,0,0,0.4)] rounded-smp-3 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 mb-3 gap-4">
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Category
            </h3>
            <Select
              labelId="demo-simple-select-label"
              id="productCatDrop"
              size="small"
              className="w-full"
              value={productCat}
              label="Category"
              onChange={handleChangeProductCat}
            >
              <MenuItem value={""}>None</MenuItem>
              <MenuItem value={10}>Fashion</MenuItem>
              <MenuItem value={20}>Beauty</MenuItem>
              <MenuItem value={30}>Wellness</MenuItem>
            </Select>
          </div>

          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Sub Category
            </h3>
            <Select
              labelId="demo-simple-select-label"
              id="productCatDrop"
              size="small"
              className="w-full"
              value={productSubCat}
              label="Category"
              onChange={handleChangeProductSubCat}
            >
              <MenuItem value={""}>None</MenuItem>
              <MenuItem value={10}>Men</MenuItem>
              <MenuItem value={20}>Women</MenuItem>
              <MenuItem value={30}>Kids</MenuItem>
            </Select>
          </div>

          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Price
            </h3>
            <input
              type="number"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline:none focus:border-rgba[(0,0,0,0.4)] rounded-smp-3 text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>

          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Old Price
            </h3>
            <input
              type="number"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline:none focus:border-rgba[(0,0,0,0.4)] rounded-smp-3 text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 mb-3 gap-4">
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Category
            </h3>
            <Select
              labelId="demo-simple-select-label"
              id="productCatDrop"
              size="small"
              className="w-full"
              value={productFeatured}
              label="Category"
              onChange={handleChangeProductFeatured}
            >
              <MenuItem value={10}>True</MenuItem>
              <MenuItem value={20}>False</MenuItem>
            </Select>
          </div>
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Stock
            </h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline:none focus:border-rgba[(0,0,0,0.4)] rounded-smp-3 text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Brand
            </h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline:none focus:border-rgba[(0,0,0,0.4)] rounded-smp-3 text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>

          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Discount
            </h3>
            <input
              type="number"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline:none focus:border-rgba[(0,0,0,0.4)] rounded-smp-3 text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 mb-3 gap-4">
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product RAMS
            </h3>
            <Select
              labelId="demo-simple-select-label"
              id="productCatDrop"
              size="small"
              className="w-full"
              value={productRams}
              label="Category"
              onChange={handleChangeProductRams}
            >
              <MenuItem value={"4GB"}>4GB</MenuItem>
              <MenuItem value={"6GB"}>6GB</MenuItem>
              <MenuItem value={"8GB"}>8GB</MenuItem>
            </Select>
          </div>

          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Weight
            </h3>
            <Select
              labelId="demo-simple-select-label"
              id="productCatDrop"
              size="small"
              className="w-full"
              value={productWeight}
              label="Category"
              onChange={handleChangeProductWeight}
            >
              <MenuItem value={""}>None</MenuItem>
              <MenuItem value={10}>2KG</MenuItem>
              <MenuItem value={20}>4KG</MenuItem>
              <MenuItem value={30}>5KG</MenuItem>
            </Select>
          </div>

          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Size
            </h3>
            <Select
              labelId="demo-simple-select-label"
              id="productCatDrop"
              size="small"
              className="w-full"
              value={productSize}
              label="Category"
              onChange={handleChangeProductSize}
            >
              <MenuItem value={""}>None</MenuItem>
              <MenuItem value={"S"}>S</MenuItem>
              <MenuItem value={"M"}>M</MenuItem>
              <MenuItem value={"L"}>L</MenuItem>
            </Select>
          </div>

          <div className="col">
            <h3 className="text-[14px] font-[500] mb-3 text-black">
              Product Rating{" "}
            </h3>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </div>
        </div>

        <div className="col w-full p-5 px--0">
          <h3 className="font-[700] text-[18px]">Media & Images</h3>

          <div className="grid grid-cols-7 gap-4">
            <div className="uploadBoxWrapper relative">
              <span className="absolute w-[25px] h-[25px] rounded-full overflow-hidden bg-red-700 flex items-center justify-center -top-[20px] right-0 z-50">
                <IoClose className="text-white text-[20px]" />
              </span>
              <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-ponter hover:bg-gray-200 flex items-center justify-center flex-col relative">
                <LazyLoadImage
                  className="w-full h-full object-cover"
                  alt={"image"}
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                  src={
                    "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
                  }
                />
              </div>
            </div>
            <UploadBox multiple={true} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
