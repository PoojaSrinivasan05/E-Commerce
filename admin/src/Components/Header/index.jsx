import { Button } from "@mui/material";
import React,{useState} from "react";
import { RiMenu2Fill } from "react-icons/ri";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { FaBell } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

   const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


 const Header =()=>{

  const [anchorMyAcc, setAnchorMyAcc] = useState(null);
  const openMyAcc = Boolean(anchorMyAcc);
  const handleClickMyAcc = (event) => {
    setAnchorMyAcc(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorMyAcc(null);
  };
     return(
  <header className="w-full h-[50px] pl-52 pr-7 bg-[#f1f1f1] flex items-center justify-between">
   <div className="part1">
      <Button className="!w-[40px] h-[50px] !rounded-full !min-w-[40px] text-[rgba(0,0,0,0.8)]">
      <RiMenu2Fill className="text-[18px] text-[rgba(0,0,0,0.8)]" />
      </Button>
   </div>

   <div className="part2 w-[40%] flex items-center justify-end gap-4">
      <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <FaBell /> 
      </StyledBadge>
    </IconButton>
    <div className="relative">
    <div className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer" onClick={handleClickMyAcc}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCMDKvDLrPdTJtG5O4y3W61Wdqg20GwOOpUA&s" className="w-full h-full object-cover" />
    </div>

    <Menu
        anchorEl={anchorMyAcc}
        id="account-menu"
        open={openMyAcc}
        onClose={handleCloseMyAcc}
        onClick={handleCloseMyAcc}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleCloseMyAcc}>
         Profile
        </MenuItem>
        <MenuItem onClick={handleCloseMyAcc}>
           My account
        </MenuItem>
        
      </Menu>
    </div>
    
   </div>
   </header>
     )
}

export default Header;