import { Box, styled, Typography, useTheme, useMediaQuery } from "@mui/material";
import { NavData } from "../../constants/data";

const StyledNavBar = styled(Box)(({ theme }) => ({
    backgroundColor: "#FFFFFF",
    width: "98%",
    height: "123px",
    margin: "77px auto auto auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden", // Hides extra images
    [theme.breakpoints.down("lg")]: {
        height: "110px",
    },
    [theme.breakpoints.down("md")]: {
        height: "95px",
    },
    [theme.breakpoints.down("sm")]: {
        height: "80px",
    },
}));

const Component = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "auto 20px auto 22px",
    [theme.breakpoints.down("md")]: {
        margin: "auto 12px",
    },
    [theme.breakpoints.down("sm")]: {
        margin: "auto 8px",
    },
}));

const Text = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontWeight: 550,
    fontFamily: "sans-serif",
    margin: "12px 3px",
    transition: "all 0.3s ease-in-out",
    [theme.breakpoints.down("lg")]: {
        fontWeight: "normal", // Normal font weight below lg
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "12px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
    },
}));

const Image = styled("img")(({ theme }) => ({
    width: 64,
    height: 64,
    margin: "8px 5px 1px 1px",
    [theme.breakpoints.down("md")]: {
        width: 50,
        height: 50,
    },
    [theme.breakpoints.down("sm")]: {
        width: 40,
        height: 40,
    },
}));

const NavBar = () => {
    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up("lg")); // lg (≥1200px)
    const isMd = useMediaQuery(theme.breakpoints.up("md")); // md (≥900px)
    const isSm = useMediaQuery(theme.breakpoints.up("sm")); // sm (≥600px)

    // Determine number of items to display based on screen size
    let visibleNavItems = 9;
    if (!isLg) visibleNavItems = 7;
    if (!isMd) visibleNavItems = 5;
    if (!isSm) visibleNavItems = 5;

    return (
        <StyledNavBar>
            {NavData.slice(0, visibleNavItems).map((data) => (
                <Component key={data.text}>
                    <Image src={data.url} alt={data.text} />
                    <Text>{data.text}</Text>
                </Component>
            ))}
        </StyledNavBar>
    );
};

export default NavBar;
