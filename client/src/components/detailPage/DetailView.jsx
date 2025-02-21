import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productAction";
import { Box, styled, Grid, Typography } from "@mui/material";
import ActionItems from "./ActionItems";
import ProductDetails from "./ProductDetails";
import Loader from "../home/Loader";
import ProductNotFound from "./ProductNotFound";

const Component = styled(Box)`
    margin: 80px 75px  auto 75px;
    background-color:rgb(255, 255, 255);
`;

const Container = styled(Grid)`
// display: flex;
// flex-direction: row;
`
const RightContainer = styled(Grid)(({ theme }) => ({
    backgroundColor: 'rgb(255, 255, 255)',
    padding: '0 5px',
    [theme.breakpoints.down('md')]: {
        marginLeft: '25px',
    }
}))

const Spinner = styled('div')(({ theme }) => ({
    width: '20rem',
    height: '20rem',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // [theme.breakpoints.down('md')]: {
    //     width: '2rem',
    //     height: '2rem',
    // }
}))


const DetailView = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const { loading, product, error } = useSelector(state => state.getProductDetails);

    useEffect(() => {
        // if (product && id !== product.id) {
            dispatch(getProductDetails(id));
        // }
    }, [ dispatch, id ]);

    return (
        <Component>
            {
                 loading ? <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.06)", height: "90vh", width: "100%" }}><Loader /></Box> :
                
                    (
                        error ? <Box style={{backgroundColor: "rgb(255, 255, 255)", height: "60vh", width: "100%", alignItems: "center", justifyContent: "center", display: "flex"}}><ProductNotFound /></Box> :
                    
                        product && Object.keys(product).length &&
                        <Container container>
                        <Grid item lg={5} md={5} sm={12} xs={12}>
                        <ActionItems product={product} />
                        </Grid>
                        <RightContainer item lg={7} md={7} sm={12} xs={12}>
                        <ProductDetails product={product} />
                        </RightContainer>
                        </Container>
                    )
            }
        </Component>
    )
}


export default DetailView;