let today = (new Date().getDay() - 1 == -1) ? 6 : new Date().getDay() - 1;
function getSeconds() { return new Date().getSeconds() }
function getMinutes() { return new Date().getMinutes() }
function getHours() { return new Date().getHours() }

module.exports = { today, getSeconds, getMinutes, getHours }