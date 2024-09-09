import CalculationModeSwitcher from '@/features/calculation-mode-switcher';
import { GitHubIcon } from '@/shared/ui/icons/GitHub';
import { LogoIcon } from '@/shared/ui/icons/Logo';
import styles from '@/widgets/header/styles.module.scss';

const Header = () => {
  return (
    <div className='flex h-16 items-center justify-between'>
      <LogoIcon />

      <div className='items-center text-center'>
        <p className='text-lg font-medium'>Calculate on </p>

        <div className='flex items-center'>
          <p className='mr-4 font-medium'>Frontend</p>
          <CalculationModeSwitcher />
          <p className='ml-4 font-medium'>Backend</p>
        </div>
      </div>

      <a
        href='https://github.com/daniel-dikiy/currency-denomination-app-test-task'
        target='_blank'
        rel='noreferrer'
      >
        <GitHubIcon className={styles.linkIcon} />
      </a>
    </div>
  );
};

export default Header;
