import { createContext, useState } from "react";

export const DataContext = createContext(null);


const DataProvider = ({ children }) => {
    const [account, setCurrAccount] = useState('');

    return <DataContext.Provider value={{
        account,
        setCurrAccount,
    }}>
        {children}</DataContext.Provider>;
};

export default DataProvider;