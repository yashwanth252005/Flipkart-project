import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Divider, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Wrapper = styled(Box)`
    margin: 8px 15px;
    height: 328px;
    background-color: #FFFFFF;
`;

const Image = styled('img')`
    margin-top: 16px;
    width: 150px;
    height: 165px;
    &:hover {
        transform: scale(1.1);
    }
`;


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Slides = ({ products, title }) => {

    // console.log(products);

    return (
        <Wrapper>
            <Box><Typography style={{ padding: "16px", fontSize: "22px", fontWeight: "bold", fontFamily: "sans-serif" }}>{title}</Typography></Box>
            {/* <compone */}
                <Carousel
                    responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    containerClass="carousel-container"
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3500}
                    transitionDuration={500}
                >
                    {
                    products.map((product, index) => (
                        <Link to={`product/${product.id}`} key={index} style={{ textDecoration: "none", color: "inherit" }}>
                            <Box  style={{ textAlign: "center" }}>
                                <Image src={product.url} alt={product.name} />
                                <Box style={{ marginTop: "10px" }}>
                                    <Typography style={{ fontSize: "14px", fontFamily: "sans-serif", fontWeight: "lighter" }}>{product.title.shortTitle}</Typography>
                                    <Typography style={{ fontSize: "14px", fontFamily: "sans-serif", fontWeight: "bold",color: "green" }}>{product.discount}</Typography>
                                    <Divider style={{ margin: "10px auto", width: "70%", height: "1px", backgroundColor: "#eaeff7" }} />
                                </Box>
                            </Box>
                        </Link>
                        ))
                    }
            </Carousel>
        </Wrapper>
    );
};

export default Slides;