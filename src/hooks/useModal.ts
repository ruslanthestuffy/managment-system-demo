import { useContext } from "react";

import { ModalContext } from 'providers';

export interface UseModal {
  (): ModalContext;
}

export const useModal: UseModal = () => {
  const context = useContext(ModalContext);
  return context;
};

