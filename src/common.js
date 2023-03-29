export const generateRandomNumber = (count) => {
    const randomNumber = Math.floor(Math.random() * 1000000);
    const paddedNumber = randomNumber.toString().padStart(count, '0');
    return paddedNumber;
}

export const formatDataObject = (attr, attrOther) => {
    let result = ""
    Object.keys(attr).filter(key => attr[key]).map((key) => {
        result += (key === "other" ? attrOther : key) + "|";
    })
    return result.slice(0, -1)
}