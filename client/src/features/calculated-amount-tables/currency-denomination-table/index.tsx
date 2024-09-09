import { useUnit } from 'effector-react';
import { useEffect } from 'react';

import {
  $currencyDenominations,
  fetchCurrencyDenominationsFx,
} from '@/entities/currency-denominations/model';

const CurrencyDenominationTable = () => {
  const currencyDenominations = useUnit($currencyDenominations);

  useEffect(() => {
    fetchCurrencyDenominationsFx();
  }, []);

  return (
    <table className='border border-gray-400 text-sm'>
      <thead className='sticky top-0 border-b border-gray-400 bg-white/75'>
        <tr>
          <th scope='col' className=' p-4 text-center font-medium'>
            Schein / Münze
          </th>
        </tr>
      </thead>
      <tbody>
        {currencyDenominations.map((item, key) => {
          return (
            <tr key={key} className='border-b border-gray-400 bg-cyan-400/10'>
              <th scope='row' className='px-4 py-2 text-right font-normal'>
                {item.name}
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CurrencyDenominationTable;
