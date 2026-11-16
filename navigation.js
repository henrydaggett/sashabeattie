const menuButton = document.getElementById('menu-button')
const sbLogo = document.getElementById('SB-logo')
const mobileMenuLinks = document.getElementById('mobile-menu-links')

const toggleMenu = () => {
  // The home page has no logo in the header, so sbLogo can be null there
  if (sbLogo) sbLogo.classList.toggle('hidden')
  mobileMenuLinks.classList.toggle('hidden')
}
