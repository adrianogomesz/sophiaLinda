const daysContainer = document.querySelector('#days');
const hoursContainer = document.querySelector('#hours');
const minutesContainer = document.querySelector('#minutes');
const secondsContainer = document.querySelector('#seconds');

const timeNow = new Date('November 22 2023 01:49');
const dateTime = new Date('November 23 2023 18:40:00');

console.log(timeNow);

console.log(dateTime);

const updateCountdown = () => {

    const currentTime = new Date()
    const difference = dateTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    daysContainer.textContent = days < 10 ? '0' + days : days
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds

};

setInterval(updateCountdown, 1000);