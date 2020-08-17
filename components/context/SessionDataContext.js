import { createContext } from "react"

const SessionDataContext = createContext({
    group:  { id: null, name: "" },
    user:   { id: null, name: "" },
    supplies: [],
    supply: { id: null, name: "", color: "" },
    items: [],
});

export default SessionDataContext;