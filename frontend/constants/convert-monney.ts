export const ConvertMoney = (price:string) => {
    const number = parseFloat(price);
    return new Intl.NumberFormat('vi-VN').format(number);
}