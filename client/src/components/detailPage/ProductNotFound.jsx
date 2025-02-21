import { Box, Typography, styled } from '@mui/material';


const Image = styled('img')`
    width: 300px;
    display: block;
    margin: auto;
`;


const ProductNotFound = () => {
    const notFound = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/error-no-search-results_2353c5.png"

    return (
        <Box style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Image src={notFound} alt="Product Not Found" />
            <Typography style={{ margin: "20px 0 0 0", fontSize: "30px", fontWeight: "bold", alignItems: "center" }}>Sorry, No Results Found</Typography>
            <Typography style={{ margin: "20px 0 0 0", fontSize: "24px", color: "grey" }}>Please check the spelling or Try searching for something else</Typography>
        </Box>
    )
};

export default ProductNotFound;