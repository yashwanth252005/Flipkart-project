import { Box, Button, styled, ButtonGroup } from "@mui/material";


const Component = styled(ButtonGroup)`
    margin: 20px 0 0 0;
`;


const QuantityButtons = () => {
    return (
        <Component>
            <Button style={{ border: "1px solid #2f80fa", borderRadius: "50%", marginRight: "10px", width: "20px", height: "30px"}}>-</Button>
            <Button style={{ marginRight: "10px", border: "1px solid #2f80fa", width: "20px", height: "30px" }}>1</Button>
            <Button style={{ border: "1px solid #2f80fa", borderRadius: "50%", width: "20px", height: "30px"}}>+</Button>
        </Component>
    )
}
    
export default QuantityButtons;