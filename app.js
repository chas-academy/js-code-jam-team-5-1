const api_url = "https://opentdb.com/api.php?amount=10";

/*async function getQuiz(url) {

  try {
    const response = await fetch(url);
    let data = await response.json();
  } catch (error) {
    console.log(error);
  }
  div.innerHTML = data[0];
}
getQuiz(api_url);*/
const div = document.querySelector(".container");
fetch(api_url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    div.innerHTML = data.results[0].question;

    data.results[0].incorrect_answers.map((item) => {
      const button = document.createElement("button");
      document.body.appendChild(button);
      button.innerHTML = item;
      button.addEventListener("click", () => {
        alert("Incorrect");
      });
    });
    const button1 = document.createElement("button");
    document.body.appendChild(button1);
    button1.innerHTML = data.results[0].correct_answer;
    button1.addEventListener("click", () => {
      alert("Correct");
    });
  });
