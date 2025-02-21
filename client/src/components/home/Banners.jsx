import { Box, styled } from "@mui/material";
import { Fragment } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {BannersData} from '../../constants/data'

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: '250px',
  [theme.breakpoints.down('md')]: {
    height: '150px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '80px',
  }
}));
const Wrapper = styled(Box)`
    margin: 16px 15px 8px 15px;
    padding-bottom: 20px;
    background-color: #FFFFFF;
`

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Banners = () => {
    return (
        <Wrapper>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                showDots={true}
                infinite={true}
                autoPlay= {true}    
                autoPlaySpeed={3000}
                transitionDuration={500}
            >
            {
                BannersData.map(data => (
                    <Image key={data.text} src={data.url} alt={data.text} />
                ))
                }
        </Carousel>
        </Wrapper>
    );
};

export default Banners;