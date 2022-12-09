let header = document.querySelector(".header");

window.onscroll = () => {
  menu.classList.remove("close");
  navbar.classList.remove("active");

    if (window.scrollY > 120) {
        header.classList.add("active");
    }else {
        header.classList.remove("active");
    }
}

let menu = document.querySelector(".menu");
let navbar = document.querySelector(".navbar");
menu.onclick = () =>{
    menu.classList.toggle("close");
    navbar.classList.toggle("active");
    header.classList.add("active")
}

// when nav link is clicked add active class
// remove current active class
let navLink = document.querySelectorAll(".header .container .navbar .nav li a");
Array.from(navLink).forEach((item, index) => {
  item.onclick = (e) => {
    let currentNavLink = document.querySelector(".header .container .navbar .nav li a.active");
    currentNavLink.classList.remove("active");
    e.target.classList.add("active");
    navbar.classList.remove("active");
    menu.classList.remove("close");
  }
})


 