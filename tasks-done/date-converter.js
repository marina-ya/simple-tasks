/*
write a function with a following signature: (Number[, Object]) -> String
given time period in seconds convert it into number of: days & hours & minutes

number of hours & minutes should be presented in double digit format

return only parts that are valid for the user, eg:
when time in seconds is 600 do not include days & hours part in the result, 
if number of days is greater than 0, number of hours is 0 and minutes are greater than 0, leave number of hours as "00"
result format: d-hh-mm-ss eg. 12d 16h 05m 12s

when number of seconds is falsy, return empty string

second optional parameter - Object has the following shape:
{ days: "d", hours: "h", minutes: "m", seconds: "s" }
if it wasn't supplied - set default for the one specified above,
use this object to name time units in the result string
please remember about tests
*/


function dateConverter(timeSeconds, dateFormat) {
    if (isNaN(timeSeconds) || timeSeconds==null ) {
        return " ";
    }
    if (dateFormat === undefined) {
        dateFormat = {
            days: "d",
            hours: "h",
            minutes: "m",
            seconds: "s"
        };
    }

    var sec_num = parseInt(timeSeconds, 10); // don't forget the second param
    var days = Math.floor(sec_num / 86400);
    var hours = Math.floor((sec_num - (days * 86400)) / 3600);
    var minutes = Math.floor((sec_num - (days * 86400) - (hours * 3600)) / 60);
    var seconds = sec_num - (days * 86400) - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    var resultTime = days + dateFormat.days + ' ' + hours + dateFormat.hours + ' ' + minutes + dateFormat.minutes + ' ' + seconds + dateFormat.seconds;
    if (days == 0) {
        var resultTime = hours + dateFormat.hours + ' ' + minutes + dateFormat.minutes + ' ' + seconds + dateFormat.seconds;
        if (hours == 0) {
            var resultTime = minutes + dateFormat.minutes + ' ' + seconds + dateFormat.seconds;
        }
    }

    console.log(resultTime);
    return resultTime;
}

dateConverter("5565", {
    days: "d",
    hours: "h",
    minutes: "m",
    seconds: "s"
});

module.exports = dateConverter;