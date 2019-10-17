
let linkEls = document.querySelectorAll('a')

linkEls.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.border='1px solid black'
    })
})

linkEls.forEach(link => {
    link.addEventListener('mouseout', function() {
        this.style.border=''
    })
})
