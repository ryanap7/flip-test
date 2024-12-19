import useDebounce from '@hooks/useDebounce';
import useTransactionStore from '@stores/useTransactionStore';
import axios from 'axios';
import {useCallback, useEffect} from 'react';

const useTransactions = (endpoint: string) => {
  const {setTransactions, setLoading, searchQuery}: any = useTransactionStore(
    (state: any) => state,
  );

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const fetchTransactions = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.get(endpoint);
      const rawData = response.data;

      const formattedData = Object.keys(rawData).map(key => rawData[key]);

      // Filter transactions based on the debounced search query
      const filteredTransactions = formattedData.filter(transaction => {
        const queryLower = debouncedSearchQuery.toLowerCase();

        // Filter by bank name (sender or beneficiary), beneficiary name, or amount
        return (
          transaction.sender_bank.toLowerCase().includes(queryLower) ||
          transaction.beneficiary_bank.toLowerCase().includes(queryLower) ||
          transaction.beneficiary_name.toLowerCase().includes(queryLower) ||
          transaction.amount.toString().includes(queryLower)
        );
      });

      setTransactions(filteredTransactions);
    } catch (err) {
      console.error('Something went wrong:', err);
    } finally {
      setLoading(false);
    }
  }, [endpoint, debouncedSearchQuery, setTransactions, setLoading]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);
};

export default useTransactions;
