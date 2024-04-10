import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const UseAuth = () => {
    const authUtils = useContext(AuthContext);

    return authUtils;
};

export default UseAuth;