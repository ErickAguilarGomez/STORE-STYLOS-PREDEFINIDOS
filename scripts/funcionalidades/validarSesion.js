
function iniciarSesion() {
    let user2 = {};
    document.querySelector("#email").addEventListener("input", (event) => {
      user2.email = event.target.value.toLowerCase();
    });
    document.querySelector("#password").addEventListener("input", (event) => {
      user2.password = event.target.value.toLowerCase();
    });
    const getUser = JSON.parse(localStorage.getItem("usuario"));
    console.log(getUser);
    const button = document.querySelector("button");
  
    button.addEventListener("click", (event) => {
      event.preventDefault();
      if(getUser.email == user2.email && getUser.password == user2.password){
          return (window.location.href = "index.html")

      }else{
        alert("Datos incorrectos")
      }



    });

  }
