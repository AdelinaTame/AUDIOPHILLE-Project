const buttonActive = document.getElementById('buttonActive');
const nameSaveRegister = document.getElementById('name');
const emailSaveRegister = document.getElementById('e-mail');
const passwordSaveRegister = document.getElementById('password');
const confirmPasswordSaveRegister = document.getElementById('confirmPassword');

const parentDiv = document.getElementById('formId');

function saveInfo(event) {
    event.preventDefault();

    const registerObject = {
        nume: nameSaveRegister.value,
        email: emailSaveRegister.value,
        password: passwordSaveRegister.value,
        confirm: confirmPasswordSaveRegister.value
    }

    let registerArray;

    if (localStorage.getItem('saveArray') === null) {
        registerArray = [];
    } else {
        registerArray = JSON.parse(localStorage.saveArray);
    }

    const wrongInput = document.getElementById("wrongInputId");
    if (wrongInput != null) {
        emailSaveRegister.style.borderColor = "black";
        wrongInput.remove();
    }

    const wrongPassword = document.getElementById("wrongPassword");
    if (wrongPassword != null) {
        confirmPasswordSaveRegister.style.borderColor = "black";
        passwordSaveRegister.style.borderColor = "black";
        wrongPassword.remove();
    }

    let isValid = 0;

    const pattern = "(.*)@(.*)\.(.*)";
    const result = registerObject.email.match(pattern);
    if (result === null) {
        emailSaveRegister.style.borderColor = "red";
        const wrongInput = document.createElement("p");
        wrongInput.setAttribute("id", "wrongInputId");
        wrongInput.innerHTML = 'Wrong e-mail type';
        wrongInput.style.position = 'absolute';
        wrongInput.style.width = '150px';
        wrongInput.style.top = '242px';
        wrongInput.style.left = '150px';
        wrongInput.style.color = 'red';
        parentDiv.appendChild(wrongInput);

        isValid = 1;
    } else {
        for (const element of registerArray) {
            if (registerObject.email === element.email) {
                emailSaveRegister.style.borderColor = "red";
                const wrongInput = document.createElement("p");
                wrongInput.setAttribute("id", "wrongInputId");
                wrongInput.innerHTML = 'E-mail already used';
                wrongInput.style.position = 'absolute';
                wrongInput.style.width = '150px';
                wrongInput.style.top = '242px';
                wrongInput.style.left = '150px';
                wrongInput.style.color = 'red';
                parentDiv.appendChild(wrongInput);

                isValid = 1;
            }
        }
    }

    if (registerObject.password != registerObject.confirm) {
        passwordSaveRegister.style.borderColor = "red";
        confirmPasswordSaveRegister.style.borderColor = "red";
        const wrongPassword = document.createElement("p");
        wrongPassword.setAttribute("id", "wrongPassword");
        wrongPassword.innerHTML = 'Different password';
        wrongPassword.style.position = 'absolute';
        wrongPassword.style.width = '150px';
        wrongPassword.style.top = '242px';
        wrongPassword.style.left = '620px';
        wrongPassword.style.color = 'red';
        parentDiv.appendChild(wrongPassword);

        isValid = 1;
    }

    if (isValid === 0) {

        registerArray.push(registerObject);
        localStorage.saveArray = JSON.stringify(registerArray);

        const succesfullDiv = document.createElement("div");
        const succesfulBox = document.createElement("div");
        const textAlert = document.createElement("p");
        const linkAlert = document.createElement("a");
        const buttonAlert = document.createElement("button");

        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

        succesfullDiv.style.position = "absolute";
        succesfullDiv.style.width = '100%';
        succesfullDiv.style.height = height + 'px';
        succesfullDiv.style.top = "0px";
        succesfullDiv.style.left = "0px";
        succesfullDiv.style.backgroundColor = '#000000';
        succesfullDiv.style.opacity = '40%';
        succesfullDiv.style.mixBlendMode = 'normal';
        succesfullDiv.style.margin = 'auto';

        document.body.appendChild(succesfullDiv);

        succesfulBox.style.position = "absolute";
        succesfulBox.style.width = "550px";
        succesfulBox.style.height = "300px";
        succesfulBox.style.top = "280px";
        succesfulBox.style.left = "450px";
        succesfulBox.style.backgroundColor = "white";
        succesfulBox.style.borderRadius = "8px";

        window.addEventListener('resize', function (event) {
            const marginSection = document.getElementById('registerMain');
            let designHeader = marginSection.currentStyle || window.getComputedStyle(marginSection);
            succesfulBox.style.marginLeft = designHeader.marginLeft;
        }, true);

        document.body.appendChild(succesfulBox);

        textAlert.innerHTML = "Succesfuly registration";
        textAlert.style.color = "#D87D4A";
        textAlert.style.fontFamily = "Manrope";
        textAlert.style.fontWeight = "700";
        textAlert.style.fontSize = "25px";
        textAlert.style.lineHeight = "25px";
        textAlert.style.letterSpacing = "2px";
        textAlert.style.textTransform = "uppercase";

        textAlert.style.position = "absolute";
        textAlert.style.top = "100px";
        textAlert.style.left = "80px";
        succesfulBox.appendChild(textAlert);

        linkAlert.setAttribute("href", "../PROJECT/login.html");
        succesfulBox.appendChild(linkAlert);

        buttonAlert.style.position = "absolute";
        buttonAlert.innerHTML = "Go to login page"
        buttonAlert.style.width = "200px";
        buttonAlert.style.height = "50px";
        buttonAlert.style.top = "200px";
        buttonAlert.style.left = "160px";

        buttonAlert.style.backgroundColor = "#D87D4A";
        buttonAlert.style.border = "0px";
        buttonAlert.style.color = "#FFFFFF";
        buttonAlert.style.stroke = "#979797";

        buttonAlert.style.fontFamily = "Manrope";
        buttonAlert.style.fontWeight = "700";
        buttonAlert.style.fontSize = "13px";
        buttonAlert.style.lineHeight = "18px";
        buttonAlert.style.letterSpacing = "1px";
        buttonAlert.style.cursor = "pointer";
        buttonAlert.style.borderRadius = "8px";

        linkAlert.appendChild(buttonAlert);
    }

}

parentDiv.addEventListener("submit", saveInfo);
