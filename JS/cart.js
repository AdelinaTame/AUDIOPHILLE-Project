let cartWasCreated = false;
let globalCartDiv;
let globalShadowBox;

localStorage.sumaProduselor = 0;

function subProductCart(paragraphParam, numeProdusParam) {
    const valoriStorage = JSON.parse(localStorage.listaDeObiecte);
    for (let element in valoriStorage) {
        if (valoriStorage[element].numeProdus === numeProdusParam) {
            if (valoriStorage[element].numarProduse > 1) {
                valoriStorage[element].numarProduse--;
                if (numeProdusParam === "x99 Mark II") {
                    localStorage.sumaProduselor = parseInt(localStorage.sumaProduselor) - 2999;
                }
                else if (numeProdusParam === "x99 Mark I") {
                    localStorage.sumaProduselor = parseInt(localStorage.sumaProduselor) - 1750;
                }
                else if (numeProdusParam === "x59") {
                    localStorage.sumaProduselor = parseInt(localStorage.sumaProduselor) - 899;
                }
                else if (numeProdusParam === "zx9") {
                    localStorage.sumaProduselor = parseInt(localStorage.sumaProduselor) - 4500;
                }
                else if (numeProdusParam === "zx7") {
                    localStorage.sumaProduselor = parseInt(localStorage.sumaProduselor) - 3500;
                }
                else if (numeProdusParam === "yx1") {
                    localStorage.sumaProduselor = parseInt(localStorage.sumaProduselor) - 599;
                }
                const cartSumOfProducts = document.getElementById("cartSumOfProducts");
                if (cartSumOfProducts != null) {
                    cartSumOfProducts.innerHTML = "$" + parseInt(localStorage.sumaProduselor).toLocaleString('en-US')
                }
            }
            paragraphParam.innerHTML = valoriStorage[element].numarProduse;
        }
    }
    localStorage.listaDeObiecte = JSON.stringify(valoriStorage);
}

function addProductCart(paragraphParam, numeProdusParam) {
    const valoriStorage = JSON.parse(localStorage.listaDeObiecte);
    for (let element in valoriStorage) {
        if (valoriStorage[element].numeProdus === numeProdusParam) {
            valoriStorage[element].numarProduse++;
            if (numeProdusParam === "x99 Mark II") {
                localStorage.sumaProduselor = parseInt(localStorage.sumaProduselor) + 2999;
            }
            else if (numeProdusParam === "x99 Mark I") {
                localStorage.sumaProduselor = parseInt(localStorage.sumaProduselor) + 1750;
            }
            else if (numeProdusParam === "x59") {
                localStorage.sumaProduselor = parseInt(localStorage.sumaProduselor) + 899;
            }
            else if (numeProdusParam === "zx9") {
                localStorage.sumaProduselor = parseInt(localStorage.sumaProduselor) + 4500;
            }
            else if (numeProdusParam === "zx7") {
                localStorage.sumaProduselor = parseInt(localStorage.sumaProduselor) + 3500;
            }
            else if (numeProdusParam === "yx1") {
                localStorage.sumaProduselor = parseInt(localStorage.sumaProduselor) + 599;
            }
            const cartSumOfProducts = document.getElementById("cartSumOfProducts");
            if (cartSumOfProducts != null) {
                cartSumOfProducts.innerHTML = "$" + parseInt(localStorage.sumaProduselor).toLocaleString('en-US')
            }
            paragraphParam.innerHTML = valoriStorage[element].numarProduse;
        }
    }
    localStorage.listaDeObiecte = JSON.stringify(valoriStorage);
}


function removeWindowCart() {
    globalCartDiv.remove();
    globalShadowBox.remove();
    document.body.style.overflow = "visible";
    cartWasCreated = false;
}

