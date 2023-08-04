function woh(){

const typewriter = new Typewriter(document.getElementById('typewriter'), {
    loop: true
});

typewriter.typeString('I '+'am Youssef')
    .pauseFor(1000)
    .deleteChars(8)
    .typeString(' a Front End Web Developer')
    .pauseFor(500)
    .deleteChars(30)
    .pauseFor(500)
    .typeString('I Worked on various and successful projects')
    .deleteAll()
    .start();}