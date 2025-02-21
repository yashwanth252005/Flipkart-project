import * as React from 'react';
import css from './Search.module.css';
import { InputBase, List, ListItem, styled } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';  
import { getProducts } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';

const StyledInputBase = styled(InputBase)`
width: 100%;
`

const Image = styled("img")(({ theme }) => ({
    width: 45,
    height: 45,
    margin: "0 5px 0 0",
    [theme.breakpoints.down("lg")]: {
        width: 35,
        height: 35,
    },
    [theme.breakpoints.down("sm")]: {
        width: 28,
        height: 28,
    },
}));

const SearchList = styled(List)(({ theme }) => ({
    width: '48%',
    maxHeight: '50vh',
    position: 'absolute',
    overflowY: 'auto',
    backgroundColor: 'white',
    zIndex: 1,
    [theme.breakpoints.down("lg")]: {
        width: '30%',
    },
    [theme.breakpoints.down("sm")]: {
        width: '20%',
    },
}))

const ProductName = styled("p")(({ theme }) => ({
    fontSize: 14,
    marginLeft: 20,
    color: 'black',
    fontFamily: 'sans-serif',
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
        fontSize: 12,
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: 10,
    },
}))

const StyledListItem = styled(ListItem)`
&:hover {
    background-color: #f2f2f2;
    transform: scale(1.02);
}
`


const Search = () => {

    const [text, setText] = React.useState('');

    const { products } = useSelector(state => state.getProducts);
    const productsArray = Object.values(products);
    // console.log(productsArray);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const getText = (text) => {
        setText(text);
    }

    return (
        <form onSubmit={(e) => e.preventDefault()} className={css.search_form}>
            <div className={css.search_container}>
                <div className={css.search_icon} style={{margin: '4px 5px', padding: '0px 4px 0px 5px', cursor: 'pointer'}}><svg width="24" height="24" class="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div>
                <StyledInputBase placeholder="Search for Products, Brands and More" className={css.searchInput} onChange={(e) => getText(e.target.value)} value={text}/>
            </div>
            {
                text && (
                    <SearchList>
                        {
                            productsArray.map((productList) => (
                                productList.filter((product) => {
                                    if(product.title.longTitle.toLowerCase().includes(text.toLowerCase())) return product;
                                }).map((filteredProduct) => (
                                    <Link to={`/product/${filteredProduct.id}`} style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setText('')}>
                                    <StyledListItem key={filteredProduct.id}>
                                        <Image src={filteredProduct.url} alt={filteredProduct.title.longTitle} />
                                        <ProductName>{filteredProduct.title.longTitle}</ProductName>
                                    </StyledListItem>
                                    </Link>
                                ))
                            ))
                        }
                    </SearchList>
                )
            }
        </form>
        
    )
}

export default Search;