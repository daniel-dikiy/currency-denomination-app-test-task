import { Description, Field, Label } from '@headlessui/react';

import {
  InputField,
  Props as InputFieldProps,
} from '@/shared/ui/components/InputField';

type Props = {
  label: string;
  description: string;
  classNameInputField?: string;
} & InputFieldProps;

const DEFAULT_CLASS_NAME_INPUT_FIELD = '';

const FormField = ({
  label,
  description,
  classNameInputField = DEFAULT_CLASS_NAME_INPUT_FIELD,
  ...inputFieldProps
}: Props) => {
  return (
    <>
      <Field className='w-full max-w-md'>
        <Label
          htmlFor={inputFieldProps.name}
          className={`text-sm/6 font-medium ${
            inputFieldProps.invalid ? 'text-red-600' : 'text-black'
          }`}
        >
          {label}
        </Label>
        <Description
          className={`text-sm/6 ${
            inputFieldProps.invalid ? 'text-red-600 ' : ' text-black'
          }`}
        >
          {description}
        </Description>

        <div className={classNameInputField}>
          {inputFieldProps.isToken && (
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <span className='text-gray-500 sm:text-sm'>€</span>
            </div>
          )}

          <InputField {...inputFieldProps} />
        </div>
      </Field>
    </>
  );
};

export default FormField;
