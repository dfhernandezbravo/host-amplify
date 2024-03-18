import { ModalProps } from '@ccom-easy-design-system/molecules.modal';
import dynamic from 'next/dynamic';
import React from 'react';

const ModalBit = dynamic(() =>
  import('@ccom-easy-design-system/molecules.modal').then(
    (module) => module.Modal,
  ),
);

const Modal: React.FC<ModalProps> = (props) => {
  return <ModalBit {...props} />;
};

export default Modal;
