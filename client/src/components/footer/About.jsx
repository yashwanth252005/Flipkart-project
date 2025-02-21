import { Box, Typography, Link, styled } from "@mui/material";

const StyledLink = styled(Link)({
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "bold",
    marginRight: "10px",
    display: "block", // Ensures links are displayed in a column format
    marginBottom: "5px", // Adds spacing between links
    fontFamily: "sans-serif",
});



const About = () => {
    return (
        <Box>
            <StyledLink target="_blank" href="https://www.flipkart.com/helpcentre?otracker=footer_navlinks">Contact Us</StyledLink>
            <StyledLink target="_blank" href="https://corporate.flipkart.net/corporate-home">About Us</StyledLink>
            <StyledLink target="_blank" href="https://www.flipkartcareers.com/?otracker=footer_navlinks">Careers</StyledLink>
            <StyledLink target="_blank" href="http://stories.flipkart.com/?otracker=footer_navlinks">Flipkart</StyledLink>
            <StyledLink target="_blank" href="http://stories.flipkart.com/category/top-stories/news/">Press</StyledLink>
            <StyledLink target="_blank" href="https://www.flipkart.com/corporate-information">Corporate Info</StyledLink>
        </Box>
    );
};

export default About;
