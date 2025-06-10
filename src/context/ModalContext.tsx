import { createContext, useState } from 'react';
import { createPortal } from 'react-dom';
import type { ReactNode, ComponentType } from 'react';

export type ModalComponentType<P = unknown> = ComponentType<P & { onClose: () => void }>;

interface ModalInstance {
  id: string;
  Component: ComponentType<object>;
  props: object;
}

interface ModalContextType {
  modals: ModalInstance[];
  openModal: <P>(Component: ModalComponentType<P>, props?: Omit<P, 'onClose'>) => string;
  closeModal: (id: string) => void;
  closeAllModals: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

let modalIdCounter = 0;

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modals, setModals] = useState<ModalInstance[]>([]);

  const openModal = <P,>(Component: ModalComponentType<P>, props: Omit<P, 'onClose'> = {} as Omit<P, 'onClose'>) => {
    const id = `modal_${modalIdCounter++}`;
    setModals((prev) => [
      ...prev,
      {
        id,
        Component: Component as ComponentType<object>,
        props: { ...props, onClose: () => closeModal(id) } as object,
      },
    ]);
    return id;
  };

  const closeModal = (id: string) => {
    setModals((prev) => prev.filter((modal) => modal.id !== id));
  };

  const closeAllModals = () => {
    setModals([]);
  };

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal, closeAllModals }}>
      {children}
      {createPortal(
        <>
          {modals.map(({ id, Component, props }) => (
            <Component key={id} {...props} />
          ))}
        </>,
        document.body
      )}
    </ModalContext.Provider>
  );
}