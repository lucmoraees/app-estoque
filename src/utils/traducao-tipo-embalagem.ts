const traducaoTipoEmbalagem = (tipoEmbalagem: number): string => {
  switch (tipoEmbalagem) {
    case 1: return 'Unidade';
    case 2: return 'Pack';
    case 3: return 'Caixa';
    default: return '';
  }
};

export default traducaoTipoEmbalagem;
