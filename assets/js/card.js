const cards = document.querySelectorAll(".card-content");
const btns = document.querySelectorAll(".btn-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((featured) => featured.classList.remove("featured"));
    card.classList.add("featured");
  });
});

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const confirmed = confirm("Ainda não tem funcionalidade!");

    if(confirmed){
        console.log("Usúario clicou em Ok")
    }else{
        console.log("Usúario clicou em cancelou")
    }
  });
});
