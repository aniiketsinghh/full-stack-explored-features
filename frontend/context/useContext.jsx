import { useContext } from "react";
import Context from "./ContextProvider.jsx";

export const useAuth = () => useContext(Context);