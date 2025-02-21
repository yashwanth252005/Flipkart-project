import { Box, Link, styled } from "@mui/material";

const StyledLink = styled(Link)({
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "bold",
    display: "block", // Ensures each link is on a new line
    marginBottom: "5px", // Adds spacing between links
    fontFamily: "sans-serif",
});

const Help = () => {
    return (
        <Box>
            <StyledLink target="_blank" href="https://www.flipkart.com/pages/payments">Payments</StyledLink>
            <StyledLink target="_blank" href="https://www.flipkart.com/pages/shipping">Shipping</StyledLink>
            <StyledLink target="_blank" href="https://www.flipkart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG">Cancellations & Returns</StyledLink>
            <StyledLink target="_blank" href="https://www.flipkart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG">FAQ</StyledLink>
        </Box>
    );
};

export default Help;
