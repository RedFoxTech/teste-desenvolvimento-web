export const calculateStatusPercentage = ( status: number ) => {
    const maxValue = 500;

    const percentage = (status / maxValue) * 100;

    return Math.trunc(percentage);
}