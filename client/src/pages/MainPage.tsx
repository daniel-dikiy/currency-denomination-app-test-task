import AmountCalculation from '@/widgets/amount-calculation/index';
import CalculatedAmount from '@/widgets/calculated-amount';
import Header from '@/widgets/header/index';

const MainPage = () => {
  return (
    <>
      <Header />
      <AmountCalculation />
      <CalculatedAmount className='pt-4' />
    </>
  );
};

export default MainPage;
