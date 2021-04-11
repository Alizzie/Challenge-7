// Selecting Elements
const arrows = Array.from(document.getElementsByTagName("img")).slice(2,7);
const questions = Array.from(document.getElementsByClassName("question"));
const answers = Array.from(document.getElementsByClassName("answer"));
const questionHeading = Array.from(document.getElementsByTagName("h4"));

// Hide/ Show answer when question is clicked

// Collapsing all
function collapseAll () {
   answers.forEach(answer => answer.classList.remove("showAnswer"));
   arrows.forEach(arrow => arrow.classList.remove("rotateArrow"));
   questionHeading.forEach(heading => heading.classList.remove("bold"));
   return true;
}

// open one
for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function(){

    if (answers[i].classList[1] === "showAnswer") {
      collapseAll();
    } else {
      collapseAll();
      answers[i].classList.add("showAnswer");
      arrows[i].classList.add("rotateArrow");
      questionHeading[i].classList.add("bold");
    }

  })
}
