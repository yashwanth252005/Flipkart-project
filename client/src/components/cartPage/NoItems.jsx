import { Box, Typography, styled, Button } from "@mui/material";
import * as React from 'react';
import { DataContext } from '../../context/DataProvider';
import { useContext } from 'react';
import LoginDialog from '../login/LoginDialog';


const StyledBox = styled(Box)(({ theme }) => ({
    width: '100%',
    backgroundColor: '#fff',
    height: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));


const Component = styled(Box)`
display: flex;
flex-direction: column;
align-items: center;
`

const Image = styled('img')({
    width: '250px',
    height: '250px',
})

const PlaceOrderButton = styled(Button)`
margin: 15px;
padding: 8px 35px;
background-color: rgb(255, 82, 63);
`

const NoItems = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    const { account, setCurrAccount } = useContext(DataContext);

    const [open, setOpen] = React.useState(false);

    const handleOnclick = () => {
        setOpen(true);
    };

    return(
        <StyledBox>
            <Component>
                <Image src={imgurl} alt="empty cart" />
                <Typography style={{ fontSize: "25px", fontFamily: "sans-serif" }}>Missing Cart Items</Typography>
                {
                    account ? <Typography style={{ fontSize: "15px", fontFamily: "sans-serif" }}>You have no items in your cart. Add items Fast.</Typography> : (
                        <>
                            <Typography style={{ fontSize: "15px", fontFamily: "sans-serif" }}>Login to see the items you added previously</Typography>
                            <PlaceOrderButton variant="contained" onClick={handleOnclick}>Login</PlaceOrderButton>
                            <LoginDialog open={open} setOpen={setOpen}/>
                        </>
                    )
                }
            </Component>
        </StyledBox>
    )
}

export default NoItems;