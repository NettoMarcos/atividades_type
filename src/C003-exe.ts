const quadradoMagico: number[][] = [
  [8, 0, 7],
  [4, 5, 6],
  [3, 10, 2],
];

const verificaQuadradoMagico = (quadrado: number[][]): boolean => {
  const somaLinhas = verificaLinhas(quadrado);
  const somaColunas = verificaColunas(quadrado);
  const somaDiagonais = verificaDiagonais(quadrado);

  if (
    somaLinhas === Infinity ||
    somaColunas === Infinity ||
    somaDiagonais === Infinity
  ) {
    return false;
  }

  return somaLinhas === somaColunas && somaColunas === somaDiagonais;
};

const verificaLinhas = (matriz: number[][]): number => {
  let linhaAnterior: number | undefined;

  for (let i = 0; i < matriz.length; i++) {
    const linhaAtual = matriz[i].reduce(
      (acumulador, valorAtual) => acumulador + valorAtual,
      0
    );
    if (i === 0) {
      linhaAnterior = linhaAtual;
    }
    if (linhaAtual !== linhaAnterior) {
      return Infinity;
    }
    linhaAnterior = linhaAtual;
  }
  return linhaAnterior!;
};

const verificaColunas = (matriz: number[][]): number => {
  let colunaAnterior: number | undefined;

  for (let j = 0; j < matriz[0].length; j++) {
    let somaColuna = 0;
    for (let i = 0; i < matriz.length; i++) {
      somaColuna += matriz[i][j];
    }
    if (j === 0) {
      colunaAnterior = somaColuna;
    }
    if (somaColuna !== colunaAnterior) {
      return Infinity;
    }
  }
  return colunaAnterior!;
};

const verificaDiagonais = (matriz: number[][]): number => {
  let diagonalPrincipal: number = 0;
  let diagonalSecundaria: number = 0;

  for (let i = 0; i < matriz.length; i++) {
    diagonalPrincipal += matriz[i][i];

    diagonalSecundaria += matriz[i][matriz.length - 1 - i];
  }

  if (diagonalPrincipal !== diagonalSecundaria) {
    return Infinity;
  }

  return diagonalPrincipal;
};

for (let i = 0; i < quadradoMagico.length; i++) {
  console.log(quadradoMagico[i]);
}

if (verificaQuadradoMagico(quadradoMagico)) {
  console.log("éssa matriz é um quadrado magico");
} else {
  console.log("éssa matriz não é um quadrado magico");
}
