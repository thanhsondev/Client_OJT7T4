import React, { useContext } from 'react';
import { Alert } from 'antd';
import { ComponentsContext } from '../../contexts/componentsContext';

const AlertCommon = () => {
    const {
        setAlert,
        alertMessage,
        alertType
    } = useContext(ComponentsContext);

    const onCloseAlert = () => {
        setAlert(false);
    };

    setTimeout(() => {
        setAlert(false);
    }, 3000);

    return (
        <>
            <Alert
                message={alertMessage}
                type={alertType}
                showIcon
                closable
                onClose={onCloseAlert}
                style={{
                    position: 'fixed',
                    top: 20,
                    right: 16,
                    width: 300,
                    zIndex: 1000,
                }}
            />

        </>
    );
};

export default AlertCommon;