import AmountButton from '@/features/amount-calculation-form/amount-button';
import AmountField from '@/features/amount-calculation-form/amount-field';

const AmountCalculation = () => {
  return (
    <div className='flex items-end'>
      <AmountField />

      <AmountButton className='ml-4' />
    </div>
  );
};

export default AmountCalculation;
