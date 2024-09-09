import CurrencyDenominationTable from '@/features/calculated-amount-tables/currency-denomination-table';
import DiffCurrencyDenominationTable from '@/features/calculated-amount-tables/diff-currency-denomination-table';
import NewCurrencyDenominationTable from '@/features/calculated-amount-tables/new-currency-denomination-table';

type Props = {
  className?: string;
};

const DEFAULT_CLASS_NAME = '';

const CalculatedAmount = ({ className = DEFAULT_CLASS_NAME }: Props) => {
  return (
    <div className={`${className} flex overflow-auto`}>
      <CurrencyDenominationTable />
      <NewCurrencyDenominationTable className='ml-4' />
      <DiffCurrencyDenominationTable className='ml-4' />
    </div>
  );
};

export default CalculatedAmount;
