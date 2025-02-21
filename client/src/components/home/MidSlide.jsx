import Slides from "./Slides";
import { Box, styled } from "@mui/material";

const Component = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
`;

const SlideComponent = styled(Box)(({ theme, ads }) => ({
    width: ads ? "83%" : "100%", // Apply width based on `ads` prop
    transition: "width 0.3s ease", // Smooth transition
    [theme.breakpoints.down("md")]: {
        width: "100%", // Make it full-width on medium screens
    },
}));

const AdsComponent = styled(Box)(({ theme, ads }) => ({
    width: "16%",
    display: ads ? "block" : "none", 
    [theme.breakpoints.down('md')]: {
        display: "none",
    }
}));

const Image = styled("img")`
    height: 328px;
    width: 100%;
    margin-top: 9px;
`;

const MidSlide = ({ products, title, ads }) => {
    const advertiseUrl = "https://rukminim1.flixcart.com/fk-p-flap/530/810/image/ec9bba198c534edb.jpg?q=20";

    return (
        <Component>
            <SlideComponent ads={ads}>
                <Slides products={products} title={title} />
            </SlideComponent>
            <AdsComponent ads={ads}>
                <Image src={advertiseUrl} alt="Ad" />
            </AdsComponent>
        </Component>
    );
};

export default MidSlide;
