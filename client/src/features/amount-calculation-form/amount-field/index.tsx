import { useUnit } from 'effector-react';
import { ChangeEvent } from 'react';

import {
  $amountFieldError,
  handleKeypress,
  onAmountFieldChange,
} from '@/features/amount-calculation-form/amount-field/model';
import FormField from '@/shared/ui/components/FormField';

const AmountField = () => {
  const amountFieldError = useUnit($amountFieldError);

  return (
    <FormField
      classNameInputField='relative mt-2 rounded-md shadow-sm'
      label='Amount'
      description='Enter the amount in euros to calculate the fewest number of banknotes and coins needed.'
      name='amount'
      placeholder='0.00'
      isToken={true}
      autoFocus={true}
      onKeyUp={handleKeypress}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        onAmountFieldChange(event.target.value)
      }
      invalid={amountFieldError}
    />
  );
};

export default AmountField;
