import { useUnit } from 'effector-react';

import { calculateAmount } from '@/features/amount-calculation-form/amount-button/model';
import {
  FormButton,
  Props as FieldButtonProps,
} from '@/shared/ui/components/FormButton';

const AmountButton = ({ className }: Pick<FieldButtonProps, 'className'>) => {
  const onClick = useUnit(calculateAmount);

  return (
    <FormButton text='Calculate' onClick={onClick} className={className} />
  );
};

export default AmountButton;
