import { useUnit } from 'effector-react';
import { useEffect } from 'react';

import {
  $newCurrencyDenominations,
  $oldCurrencyDenominations,
} from '@/entities/currency-denominations/model';
import { $oldAmountField } from '@/features/amount-calculation-form/amount-button/model';
import {
  $diffCurrencyDenominations,
  calculateDiffCurrencyDenominations,
} from '@/features/calculated-amount-tables/diff-currency-denomination-table/model';

type Props = {
  className?: string;
};

const DEFAULT_CLASS_NAME = '';

const DiffCurrencyDenominationTable = ({
  className = DEFAULT_CLASS_NAME,
}: Props) => {
  const diffCurrencyDenominations = useUnit($diffCurrencyDenominations);
  const newCurrencyDenominations = useUnit($newCurrencyDenominations);
  const oldCurrencyDenominations = useUnit($oldCurrencyDenominations);
  const oldAmountField = useUnit($oldAmountField);

  useEffect(() => {
    calculateDiffCurrencyDenominations();
  }, [newCurrencyDenominations, oldCurrencyDenominations]);

  return (
    <>
      {diffCurrencyDenominations.length !== 0 && (
        <div className={className}>
          <div className='flex justify-between'>
            <p className='text-left'>Differenz zu</p>
            <p className='text-right'>
              {parseFloat(oldAmountField).toFixed(2).replace('.', ',')} €
            </p>
          </div>
          <table className='h-fit border border-gray-400 text-sm'>
            <thead className='sticky top-0 border-b border-gray-400 bg-white/75'>
              <tr>
                <th
                  scope='col'
                  className='border-r border-gray-400 p-4 text-center font-medium'
                >
                  Schein / Münze
                </th>
                <th scope='col' className='p-4 text-center font-medium'>
                  Differenz
                </th>
              </tr>
            </thead>
            <tbody>
              {diffCurrencyDenominations.map((item, key) => {
                return (
                  <tr
                    key={key}
                    className='border-b border-gray-400 bg-cyan-400/10'
                  >
                    <th
                      scope='row'
                      className='border-r border-gray-400 px-4 py-2 text-right font-normal'
                    >
                      {item.name}
                    </th>
                    <th
                      scope='row'
                      className='px-4 py-2 text-center font-normal'
                    >
                      {item.diff}
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default DiffCurrencyDenominationTable;
