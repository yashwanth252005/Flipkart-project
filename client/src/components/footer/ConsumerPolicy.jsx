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

const ConsumerPolicy = () => {
    return (
        <Box>
            <StyledLink target="_blank" href="https://www.flipkart.com/pages/returnpolicy?otracker=footer_navlinks">Cancellations & Returns</StyledLink>
            <StyledLink target="_blank" href="https://www.flipkart.com/pages/terms?otracker=footer_navlinks">Terms of Use</StyledLink>
            <StyledLink target="_blank" href="https://www.flipkart.com/pages/paymentsecurity?otracker=footer_navlinks">Security</StyledLink>
            <StyledLink target="_blank" href="https://www.flipkart.com/pages/privacypolicy?otracker=footer_navlinks">Privacy</StyledLink>
            <StyledLink target="_blank" href="https://www.flipkart.com/sitemap?otracker=footer_navlinks">Sitemap</StyledLink>
            <StyledLink target="_blank" href="https://www.flipkart.com/pages/grievance-redressal-mechanism?otracker=footer_navlinks">Grievance Redressals</StyledLink>
            <StyledLink target="_blank" href="https://www.flipkart.com/pages/ewaste-compliance-tnc?otracker=footer_navlinks">EPR Compliance</StyledLink>
        </Box>
    );
};

export default ConsumerPolicy;
