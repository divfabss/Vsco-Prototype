const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 5

for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}


const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

let isFollowing = false;
let clickCount = 0;

button.addEventListener('click', () => {
    if (!isFollowing) {
        follow();
    } else {
        clickCount++;
        if (clickCount === 2) {
            unfollow();
            clickCount = 0; // Reiniciar contador después de "Unfollow"
        }
    }
});

function follow() {
    isFollowing = true;
    createNotification('Following', 'success');
    button.textContent = 'Unfollow';
}

function unfollow() {
    isFollowing = false;
    createNotification('Unfollow', 'error');
    button.textContent = 'Follow';
}

function createNotification(message, type) {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type);

    notif.innerText = message;

    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}