import { createContext, useState } from "react";

export const ComponentsContext = createContext()

const ComponentsContextProvider = ({children}) => {
    const [checkedItems, setCheckedItems] = useState([]);
    const [radioItem, setRadioItem] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    
    const checkContextData = {
        checkedItems,
        setCheckedItems,
        radioItem,
        setRadioItem,
        showConfirmModal,
        setShowConfirmModal
    }

    return (
        <ComponentsContext.Provider value={checkContextData}>
            {children}
        </ComponentsContext.Provider>
    )
}

export default ComponentsContextProvider
