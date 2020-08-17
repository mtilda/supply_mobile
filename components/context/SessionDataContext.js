import { createContext } from "react"

const SessionDataContext = createContext({
    group:  { id: 1, name: "House" },
    user:   { id: 1, name: "Kay" },
    supplies: [],
    supply: { id: null, name: "", color: "" },
    items: [],
});

export default SessionDataContext;