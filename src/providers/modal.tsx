import { FC, createContext, useState, SetStateAction, Dispatch } from 'react';

export type ModalName = 'navigation';

interface CloseModal {
  (): void;
}

interface OpenModal {
  (name: ModalName): void;
}

export interface ModalContext {
  open: OpenModal;
  close: CloseModal;
  active: ModalName | null;
}

export const ModalContext = createContext<ModalContext>({
  open: () => null,
  close: () => null,
  active: null,
});

export const ModalProvider: FC = ({ children }) => {
  const [active, setActive] = useState<ModalName | null>(null);

  const close: CloseModal = () => setActive(null);
  const open: OpenModal = name => setActive(name);

  return (
    <ModalContext.Provider value={{ active, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}