function counterNumberOfProduct() {
    // Code where the span with number of products for cart will be set to visible and number of products will be displayed
    let cartListOfProducts = JSON.parse(localStorage.listaDeObiecte);
    let variabilaContorizare = 0;
    for (let element in cartListOfProducts) {
        if (cartListOfProducts[element].numarProduse > 0) {
            variabilaContorizare++;
        }
    }

    let cartNumberOfProducts = document.getElementById('numberOfProductsCart');

    if (variabilaContorizare != 0) {
        cartNumberOfProducts.innerHTML = variabilaContorizare;
        const bubbleId = document.getElementById('bubbleId');
        bubbleId.style.borderWidth = '1px';
        bubbleId.style.borderColor = '#FBAF85';
        bubbleId.style.borderStyle = 'solid';
    }
}

export { counterNumberOfProduct };

function windowCart() {
    localStorage.numarPorduseAdaugate = 0;

    document.body.style.overflow = "hidden";

    if (cartWasCreated === false) {
        cartWasCreated = true;

        //cream box-ul ce va face "umbra pe intreg html"
        //get dynamic page height
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

        const shadowBox = document.createElement("div");
        shadowBox.style.width = '100%';
        shadowBox.style.height = height + 'px';
        shadowBox.style.top = '0px';
        shadowBox.style.left = '0px';
        shadowBox.style.position = "absolute";
        shadowBox.style.backgroundColor = '#000000';
        shadowBox.style.opacity = '40%';
        shadowBox.style.mixBlendMode = 'normal';
        shadowBox.style.margin = 'auto';

        globalShadowBox = shadowBox;
        document.body.appendChild(shadowBox);

        globalShadowBox.addEventListener("click", removeWindowCart);

        //cream box-ul alb in care vor fi toate elementele cart-ului

        const cartDiv = document.createElement('div');
        cartDiv.style.backgroundColor = 'white';
        cartDiv.style.width = '377px';
        cartDiv.style.height = '488px';
        cartDiv.style.top = '130px';
        cartDiv.style.left = '898px';
        cartDiv.style.position = "absolute";
        cartDiv.style.borderRadius = "8px";

        const marginSection = document.getElementById('marginSection');
        let designHeader = marginSection.currentStyle || window.getComputedStyle(marginSection);
        cartDiv.style.marginLeft = designHeader.marginLeft;

        globalCartDiv = cartDiv;
        document.body.appendChild(cartDiv);

        // cream box-ul in care va fi titlul si butonul remove
        const cartTitle = document.createElement('div');
        cartTitle.style.position = "absolute";
        cartTitle.style.width = '313px';
        cartTitle.style.height = '25px';
        cartTitle.style.top = '31px';
        cartTitle.style.left = '33px';
        cartDiv.appendChild(cartTitle);

        //cream primul copil al parintelui cartTitle;
        const cartTitleP1 = document.createElement('p');
        cartTitleP1.style.position = "absolute";
        cartTitleP1.style.width = '100px';
        cartTitleP1.style.top = '1px';
        cartTitleP1.style.left = '0px';
        cartTitleP1.style.fontFamily = "Manrope";
        cartTitleP1.style.fontStyle = "normal";
        cartTitleP1.style.fontWeight = "700";
        cartTitleP1.style.fontSize = "18px";
        cartTitleP1.style.lineHeight = "25px";
        cartTitleP1.style.letterSpacing = "1.28571px";
        cartTitleP1.style.textTransform = "uppercase";
        cartTitleP1.style.color = " rgba(0, 0, 0, 1)";

        let variabilaMultimeObiecte = JSON.parse(localStorage.listaDeObiecte);
        for (const element in variabilaMultimeObiecte) {
            if (variabilaMultimeObiecte[element].numarProduse > 0) {
                localStorage.numarPorduseAdaugate++;
            }
        }
        cartTitleP1.innerHTML = "CART( " + localStorage.numarPorduseAdaugate + " )";
        cartTitle.appendChild(cartTitleP1);

        //cream al doilea copil al parintelui cartTitle;
        const cartTitleP2 = document.createElement('p');
        cartTitleP2.style.position = "absolute";
        cartTitleP2.style.width = '76px';
        cartTitleP2.style.height = '25px';
        cartTitleP2.style.top = '1px';
        cartTitleP2.style.left = '236px';
        cartTitleP2.innerHTML = "Remove all";
        cartTitleP2.style.fontFamily = "Manrope";
        cartTitleP2.style.fontStyle = "normal";
        cartTitleP2.style.fontWeight = "500";
        cartTitleP2.style.fontSize = "15px";
        cartTitleP2.style.lineHeight = "25px";
        cartTitleP2.style.textDecorationLine = "underline";
        cartTitleP2.style.color = " rgba(0, 0, 0, 1)";
        cartTitleP2.style.mixBlendMode = "normal";
        cartTitleP2.style.opacity = "0.5";
        cartTitleP2.style.cursor = "pointer";
        cartTitleP2.addEventListener('mouseenter', () => {
            cartTitleP2.style.color = '#FBAF85';
        });
        cartTitleP2.addEventListener('mouseleave', () => {
            cartTitleP2.style.color = ' rgba(0, 0, 0, 1)';
        });
        cartTitle.appendChild(cartTitleP2);

        cartTitleP2.addEventListener('click', () => {

            const removeLinkElement=document.getElementById("removeLinkElement");
            removeLinkElement.remove();
            
            const pargNoProduct = document.createElement('p');
            pargNoProduct.innerHTML="No product added";
            pargNoProduct.style.position = "absolute";
            pargNoProduct.style.width = '313px';
            pargNoProduct.style.height = '48px';
            pargNoProduct.style.top = '409px';
            pargNoProduct.style.left = '33px';
            pargNoProduct.style.color = 'black';
            pargNoProduct.style.fontFamily = "Manrope";
            pargNoProduct.style.fontStyle = "normal";
            pargNoProduct.style.fontWeight = "700";
            pargNoProduct.style.fontSize = "13px";
            pargNoProduct.style.lineHeight = "18px";
            pargNoProduct.style.textAlign = "centerl";
            pargNoProduct.style.textTransform = "uppercase";
            pargNoProduct.style.letterSpacing = "1px";
            pargNoProduct.style.border = 'none';
            cartDiv.appendChild(pargNoProduct);

            localStorage.numarPorduseAdaugate = 0;
            cartTitleP1.innerHTML = "CART( " + localStorage.numarPorduseAdaugate + " )";
            localStorage.sumaProduselor = 0;
            cartValueP2.innerHTML = "$" + localStorage.sumaProduselor;
            let variabilaListaDeObiecte = JSON.parse(localStorage.listaDeObiecte);
            for (let element in variabilaListaDeObiecte) {
                variabilaListaDeObiecte[element].numarProduse = 0;
            }
            localStorage.listaDeObiecte = JSON.stringify(variabilaListaDeObiecte);

            cartProducts.remove(listOfProducts);

            const eraseCart = document.getElementById('numberOfProductsCart');
            eraseCart.innerHTML = '';
            const eraseBorder = document.getElementById('bubbleId');
            eraseBorder.style.border = 'none';
        })

        //cream box-ul in care se vor afisa produsele adaugate de utilizator in cos;
        const cartProducts = document.createElement('div');
        cartProducts.style.position = "absolute";
        cartProducts.style.width = '313px';
        cartProducts.style.height = '240px';
        cartProducts.style.top = '88px';
        cartProducts.style.left = '33px';
        cartProducts.setAttribute("id", "noScrollDiv");
        var styleElement = document.createElement("style");
        styleElement.appendChild(document.createTextNode("#noScrollDiv { overflow-y: scroll; }#noScrollDiv::-webkit-scrollbar {display: none; }#noScrollDiv {-ms-overflow-style: none;  scrollbar-width: none;}"));
        document.getElementsByTagName("head")[0].appendChild(styleElement);
        let listOfProducts;

        if (localStorage.numarPorduseAdaugate > 0) {
            listOfProducts = document.createElement('ul');
            cartProducts.appendChild(listOfProducts);

            let variabilaListaProduse = JSON.parse(localStorage.listaDeObiecte);
            for (let element in variabilaListaProduse) {
                if (variabilaListaProduse[element].numarProduse > 0) {
                    createItemList(variabilaListaProduse[element].numeProdus, variabilaListaProduse[element].numarProduse, listOfProducts);
                }
            }
        }

        function createItemList(numeProdusParam, numarProduseParam, listOfProductsParam) {
            const itemList = document.createElement('li');
            itemList.style.listStyle = "none";
            itemList.style.height = "88px";
            listOfProductsParam.appendChild(itemList);

            const boxAfisareProdus = document.createElement('div');
            boxAfisareProdus.style.display = "flex"
            boxAfisareProdus.style.width = "313px";
            boxAfisareProdus.style.height = "64px";
            itemList.appendChild(boxAfisareProdus);

            const imgBox = document.createElement('div');
            imgBox.style.width = "64px";
            boxAfisareProdus.appendChild(imgBox);

            const imageItem1 = document.createElement('img');
            imgBox.appendChild(imageItem1);
            imageItem1.setAttribute("alt", "imgItem1");
            imageItem1.style.width = "64px";
            imageItem1.style.height = "64px";

            const paragraphProductBox = document.createElement('div');
            paragraphProductBox.style.position = "relative"
            paragraphProductBox.style.flexGrow = 4;
            boxAfisareProdus.appendChild(paragraphProductBox);

            const nameItem1 = document.createElement('p');
            paragraphProductBox.appendChild(nameItem1);
            nameItem1.style.position = "absolute";
            nameItem1.style.height = "25px";
            nameItem1.style.left = '16px';
            nameItem1.style.top = '7px';
            nameItem1.style.fontFamily = "Manrope";
            nameItem1.style.fontStyle = "normal";
            nameItem1.style.fontWeight = "700";
            nameItem1.style.fontSize = "15px";
            nameItem1.style.lineHeight = "25px";
            nameItem1.style.color = " rgba(0, 0, 0, 1)";

            const priceItem1 = document.createElement('p');
            paragraphProductBox.appendChild(priceItem1);
            priceItem1.style.position = "absolute";
            priceItem1.style.height = "25px";
            priceItem1.style.left = '16px';
            priceItem1.style.top = '32px';
            priceItem1.style.fontFamily = "Manrope";
            priceItem1.style.fontStyle = "normal";
            priceItem1.style.fontWeight = "700";
            priceItem1.style.fontSize = "15px";
            priceItem1.style.lineHeight = "25px";
            priceItem1.style.color = " rgba(0, 0, 0, 1)";
            priceItem1.style.mixBlendMode = " normal";
            priceItem1.style.opacity = " 0.5";

            const numberOfProductsBox = document.createElement('div');
            numberOfProductsBox.style.width = "96px";
            numberOfProductsBox.style.position = "relative"
            boxAfisareProdus.appendChild(numberOfProductsBox);

            const divButtonItem1 = document.createElement('div');
            numberOfProductsBox.appendChild(divButtonItem1);
            divButtonItem1.style.position = "absolute";
            divButtonItem1.style.width = "96px";
            divButtonItem1.style.height = "32px";
            divButtonItem1.style.top = '17px';
            divButtonItem1.style.backgroundColor = '#F1F1F1';

            const minusBItem1 = document.createElement('button');
            divButtonItem1.appendChild(minusBItem1);
            minusBItem1.addEventListener('click', () => { subProductCart(pBItem1, numeProdusParam) });
            minusBItem1.style.position = "absolute";
            minusBItem1.style.width = "16px";
            minusBItem1.style.height = "18px";
            minusBItem1.style.left = '11.5px';
            minusBItem1.style.top = '7px';
            minusBItem1.innerHTML = '-';
            minusBItem1.style.fontFamily = "Manrope";
            minusBItem1.style.fontStyle = "normal";
            minusBItem1.style.fontWeight = "700";
            minusBItem1.style.fontSize = "13px";
            minusBItem1.style.lineHeight = "18px";
            minusBItem1.style.color = " rgba(0, 0, 0, 1)";
            minusBItem1.style.mixBlendMode = " normal";
            minusBItem1.style.opacity = " 0.25";
            minusBItem1.style.border = " none";
            minusBItem1.style.cursor = " pointer";
            minusBItem1.style.backgroundColor = '#F1F1F1';
            minusBItem1.addEventListener('mouseenter', () => {
                minusBItem1.style.color = '#FBAF85';
            });
            minusBItem1.addEventListener('mouseleave', () => {
                minusBItem1.style.color = ' rgba(0, 0, 0, 1)';
            });

            const plusBItem1 = document.createElement('button');
            divButtonItem1.appendChild(plusBItem1);
            plusBItem1.addEventListener('click', () => { addProductCart(pBItem1, numeProdusParam) });
            plusBItem1.style.position = "absolute";
            plusBItem1.style.width = "16px";
            plusBItem1.style.height = "18px";
            plusBItem1.style.left = '68.5px';
            plusBItem1.style.top = '7px';
            plusBItem1.innerHTML = '+';
            plusBItem1.style.fontFamily = "Manrope";
            plusBItem1.style.fontStyle = "normal";
            plusBItem1.style.fontWeight = "700";
            plusBItem1.style.fontSize = "13px";
            plusBItem1.style.lineHeight = "18px";
            plusBItem1.style.color = " rgba(0, 0, 0, 1)";
            plusBItem1.style.mixBlendMode = " normal";
            plusBItem1.style.opacity = " 0.25";
            plusBItem1.style.border = " none";
            plusBItem1.style.cursor = " pointer";
            plusBItem1.style.backgroundColor = '#F1F1F1';
            plusBItem1.addEventListener('mouseenter', () => {
                plusBItem1.style.color = '#FBAF85';
            });
            plusBItem1.addEventListener('mouseleave', () => {
                plusBItem1.style.color = ' rgba(0, 0, 0, 1)';
            });

            const pBItem1 = document.createElement('p');
            divButtonItem1.appendChild(pBItem1);
            pBItem1.setAttribute('id', 'productResult')
            pBItem1.style.position = "absolute";
            pBItem1.style.width = "16px";
            pBItem1.style.height = "18px";
            pBItem1.style.left = '39.5px';
            pBItem1.style.top = '7px';
            pBItem1.innerHTML = numarProduseParam;
            pBItem1.style.fontFamily = "Manrope";
            pBItem1.style.fontStyle = "normal";
            pBItem1.style.fontWeight = "700";
            pBItem1.style.fontSize = "13px";
            pBItem1.style.lineHeight = "18px";
            pBItem1.style.color = " rgba(0, 0, 0, 1)";
            pBItem1.style.textAlign = "center";
            pBItem1.style.letterSpacing = " 1px";
            pBItem1.style.textTransform = " uppercase";

            if (numeProdusParam === "x99 Mark II") {
                imageItem1.src = "..//PROJECT/images/product-xx99-mark-two-headphones/desktop/image-product.jpg";
                nameItem1.innerHTML = "XX99 MK II";
                priceItem1.innerHTML = "$ 2,999";
            }
            else if (numeProdusParam === "x99 Mark I") {
                imageItem1.src = "..//PROJECT/images/product-xx99-mark-one-headphones/desktop/image-product.jpg";
                nameItem1.innerHTML = "XX99 MK I";
                priceItem1.innerHTML = "$ 1, 759";
            }
            else if (numeProdusParam === "x59") {
                imageItem1.src = "..//PROJECT/images/product-xx59-headphones/desktop/image-product.jpg";
                nameItem1.innerHTML = "XX59";
                priceItem1.innerHTML = "$ 899";
            }
            else if (numeProdusParam === "zx9") {
                imageItem1.src = "..//PROJECT/images/product-zx9-speaker/desktop/image-product.jpg";
                nameItem1.innerHTML = "ZX9";
                priceItem1.innerHTML = "$ 4, 500";
            }
            else if (numeProdusParam === "zx7") {
                imageItem1.src = "..//PROJECT/images/product-zx7-speaker/desktop/image-product.jpg";
                nameItem1.innerHTML = "ZX7";
                priceItem1.innerHTML = "$ 3, 500";
            }
            else {
                imageItem1.src = "..//PROJECT/images/product-yx1-earphones/desktop/image-product.jpg";
                nameItem1.innerHTML = "YX1";
                priceItem1.innerHTML = "$ 599";
            }
        }


        cartDiv.appendChild(cartProducts);

        //cream box-ul in care va aparea totalul si suma de achitat a produselor cu elementele sale;
        const cartValue = document.createElement('div');
        cartValue.style.position = "absolute";
        cartValue.style.width = '308px';
        cartValue.style.height = '25px';
        cartValue.style.top = '360px';
        cartValue.style.left = '33px';
        cartDiv.appendChild(cartValue);

        //cream primul copil al elementului cartValue;
        const cartValueP1 = document.createElement('p');
        cartValueP1.style.position = "absolute";
        cartValueP1.style.width = '46px';
        cartValueP1.style.height = '25px';
        cartValueP1.style.top = '0px';
        cartValueP1.style.left = '0px';
        cartValueP1.innerHTML = "TOTAL";
        cartValueP1.style.fontFamily = "Manrope";
        cartValueP1.style.fontStyle = "normal";
        cartValueP1.style.fontWeight = "500";
        cartValueP1.style.fontSize = "15px";
        cartValueP1.style.lineHeight = "25px";
        cartValueP1.style.color = " rgba(0, 0, 0, 1)";
        cartValueP1.style.mixBlendMode = "normal";
        cartValueP1.style.opacity = "0.5";
        cartValue.appendChild(cartValueP1);

        //cream al doilea copil al elementului cartValue;
        const cartValueP2 = document.createElement('p');
        cartValueP2.setAttribute("id", "cartSumOfProducts");
        cartValueP2.style.position = "absolute";
        cartValueP2.style.width = '54px';
        cartValueP2.style.height = '25px';
        cartValueP2.style.top = '0px';
        cartValueP2.style.left = '244px';

        let variabilaSuma = JSON.parse(localStorage.listaDeObiecte);
        localStorage.sumaProduselor = 0;
        for (let element in variabilaSuma) {
            if (variabilaSuma[element].numeProdus === 'x99 Mark II') {
                localStorage.sumaProduselor = parseInt(localStorage.sumaProduselor) + 2999 * parseInt(variabilaSuma[element].numarProduse);
            }
            if (variabilaSuma[element].numeProdus === 'x99 Mark I') {
                localStorage.sumaProduselor = parseInt(localStorage.sumaProduselor) + 1750 * parseInt(variabilaSuma[element].numarProduse);
            }
            if (variabilaSuma[element].numeProdus === 'x59') {
                localStorage.sumaProduselor = parseInt(localStorage.sumaProduselor) + 899 * parseInt(variabilaSuma[element].numarProduse);
            }
            if (variabilaSuma[element].numeProdus === 'zx9') {
                localStorage.sumaProduselor = parseInt(localStorage.sumaProduselor) + 4500 * parseInt(variabilaSuma[element].numarProduse);
            }
            if (variabilaSuma[element].numeProdus === 'zx7') {
                localStorage.sumaProduselor = parseInt(localStorage.sumaProduselor) + 3500 * parseInt(variabilaSuma[element].numarProduse);
            }
            if (variabilaSuma[element].numeProdus === 'yx1') {
                localStorage.sumaProduselor = parseInt(localStorage.sumaProduselor) + 599 * parseInt(variabilaSuma[element].numarProduse);
            }
        }

        cartValueP2.innerHTML = "$" + parseInt(localStorage.sumaProduselor).toLocaleString('en-US');
        cartValueP2.style.fontFamily = "Manrope";
        cartValueP2.style.fontStyle = "normal";
        cartValueP2.style.fontWeight = "700";
        cartValueP2.style.fontSize = "18px";
        cartValueP2.style.lineHeight = "25px";
        cartValueP2.style.color = " rgba(0, 0, 0, 1)";
        cartValueP2.style.textAlign = "centerl";
        cartValueP2.style.textTransform = "uppercase";
        cartValue.appendChild(cartValueP2);

        //
        if (localStorage.numarPorduseAdaugate != 0) {
            const buttonLink = document.createElement('a');
            buttonLink.setAttribute("id", "removeLinkElement");
            buttonLink.href = "../PROJECT/checkoutForm.html";
            cartDiv.appendChild(buttonLink);

            // cream butonul de checkout
            const buttonCheckout = document.createElement('button');
            buttonCheckout.style.position = "absolute";
            buttonCheckout.style.width = '313px';
            buttonCheckout.style.height = '48px';
            buttonCheckout.style.top = '409px';
            buttonCheckout.style.left = '33px';
            buttonCheckout.innerHTML = "CHECKOUT";
            buttonCheckout.style.backgroundColor = 'rgba(216, 125, 74, 1)';
            buttonCheckout.style.color = 'rgba(255, 255, 255, 1)';
            buttonCheckout.style.border = 'none';
            buttonCheckout.style.cursor = 'pointer';
            buttonCheckout.style.fontFamily = "Manrope";
            buttonCheckout.style.fontStyle = "normal";
            buttonCheckout.style.fontWeight = "700";
            buttonCheckout.style.fontSize = "13px";
            buttonCheckout.style.lineHeight = "18px";
            buttonCheckout.style.textAlign = "centerl";
            buttonCheckout.style.textTransform = "uppercase";
            buttonCheckout.style.letterSpacing = "1px";
            buttonCheckout.style.border = 'none';
            buttonCheckout.addEventListener('mouseenter', () => {
                buttonCheckout.style.backgroundColor = '#FBAF85';
            });
            buttonCheckout.addEventListener('mouseleave', () => {
                buttonCheckout.style.backgroundColor = '#D87D4A';
            });
            buttonLink.appendChild(buttonCheckout);
        }
        else{
            const pargNoProduct = document.createElement('p');
            pargNoProduct.innerHTML="No product added";
            pargNoProduct.style.position = "absolute";
            pargNoProduct.style.width = '313px';
            pargNoProduct.style.height = '48px';
            pargNoProduct.style.top = '409px';
            pargNoProduct.style.left = '33px';
            pargNoProduct.style.color = 'black';
            pargNoProduct.style.fontFamily = "Manrope";
            pargNoProduct.style.fontStyle = "normal";
            pargNoProduct.style.fontWeight = "700";
            pargNoProduct.style.fontSize = "13px";
            pargNoProduct.style.lineHeight = "18px";
            pargNoProduct.style.textAlign = "centerl";
            pargNoProduct.style.textTransform = "uppercase";
            pargNoProduct.style.letterSpacing = "1px";
            pargNoProduct.style.border = 'none';
            cartDiv.appendChild(pargNoProduct);
        }
    }
}


const cartButton = document.getElementById('cartImg');
cartButton.addEventListener('click', windowCart);

window.addEventListener('resize', function (event) {
    const marginSection = document.getElementById('marginSection');
    let designHeader = marginSection.currentStyle || window.getComputedStyle(marginSection);
    if (cartWasCreated === true) {
        globalCartDiv.style.marginLeft = designHeader.marginLeft;
    }
}, true);


if (!localStorage.listaDeObiecte) {
    let listaDeObiecte = {
        "obiect-1": { numeProdus: "x99 Mark II", numarProduse: 0 },
        "obiect-2": { numeProdus: "x99 Mark I", numarProduse: 0 },
        "obiect-3": { numeProdus: "x59", numarProduse: 0 },
        "obiect-4": { numeProdus: "zx9", numarProduse: 0 },
        "obiect-5": { numeProdus: "zx7", numarProduse: 0 },
        "obiect-6": { numeProdus: "yx1", numarProduse: 0 },
    };
    localStorage.listaDeObiecte = JSON.stringify(listaDeObiecte);
}

counterNumberOfProduct();





