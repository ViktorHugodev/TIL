import Countdown from './countdown.js'

const tempoParaONatal = new Countdown('24 December 2021 23:59:59 GMT-0300');
const tempoParaNiver = new Countdown('28 April 2022 23:59:59 GMT-0300');

console.log(tempoParaONatal.total, tempoParaNiver.total)
// setInterval(() => {
//   console.log(tempoParaONatatotal);
// }, 1000)
// console.log(diasParaONatal.hours);