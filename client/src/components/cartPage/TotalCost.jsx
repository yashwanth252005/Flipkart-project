import { Typography, styled, Box, Divider } from "@mui/material";
import { useState, useEffect } from "react";


const StyledTypo = styled(Typography)`
    padding: 20px 15px 8px 20px;
    font-size: 15px;
    font-family: sans-serif;
`;


const TotalCost = ({ cartItems }) => {

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        totalAmount();
    }, [cartItems]);

    const totalAmount = () => {
        let price = 0, discount = 0;
        cartItems.map((item) => {
            price += item.price.cost;
            discount += item.price.mrp - item.price.cost;
        });
        setPrice(price);
        setDiscount(discount);
    }

    const time = new Date(Date.now() + 30 * 60000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
    return (
        <>
            <StyledTypo >
                <span>Price ({cartItems?.length} Item)</span>
                <span style={{ float: "right" }}>₹{price}</span>
            </StyledTypo>
            <StyledTypo >
                <span>Discount</span>
                <span style={{ float: "right", color: "green" }}>-₹{discount}</span>
            </StyledTypo>
            <StyledTypo >
                <span>Coupons for you</span>
                <span style={{ float: "right", fontWeight: "lighter", fontSize: "13px" }}>No Coupons</span>
            </StyledTypo>
            <StyledTypo style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ display: "flex", flexDirection: "column"}}>
                    <span>Delivery Charges</span><span>(if ordered before: { time })</span> 
                </span>
                <span style={{ float: "right", color: "green" }}>Free</span>
            </StyledTypo>
            <Divider />
            <StyledTypo >
                <span style={{ fontWeight: "bold", fontSize: "18px" }}>Total Amount</span>
                <span style={{ float: "right", fontWeight: "bold" }}>₹{price}</span>
            </StyledTypo>
            <StyledTypo style={{ fontSize: "13px", color: "#878787" }}>
                You will save ₹{discount} on this order
            </StyledTypo>
        </>
    )
}
    
export default TotalCost;