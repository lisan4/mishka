import './scss/style.scss';


function openclose() {
    const navbutton = document.querySelector(".page-header__toggle");
    const nav = document.querySelector(".main-nav");

    navbutton.addEventListener("click", function () {
        if (nav.classList.contains("main-nav--closed")) {
            nav.classList.remove("main-nav--closed");
            nav.classList.add("main-nav--opened");
        } else {
            nav.classList.add("main-nav--closed");
            nav.classList.remove("main-nav--opened");
        }
    })
}
openclose();

function sentForm() {
    const main = document.querySelector('main');

    if (main.classList.contains('page-form')) {
        const form = document.querySelector('form');
    
        function postData(form) {
    
            const formData = new FormData(form);
    
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
           
            console.log(json);
    
            form.reset();
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            postData(form);
        })
    }
    
}
sentForm();
<<<<<<< HEAD

=======
>>>>>>> f6efa1d587a6f7a8b35fc0ce995a71c6d2fa69f8
