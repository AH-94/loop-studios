const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');
const loadInItems = document.querySelectorAll('.load-in');
const slideInItems = document.querySelectorAll('.slide-in');

console.log(slideInItems);


loadInItems.forEach(item => {
    setTimeout(function() {
        item.classList.add('show');
    }, item.dataset.delay);
});

function openModal() {
    modal.classList.add('open');
}

function closeModal() {
    modal.classList.remove('open');
}


function slideIn() {
    slideInItems.forEach(item => {
        const slideInAt = (window.scrollY + window.innerHeight) - (item.scrollHeight / 2);

        const isHalfVisible = slideInAt > item.offsetTop;

        const itemBottom = item.offsetTop + item.scrollHeight;

        const isNotScrolledPast = window.scrollY < itemBottom;

        if (isHalfVisible && isNotScrolledPast) {
           item.classList.add('show');
        }
    })
}

hamburger.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('scroll', slideIn);