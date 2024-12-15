export const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };
  
  export const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString();
  };