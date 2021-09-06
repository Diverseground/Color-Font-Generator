const btn = document.querySelector('#btn');
const header = document.querySelector('#header');
const subheader = document.querySelector('.subheader')
btn.addEventListener('click', () =>{
    let red = Math.floor(Math.random() * 255) + 1;
    let green = Math.floor(Math.random() * 255) + 1;
    let blue = Math.floor(Math.random() * 255) + 1;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})
btn.addEventListener('click', () =>{
    const newColor = randColor()
    const newFont = randFont()
    header.style.color = newColor;
    header.style.fontWeight = `${Math.floor(Math.random()* 900)+ 1}`
    header.style.fontFamily = newFont;

})

btn.addEventListener('click', () =>{
    const newFont = randFont()
    subheader.style.fontFamily = newFont;
    subheader.style.color = 'white'
})

const randColor = () =>{
    let red = Math.floor(Math.random() * 255) + 1;
    let green = Math.floor(Math.random() * 255) + 1;
    let blue = Math.floor(Math.random() * 255) + 1;
    return `rgb(${red}, ${green}, ${blue})`
}
const randFont = () => {
    let fontType = [ "Arial", "Verdana", "Helvetica", 'Allison', 'Bebas Neue', 'Merriweather', 'Roboto'];
    let num = Math.floor(Math.random()*7);
    return fontType[num]
}