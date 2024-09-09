import { Input } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';

export type Props = {
  name: string;
  type?: string;
  placeholder: string;
  autoFocus?: boolean;
  invalid?: boolean;
  isToken?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
};

const DEFAULT_TYPE = 'text';
const DEFAULT_AUTO_FOCUS = false;
const DEFAULT_INVALID = false;
const DEFAULT_IS_TOKEN = false;

export const InputField = ({
  name,
  type = DEFAULT_TYPE,
  placeholder,
  autoFocus = DEFAULT_AUTO_FOCUS,
  invalid = DEFAULT_INVALID,
  isToken = DEFAULT_IS_TOKEN,
  onKeyUp,
  onChange,
}: Props) => {
  return (
    <Input
      name={name}
      type={type}
      placeholder={placeholder}
      invalid={invalid}
      autoFocus={autoFocus}
      onChange={onChange}
      onKeyUp={onKeyUp}
      className={clsx(
        isToken ? 'pl-7 ' : '',
        'mt-3 block w-full rounded-lg border-none bg-white/75 px-3 py-1.5 text-sm/6 ring-1 ring-inset data-[focus]:outline-2 data-[focus]:-outline-offset-2',
        invalid
          ? 'text-red-600 ring-red-600 data-[focus]:outline-red-600/25'
          : 'text-black  ring-gray-400 data-[focus]:outline-gray-400/25',
      )}
    />
  );
};
