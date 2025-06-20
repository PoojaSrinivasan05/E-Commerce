import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaHeartCirclePlus, FaHeartCircleCheck, FaUser } from "react-icons/fa6";
import { Button, Tooltip, Menu, MenuItem, Divider } from "@mui/material";
import Navigation from "./Navigation";
import { MyContext } from "../../App";
import { IoBagCheck } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const context = useContext(MyContext);

  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[1px] border-gray-300 border-b-[1px]">
        <div className="container">
          <div className="flex items-centre justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[14px] font-[400]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>
            <div className="clo2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[13px] link font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[13px] link font-[500] transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-4 border-b-[1px] border-gray-300 ">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[10%] ">
            <Link to={"/"}>
              <img src="/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="col2 w-[40%]">
            <Search />
          </div>
          <div className="col3 w-[35%] flex items-center pl-7">
            <ul className="flex items-center gap-3 w-full">
              {context.isLogin === false ? (
                <li className="list-none">
                  <Link
                    to="/login"
                    className="link transition text-[15px] font-[500]"
                  >
                    Login
                  </Link>
                  /
                  <Link
                    to="/register"
                    className="link transition text-[15px] font-[500]"
                  >
                    Register
                  </Link>
                </li>
              ) : (
                <>
                  <Button
                    className="!text-[#000] myAccountWrap flex items-center gap-3 cursor-pointer"
                    onClick={handleClick}
                  >
                    <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]">
                      <FaUser className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    </Button>
                    <div className="info flex flex-col">
                      <h4 className="leading-3 text-[14px] text-[rgba(0,0,0,0.6)] mb-0 capitalize text-left">
                        Pooja
                      </h4>
                      <span className="text-[13px] text-[rgba(0,0,0,0.6)] capitalize text-left">
                        poojasri54@gmail.com
                      </span>
                    </div>
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <Link to="/my-account" className="w-full block">
                    <MenuItem onClick={handleClose} className="flex gap-2 !py-2">
                      <FaUser className="text-[15px]" /> <span className="text-[13px]">My Account</span>
                    </MenuItem>
                    </Link>
                    <Link to="/my-orders" className="w-full block">
                    <MenuItem onClick={handleClose}className="flex gap-2 !py-2">
                      <IoBagCheck className="text-[15px]" /> <span className="text-[13px]">Orders</span>
                    </MenuItem>
                    </Link>
                    <Link to="/my-list" className="w-full block">
                    <MenuItem onClick={handleClose}className="flex gap-2 !py-2">
                      <FaHeartCircleCheck className="text-[15px]"/> <span className="text-[13px]">My List</span>
                    </MenuItem>
                    </Link>
                    <MenuItem onClick={handleClose}className="flex gap-2 !py-2">
                      <TbLogout className="text-[15px]" /><span className="text-[13px]"> Logout</span>
                    </MenuItem>
                  </Menu>
                </>
              )}
              <li>
                <Tooltip title="Cart">
                  <IconButton
                    aria-label="cart"
                    onClick={() => context.setOpenCartPanel(true)}
                  >
                    <StyledBadge badgeContent={4} color="secondary">
                      <PiShoppingCartSimpleFill />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Wishlist">
                  <IconButton aria-label="wishlist">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaHeartCirclePlus />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
