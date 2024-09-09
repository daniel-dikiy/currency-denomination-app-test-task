import { createEffect, createEvent, createStore, sample } from 'effector';

import {
  currencyDenomination,
  getAll,
} from '@/shared/api/currency-denominations';

export const setCurrencyDenominations = createEvent<
  currencyDenomination[] | []
>();
export const $currencyDenominations = createStore<currencyDenomination[] | []>(
  [],
);
export const fetchCurrencyDenominationsFx = createEffect<
  void,
  currencyDenomination[]
>();

export const setNewCurrencyDenominations = createEvent<
  currencyDenomination[] | []
>();
export const $newCurrencyDenominations = createStore<
  currencyDenomination[] | []
>([]);

export const setOldCurrencyDenominations = createEvent<
  currencyDenomination[] | []
>();
export const $oldCurrencyDenominations = createStore<
  currencyDenomination[] | []
>([]);

sample({ clock: setCurrencyDenominations, target: $currencyDenominations });
sample({
  clock: setNewCurrencyDenominations,
  target: $newCurrencyDenominations,
});
sample({
  clock: setOldCurrencyDenominations,
  target: $oldCurrencyDenominations,
});
sample({
  clock: fetchCurrencyDenominationsFx.doneData,
  target: setCurrencyDenominations,
});

fetchCurrencyDenominationsFx.use(async () => {
  let result: currencyDenomination[] | [] = [];

  try {
    result = await getAll();
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return result;
});

export const calculateOnClient = (amountValue: string) => {
  const currencyDenominations = $currencyDenominations.getState();

  const existingCurrencyDenominations = [];

  let amount = Number(amountValue) * 100;

  for (let i = 0; i < currencyDenominations.length; i++) {
    const count = Math.trunc(amount / currencyDenominations[i].value);

    amount %= currencyDenominations[i].value;

    if (count)
      existingCurrencyDenominations.push({
        name: currencyDenominations[i].name,
        value: currencyDenominations[i].value,
        count: count,
      });
  }

  setOldCurrencyDenominations($newCurrencyDenominations.getState());
  setNewCurrencyDenominations(existingCurrencyDenominations);
};
