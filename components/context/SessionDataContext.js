import { createContext } from "react"

const SessionDataContext = createContext({
    group:  { id: 1, name: "House", supplies: [] },
    user:   { id: 1 },
    supply: { id: null, name: "", color: "", items: [] },
    item:   {
        id: null,
        name: "",
        unit: { symbol: "", singular: "", plural: "" },
        isTracked: false,
        isDepleted: false,
        isRunningOut: false,
        events: [],
    }
});

export default SessionDataContext;