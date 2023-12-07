import React, {useContext} from 'react';
import { Modal } from 'antd';
import ButtonCommon from '../buttons/ButtonCommon';
import { ComponentsContext } from '../../contexts/componentsContext';

const Dialog = ({ handleOk, title, message }) => {
  const {
    showConfirmModal,
    setShowConfirmModal
} = useContext(ComponentsContext);

  const handleCancel = () => {
    setShowConfirmModal(false);
  };

  return (
    <Modal
      title={title}
      visible={showConfirmModal}
      onCancel={handleCancel} 
      footer={null} 
    >
      <p>{message}</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ButtonCommon buttonType="cancel" handleOnClick={handleCancel} />
        <div style={{ marginLeft: '10px' }}>
          <ButtonCommon buttonType="delete-text" handleOnClick={handleOk} />
        </div>
      </div>
    </Modal>
  );
};

export default Dialog;
