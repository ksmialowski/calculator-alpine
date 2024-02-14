function getTime() {
    const today = new Date();
    const hours = today.getHours();
    let minutes = today.getMinutes();

    const singleDigits = [];
    for (let i = 0; i <= 9; i++) {
        singleDigits.push(i);
    }

    if (singleDigits.includes(minutes)) {
        minutes = '0' + minutes;
    }

    return hours + ":" + minutes;
}
