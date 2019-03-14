const clockPlaceholder = document.querySelector('.clock');
setInterval(() => clockPlaceholder.innerText = (new Date()).toLocaleTimeString(), 1000);