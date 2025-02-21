import { useSelector } from "react-redux";
import { Box, styled, Typography, Grid, Button } from "@mui/material";
import CartItem from "./CartItem";
import * as React from 'react';
import TotalCost from "./TotalCost";
import NoItems from "./NoItems";
import PlaceOrder from "../placeOrder/PlaceOrder";

const Container = styled(Grid)`
padding: 30px 130px;
// background-color: #f2f2f2;
`

const PlaceOrderButton = styled(Button)`
margin: 15px;
padding: 8px 35px;
background-color: rgb(255, 82, 63);
`

const PriceDisplay = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    marginLeft: "20px",
    width: "400px",
    [theme.breakpoints.down('md')]: {
        marginTop: "20px",
    }
}))

const Header = styled(Box)`
padding: 15px 24px;
background-color: #fff;
border-bottom: 1px solid #f2f2f2;
`
const PriceText = styled(Typography)`
font-size: 16px;
color:rgb(114, 114, 114);
padding: 10px 24px 20px 24px;
border-bottom: 2px solid #f2f2f2;
`


const Cart = () => {

    
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const { cartItems } = useSelector(state => state.cart);

    return (
    <>
        { cartItems.length ?
            <Container container>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <Header>
                        <Typography>My Cart ({cartItems.length})</Typography>
                    </Header>
                    <Box style={{ overflow: "scroll", maxHeight: "59vh" }}>
                        {
                            cartItems.map((item) => (
                                <CartItem items={item} key={item.id} />
                            ))
                        }
                    </Box>
                    <Box style={{ display: "flex", justifyContent: "flex-end", backgroundColor: "#fff", boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)"}}>
                            <PlaceOrderButton variant="contained" onClick={handleClick}>Place Order</PlaceOrderButton>
                            <PlaceOrder open={open} setOpen={setOpen} />
                    </Box>
                </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <PriceDisplay >
                            <PriceText variant="subtitle1">PRICE DETAILS</PriceText>
                            <TotalCost cartItems={cartItems}/>
                        </PriceDisplay>
                    </Grid>
            </Container>
                :
            <Box><NoItems /></Box>
        }
    </>  
    )
}

export default Cart;