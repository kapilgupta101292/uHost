const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const closeModalButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');


if (selectPlanButtons) {
    for(let i=0; i< selectPlanButtons.length; i++ ) {
        selectPlanButtons[i].addEventListener('click', function() {
            // modal.style.display = 'block';
            // backdrop.style.display = 'block';
            modal.classList.add('open');
            backdrop.style.display = 'block';
            
            setTimeout(function(){
                backdrop.classList.add('open');
            }, 10)
        })
    }
}

let closeModal = function() {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    setTimeout(function(){
        backdrop.style.display = 'none';
    }, 200)


};

if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    closeModal();
});


toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(function(){
        backdrop.classList.add('open');
    }, 10)
    
})