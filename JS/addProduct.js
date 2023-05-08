const buttonMinus = document.getElementById('minusB');
const buttonPlus = document.getElementById('plusB');
const paragraph = document.getElementById('productResult');

let numberOfProducts = 1;

function subProduct() {
    if(numberOfProducts>1){
        numberOfProducts--;
    }
    paragraph.innerHTML = numberOfProducts.toString();
}

function addProduct() {
    numberOfProducts++;
    paragraph.innerHTML = numberOfProducts.toString();
}

buttonMinus.addEventListener('click', subProduct);
buttonPlus.addEventListener('click', addProduct);

function addInLocalStorage1 (){
    let variabilaListaObiecte=JSON.parse(localStorage.listaDeObiecte);
    variabilaListaObiecte["obiect-1"].numarProduse=variabilaListaObiecte["obiect-1"].numarProduse + numberOfProducts;
    localStorage.listaDeObiecte=JSON.stringify(variabilaListaObiecte);
}

let produs1 = document.getElementById("productAddToCart1");
if( ! Object.is(produs1, null)){
    produs1.addEventListener("click", addInLocalStorage1) ;
}

//////////////////
function addInLocalStorage2 (){
    let variabilaListaObiecte=JSON.parse(localStorage.listaDeObiecte);
    variabilaListaObiecte["obiect-2"].numarProduse=variabilaListaObiecte["obiect-2"].numarProduse + numberOfProducts;
    localStorage.listaDeObiecte=JSON.stringify(variabilaListaObiecte);
}

let produs2 = document.getElementById("productAddToCart2");
if( ! Object.is(produs2, null)){
    produs2.addEventListener("click", addInLocalStorage2) ;
}

////////////////
function addInLocalStorage3 (){
    let variabilaListaObiecte=JSON.parse(localStorage.listaDeObiecte);
    variabilaListaObiecte["obiect-3"].numarProduse=variabilaListaObiecte["obiect-3"].numarProduse + numberOfProducts;
    localStorage.listaDeObiecte=JSON.stringify(variabilaListaObiecte);
}

let produs3 = document.getElementById("productAddToCart3");
if( ! Object.is(produs3, null)){
    produs3.addEventListener("click", addInLocalStorage3) ;
}

////////////////
function addInLocalStorage4 (){
    let variabilaListaObiecte=JSON.parse(localStorage.listaDeObiecte);
    variabilaListaObiecte["obiect-4"].numarProduse=variabilaListaObiecte["obiect-4"].numarProduse + numberOfProducts;
    localStorage.listaDeObiecte=JSON.stringify(variabilaListaObiecte);
}

let produs4 = document.getElementById("productAddToCart4");
if( ! Object.is(produs4, null)){
    produs4.addEventListener("click", addInLocalStorage4) ;
}

///////////////////////////////////////////////
function addInLocalStorage5 (){
    let variabilaListaObiecte=JSON.parse(localStorage.listaDeObiecte);
    variabilaListaObiecte["obiect-5"].numarProduse=variabilaListaObiecte["obiect-5"].numarProduse + numberOfProducts;
    localStorage.listaDeObiecte=JSON.stringify(variabilaListaObiecte);
}

let produs5 = document.getElementById("productAddToCart5");
if( ! Object.is(produs5, null)){
    produs5.addEventListener("click", addInLocalStorage5) ;
}

////////////////////
function addInLocalStorage6 (){
    let variabilaListaObiecte=JSON.parse(localStorage.listaDeObiecte);
    variabilaListaObiecte["obiect-6"].numarProduse=variabilaListaObiecte["obiect-6"].numarProduse + numberOfProducts;
    localStorage.listaDeObiecte=JSON.stringify(variabilaListaObiecte);
}

let produs6 = document.getElementById("productAddToCart6");
if( ! Object.is(produs6, null)){
    produs6.addEventListener("click", addInLocalStorage6) ;
}


