import { Dialog, DialogTitle, Typography, Box, Button, styled } from "@mui/material";
import generateOrderId from "./orderId";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/actions/CartAction";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import LoginDialog from '../login/LoginDialog';
import { useNavigate } from "react-router-dom";

const LoginButton = styled(Button)`
    margin: 15px;
    padding: 8px 35px;
    background-color: rgb(255, 82, 63);
`;
const StyledButton = styled(Button)`
    margin: 15px;
    padding: 8px 35px;
    background-color: rgb(255, 82, 63);
`;

const PlaceOrder = ({ open, setOpen }) => {
    const { account } = useContext(DataContext);

    const [openLogin, setOpenLogin] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const resetItems = () => {
        dispatch(resetCart());
    };

    const handleOrderedClose = () => {
        setOpen(false);
        resetItems();
        navigate("/");
    };

    const handleUnorderedClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            {account ? (
                <Dialog open={open} onClose={handleOrderedClose} style={{ textAlign: "center" }}>
                    <DialogTitle style={{ backgroundColor: "#2874f0", color: "#fff" }}>
                        Order Status
                    </DialogTitle>
                    <Box style={{ padding: "30px", width: "400px" }}>
                        <Typography style={{ fontSize: "20px", color: "green", fontWeight: "bold" }}>
                            Order Placed Successfully
                        </Typography>
                        <Typography>Order ID: {generateOrderId()}</Typography>
                        <StyledButton variant="contained" onClick={handleOrderedClose}>
                            Continue Shopping
                        </StyledButton>
                    </Box>
                </Dialog>
            ) : (
                    <>
                <Dialog open={open} onClose={handleUnorderedClose} style={{ textAlign: "center" }}>
                    <DialogTitle style={{ backgroundColor: "#2874f0", color: "#fff" }}>
                        Order Status
                    </DialogTitle>
                    <Box style={{ padding: "20px", width: "400px" }}>
                        <Typography style={{ fontSize: "20px", color: "red", fontWeight: "bold" }}>
                            Order Can't be Placed
                        </Typography>
                        <Typography>Please Login to Place Order</Typography>
                            <LoginButton variant="contained" onClick={() => { setOpenLogin(true); handleUnorderedClose(); }}>
                            Login
                        </LoginButton>
                    </Box>
                </Dialog>
                        <LoginDialog open={openLogin} setOpen={setOpenLogin} />
                    </>
            )}
        </Box>
    );
};

export default PlaceOrder;
