const { Dimensions } = require("react-native");

const { width, height } = Dimensions.get('window')

let today = (new Date().getDay() - 1 == -1) ? 6 : new Date().getDay() - 1;
function getSeconds() { return new Date().getSeconds() }
function getMinutes() { return new Date().getMinutes() }
function getHours() { return new Date().getHours() }
const resStyle = {
  h500: height / 1.9,
  h320: height / 2.75,
  h280: height / 3.3,
  h200: height / 3.9,
  h90: height / 10,
  h75: height / 15,
  v220: width / 2.5,
  v150: width / 3.6,
  v80: width / 7.5,
  v75: width / 7.04,
  v40: width / 15,
  v35: width / 17,
  v30: width / 20,
  v25: width / 23.5,
  v20: width / 27,
  v18: width / 31,
  v15: width / 35,
  v10: width / 40,
  v5: width / 80,
  v2: width / 200,
}

const headerOptions = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#0277fa",
    height: resStyle.h75,
    elevation: 0,
  }
}

module.exports = { today, getSeconds, getMinutes, getHours, resStyle, headerOptions }