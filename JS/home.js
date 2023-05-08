const getButton=document.getElementById("buttonSeeProduct");

if(getButton!=null){
getButton.addEventListener("click", () => {
    localStorage.headphonesSeeProduct1=1;
    window.open("../PROJECT/desktop-category-headphones.html", "_self");
});
}

//////////////////////////////////////////////////////////////////////////

const getButton2=document.getElementById("ZX9SpeakerButtonHome");

if(getButton2!=null){
getButton2.addEventListener("click", () => {
    localStorage.speakerSeeProduct=1;
    window.open("../PROJECT/desktop-category-speakers.html", "_self");
});
}

///////////////////////////////////////////////////////////////////////////////////////

const getButton3=document.getElementById("ZX7SpeakerButtonHome");

if(getButton3!=null){
    getButton3.addEventListener("click", () => {
        localStorage.speakerSeeProduct2=1;
        window.open("../PROJECT/desktop-category-speakers.html", "_self");
    });    
}

/////////////////////////////////////////////////////////////////////////////////////////////

const getButton4=document.getElementById("YX1EarphonesButtonHome");

if(getButton4!=null){
    getButton4.addEventListener("click", () => {
        localStorage.earphonesSeeProduct=1;
        window.open("../PROJECT/desktop-category-earphones.html", "_self");
    });
}
