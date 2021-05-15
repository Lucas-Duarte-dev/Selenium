export const percents = (x: number, y: number): string => {
  // Regra de três proporcional
  const calculate = (100 * y) / x;

  return `%${calculate.toFixed(2)}`;
}
