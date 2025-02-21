import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";
import Banners from "./Banners";
import NavBar from "./NavBar";
import Loader from "./Loader";
import MidSlide from "./MidSlide";

const Home = () => {
    const { products } = useSelector(state => state.getProducts);
    // console.log(products.products1);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);


    return (
        <>
            <NavBar />
            <Banners />
            {products?.products1 && <MidSlide products={products.products1} title={'Best Of Electronics'} ads={ true } />}
            {products?.products1 && <MidSlide products={products.products2} title={'Beauty, Foods,Toys & more'} ads={ false } />}
            {products?.products1 && <MidSlide products={products.products3} title={'Top Deals'} ads={ false } />}
            {products?.products1 && <MidSlide products={products.products4} title={'Pick Your Styles'} ads={false} />}
        </>
    );
}

export default Home;


