import { useUnit } from 'effector-react';

import {
  $isBackendMode,
  setCalculationMode,
} from '@/features/calculation-mode-switcher/model';
import { Switcher } from '@/shared/ui/components/Switcher';

const CalculationModeSwitcher = () => {
  const isBackendMode = useUnit($isBackendMode);

  return <Switcher checked={isBackendMode} onChange={setCalculationMode} />;
};

export default CalculationModeSwitcher;
