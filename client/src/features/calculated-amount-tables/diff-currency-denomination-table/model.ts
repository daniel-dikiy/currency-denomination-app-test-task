import { createEvent, createStore, sample } from 'effector';

import {
  $currencyDenominations,
  $newCurrencyDenominations,
  $oldCurrencyDenominations,
} from '@/entities/currency-denominations/model';

export const calculateDiffCurrencyDenominations = createEvent();

export const $diffCurrencyDenominations = createStore<
  { name: string; diff: string }[]
>([]);

sample({
  clock: calculateDiffCurrencyDenominations,
  source: {
    currencyDenominations: $currencyDenominations,
    newCurrencyDenominations: $newCurrencyDenominations,
    oldCurrencyDenominations: $oldCurrencyDenominations,
  },
  fn: ({
    currencyDenominations,
    newCurrencyDenominations,
    oldCurrencyDenominations,
  }) => {
    const diffCurrencyDenominations = [];

    for (let i = 0; i < currencyDenominations.length; i++) {
      let diff = '';

      const newCurrencyDenomination = newCurrencyDenominations.find(
        denomination => denomination.name === currencyDenominations[i].name,
      );

      const oldCurrencyDenomination = oldCurrencyDenominations.find(
        denomination => denomination.name === currencyDenominations[i].name,
      );

      if (newCurrencyDenomination && oldCurrencyDenomination) {
        const calculationResult =
          newCurrencyDenomination.count - oldCurrencyDenomination.count;
        diff =
          calculationResult > 0
            ? `+${calculationResult}`
            : calculationResult.toString();
      } else if (newCurrencyDenomination) {
        diff = `+${newCurrencyDenomination.count}`;
      } else if (oldCurrencyDenomination) {
        diff = `-${oldCurrencyDenomination.count}`;
      }

      if (diff) {
        diffCurrencyDenominations.push({
          name: currencyDenominations[i].name,
          diff: diff,
        });
      }
    }

    return diffCurrencyDenominations;
  },
  target: $diffCurrencyDenominations,
});
