import { createEvent, createStore, sample } from 'effector';

import {
  $newCurrencyDenominations,
  calculateOnClient,
  setNewCurrencyDenominations,
  setOldCurrencyDenominations,
} from '@/entities/currency-denominations/model';
import {
  $amountField,
  setAmountFieldError,
} from '@/features/amount-calculation-form/amount-field/model';
import { $isBackendMode } from '@/features/calculation-mode-switcher/model';
import { calculateOnServer } from '@/shared/api/currency-denominations';

export const calculateAmount = createEvent();

export const setNewAmountField = createEvent<string>();
export const $newAmountField = createStore('0.00');

export const setOldAmountField = createEvent<string>();
export const $oldAmountField = createStore('0.00');

sample({ clock: setNewAmountField, target: $newAmountField });
sample({ clock: setOldAmountField, target: $oldAmountField });

calculateAmount.watch(async () => {
  const amountField = $amountField.getState();
  const newAmountField = $newAmountField.getState();
  const regex = /^(?!0(\.0{1,2})?$)\d+(\.\d{1,2})?$/;
  if (regex.test(amountField)) {
    setAmountFieldError(false);

    const isBackendMode = $isBackendMode.getState();
    if (isBackendMode) {
      try {
        const result = await calculateOnServer(amountField);
        setOldCurrencyDenominations($newCurrencyDenominations.getState());
        setNewCurrencyDenominations(result);
        setOldAmountField(newAmountField);
        setNewAmountField(amountField);
      } catch (error) {
        console.error('Error calculating on server:', error);
      }
    } else {
      setOldAmountField(newAmountField);
      setNewAmountField(amountField);
      calculateOnClient(amountField);
    }
  } else {
    setAmountFieldError(true);
  }
});
