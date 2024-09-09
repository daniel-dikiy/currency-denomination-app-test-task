import { createEvent, createStore, sample } from 'effector';

import { calculateAmount } from '@/features/amount-calculation-form/amount-button/model';

export const setAmountField = createEvent<string>();
export const $amountField = createStore('0.00');

export const setAmountFieldError = createEvent<boolean>();
export const $amountFieldError = createStore(false);

export const onAmountFieldChange = createEvent<string>();

sample({ clock: setAmountField, target: $amountField });
sample({ clock: setAmountFieldError, target: $amountFieldError });

onAmountFieldChange.watch(value => {
  setAmountField(value);
  if ($amountFieldError) setAmountFieldError(!$amountFieldError);
});

export const handleKeypress = (event: { keyCode: number }) => {
  if (event.keyCode === 13) {
    calculateAmount();
  }
};
