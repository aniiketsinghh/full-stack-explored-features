import { createContext, useState } from "react";
const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const login = (user) => {
        setUser(user);
    }
    return (
        <Context.Provider value={{ user, login }}>
            {children}
        </Context.Provider>
    );
};


export default Context;

