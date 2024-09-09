import { createEvent, createStore, sample } from 'effector';

export const setCalculationMode = createEvent<boolean>();
export const $isBackendMode = createStore(false);

sample({ clock: setCalculationMode, target: $isBackendMode });
