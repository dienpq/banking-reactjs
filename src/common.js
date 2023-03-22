export const generateRandomNumber = (count) => {
    const randomNumber = Math.floor(Math.random() * 1000000);
    const paddedNumber = randomNumber.toString().padStart(count, '0');
    return paddedNumber;
}