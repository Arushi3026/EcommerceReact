import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setuserData] = useState(null);

    return (
        <UserContext.Provider value={{ userData, setuserData }}>
            {children}
        </UserContext.Provider>
    );
};
