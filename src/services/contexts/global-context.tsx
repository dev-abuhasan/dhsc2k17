'use client';
import React, { useState } from 'react';

const Context = React.createContext<any>({
    scrollTrue: false,
    setScrollTrue: (value: boolean) => { },
    categoryData: undefined,
    setCategoryData: (value: boolean) => { }
});
const { Provider, Consumer } = Context;


const GlobalProvider: React.FC<any> = ({ children }) => {
    const [scrollTrue, setScrollTrue] = React.useState<boolean>(false);

    return (
        <Provider value={{
            scrollTrue,
            setScrollTrue
        }}>
            {children}
        </Provider>
    )

}

export { GlobalProvider, Consumer as UserConsumer, Context as GlobalContext };