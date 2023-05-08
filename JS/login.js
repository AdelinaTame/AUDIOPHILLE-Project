const buttonGetStarted=document.getElementById("startButton");
const emailLogin=document.getElementById("e-mail");
const passwordlLogin=document.getElementById("password");
const loginBox=document.querySelector(".loginBox");

let variable=0;
function checkFunction(){
    const getFromStorage=JSON.parse(localStorage.saveArray);
    for(const element of getFromStorage){
       if( element.email===emailLogin.value && element.password===passwordlLogin.value){
        localStorage.saveEmailUtilizator=emailLogin.value;
        localStorage.saveNumeUtilizator=element.nume;
        variable=1;
        window.open("../PROJECT/desktop-home.html", "_self");
       }
    }

    if(variable===0){
        const wrongInput=document.createElement("p");
        wrongInput.style.position="absolute";
        wrongInput.innerHTML = "Wrong e-mail or password";
        wrongInput.style.position = 'absolute';
        wrongInput.style.left = '60px';
        wrongInput.style.top = '120px';
        wrongInput.style.width = '200px';
        wrongInput.style.color = 'red';
        wrongInput.style.fontFamily="Manrope";
        wrongInput.style.fontStyle="normal";
        wrongInput.style.fontWeight="700";
        wrongInput.style.fontSize="14px";
        wrongInput.style.fontHeight="19px";
        wrongInput.style.letterSpacing="-0.25px";

        loginBox.appendChild(wrongInput);

        emailLogin.style.border="2px solid red";
        passwordlLogin.style.border="2px solid red";
    }
}

buttonGetStarted.addEventListener("click", checkFunction);

////////////////////////////////////////////////////////////////
