// const clock = document.getElementById('clock');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('second');

const getTime = () => {
        const today = new Date();
        hour.textContent = today.getHours();
        minute.textContent = today.getMinutes();
        seconds.textContent = today.getSeconds();
};

setInterval(getTime, 1000)


