import React from 'react';
import { Modal } from 'antd';

const Dialog = ({ isOpen, handleOk, handleCancel, title, message }) => {
  return (
    <Modal
      title={title}
      visible={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>{message}</p>
    </Modal>
  );
};

export default Dialog;


