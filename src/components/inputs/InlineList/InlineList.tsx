import {
  FC,
  Fragment,
  useState,
  useRef,
  ChangeEventHandler,
  KeyboardEventHandler,
  useCallback,
  useEffect,
} from 'react';

import { compact, uniq } from 'lodash';

import { StyledInlineList, ActionButton, Actions, EditField } from 'components/inputs/InlineList/styles';

import { CheckIcon, CloseIcon, AddIcon } from 'assets/icons';

export interface InlineListProps {
  value: string[];
  label: string;
  onChange: (value: string[]) => void;
  disabled?: boolean;
}

export const InlineList: FC<InlineListProps> = ({ label, value, onChange, disabled }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [mode, setMode] = useState<null | 'add' | 'edit'>(null);
  const [editText, setEditText] = useState('');

  const cancelEdit = () => {
    leaveMode();
    setEditText('');
  };

  const accept = () => {
    const itemsRegex = /(?<=( |,)*)(([a-zа-я\d-.]|(?<=[a-zа-я\d-.])( )(?=[a-zа-я\d-.]))*)(?=( |,)*)/gi;
    const trimmedItems = editText.replace(/(?<=[а-яa-z\d])((-| )*)(?![а-яa-z\d])/gi, '');
    const matches = trimmedItems.match(itemsRegex) ?? [];

    const isAddMode = mode === 'add';
    const newValue = compact(uniq([...(isAddMode ? value : []), ...matches].reverse()).reverse());

    onChange(newValue);
    if (!isAddMode || !editText) leaveMode();
    setEditText('');
  };

  const handleEscape = useCallback<EventListener>(({ key }: any) => {
    if (key === 'Escape') cancelEdit();
  }, []);

  const enterEditMode = () => {
    setMode('edit');
    setEditText(value.join(', '));
    document.addEventListener('keydown', handleEscape);
  };

  const enterAddMode = () => {
    setMode('add');
    document.addEventListener('keydown', handleEscape);
  };

  const leaveMode = () => {
    setMode(null);
    document.removeEventListener('keydown', handleEscape);
  };

  const changeEditText: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    const allowedCharacters = value.replace(/[^а-яa-z\d \,\-]/gi, '');
    const deduplicatedChars = allowedCharacters.replace(/(^( |-)*)|(?<=(-| ))((-| )*)/g, '');

    setEditText(deduplicatedChars);
  };

  const keyboardHandler: KeyboardEventHandler<HTMLInputElement> = ({ key }) => {
    if (key === 'Enter') return accept();
  };

  useEffect(() => {
    if (mode) inputRef.current?.focus();
  }, [mode]);

  return (
    <StyledInlineList>
      <label>{label}:</label>

      {mode !== 'edit' && (
        <div onClick={disabled ? undefined : enterEditMode}>{value.length ? value.join(', ') : 'Не указано'}</div>
      )}

      {mode && (
        <EditField
          inputRef={el => (inputRef.current = el)}
          value={editText}
          onChange={changeEditText}
          onKeyDown={keyboardHandler}
        />
      )}

      {!disabled && (
        <Actions>
          {mode ? (
            <Fragment>
              <ActionButton variant="accept" onClick={accept}>
                <CheckIcon />
              </ActionButton>
              <ActionButton variant="cancel" onClick={cancelEdit}>
                <CloseIcon />
              </ActionButton>
            </Fragment>
          ) : (
            <ActionButton variant="add" onClick={enterAddMode}>
              <AddIcon />
            </ActionButton>
          )}
        </Actions>
      )}
    </StyledInlineList>
  );
};
