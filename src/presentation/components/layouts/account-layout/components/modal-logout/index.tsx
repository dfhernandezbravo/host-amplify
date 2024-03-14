import { useSignOut } from '@/domain/use-cases/auth/sign-out';
import Button from '@/presentation/components/atoms/button';
import Modal from '@/presentation/components/atoms/modal';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalLogout: React.FC<Props> = ({ isOpen, onClose }) => {
  const { signOut } = useSignOut();
  const router = useRouter();

  return (
    <Modal
      isOpen={isOpen}
      title=""
      setIsOpen={() => {}}
      primaryAction={
        <Button
          label="Cerrar Sesión"
          variant="primary"
          size="compact"
          onClick={() => {
            signOut();
            router.push('/');
          }}
        />
      }
      secondaryAction={
        <Button
          label="Cancelar"
          variant="secondary"
          size="compact"
          onClick={onClose}
        />
      }
    >
      <span>¿Deseas cerrar la sesión?</span>
    </Modal>
  );
};

export default ModalLogout;
