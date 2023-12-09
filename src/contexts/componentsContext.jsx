import { createContext, useState } from "react";

export const ComponentsContext = createContext()

const ComponentsContextProvider = ({children}) => {
    const [checkedItems, setCheckedItems] = useState([]);
    const [radioItem, setRadioItem] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");
    
    const checkContextData = {
        checkedItems,
        setCheckedItems,
        radioItem,
        setRadioItem,
        showConfirmModal,
        setShowConfirmModal,
        processing,
        setProcessing,
        alert,
        setAlert,
        alertMessage,
        setAlertMessage,
        alertType,
        setAlertType
    }

    return (
        <ComponentsContext.Provider value={checkContextData}>
            {children}
        </ComponentsContext.Provider>
    )
}

export default ComponentsContextProvider
