export const formatCurrency = (amount: number) => {
  const formattedAmount = amount.toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  
  return formattedAmount;
}

export const priceSplitter = (number: number) => {
  return number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
