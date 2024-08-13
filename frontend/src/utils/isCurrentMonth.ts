function isCurrentMonth(data: string) {
    const currentMonth = new Date().getMonth() + 1;
    const month = new Date(data).getMonth() + 1;

    const verifyDate = (month != currentMonth) ? true : false;

    return verifyDate;
}

export default isCurrentMonth;