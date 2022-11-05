const links = document.getElementById('project-list').querySelectorAll('a')
const img = document.getElementById('project-img')

links[0].onmouseover = () => { img.style.backgroundImage = 'url("Images/Home/tutor_the_nation_cover.png")' }
links[1].onmouseover = () => { img.style.backgroundImage = 'url("Images/Home/drew_cover.png")' }
links[2].onmouseover = () => { img.style.backgroundImage = 'url("Images/Home/danclairs_cover.png")' }
links[3].onmouseover = () => { img.style.backgroundImage = 'url("Images/Home/amas_cover.png")' }

const menuButton = document.getElementById('menu-button')
const sbLogo = document.getElementById('SB-logo')
const mobileMenuLinks = document.getElementById('mobile-menu-links')

console.log(menuButton, sbLogo,)
const toggleMenu = () => {
  sbLogo.classList.toggle('hidden')
  mobileMenuLinks.classList.toggle('hidden')
}

