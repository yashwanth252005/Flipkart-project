import About from "./About";
import GroupCompanies from "./GroupCompanies";
import Help from "./Help";
import ConsumerPolicy from "./ConsumerPolicy";
import MailUs from "./MailUs";
import RegisterdOffice from "./RegisterdOffice";
import { Box, Grid, styled, Typography } from "@mui/material";

const StyledFooter = styled(Box)`
  background-color: #172337;
  color: white;
  margin-top: 50px;
  padding: 30px 5%;
  position: relative;
  bottom: 0;
//   width: 100%;
`;

const StyledTypography = styled(Typography)`
  font-size: 14px;
  color:#828282;
  line-height: 1.6;
  font-family: sans-serif;
  margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <StyledTypography variant="h6">About</StyledTypography>
          <About />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <StyledTypography variant="h6">Group Companies</StyledTypography>
          <GroupCompanies />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <StyledTypography variant="h6">Help</StyledTypography>
          <Help />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <StyledTypography variant="h6">Consumer Policy</StyledTypography>
          <ConsumerPolicy />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <StyledTypography variant="h6">Mail Us</StyledTypography>
          <MailUs />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <StyledTypography variant="h6">Registered Office</StyledTypography>
          <RegisterdOffice />
        </Grid>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;
