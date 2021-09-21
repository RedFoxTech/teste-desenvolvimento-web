export const calculateStateTotal = (
  atk: number,
  def: number,
  sta: number,
): number => Math.round(((atk + def + sta) / 45) * 100) / 100;
