import {Transaction} from 'src/Types/data';

export interface TransactionStore {
  transactions: Transaction[];
  setTransactions: (transactions: Transaction[]) => void;
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}
