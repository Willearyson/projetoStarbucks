function openMenu(){
    let menuArea = document.querySelector('nav')
    if (menuArea.style.display == 'block'){
        menuArea.style.display = 'none'
    } else{
        menuArea.style.display = 'block'
    }
}