const moneyMask = (value: number | string): string => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatter.format(Number(value) || 0);
};

export default moneyMask;
