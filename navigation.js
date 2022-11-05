const menuButton = document.getElementById('menu-button')
const sbLogo = document.getElementById('SB-logo')
const mobileMenuLinks = document.getElementById('mobile-menu-links')

const toggleMenu = () => {
  sbLogo.classList.toggle('hidden')
  mobileMenuLinks.classList.toggle('hidden')
}
