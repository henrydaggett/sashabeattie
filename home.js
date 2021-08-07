const links = document.getElementById('project-list').querySelectorAll('a')
const img = document.getElementById('project-img')

links[0].onmouseover = () => {img.style.backgroundImage = 'url("Images/Home/hapa.jpg")'}
links[1].onmouseover = () => {img.style.backgroundImage = 'url("Images/Home/ama.png")'}
links[2].onmouseover = () => {img.style.backgroundImage = 'url("Images/Home/plastic.JPG")'}
links[3].onmouseover = () => {img.style.backgroundImage = 'url("Images/Home/foodporn.jpg")'}
links[4].onmouseover = () => {img.style.backgroundImage = 'url("Images/Home/librarycard.JPG")'}