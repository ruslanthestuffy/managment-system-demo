import { FC, useRef } from 'react';
import { createPortal } from 'react-dom';

import { useClickAway, useKey, useLockBodyScroll } from 'react-use';

import {
  ModalWindow,
  ModalWrapper,
  CloseButton,
  ModalHeader,
  ModalTitle,
  ModalBody,
} from 'components/modals/Modal/styles';

import { ModalName } from 'providers';
import { useModal } from 'hooks';
import { CloseIcon } from 'assets/icons';

export interface ModalProps {
  name: ModalName;
  title?: string,
}

export const Modal: FC<ModalProps> = ({
  name,
  title,
  children,
}) => {
  const windowRef = useRef<HTMLDivElement>(null);

  const { active, close } = useModal();

  useKey('Escape', close, { event: 'keyup' });
  useClickAway(windowRef, close);
  useLockBodyScroll(!!active);

  if (name !== active) return null;

  return createPortal(
    <ModalWrapper>
      <ModalWindow ref={windowRef}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={close}>
            <CloseIcon />
          </CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalWindow>
    </ModalWrapper>,
    document.getElementById('root')!,
  );
};

