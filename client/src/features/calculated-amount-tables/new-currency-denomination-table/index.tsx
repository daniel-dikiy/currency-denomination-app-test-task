import { useUnit } from 'effector-react';

import { $newCurrencyDenominations } from '@/entities/currency-denominations/model';
import { $newAmountField } from '@/features/amount-calculation-form/amount-button/model';

type Props = {
  className?: string;
};

const DEFAULT_CLASS_NAME = '';

const NewCurrencyDenominationTable = ({
  className = DEFAULT_CLASS_NAME,
}: Props) => {
  const newAmountField = useUnit($newAmountField);
  const newCurrencyDenominations = useUnit($newCurrencyDenominations);

  return (
    <>
      {newCurrencyDenominations.length !== 0 && (
        <div className={className}>
          <div className='flex justify-between'>
            <p className='text-left'>Neue Stücklung</p>
            <p className='text-right'>
              {parseFloat(newAmountField).toFixed(2).replace('.', ',')} €
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
                  Anzahl
                </th>
              </tr>
            </thead>
            <tbody>
              {newCurrencyDenominations.map((item, key) => {
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
                      {item.count}
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

export default NewCurrencyDenominationTable;
