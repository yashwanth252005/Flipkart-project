import {AppBar, Toolbar, Box, Typography, styled} from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
    background: #FFFFFF;
    width: 100%;
    height: 68px;
    Box-shadow: none;
`;
const Component = styled(Box)`
    margin-left: 0.3%;
    line-height: 0;
`;

const Header = () => {
    const logo = "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"

    return (
        <StyledHeader>
            <Toolbar>
                <Component>
                    <Link to="/">
                        <img src={logo} alt="logo" style={{width: 159}} />
                    </Link>
                </Component>
                <Search />
                <CustomButtons />
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;