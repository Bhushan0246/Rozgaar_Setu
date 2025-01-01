//toggle the Search bar in navigation bar
let navSearchBtn = document.querySelector('#nav-search');
let navSearchItem = document.querySelector('#search-item');
let navSearchStatus = "0";
const toggleSearchItem = () => {
    if(navSearchStatus === '0'){
        navSearchStatus = 'min(8vh, 8vw)';
        navSearchBtn.classList.add("fa-close");
        navSearchBtn.classList.remove("fa-search");
    }
    else{
        navSearchStatus = '0';
        navSearchBtn.classList.add("fa-search");
        navSearchBtn.classList.remove("fa-close");
    }
    navSearchItem.style.marginTop = navSearchStatus;
};
navSearchBtn.addEventListener("click", toggleSearchItem);

//underlining the active link
let active = document.querySelectorAll(".nav-item");
const highlightNavLink = (requestActive) => {
    let currActive = document.querySelector(".active-nav-link");
    let reqId = requestActive.getAttribute("id")
    if(reqId != "btn-login" && reqId != "nav-search" && reqId != "logo"){
        requestActive.classList.add("active-nav-link");
        if(currActive != requestActive)
            currActive.classList.remove("active-nav-link");
    }
};
for(let activeItem of active){
    activeItem.addEventListener("click", () => {
        highlightNavLink(activeItem);
    });
}