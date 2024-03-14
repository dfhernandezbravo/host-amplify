import Button from '@/presentation/components/atoms/button';
import Modal from '@/presentation/components/atoms/modal';
import React from 'react';

interface Props {
  isOpen: boolean;
}

const ModalLogout: React.FC<Props> = ({ isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      title=""
      setIsOpen={() => {}}
      primaryAction={
        <Button label="Cerrar Sesión" variant="primary" size="compact" />
      }
      secondaryAction={
        <Button label="Cancelar" variant="secondary" size="compact" />
      }
    >
      <span>¿Deseas cerrar la sesión?</span>
    </Modal>
  );
};

export default ModalLogout;
