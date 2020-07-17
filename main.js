// Инициализация маски для поля ввода номера телефона
new InputMask({
  number: "_XdDmMyY9",
  letter: "?",
});

const form = document.querySelector("form");
const tel = document.getElementById("tel");
const button = document.querySelector(".button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  button.textContent = "ОТПРАВЛЯЕМ...";
  const phone = tel.value;
  fetch("http://localhost/", {
    method: "post",
    body: { phone },
  })
    .then((res) => {
      button.textContent = "ОТПРАВИТЬ ЗАЯВКУ";
      alert("Заявка успешно отправленна 😀");
    })
    .catch((err) => {
      button.textContent = "ОТПРАВИТЬ ЗАЯВКУ";
      alert("Не удалось отправить заявку 😥");
    });
});
