const menu = document.querySelector('.burger-menu')
const lines = document.querySelectorAll(".line")

let menuOpen = false
const SideMenuScreen = document.querySelector('.side-menu-screen')
const SideMenu = document.querySelector('.side-menu')

//eventListener
menu.addEventListener('click', ()=>{
    if (menuOpen === false){
        lines.forEach(line => {
            line.classList.add('clicked')
            line.classList.remove('unclicked')
        })
        SideMenuScreen.style.display = 'block'
        SideMenu.style.setProperty('--translate', '0%')
        window.scrollTo(0, 0); // Scroll to the top
        document.body.style.overflow = 'hidden'; // Disable scrolling
        menuOpen = true
    }
    else {
        lines.forEach(line => {
            line.classList.remove('clicked')
            line.classList.add('unclicked')
        })
        SideMenuScreen.style.display = 'none'
        SideMenu.style.setProperty('--translate', '100%')
        document.body.style.overflow = '';
        menuOpen = false
    }
})

//Handle media query for burger menu
// Define the media query
const mediaQuery = window.matchMedia('(max-width: 600px)');


// Initial check
handleMediaQueryChange(mediaQuery);

// Listen for changes in the media query state
mediaQuery.addListener(handleMediaQueryChange);

//Scaling const
const sqrtValue = Math.sqrt(2);

document.documentElement.style.setProperty('--sqrt-value', sqrtValue);
