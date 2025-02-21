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

const GroupCompanies = () => {
    return (
        <Box>
            <StyledLink target="_blank" href="https://www.myntra.com/">Myntra</StyledLink>
            <StyledLink target="_blank" href="https://www.cleartrip.com/">Cleartrip</StyledLink>
            <StyledLink target="_blank" href="https://www.shopsy.in/">Shopsy</StyledLink>
        </Box>
    );
};

export default GroupCompanies;
