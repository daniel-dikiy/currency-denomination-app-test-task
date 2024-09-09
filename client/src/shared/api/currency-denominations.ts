import axios from 'axios';

export interface currencyDenomination {
  name: string;
  value: number;
  count: number;
}

export const calculateOnServer = async (
  amountValue: string,
): Promise<currencyDenomination[]> => {
  const response = await axios.post(
    'http://localhost:8080/api/currencyDenomination/findExistingCurrencyDenominations',
    { amountValue: amountValue },
  );
  return response.data;
};

export const getAll = async (): Promise<currencyDenomination[]> => {
  const response = await axios.get(
    'http://localhost:8080/api/currencyDenomination/getAll',
  );
  return response.data;
};
