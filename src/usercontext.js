import React from "react";

export const User = {
    name: "Chris",
    age: 49,
    isAdmin: false,
    credits: 100,
};

export const UserContext = React.createContext(User);
