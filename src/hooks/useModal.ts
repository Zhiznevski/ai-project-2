import { useModalContext } from '../context/ModalContext';

export function useModal() {
  const { openModal, closeModal, closeAllModals } = useModalContext();
  return { openModal, closeModal, closeAllModals };
} 