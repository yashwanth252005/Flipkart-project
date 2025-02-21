import { Box, styled, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { useParams } from 'react-router-dom';


const StarBox = styled(Typography)`
background-color: rgb(19, 148, 103);
color:white;
display: flex;
flex direction: row;
align-items: center;
padding: 0 5px;
line-height: 16px;
font-size: 12px;
font-weight: 550;
`

const ShareBox = styled(Box)(({ theme }) => ({
    textAlign: "right",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: "10px 20px",
    color: "grey",
    fontFamily: "sans-serif",
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const RatingLine = styled(Box)`
display: flex;
flex-direction: row;
align-items: center;
line-height: 10px;
margin-top: 8px;
`;

const Tag = styled(LocalOfferIcon)`
color: rgb(54, 202, 133);
font-size: 17px;
`

const OfferBox = styled(Box)`
& > p{
    font-size: 14px;
    margin-top: 10px;
}
`;

const StyledRow = styled(TableRow)`
vertical-align: baseline;
& > td{
    font-size: 14px;
    border: none;
    padding: 12px 16px;
}
`

const ProductDetails = ({ product }) => {

    const { id } = useParams(); // Get product ID from URL
    const productUrl = `https://flipkart-clone-backend-2ise.onrender.com/product/${id}`;

    useEffect(() => {
        // If product exists, update meta tags dynamically
        document.title = product.title || "Product Details";
    }, [product]);


    const superCoin = "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
    const date = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);

    const starimg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==";
    const fassured = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png";

   const handleShare = () => {
    const productUrl = window.location.href; // Get current product page URL
    const productTitle = product.title.longTitle;
    const productImage = product.url; // Ensure this is the full URL

    if (navigator.share) {
        navigator.share({
            title: productTitle,
            text: `Check it out here:`,
            url: productUrl
        }).catch(error => console.log('Error sharing:', error));
    } else {
        // Fallback to WhatsApp Web with a pre-filled message
        const whatsappMessage = encodeURIComponent(
            `${productTitle}\n${productDescription}\n${productUrl}`
        );
        window.open(`https://wa.me/?text=${whatsappMessage}`, '_blank');
    }
};



    return (
        <>
            <Helmet>
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content={product.title.longTitle} />
                <meta property="og:description" content={product.description} />
                {/* <meta property="og:image" content={product.detailUrl} /> */}
                <meta property="og:url" content={productUrl} />
                <meta property="og:type" content="product" />
            </Helmet>
            <ShareBox onClick={handleShare}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M14.78 5.883L9.032 0v3.362C3.284 4.202.822 8.404 0 12.606 2.053 9.666 4.927 8.32 9.032 8.32v3.446l5.748-5.883z" fill="#c2c2c2" fillRule="evenodd"></path></svg>&nbsp;Share
            </ShareBox>
            <Box><Typography style={{ fontSize: "18px", marginTop: "30px" }}>{product.title.longTitle}</Typography></Box>
            <RatingLine>
                <StarBox><p style={{ margin: "3px 0 0 0" }}>4&nbsp;</p><img src={starimg} alt="star" /></StarBox>
                <Typography style={{color: "#878787", fontSize: "14px"}}>&nbsp;&nbsp;12,34,324 Ratings & 1,234 Reviews&nbsp;&nbsp;</Typography>
                <img src={fassured} alt="fassured" style={{ width: "77px", height: "20px" }} />
            </RatingLine>
            <Typography style={{ margin: "20px 0 0 0", color: "rgb(19, 148, 103)", fontSize: "14px", fontFamily: "sans-serif" }}>Special Price</Typography>
            <Box style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Typography style={{ margin: "2px 2px 0 0", color: "rgb(0, 0, 0)", fontSize: "30px", fontFamily: "sans-serif", fontWeight: "550" }}>₹{product.price.cost}</Typography>
                <Typography style={{ margin: "0 10px", color: "rgb(114, 114, 114)", fontSize: "15px", fontFamily: "sans-serif", textDecoration: "line-through" }} >₹{product.price.mrp}</Typography>
                <Typography style={{ color: "rgb(19, 148, 103)", fontSize: "16px", fontFamily: "sans-serif", fontWeight: "bold" }} >{product.price.discount}&nbsp;off</Typography>
            </Box>
            <Typography >Available offers</Typography>
            <OfferBox>
                <Typography style={{ display: "flex", alignItems: "center" }}>
                    <Tag /><span>&nbsp;&nbsp;<b>Bank Offer</b>&nbsp;5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</span>
                </Typography>
                <Typography style={{ display: "flex", alignItems: "center" }}>
                    <Tag /><span>&nbsp;&nbsp;<b>Bank Offer</b>&nbsp;10% off, up to ₹1500, on Flipkart Axis Bank Credit Card EMI Txns, on orders of ₹5,000 and aboveT&C</span>
                </Typography>
                <Typography style={{ display: "flex", alignItems: "center" }}>
                    <Tag /><span>&nbsp;&nbsp;<b>Bank Offer</b>&nbsp;10% off up to ₹1,200 on HDFC Bank Credit Card EMI on 6 and 9 months tenure. Min Txn Value: ₹5000T&C</span>
                </Typography>
                <Typography style={{ display: "flex", alignItems: "center" }}>
                    <Tag /><span>&nbsp;&nbsp;<b>Special Price</b>&nbsp;Get extra 50% off (price inclusive of cashback/coupon)T&C</span>
                </Typography>
                <Typography style={{ display: "flex", alignItems: "center" }}>
                    <Tag /><span>&nbsp;&nbsp;<b>Bank Offer</b>&nbsp;10% off up to ₹1,500 on HDFC Bank Credit Card EMI on 12months and above tenure. Min Txn Value:₹5000T&C</span>
                </Typography>
            </OfferBox>
            <Table style={{ marginTop: "20px" }}>
                <TableBody>
                    <StyledRow>
                        <TableCell style={{ color: "rgb(114, 114, 114)", fontFamily: "sans-serif" }}>Delivery</TableCell>
                        <TableCell style={{ color: "rgb(94, 93, 93)", fontFamily: "sans-serif" }}><b> Delivery by {date.toDateString()} </b> | ₹40</TableCell>
                    </StyledRow>
                    <StyledRow>
                        <TableCell style={{ color: "rgb(114, 114, 114)", fontFamily: "sans-serif" }}>Seller</TableCell>
                        <Box>
                            <TableCell style={{ color: "rgb(114, 114, 114)", fontFamily: "sans-serif" }}>
                                <Typography style={{ color: "rgb(19, 84, 212)", fontSize: "15px", fontFamily: "sans-serif" }}><b>Flipkart Private Limited</b></Typography>
                                <Typography style={{ color: "rgb(114, 114, 114)", fontSize: "14px", fontFamily: "sans-serif" }}>~ 7 Days Replacement Policy</Typography>
                                <Typography style={{ color: "rgb(114, 114, 114)", fontSize: "14px", fontFamily: "sans-serif" }}>~ GST Invoice Available</Typography>
                                <Typography style={{ color: "rgb(19, 84, 212)", fontSize: "13px", fontFamily: "sans-serif" }} >View more sellers starting from ₹{product.price.cost}</Typography>
                            </TableCell>
                        </Box>
                    </StyledRow>
                    <StyledRow>
                        <TableCell colSpan={2}>
                            <img src={superCoin} alt="FlipkartSuperCoins" style={{ width: 390 }} />
                        </TableCell>
                    </StyledRow>
                    <StyledRow>
                        <TableCell > Description</TableCell>
                        <TableCell style={{ color: "rgb(114, 114, 114)", fontFamily: "sans-serif" }}>{product.description}</TableCell>
                    </StyledRow>
                </TableBody>
            </Table>
        </>
    );
};

export default ProductDetails;
