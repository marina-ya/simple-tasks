const defaultFormat = {
    days: "d",
    hours: "h",
    minutes: "m",
    seconds: "s"
};

function dateConverter(timeSeconds, dateFormat = defaultFormat) {
    if (!timeSeconds) {
      return "";
    }

    const DAY = 86400;
    const HOUR = 3600;
    const MINUTE = 60;

    const days = parseInt(timeSeconds / DAY);
    let hours = parseInt((timeSeconds - (days * DAY)) / HOUR);
    let minutes = parseInt((timeSeconds - (days * DAY) - (hours * HOUR)) / MINUTE);
    let seconds = timeSeconds - (days * DAY) - (hours * HOUR) - (minutes * MINUTE);
   
    const prependZero = timePeriod => timePeriod < 10 ? `0${timePeriod}` : timePeriod;

    hours  = prependZero(hours);
    minutes = prependZero(minutes);
    seconds = prependZero(seconds);
   
    
    // [].map().filter().reduce() 
    // .map
    // .filter
    // .reduce
     
    let resultTime = `${days}${dateFormat.days} ${hours}${dateFormat.hours} ${minutes}${dateFormat.minutes} ${seconds}${dateFormat.seconds}`;
    if (days === 0) {
         resultTime =`${hours}${dateFormat.hours} ${minutes}${dateFormat.minutes} ${seconds}${dateFormat.seconds}`;
         console.log(hours);
         if (hours === "00") {
            resultTime = `${minutes}${dateFormat.minutes} ${seconds}${dateFormat.seconds}`;
        }
    }
    

    console.log(resultTime);
    return resultTime;
}

dateConverter("abc");

module.exports = dateConverter;