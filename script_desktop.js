//toggle the Search bar in navigation bar
let secondNavbar = document.querySelector('#search-item');
let translate = document.querySelector('#fa-language');
let langStatus = " हिंदी";
const toggleTranslate = () => {
    if(langStatus === ' हिंदी'){
        langStatus = ' English';
        translate.innerText = langStatus;
    }
    else{
        langStatus = ' हिंदी';
        translate.innerText = langStatus;
    }
};
translate.addEventListener("click", toggleTranslate);

//underlining the active link
let active = document.querySelectorAll(".nav-links");
const highlightNavLink = (requestActive) => {
    let currActive = document.querySelector(".active-nav-link");
    let reqId = requestActive.getAttribute("id");
        requestActive.classList.add("active-nav-link");
        if(currActive != requestActive)
            currActive.classList.remove("active-nav-link");
};
for(let activeItem of active){
    activeItem.addEventListener("click", () => {
        highlightNavLink(activeItem);
    });
}