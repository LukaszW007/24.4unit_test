const reg = /(\d*)\.(\d*)/;

/*function display(hour,minute,second){
    if (hour === 0) {
         let toDisplay= `${minute}m ${second}s`;
         console.log(toDisplay);
    }
    if (minute === 0) {
         toDisplay= `${hour}h ${second}s`;
    }
    if (second === 0) {
         let toDisplay= `${hour}h ${minute}m `;
        console.log(toDisplay);

    }
    if (second === 0 && minute===0) {
         toDisplay= `${hour}h `;
    }
    if (second === 0 && hour===0) {
         toDisplay= `${minute}m `;
    }
    if (hour === 0 && minute===0) {
         toDisplay= `${second}s `;
    }
    console.log('ile: '+toDisplay);
    return toDisplay;
}*/
function hours(time) {
    const splitToHourAndFraction = (time / 3600);
    const timeDividedToHoursAndFraction = reg.exec(splitToHourAndFraction);
    const hour = timeDividedToHoursAndFraction[1];
    const minutesInSeconds = (timeDividedToHoursAndFraction[0] - hour ) * 60;
    const timeDividedToMinutesAndFraction = reg.exec(minutesInSeconds);
    const minute = timeDividedToMinutesAndFraction[1];
    const secondAndFraction = reg.exec((timeDividedToMinutesAndFraction[0] - minute) * 60);
    const second = secondAndFraction[1];
    console.log(hour, minute, second);
    if (hour === 0) {
        return `${minute}m ${second}s`;
    }
    if (minute === 0) {
        return `${hour}h ${second}s`;
    }
    if (second === 0) {
        return `${hour}h ${minute}m `;
    }
    if (second === 0 && minute===0) {
        return `${hour}h `;
    }
    if (second === 0 && hour===0) {
        return `${minute}m `;
    }
    if (hour === 0 && minute===0) {
        return `${second}s `;
    }
}

const formatDate = (timeInSeconds) => {
    console.log('w sekundach: ' + timeInSeconds);
    return hours(timeInSeconds);

};

module.exports = formatDate;

