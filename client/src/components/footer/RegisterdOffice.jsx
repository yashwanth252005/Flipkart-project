import { Box, Typography, styled } from "@mui/material";

const StyledTypography = styled(Typography)({
    fontSize: "12px",
    color: "#FFFFFF",
    lineHeight: 1.6,
    fontFamily: "sans-serif",
});

const RegisteredOffice = () => {
    return (
        <Box>
            <StyledTypography>Flipkart Internet Private Limited,</StyledTypography>
            <StyledTypography>Buildings Alyssa, Begonia &</StyledTypography>
            <StyledTypography>Clove Embassy Tech Village,</StyledTypography>
            <StyledTypography>Outer Ring Road, Devarabeesanahalli Village,</StyledTypography>
            <StyledTypography>Bengaluru, 560103,</StyledTypography>
            <StyledTypography>Karnataka, India</StyledTypography>
            <StyledTypography>CIN: <span style={{ color: "skyblue" }} >U51109KA2012PTC066107</span></StyledTypography>
        </Box>
    );
};

export default RegisteredOffice;
