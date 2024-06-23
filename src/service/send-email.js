(function () {
  emailjs.init({ publicKey: "cZe79OJb1dpgeKLxw" });
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs
      .sendForm("service_lz3zb2q", "template_15lkr1k", this)
      .then(function () {
        console.log("success");
        alert("Email enviado com sucesso");
      }),
      function (error) {
        console.log("error", error);
      };
  });
