export const formatterCurrency = (currency: string | number) => {
    return Number(currency).toLocaleString(
        'pt-BR',
        { style: 'currency', currency: 'BRL' },
      )
}