/**
 * Formats a string by converting its case based on its length:
 * - If the string is 3 or 4 characters, convert it to uppercase.
 * - If the string is longer than 4 characters, capitalize the first letter and make the rest lowercase.
 *
 * @param input - The string to format.
 * @returns The formatted string.
 */
export const formatBankName = (input: string): string => {
  if (input.length === 3 || input.length === 4) {
    return input.toUpperCase();
  }
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
};

/**
 * Formats a number as Rupiah (IDR).
 *
 * @param amount - The number to format.
 * @returns The formatted Rupiah string.
 */
export const formatRupiah = (amount: number): string => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0, // No decimal places
  });
  return formatter.format(amount);
};

/**
 * Formats a date string to the format '11 Desember 2024'.
 *
 * @param dateString - The date string to format (e.g., '2024-12-11 19:33:15').
 * @returns The formatted date string.
 */
export const formatDate = (dateString: string): string => {
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
