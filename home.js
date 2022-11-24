const links = document.getElementById('project-list').querySelectorAll('a')
const img = document.getElementById('project-img')

links[0].onmouseover = () => {
  img.style.backgroundImage = 'url("Images/Home/tutor-the-nation-cover.png")'
  img.style.backgroundColor = ''
}
links[1].onmouseover = () => {
  img.style.backgroundImage = 'url("Images/Home/drew_cover.png")'
  img.style.backgroundColor = ''
}
links[2].onmouseover = () => {
  img.style.backgroundImage = 'url("Images/Home/danclairs-cover.png")'
  img.style.backgroundColor = '#ECE6D4'
}
links[3].onmouseover = () => {
  img.style.backgroundImage = 'url("Images/Home/amas_cover.png")'
  img.style.backgroundColor = '#EF856F'
}
