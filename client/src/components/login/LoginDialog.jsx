import { Box, Button, Dialog, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material';
import { useState, useContext } from 'react';
import { authenticateSignUp, authenticateLogin } from '../../service/api';
import DataProvider, { DataContext } from '../../context/DataProvider';

const StyledDialog = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    height: '65vh',
    width: '38vw',
})

const Component1 = styled(Box)({
    background: '#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 92% no-repeat',
    height: '100%',
    width: '42%',
    padding: '0px 0px 0px 36px',
});

const Component2 = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 0px 0px 36px;
    justify-content: space-between;
    height: 73%;
    width: 40%;
    & > p{
        margin-top: 15px;
    }
`;

const StyledNewAcc = styled(Typography)`
font-size: 14px;
font-weight: 550;
color: #2874f0;
text-align: center;
margin-top: 20px;
font-family: sans-serif;
cursor: pointer;
`
const accountType = [{
    login: {
        type: 'login',
        title: 'Login',
        subtitle: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signUp: {
        type: 'signUp',
        title: 'Looks like you\'re new here!',
        subtitle: 'Sign up with your mobile number to get started'
    }
}
];

const accountInitialValues = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    phoneNo: '',
};

const loginInitialValues = {
    email: '',
    password: '',
}

const LoginDialog = ({ open, setOpen }) => {
    
    const [account, setAccount] = useState(accountType[0].login);
    const [signup, setsignup] = useState(accountInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const { setCurrAccount } = useContext(DataContext);
    const [ msg, setMsg ] = useState( '' );

    const handleClose = () => {
        setOpen(false);
        setAccount(accountType[0].login);
    };

    const onInputChange = (e) => {
        setsignup({ ...signup, [e.target.name]: e.target.value });
    };

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const signupUser = async () => {
        let response = await authenticateSignUp(signup);
        if (!response) return;
        try {
            if (response.response.data.message) {
                setMsg(response.response.data.message);
                return;
            }
        } catch (error) {
            setMsg('');
        }
        setCurrAccount(signup.userName);
        handleClose();
    };

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        if (!response) return;
        try {
            if (response.response.data.message) {
                setMsg(response.response.data.message);
                return;
            }
        } catch (error) {
            setMsg('');
        }
        setCurrAccount(response.data.data.userName);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} style={{scrollbarWidth: 'none'}}>
            <StyledDialog>
                <Component1>
                    <Typography variant='h6' style={{color: '#FFFFFF', marginTop: '40px'}}>{account.title}</Typography>
                    <Typography style={{marginTop: '18px',color: '#FFFFFF', fontSize: '14px'}}>{account.subtitle}</Typography>
                </Component1>
                {
                    account.type === 'login' ?
                        <Component2>
                            <TextField variant="standard" label="Enter Email/Mobile Number" onChange={(e) => onValueChange(e)} name='email'></TextField>
                            <TextField variant="standard" label="Enter Password" onChange={(e) => onValueChange(e)} name='password'></TextField>
                            <Typography style={{ fontSize: '12px' }}>by continuing, you agree to Flipkart's&nbsp; <a href='https://www.flipkart.com/pages/terms'> Terms of Use and Privacy Policy</a></Typography>
                            <Button style={{ background: '#fb641b', color: '#FFFFFF', width: '100%', height: '45px', border: 'none' }} onClick={() => loginUser()} >Login</Button>
                            {
                                msg && <Typography style={{ color: 'red', fontSize: '12px', width: '100%', textAlign: 'center' }}>{msg}</Typography>
                            }
                            <Typography style={{ textAlign: 'center', fontSize: '12px' }}>OR</Typography>
                            <Button type='button' style={{ background: '#FFFFFF', color: '#2874f0', width: '100%', height: '40px', boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)' }}>Request OTP</Button>
                            <StyledNewAcc onClick={() => { setAccount(accountType[0].signUp); setMsg('') }}>New to flipkart? Create an account</StyledNewAcc>
                        </Component2>
                        :
                        <Component2>
                            <TextField variant="standard" label="Enter First Name" name='firstName' onChange={(e) => onInputChange(e)}></TextField>
                            <TextField variant="standard" label="Enter Last Name" name='lastName' onChange={(e) => onInputChange(e)}></TextField>
                            <TextField variant="standard" label="Enter Username" name='userName' onChange={(e) => onInputChange(e)}></TextField>
                            <TextField variant="standard" label="Enter Email"  name='email' onChange={(e) => onInputChange(e)}></TextField>
                            <TextField variant="standard" label="Enter Password"  name='password' onChange={(e) => onInputChange(e)}></TextField>
                            <TextField variant="standard" label="Enter Phone No"  name='phoneNo' onChange={(e) => onInputChange(e)}></TextField>
                            <Button style={{ background: '#fb641b', color: '#FFFFFF', width: '100%', height: '45px', border: 'none', marginTop: '10px' }} onClick={() => signupUser()}>Continue</Button>
                            {
                                msg && <Typography style={{ color: 'red', fontSize: '12px', width: '100%', textAlign: 'center' }}>{msg}</Typography>
                            }
                            <StyledNewAcc onClick={() => { setAccount(accountType[0].login); setMsg(''); }}>Existing User? Login</StyledNewAcc>
                        </Component2>
                }
            </StyledDialog>
        </Dialog>
    )
}

export default LoginDialog;