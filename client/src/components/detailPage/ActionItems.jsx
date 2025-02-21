import { Box, styled, Typography } from '@mui/material';
import * as React from 'react';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/CartAction';
import PlaceOrder from '../placeOrder/PlaceOrder';

const LeftContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    minWidth: '48%',
    padding: '0 40px 0 80px',
    [theme.breakpoints.down('md')]: {
        minWidth: '70%',
        padding: '0 10px 0 40px',
    }
}))

const Image = styled('img')(({ theme }) => ({
    width: '95%',
    padding: '18px',
    marginTop: '20px',
    border: "1px solid #f2f2f2",
    [theme.breakpoints.down('md')]: {
        width: '70%',
        // height: '280px',
        margin: ' 20px 50px 20px 50px',
        padding: '15px',
    }
}))

const ButtonBox = styled(Box)(({ theme }) => ({
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '103%',
    [theme.breakpoints.down('md')]: {
        width: '90%',
    }
}))

const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: '16px',
    lineHeight: '15px',
    width: '49%',
    height: '50px',
    [theme.breakpoints.down('md')]: {
        height: '40px',
        fontSize: '12px',
        lineHeight: '16px',
        width: '48%',
    }
}));


const ActionItems = ({ product }) => {

    const [open, setOpen] = React.useState(false);

    const { id } = product;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = React.useState(1);
    const navigateToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

const buyNow = async () => {
    setOpen(true);
};

    
    return (
        <LeftContainer>
            <Image src={product.detailUrl} alt="product" />
            <ButtonBox >
                <StyledButton variant='contained' style={{ backgroundColor: 'rgb(255, 155, 48)' }} onClick={navigateToCart}><ShoppingCartIcon
                />Add to Cart</StyledButton>
                <StyledButton variant='contained' style={{ backgroundColor: 'rgb(255, 82, 63)' }} onClick={buyNow}><FlashOnIcon />Buy Now</StyledButton>
                <PlaceOrder open={open} setOpen={setOpen} />
            </ButtonBox>
        </LeftContainer>
    )
}

export default ActionItems;