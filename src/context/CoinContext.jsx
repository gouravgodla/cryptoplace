import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    });

    const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY;

    const fetchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': API_KEY
            }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllCoin(response))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchAllCoin();
    }, [currency]);

    const contextValue = {
        allCoin, currency, setCurrency
    };

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;
