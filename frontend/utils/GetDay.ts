export const GetDay = () => {
    const now = new Date();

    // Lấy các thành phần ngày tháng năm
    const day = now.getDate();
    const month = now.getMonth() + 1; // Cộng thêm 1 vì tháng bắt đầu từ 0
    const year = now.getFullYear();

    // Lấy giờ, phút, giây
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Đảm bảo các số nhỏ hơn 10 có một chữ số 0 phía trước
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    // Định dạng theo kiểu dd/mm/yyyy hh:mm:ss
    const formattedDateTime = `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    return formattedDateTime;
}