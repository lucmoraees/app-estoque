import removeMasks from './remove-masks';

const correctValueVanilla = (value: string): string => {
  const valueSemMask = removeMasks(value);
  const valueFloat = parseFloat(valueSemMask).toFixed(2);
  const valueEmPorcentagem = Number(valueFloat) / 100;
  const correctValue = parseFloat(String(valueEmPorcentagem)).toFixed(2);
  return correctValue;
};

export default correctValueVanilla;
