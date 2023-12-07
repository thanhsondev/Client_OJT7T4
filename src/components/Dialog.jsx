import React from 'react';
import { Modal } from 'antd';
import ButtonCommon from './buttons/ButtonCommon';

const Dialog = ({ isOpen, handleOk, handleCancel, title, message }) => {
  return (
    <Modal
      title={title}
      visible={isOpen}
      onCancel={handleCancel} 
      footer={null} 
    >
      <p>{message}</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ButtonCommon buttonType="cancel" handleOnClick={handleCancel} />
        <div style={{ marginLeft: '10px' }}>
          <ButtonCommon buttonType="save" handleOnClick={handleOk} />
        </div>
      </div>
    </Modal>
  );
};

export default Dialog;
