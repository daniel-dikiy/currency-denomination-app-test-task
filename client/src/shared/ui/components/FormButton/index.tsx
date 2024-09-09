import { Button } from '@headlessui/react';

export type Props = {
  className?: string;
  text: string;
  onClick: () => void;
};

const DEFAULT_CLASS_NAME = '';

export const FormButton = ({
  text,
  onClick,
  className = DEFAULT_CLASS_NAME,
}: Props) => {
  return (
    <Button
      onClick={onClick}
      className={`${className} inline-flex h-fit items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white`}
    >
      {text}
    </Button>
  );
};
