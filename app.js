let count = 0;
let display = document.querySelector('#display__counter');
let btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const method = e.currentTarget.classList;
        if(method.contains('decrease')) {
            count--
        } else if (method.contains('increase')) {
            count++
        } else {
            count = 0;
        }

        if(count > 0) {
            display.style.color = 'green';
        } else if (count < 0) {
            display.style.color = 'red';
        } else {
            display.style.color = 'black';
        }

        display.textContent = count;
    })
})