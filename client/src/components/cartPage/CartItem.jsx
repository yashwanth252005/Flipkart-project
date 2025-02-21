import { Box, Button, styled, Grid, Typography } from "@mui/material";
import { Addellipsis } from "../../utils/CommonUtils";
import QuantityButtons from "./QuantityButtons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/CartAction";


const Component = styled(Grid)`
    display: flex;
`;

const MainGrid = styled(Grid)`
   border: 1px solid #f2f2f2;
    background-color: #FFFFFF;
    margin-right: 100px;
    maxheight: 60vh;
    overflow-y: auto;
`;

const SubGrid = styled(Grid)(({ theme }) => ({
    padding: '25px 0',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}))

const LeftComponent = styled(Box)`
    margin: 15px 20px 0 20px;
    display: flex;
    flex-direction: column;
`;

const Image = styled('img')({
    height: 130,
    width: 120
})

const SellerText = styled(Typography)`
font-size: 14px;
color:#878787;
display: flex;
margin-top: 15px;
align-items: center;
`

const RemoveButton = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color:rgb(0, 0, 0);
    font-weight: 600;
`


const CartItem = ({ items }) => {
    const fassured = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png";


    const dispatch = useDispatch();
    const removeItem = (id) => {
        dispatch(removeFromCart(id));
    }

    return (
        <MainGrid container style={{ padding: "10px 10px 10px 10px" }}>
        <Component item lg={9} md={9} sm={9} xs={9}>
            <LeftComponent>
                    <Image src={items.url} alt={items.id} />
                    <QuantityButtons items={items} />
            </LeftComponent>
            <Box style={{ margin: "15px" }}>
                <Typography style={{ fontSize: "17px", fontFamily: "sans-serif" }}> {Addellipsis(items.title.longTitle)}</Typography>
                <SellerText Component="span"><span>Flipkart Private Limited</span>
                <img src={fassured} alt="fassured" style={{ width: "73px", marginLeft: "10px", marginTop: "1px" }} />
                </SellerText>
                <Box style={{ display: "flex", flexDirection: "row", alignItems: "center", margin: "15px 0px" }}>
                    <Typography style={{ color: "rgb(0, 0, 0)", fontFamily: "sans-serif", marginRight: "12px", fontWeight: "bold" }}>₹{items.price.cost}</Typography>
                    <Typography style={{ color: "rgb(114, 114, 114)", fontFamily: "sans-serif", textDecoration: "line-through", marginRight: "12px" }} >₹{items.price.mrp}</Typography>
                    <Typography style={{ color: "rgb(19, 148, 103)", fontFamily: "sans-serif", fontWeight: "bold" }} >{items.price.discount}&nbsp;off</Typography>
                </Box>
                <RemoveButton onClick={() => removeItem(items.id)} >Remove</RemoveButton>
            </Box>
            </Component>
            <SubGrid item lg={3} md={3} sm={3} xs={3}>
                <Typography style={{ fontSize: "14px", fontFamily: "sans-serif" }}>Delivery within 2-3 days | <span style={{ color: "rgb(19, 148, 103)" }}>₹40</span></Typography>
                <Typography style={{ fontSize: "14px", fontFamily: "sans-serif", color: "#878787", marginTop: "5px" }}>10 days Replacement Policy</Typography>
            </SubGrid>
        </MainGrid>
    )
}

export default CartItem;