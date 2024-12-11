export const formatNumber = (input) => {
    // Chuyển đổi input thành số nếu nó là chuỗi
    const number = typeof input === 'string' ? parseFloat(input) : input;
  
    // Kiểm tra nếu số hợp lệ, nếu không trả về chuỗi rỗng hoặc giá trị mặc định
    if (isNaN(number)) {
      return '';
    }
  
    return new Intl.NumberFormat('de-DE').format(number);
  };