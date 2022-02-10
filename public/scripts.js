const modalOverlay = document.querySelector('.modal-overlay')/*document.querySelector vai selecionar o a tag .modal-overlay */
const cards = document.querySelectorAll('.card')  /* aqui ele seleciona um grupo no caso sera o a Tag card */
const course = document.querySelector('.course')

for (let card of cards) {
    card.addEventListener("click", function () {
        console.log('card clicked', card);
        const blogId = card.getAttribute("id")
        window.location.href = `/courses/${blogId}`
    })
}

course.addEventListener("click", function () {
    console.log('course clicked', course);
    const blogId = course.getAttribute("id")
    window.location.href = `https://blog.rocketseat.com.br/${blogId}`
    console.log('course clicked', blogId);
})




