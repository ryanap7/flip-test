import {Transaction} from 'src/Types/data';
import {TransactionStore} from 'src/Types/store';
import {useStore} from 'zustand';
import {createStore} from 'zustand/vanilla';

export const SortOption = {
  NAME_ASC: 'Nama A-Z',
  NAME_DESC: 'Nama Z-A',
  DATE_NEWEST: 'Tanggal Terbaru',
  DATE_OLDEST: 'Tanggal Terlama',
};

// Sorting logic
const sortTransactions = (
  transactions: Transaction[],
  sortOption: string,
): Transaction[] => {
  return [...transactions].sort((a, b) => {
    switch (sortOption) {
      case SortOption.NAME_ASC:
        return a.beneficiary_name.localeCompare(b.beneficiary_name);
      case SortOption.NAME_DESC:
        return b.beneficiary_name.localeCompare(a.beneficiary_name);
      case SortOption.DATE_NEWEST:
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      case SortOption.DATE_OLDEST:
        return (
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        );
      default:
        return 0;
    }
  });
};

// Initial store state
export const InitialStore: TransactionStore = {
  transactions: [],
  searchQuery: '',
  sortOption: SortOption.NAME_ASC,
  loading: false,
  setTransactions: () => {},
  setSearchQuery: () => {},
  setSortOption: () => {},
  setLoading: () => {},
};

export const transactionStore = createStore<TransactionStore>(set => ({
  ...InitialStore,
  setTransactions: (transactions: Transaction[]) => set({transactions}),
  setSearchQuery: (searchQuery: string) => set({searchQuery}),
  setSortOption: (sortOption: string) => {
    set({loading: true});

    setTimeout(() => {
      set(state => ({
        sortOption,
        transactions: sortTransactions(state.transactions, sortOption),
        loading: false,
      }));
    }, 1000);
  },

  setLoading: (loading: boolean) => set({loading}),
}));

// Selector-based hook to interact with the store
const useTransactionStore = (selector: any) =>
  useStore(transactionStore, selector);

export default useTransactionStore;
