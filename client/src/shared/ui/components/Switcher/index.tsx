import { Switch } from '@headlessui/react';

type Props<T> = {
  checked: boolean;
  onChange: (value: T) => void;
};

export const Switcher = <T extends boolean>({
  checked,
  onChange,
}: Props<T>) => {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className='group relative flex h-7 w-14 cursor-pointer rounded-full bg-cyan-500/75 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[checked]:bg-emerald-500/75 data-[focus]:outline-1 data-[focus]:outline-white'
    >
      <span
        aria-hidden='true'
        className='pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-7'
      />
    </Switch>
  );
};
