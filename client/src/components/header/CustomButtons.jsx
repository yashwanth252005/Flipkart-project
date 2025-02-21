import { useState, useContext } from 'react';
import { Box, Button, styled, Badge } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Wrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    margin: '0 0 0 0.3%',
    '& > p' : {
        margin: '0 0 0 40px',
        fontSize: '16px',
        [theme.breakpoints.down('md')]: {
            margin: '0 0 0 20px',
        }
    },
}));

const StyledLoginButton = styled(Button)`
    color:rgb(0, 0, 0);
    background:rgb(255, 255, 255); 
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 4px; 
    padding: 1px 6px;
    border-radius: 8px;
    font-size: 16px;
    text-transform: none;
    &:hover{
        background: #2874f0;
        color: #FFFFFF;
    }
`;

const StyledCart = styled(Typography)(({ theme }) => ({
color: 'rgb(0, 0, 0)',
display: 'flex',
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
width:'64px',
    cursor: 'pointer',
[theme.breakpoints.down('md')]: {
    width: '40px',
}
}));

const StyledSeller = styled(Typography)`
color: rgb(0, 0, 0);
cursor: pointer;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 154px;
`;
const StyledMoreButton = styled(Button)`
background: rgb(255, 255, 255);
display: grid;
grid-template-columns: auto;
padding: 1px 6px;
border-radius: 8px;
margin-left: 32px;
`;

const Cart = styled( 'span' )(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const Seller = styled( 'span' )(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const CustomButtons = () => {
    const navigate = useNavigate();
    const navigateToCart = () => {
        navigate('/cart');
    }

    const { cartItems } = useSelector(state => state.cart);

    const [open, setOpen] = React.useState(false);

    const { account, setCurrAccount } = useContext(DataContext);

    const handleOnclick = () => {
        setOpen(true);
    };


    return (
        <Wrapper>
            {
                account ? <Profile account={account} setCurrAccount={setCurrAccount} /> :
                    <StyledLoginButton onClick={handleOnclick}>
                        <Box style={{margin: '8px 3px 0px 0px'}}><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="Login" class="-dOa_b L_FVxe" width="24" height="24"></img></Box>
                        Login
                        <KeyboardArrowDownIcon style={{ display: open ? 'none' : 'block'}} />
                        <KeyboardArrowUpIcon  style={{ display: open ? 'block' : 'none'}}/>
                </StyledLoginButton>
            }
            <StyledCart onClick={navigateToCart}>
                <Badge badgeContent={cartItems?.length} color="primary">
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="Cart" class="_1XmrCc" width="24" height="24"></img></Badge><Cart >Cart</Cart>
        </StyledCart>
        <StyledSeller>
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="Become a Seller" class="_1XmrCc"></img>
            <Seller >Become a Seller</Seller>
        </StyledSeller>
        
        <StyledMoreButton size="Medium">
            <img class="-dOa_b" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" width="24" height="24" alt="Dropdown with more help links"></img>
            </StyledMoreButton>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}   

export default CustomButtons;
// export { }