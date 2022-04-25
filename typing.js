document.addEventListener("DOMContentLoaded", () => {
  const mainTitle = document.querySelector(".main-text");
  new TypeIt(mainTitle)
      .pause(4000)
      .type('produced by')
      .pause(2000)
      .type(' mizzu ')
      .delete(6, {delay: 1000})
      .type('<br>project-mizzu ')
      .go();
})

document.addEventListener("DOMContentLoaded", () => {
  const endTitle = document.querySelector("h2");
    new TypeIt(endTitle)
      .type("Finally, I will find a new planet. ")
      .pause(4000)
      .delete(35)
      .pause(4000)
      .type("Finally, I will find a new planet. ")
      .go();
})