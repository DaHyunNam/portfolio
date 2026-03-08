// 경력 일수 계산 함수 (2022.01.03 기준)
export const calculateDayCount = (): number => {
  const startDate = new Date(2022, 0, 3); // 2022년 1월 3일
  const today = new Date();
  const diffTime = today.getTime() - startDate.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};
