const calendarPlaceholder = document.querySelector('.calendar');
setInterval(() => calendarPlaceholder.innerText = (new Date()).toLocaleDateString(), 1000);

const clockPlaceholder = document.querySelector('.clock');
setInterval(() => clockPlaceholder.innerText = (new Date()).toLocaleTimeString(), 1000);