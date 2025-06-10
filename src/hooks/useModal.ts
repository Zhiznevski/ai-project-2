import { useModalContext } from "./useModalContext";


export function useModal() {
  const { openModal, closeModal, closeAllModals } = useModalContext();
  return { openModal, closeModal, closeAllModals };
} 