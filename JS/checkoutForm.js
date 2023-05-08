//IN LOCALSTORAGE DATELE SALVATE SUNT DE TIP STRING!!

const productBox = document.querySelector('.productBox');
const variabilaStorage = JSON.parse(localStorage.listaDeObiecte);
const parentBoxDiv = document.querySelector(".productsBox");
const summaryBox = document.querySelector(".summaryBox");
const buttonContinue = document.querySelector(".buttonContinue");
const total = document.querySelector(".total");
const shipping = document.querySelector(".shipping");
const included = document.querySelector(".included");
const grandTotal = document.querySelector(".grandTotal");
const productsBox = document.querySelector(".productsBox");

if (parseInt(localStorage.numarPorduseAdaugate) > 3) {
    const diferenceProduct = (parseInt(localStorage.numarPorduseAdaugate) - 3) * 84;
    summaryBox.style.height = (612 + diferenceProduct) + "px";
    buttonContinue.style.top = (buttonContinue.offsetTop + diferenceProduct) + "px";
    total.style.top = (total.offsetTop + diferenceProduct) + "px";
    shipping.style.top = (shipping.offsetTop + diferenceProduct) + "px";
    included.style.top = (included.offsetTop + diferenceProduct) + "px";
    grandTotal.style.top = (grandTotal.offsetTop + diferenceProduct) + "px";
    productsBox.style.height = (productsBox.offsetHeight + diferenceProduct) + "px";
}

function afisareProduse() {
    for (const key in variabilaStorage) {

        if (variabilaStorage[key].numarProduse > 0) {

            const ProductDiv = document.createElement("div");
            ProductDiv.style.width = "284px";
            ProductDiv.style.height = "88px";
            ProductDiv.style.display = "flex";
            parentBoxDiv.appendChild(ProductDiv);

            const ImageDiv = document.createElement("div");
            ImageDiv.style.width = "64px";
            ImageDiv.style.height = "64px";
            ProductDiv.appendChild(ImageDiv);

            const detailsProduct = document.createElement("div");
            detailsProduct.style.height = "64px";
            detailsProduct.style.flexGrow = "1";
            detailsProduct.style.position = "relative";
            ProductDiv.appendChild(detailsProduct);

            const numberProducts = document.createElement("div");
            numberProducts.style.height = "64px";
            numberProducts.style.width = "15px";
            numberProducts.style.position = "relative";
            ProductDiv.appendChild(numberProducts);

            ////////////////////////////////////////////////////////////////////

            const image = document.createElement("img");
            image.style.height = "64px";
            image.style.width = "64px";
            ImageDiv.appendChild(image);

            const name = document.createElement("p");
            name.style.height = "75px";
            name.style.position = "absolute";
            name.style.top = "0px";
            name.style.left = "16px";

            name.style.fontFamily = "Manrope";
            name.style.fontStyle = "normal";
            name.style.fontWeight = "700";
            name.style.lineHeight = "25px";
            name.style.color = "#000000";
            detailsProduct.appendChild(name);

            const price = document.createElement("p");
            price.style.height = "51px";
            price.style.height = "25px";
            price.style.position = "absolute";
            price.style.top = "25px";
            price.style.left = "16px";

            price.style.fontFamily = "Manrope";
            price.style.fontStyle = "normal";
            price.style.fontWeight = "700";
            price.style.fontSize = "14px";
            price.style.lineHeight = "25px";
            price.style.color = "#000000";
            price.style.mixBlendMode = "normal";
            price.style.opacity = "0.5";
            detailsProduct.appendChild(price);

            const nrProduct = document.createElement("p");
            nrProduct.innerHTML = "x" + variabilaStorage[key].numarProduse;
            nrProduct.style.height = "15px";
            nrProduct.style.height = "25px";
            nrProduct.style.position = "absolute";
            nrProduct.style.top = "0px";
            nrProduct.style.left = "0px";

            nrProduct.style.fontFamily = "Manrope";
            nrProduct.style.fontStyle = "normal";
            nrProduct.style.fontWeight = "700";
            nrProduct.style.fontSize = "15px";
            nrProduct.style.lineHeight = "25px";
            nrProduct.style.textAlign = "right";
            nrProduct.style.color = "#000000";
            nrProduct.style.mixBlendMode = "normal";
            nrProduct.style.opacity = "0.5";
            numberProducts.appendChild(nrProduct);

            if (variabilaStorage[key].numeProdus === "x99 Mark II") {
                image.setAttribute("src", "../PROJECT/images/product-xx99-mark-two-headphones/desktop/image-product.jpg");
                image.setAttribute("alt", "imageMark2");
                name.innerHTML = "XX99 MK II";
                price.innerHTML = "$ 2,999";
            }
            else if (variabilaStorage[key].numeProdus === "x99 Mark I") {
                image.setAttribute("src", "../PROJECT/images/product-xx99-mark-one-headphones/desktop/image-product.jpg");
                image.setAttribute("alt", "imageMark1");
                name.innerHTML = "XX99 MK I";
                price.innerHTML = "$ 1,750";
            }
            else if (variabilaStorage[key].numeProdus === "x59") {
                image.setAttribute("src", "../PROJECT/images/product-xx59-headphones/desktop/image-product.jpg");
                image.setAttribute("alt", "imageX59");
                name.innerHTML = "XX59";
                price.innerHTML = "$ 899";
            }
            else if (variabilaStorage[key].numeProdus === "zx9") {
                image.setAttribute("src", "../PROJECT/images/product-zx9-speaker/desktop/image-product.jpg");
                image.setAttribute("alt", "imageZx9");
                name.innerHTML = "ZX9";
                price.innerHTML = "$ 4, 500";
            }
            else if (variabilaStorage[key].numeProdus === "zx7") {
                image.setAttribute("src", "../PROJECT/images/product-zx7-speaker/desktop/image-product.jpg");
                image.setAttribute("alt", "imageZx7");
                name.innerHTML = "ZX7";
                price.innerHTML = "$ 3, 500";
            }
            else if (variabilaStorage[key].numeProdus === "yx1") {
                image.setAttribute("src", "../PROJECT/images/product-yx1-earphones/desktop/image-product.jpg");
                image.setAttribute("alt", "imageYx1");
                name.innerHTML = "YX1";
                price.innerHTML = "$ 599";
            }
        }
    }
}

afisareProduse();



//////////////////////////////////////////////////////////////////////////////////////////////////////////

const checkoutTotal = document.createElement('p');
checkoutTotal.setAttribute("id", "cartSumOfProducts");
checkoutTotal.style.position = "absolute";
checkoutTotal.style.width = '64px';
checkoutTotal.style.height = '25px';
checkoutTotal.style.top = '0px';
checkoutTotal.style.right = '0px';
checkoutTotal.innerHTML = "$" + parseInt(localStorage.sumaProduselor).toLocaleString('en-US');
checkoutTotal.style.fontFamily = "Manrope";
checkoutTotal.style.fontStyle = "normal";
checkoutTotal.style.fontWeight = "700";
checkoutTotal.style.fontSize = "18px";
checkoutTotal.style.lineHeight = "25px";
checkoutTotal.style.color = " rgba(0, 0, 0, 1)";
checkoutTotal.style.textAlign = "right";
checkoutTotal.style.textTransform = "uppercase";
checkoutTotal.style.opacity = "1";
total.appendChild(checkoutTotal);

const checkoutVAT = document.createElement('p');
checkoutVAT.setAttribute("id", "cartSumOfProducts");
checkoutVAT.style.position = "absolute";
checkoutVAT.style.width = '64px';
checkoutVAT.style.height = '25px';
checkoutVAT.style.top = '0px';
checkoutVAT.style.right = '0px';
checkoutVAT.innerHTML = "$" + parseInt(parseInt(localStorage.sumaProduselor) * 0.21).toLocaleString('en-US');
checkoutVAT.style.fontFamily = "Manrope";
checkoutVAT.style.fontStyle = "normal";
checkoutVAT.style.fontWeight = "700";
checkoutVAT.style.fontSize = "18px";
checkoutVAT.style.lineHeight = "25px";
checkoutVAT.style.color = " rgba(0, 0, 0, 1)";
checkoutVAT.style.textAlign = "right";
checkoutVAT.style.textTransform = "uppercase";
checkoutVAT.style.opacity = "1";
included.appendChild(checkoutVAT);

const checkoutGrandTotal = document.createElement('p');
checkoutGrandTotal.setAttribute("id", "cartSumOfProducts");
checkoutGrandTotal.style.position = "absolute";
checkoutGrandTotal.style.width = '64px';
checkoutGrandTotal.style.height = '25px';
checkoutGrandTotal.style.top = '0px';
checkoutGrandTotal.style.right = '0px';
checkoutGrandTotal.innerHTML = "$" + parseInt(parseInt(localStorage.sumaProduselor) + 50).toLocaleString('en-US');
checkoutGrandTotal.style.fontFamily = "Manrope";
checkoutGrandTotal.style.fontStyle = "normal";
checkoutGrandTotal.style.fontWeight = "700";
checkoutGrandTotal.style.fontSize = "18px";
checkoutGrandTotal.style.lineHeight = "25px";
checkoutGrandTotal.style.color = " rgba(0, 0, 0, 1)";
checkoutGrandTotal.style.textAlign = "right";
checkoutGrandTotal.style.textTransform = "uppercase";
checkoutGrandTotal.style.opacity = "1";
grandTotal.appendChild(checkoutGrandTotal);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const buttonEmoney = document.getElementById("e-money");
const buttonCash = document.getElementById("cash");
const PaymentBox = document.getElementById("PaymentBox");
const emoneyNumber = document.querySelector(".emoneyNumber");
const emoneyPIn = document.querySelector(".emoneyPIn");
const cashImage = document.createElement("img");
const cashText = document.createElement("p");
const eMoneyLabel = document.getElementById("e-moneyLabel");
const cashLabel = document.getElementById("cashLabel");
let revertEmoney = 0;
let eMoneyClicked = 1;
let cashClicked = 0;

buttonEmoney.addEventListener("click", () => {
    if (revertEmoney = 1) {
        PaymentBox.appendChild(emoneyNumber);
        PaymentBox.appendChild(emoneyPIn);
        cashImage.remove();
        cashText.remove();
        eMoneyLabel.style.border = "1px solid #D87D4A";
        cashLabel.style.border = "1px solid #CFCFCF";
    }
    eMoneyClicked = 1;
    cashClicked = 0;
});


eMoneyLabel.addEventListener("mouseenter", () => {
    if (cashClicked === 1) {
        eMoneyLabel.style.border = "1px solid #D87D4A";
    }
});
eMoneyLabel.addEventListener("mouseleave", () => {
    if (cashClicked === 1) {
        eMoneyLabel.style.border = "1px solid #CFCFCF";
    }
});

buttonCash.addEventListener("click", () => {
    revertEmoney = 1;
    emoneyNumber.remove();
    emoneyPIn.remove();

    cashImage.setAttribute("src", "../PROJECT/images/checkout/icon-cash-on-delivery.svg");
    cashImage.setAttribute("alt", "cashIMG");
    cashImage.style.position = "absolute";
    cashImage.style.width = "48px";
    cashImage.style.height = "48px";
    cashImage.style.top = "12px";
    PaymentBox.appendChild(cashImage);

    cashText.innerHTML = "The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so<br> that your order will not be cancelled.";
    cashText.style.position = "absolute";
    cashText.style.width = "554px";
    cashText.style.height = "75px";
    cashText.style.left = "80px";
    cashText.style.top = "0px";

    cashText.style.fontFamily = "Manrope";
    cashText.style.fontStyle = "normal";
    cashText.style.fontWeight = "500";
    cashText.style.fontSize = "15px";
    cashText.style.color = "#000000";
    cashText.style.mixBlendMode = "normal";
    cashText.style.lineHeight = "25px";
    cashText.style.opacity = "0.5";
    PaymentBox.appendChild(cashText);

    cashLabel.style.border = "1px solid #D87D4A";
    eMoneyLabel.style.border = "1px solid #CFCFCF";

    eMoneyClicked = 0;
    cashClicked = 1;
});

cashLabel.addEventListener("mouseenter", () => {
    if (eMoneyClicked === 1) {
        cashLabel.style.border = "1px solid #D87D4A";
    }
});
cashLabel.addEventListener("mouseleave", () => {
    if (eMoneyClicked === 1) {
        cashLabel.style.border = "1px solid #CFCFCF";
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

let isValid = 1;
const email = document.getElementById("email");
const nume = document.getElementById("name");
const emailLabel = document.getElementById("emailLabel");
const emailForm = document.querySelector(".emailForm");
let globalShadowBox;
let globalCheckoutDiv;
let checkoutCreated = false;
email.value=localStorage.saveEmailUtilizator;
nume.value=localStorage.saveNumeUtilizator;


email.addEventListener("focus", () => {
    email.style.border = "1px solid #D87D4A";
});
email.addEventListener("blur", () => {
    email.style.border = "1px solid #CFCFCF";
});

buttonContinue.addEventListener("click", () => {
    const pattern = "(.*)@(.*)\.(.*)";
    const result = email.value.match(pattern);
    if (result === null) {
        email.style.border = "2px solid #CD2C2C";
        emailLabel.style.color = "#CD2C2C";

        const wrongInput = document.createElement("p");
        wrongInput.setAttribute("id", "wrongInputId");
        wrongInput.innerHTML = 'Wrong format';
        wrongInput.style.position = 'absolute';
        wrongInput.style.height = '16px';
        wrongInput.style.top = '0px';
        wrongInput.style.right = '0px';
        wrongInput.style.color = 'red';

        wrongInput.style.fontFamily = 'Manrope';
        wrongInput.style.fontStyle = 'normal';
        wrongInput.style.fontWeight = '700';
        wrongInput.style.fontSize = '12px';
        wrongInput.style.lineHeight = '16px';
        wrongInput.style.letterSpacing = ' -0.214286px';
        emailForm.appendChild(wrongInput);

        isValid = 0;
    }
    else {
        checkoutCreated = true;
        email.style.border = "1px solid #CFCFCF";
        emailLabel.style.color = "#000000";
        if (isValid === 0) {
            isValid = 1;
            const wrongInput = document.getElementById("wrongInputId");
            wrongInput.remove();
        }

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////

        // document.body.style.overflow = "hidden";

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

        //cream box-ul alb in care vor fi toate elementele cart-ului

        const checkoutDiv = document.createElement('div');
        checkoutDiv.style.backgroundColor = 'white';
        checkoutDiv.setAttribute("id", "checkoutDivId");
        checkoutDiv.style.width = '540px';
        checkoutDiv.style.height = '581px';
        checkoutDiv.style.top = '156px';
        checkoutDiv.style.left = '450px';
        checkoutDiv.style.position = "absolute";
        checkoutDiv.style.borderRadius = "8px";

        const marginSection = document.getElementById('marginSection');
        let designHeader = marginSection.currentStyle || window.getComputedStyle(marginSection);
        checkoutDiv.style.marginLeft = designHeader.marginLeft;

        globalCheckoutDiv = checkoutDiv;
        document.body.appendChild(checkoutDiv);

        const imgDiv = document.createElement("div");
        imgDiv.style.position = "absolute";
        imgDiv.style.width = "64px";
        imgDiv.style.height = "64px";
        imgDiv.style.top = "48px";
        imgDiv.style.left = "48px";
        checkoutDiv.appendChild(imgDiv);

        const imageChecked = document.createElement("img");
        imageChecked.setAttribute("src", "../PROJECT/images/checkout/icon-order-confirmation.svg");
        imageChecked.setAttribute("alt", "imgConfirm");
        imgDiv.appendChild(imageChecked);

        const textDiv = document.createElement("div");
        textDiv.style.position = "absolute";
        textDiv.style.height = "72px";
        textDiv.style.top = "145px";
        textDiv.style.left = "48px";
        checkoutDiv.appendChild(textDiv);

        const title = document.createElement("p");
        title.innerHTML = "THANK YOU<br>FOR YOUR ORDER";
        title.style.fontFamily = "Manrope";
        title.style.fontStyle = "normal";
        title.style.fontWeight = "700";
        title.style.fontSize = "32px";
        title.style.lineHeight = "36px";
        title.style.letterSpacing = "1.14286px";
        title.style.textTransform = "uppercase";
        title.style.color = "#000000";
        textDiv.appendChild(title);

        const paragraphDiv = document.createElement("div");
        paragraphDiv.style.position = "absolute";
        paragraphDiv.style.width = "444px";
        paragraphDiv.style.height = "25px";
        paragraphDiv.style.top = "241px";
        paragraphDiv.style.left = "48px";
        checkoutDiv.appendChild(paragraphDiv);

        const subtitle = document.createElement("p");
        subtitle.innerHTML = "You will receive an email confirmation shortly.";
        subtitle.style.fontFamily = "Manrope";
        subtitle.style.fontStyle = "normal";
        subtitle.style.fontWeight = "500";
        subtitle.style.fontSize = "15px";
        subtitle.style.lineHeight = "25px";
        subtitle.style.mixBlendMode = "normal";
        subtitle.style.opacity = "0.5";
        subtitle.style.color = "#000000";
        paragraphDiv.appendChild(subtitle);

        const showProductDiv = document.createElement("div");
        showProductDiv.setAttribute("id", "showProductDivId");
        showProductDiv.style.position = "absolute";
        showProductDiv.style.display = "flex";
        showProductDiv.style.width = "444px";
        showProductDiv.style.height = "140px";
        showProductDiv.style.top = "299px";
        showProductDiv.style.left = "48px";
        checkoutDiv.appendChild(showProductDiv);

        const productsDiv = document.createElement("div");
        productsDiv.setAttribute("id", "productsDivId");
        productsDiv.style.position = "relative";
        productsDiv.style.flexGrow = "1";
        productsDiv.style.height = "140px";
        productsDiv.style.borderTopLeftRadius = "8px";
        productsDiv.style.borderBottomLeftRadius = "8px";
        productsDiv.style.backgroundColor = "#F1F1F1";
        productsDiv.style.padding = "24px";
        showProductDiv.appendChild(productsDiv);

        const syncCartProducts = document.createElement("div");
        syncCartProducts.setAttribute("id", "syncCartProductsId");
        syncCartProducts.style.position = "absolute";
        syncCartProducts.style.height = "92px";
        syncCartProducts.style.width = "198px";
        productsDiv.appendChild(syncCartProducts);

        const productAppear = document.createElement("div");
        productAppear.setAttribute("id", "productAppearId");
        productAppear.style.height = "50px";
        productAppear.style.width = "198px";
        productAppear.style.marginBottom = "16px";
        syncCartProducts.appendChild(productAppear);

        function printProductNum(isExpand) {
            let isOneProductPrinted = false;
            let printElement = false;

            while (productAppear.firstChild) {
                productAppear.removeChild(productAppear.lastChild);
              }

            for (const key in variabilaStorage) {
                if (isOneProductPrinted === false) {
                    printElement = true;
                }
                else if (isExpand === true) {
                    printElement = true;
                }
                if (printElement === true) {
                    printElement = false;
                    if (variabilaStorage[key].numarProduse > 0) {
                        isOneProductPrinted = true;

                        const ProductDiv = document.createElement("div");
                        ProductDiv.style.width = "198px";
                        ProductDiv.style.height = "50px";
                        ProductDiv.style.display = "flex";
                        ProductDiv.style.marginBottom = "16px";
                        productAppear.appendChild(ProductDiv);

                        const ImageDiv = document.createElement("div");
                        ImageDiv.style.width = "50px";
                        ImageDiv.style.height = "50px";
                        ProductDiv.appendChild(ImageDiv);

                        const detailsProduct = document.createElement("div");
                        detailsProduct.style.height = "50px";
                        detailsProduct.style.flexGrow = "1";
                        detailsProduct.style.position = "relative";
                        ProductDiv.appendChild(detailsProduct);

                        const numberProducts = document.createElement("div");
                        numberProducts.style.height = "50px";
                        numberProducts.style.width = "15px";
                        numberProducts.style.position = "relative";
                        ProductDiv.appendChild(numberProducts);

                        ////////////////////////////////////////////////////////////////////

                        const image = document.createElement("img");
                        image.style.height = "50px";
                        image.style.width = "50px";
                        ImageDiv.appendChild(image);

                        const name = document.createElement("p");
                        name.style.height = "75px";
                        name.style.position = "absolute";
                        name.style.top = "0px";
                        name.style.left = "16px";

                        name.style.fontFamily = "Manrope";
                        name.style.fontStyle = "normal";
                        name.style.fontWeight = "700";
                        name.style.lineHeight = "25px";
                        name.style.color = "#000000";
                        detailsProduct.appendChild(name);

                        const price = document.createElement("p");
                        // price.style.width = "51px";
                        price.style.height = "25px";
                        price.style.position = "absolute";
                        price.style.top = "25px";
                        price.style.left = "16px";

                        price.style.fontFamily = "Manrope";
                        price.style.fontStyle = "normal";
                        price.style.fontWeight = "700";
                        price.style.fontSize = "14px";
                        price.style.lineHeight = "25px";
                        price.style.color = "#000000";
                        price.style.mixBlendMode = "normal";
                        price.style.opacity = "0.5";
                        detailsProduct.appendChild(price);

                        const nrProduct = document.createElement("p");
                        nrProduct.innerHTML = "x" + variabilaStorage[key].numarProduse;
                        nrProduct.style.height = "15px";
                        nrProduct.style.height = "25px";
                        nrProduct.style.position = "absolute";
                        nrProduct.style.top = "0px";
                        nrProduct.style.left = "0px";

                        nrProduct.style.fontFamily = "Manrope";
                        nrProduct.style.fontStyle = "normal";
                        nrProduct.style.fontWeight = "700";
                        nrProduct.style.fontSize = "15px";
                        nrProduct.style.lineHeight = "25px";
                        nrProduct.style.textAlign = "right";
                        nrProduct.style.color = "#000000";
                        nrProduct.style.mixBlendMode = "normal";
                        nrProduct.style.opacity = "0.5";
                        numberProducts.appendChild(nrProduct);

                        if (variabilaStorage[key].numeProdus === "x99 Mark II") {
                            image.setAttribute("src", "../PROJECT/images/product-xx99-mark-two-headphones/desktop/image-product.jpg");
                            image.setAttribute("alt", "imageMark2");
                            name.innerHTML = "XX99 MK II";
                            price.innerHTML = "$ 2,999";
                        }
                        else if (variabilaStorage[key].numeProdus === "x99 Mark I") {
                            image.setAttribute("src", "../PROJECT/images/product-xx99-mark-one-headphones/desktop/image-product.jpg");
                            image.setAttribute("alt", "imageMark1");
                            name.innerHTML = "XX99 MK I";
                            price.innerHTML = "$ 1,750";
                        }
                        else if (variabilaStorage[key].numeProdus === "x59") {
                            image.setAttribute("src", "../PROJECT/images/product-xx59-headphones/desktop/image-product.jpg");
                            image.setAttribute("alt", "imageX59");
                            name.innerHTML = "XX59";
                            price.innerHTML = "$ 899";
                        }
                        else if (variabilaStorage[key].numeProdus === "zx9") {
                            image.setAttribute("src", "../PROJECT/images/product-zx9-speaker/desktop/image-product.jpg");
                            image.setAttribute("alt", "imageZx9");
                            name.innerHTML = "ZX9";
                            price.innerHTML = "$ 4, 500";
                        }
                        else if (variabilaStorage[key].numeProdus === "zx7") {
                            image.setAttribute("src", "../PROJECT/images/product-zx7-speaker/desktop/image-product.jpg");
                            image.setAttribute("alt", "imageZx7");
                            name.innerHTML = "ZX7";
                            price.innerHTML = "$ 3, 500";
                        }
                        else if (variabilaStorage[key].numeProdus === "yx1") {
                            image.setAttribute("src", "../PROJECT/images/product-yx1-earphones/desktop/image-product.jpg");
                            image.setAttribute("alt", "imageYx1");
                            name.innerHTML = "YX1";
                            price.innerHTML = "$ 599";
                        }
                    }
                }
            }
        }

        printProductNum(false);

        const line = document.createElement("div");
        line.style.height = "1px";
        line.style.width = "198px";
        line.style.backgroundColor = "#000000";
        line.style.mixBlendMode = "normal";
        line.style.opacity = "0.08";
        syncCartProducts.appendChild(line);

        const expendProduct = document.createElement("div");
        expendProduct.style.position = "relative";
        expendProduct.style.height = "29px";
        expendProduct.style.width = "198px";
        syncCartProducts.appendChild(expendProduct);

        const paragraphExpend = document.createElement("p");
        paragraphExpend.style.position = "absolute";
        paragraphExpend.style.height = "16px";
        paragraphExpend.style.width = "108px";
        paragraphExpend.style.top = "12px";
        paragraphExpend.style.left = "70px";
        paragraphExpend.innerHTML = "and " + (parseInt(localStorage.numarPorduseAdaugate) - 1) + " other item(s)";
        paragraphExpend.style.cursor = "pointer";
        paragraphExpend.style.fontFamily = "Manrope";
        paragraphExpend.style.fontStyle = "normal";
        paragraphExpend.style.fontSize = "12px";
        paragraphExpend.style.lineHeight = "16px";
        paragraphExpend.style.fontWeight = "700";
        paragraphExpend.style.letterSpacing = "-0.214286px";
        paragraphExpend.style.color = "#000000";
        paragraphExpend.style.mixBlendMode = "normal";
        paragraphExpend.style.opacity = "0.5";
        expendProduct.appendChild(paragraphExpend);

        let expandBoxProduct = true;
        paragraphExpend.addEventListener("click", () => {
            if (expandBoxProduct === true) {
                expandBoxProduct=false;
                const checkoutDivId = document.getElementById("checkoutDivId");
                checkoutDivId.style.height = checkoutDivId.offsetHeight + 66 * (parseInt(localStorage.numarPorduseAdaugate) - 1) + "px";

                const showProductDivId = document.getElementById("showProductDivId");
                showProductDivId.style.height = showProductDivId.offsetHeight + 66 * (parseInt(localStorage.numarPorduseAdaugate) - 1) + "px";

                const productsDivId = document.getElementById("productsDivId");
                productsDivId.style.height = productsDivId.offsetHeight + 66 * (parseInt(localStorage.numarPorduseAdaugate) - 1) + "px";

                const totalDivId = document.getElementById("totalDivId");
                totalDivId.style.height = totalDivId.offsetHeight + 66 * (parseInt(localStorage.numarPorduseAdaugate) - 1) + "px";

                paragraphExpend.innerHTML = "View less";

                const grandTotalId = document.getElementById("grandTotalId");
                grandTotalId.style.top = grandTotalId.offsetTop + 66 * (parseInt(localStorage.numarPorduseAdaugate) - 1) + "px";

                const sumaProdId = document.getElementById("sumaProdId");
                sumaProdId.style.top = sumaProdId.offsetTop + 66 * (parseInt(localStorage.numarPorduseAdaugate) - 1) + "px";

                const buttonDivId = document.getElementById("buttonDivId");
                buttonDivId.style.top = buttonDivId.offsetTop + 66 * (parseInt(localStorage.numarPorduseAdaugate) - 1) + "px";

                const productAppearId = document.getElementById("productAppearId");
                productAppearId.style.height = productAppearId.offsetHeight + 66 * (parseInt(localStorage.numarPorduseAdaugate) - 1) + "px";

                printProductNum(true);
            }
            else{
                expandBoxProduct=true;

                const checkoutDivId = document.getElementById("checkoutDivId");
                checkoutDivId.style.height = checkoutDivId.offsetHeight - 66 * (parseInt(localStorage.numarPorduseAdaugate) - 1) + "px";

                const showProductDivId = document.getElementById("showProductDivId");
                showProductDivId.style.height = showProductDivId.offsetHeight - 66 * (parseInt(localStorage.numarPorduseAdaugate) - 1) + "px";

                const productsDivId = document.getElementById("productsDivId");
                productsDivId.style.height = productsDivId.offsetHeight - 66 * (parseInt(localStorage.numarPorduseAdaugate) - 1) + "px";

                const totalDivId = document.getElementById("totalDivId");
                totalDivId.style.height = totalDivId.offsetHeight - 66 * (parseInt(localStorage.numarPorduseAdaugate) - 1) + "px";

                paragraphExpend.innerHTML =  "and " + (parseInt(localStorage.numarPorduseAdaugate) - 1) + " other item(s)";

                const grandTotalId = document.getElementById("grandTotalId");
                grandTotalId.style.top = grandTotalId.offsetTop - 66 * (parseInt(localStorage.numarPorduseAdaugate) - 1) + "px";

                const sumaProdId = document.getElementById("sumaProdId");
                sumaProdId.style.top = sumaProdId.offsetTop - 66 * (parseInt(localStorage.numarPorduseAdaugate) - 1) + "px";

                const buttonDivId = document.getElementById("buttonDivId");
                buttonDivId.style.top = buttonDivId.offsetTop - 66 * (parseInt(localStorage.numarPorduseAdaugate) - 1) + "px";

                const productAppearId = document.getElementById("productAppearId");
                productAppearId.style.height = productAppearId.offsetHeight - 66 * (parseInt(localStorage.numarPorduseAdaugate) - 1) + "px";

                printProductNum(false);
            }

        });

        const totalDiv = document.createElement("div");
        totalDiv.setAttribute("id", "totalDivId");
        totalDiv.style.position = "relative";
        totalDiv.style.width = "198px";
        totalDiv.style.height = "140px";
        totalDiv.style.borderTopRightRadius = "8px";
        totalDiv.style.borderBottomRightRadius = "8px";
        totalDiv.style.backgroundColor = "#000000";
        showProductDiv.appendChild(totalDiv);

        const grandTotal = document.createElement("p");

        grandTotal.innerHTML = "GRAND TOTAL";
        grandTotal.setAttribute("id", "grandTotalId");
        grandTotal.style.width = "100px";
        grandTotal.style.height = "25px";
        grandTotal.style.top = "41px";
        grandTotal.style.left = "32px";
        grandTotal.style.position = "absolute";
        grandTotal.style.fontFamily = "Manrope";
        grandTotal.style.fontStyle = "normal";
        grandTotal.style.fontWeight = "500";
        grandTotal.style.fontSize = "15px";
        grandTotal.style.lineHeight = "25px";
        grandTotal.style.mixBlendMode = "normal";
        grandTotal.style.opacity = "0.5";
        grandTotal.style.color = "#FFFFFF";
        totalDiv.appendChild(grandTotal);

        const sumaProd = document.createElement("p");
        sumaProd.setAttribute("id", "sumaProdId");
        sumaProd.innerHTML = "$" + (parseInt(parseInt(localStorage.sumaProduselor) + 50)).toLocaleString('en-US');
        sumaProd.style.width = "64px";
        sumaProd.style.height = "25px";
        sumaProd.style.top = "74px";
        sumaProd.style.left = "32px";
        sumaProd.style.position = "absolute";
        sumaProd.style.fontFamily = "Manrope";
        sumaProd.style.fontStyle = "normal";
        sumaProd.style.fontWeight = "700";
        sumaProd.style.fontSize = "18px";
        sumaProd.style.lineHeight = "25px";
        sumaProd.style.textAlign = "right";
        sumaProd.style.textTransform = "uppercase";
        sumaProd.style.color = "#FFFFFF";
        totalDiv.appendChild(sumaProd);

        const buttonDiv = document.createElement("div");
        buttonDiv.setAttribute("id", "buttonDivId");
        buttonDiv.style.position = "absolute";
        buttonDiv.style.width = "444px";
        buttonDiv.style.height = "48px";
        buttonDiv.style.top = "485px";
        buttonDiv.style.left = "48px";
        checkoutDiv.appendChild(buttonDiv);

        // const linkButon = document.createElement("a");
        // linkButon.setAttribute("href", "../PROJECT/desktop-home.html");
        // buttonDiv.appendChild(linkButon);

        const buttonBack = document.createElement("button");
        // buttonBack.setAttribute("id", "buttonDivId");
        buttonBack.style.width = "444px";
        buttonBack.style.height = "48px";
        buttonBack.style.backgroundColor = "#FBAF85";
        buttonBack.style.border = "none";
        buttonBack.style.cursor = "pointer";
        buttonBack.innerHTML = "BACK TO HOME";
        buttonBack.style.fontFamily = "Manrope";
        buttonBack.style.fontStyle = "normal";
        buttonBack.style.fontWeight = "700";
        buttonBack.style.fontSize = "13px";
        buttonBack.style.lineHeight = "18px";
        buttonBack.style.textAlign = "center";
        buttonBack.style.letterSpacing = "1px";
        buttonBack.style.textTransform = "uppercase";
        buttonBack.style.color = "#FFFFFF";
        buttonDiv.appendChild(buttonBack);

        buttonBack.addEventListener("click", ()=>{
            for (const key in variabilaStorage) {
                if (variabilaStorage[key].numarProduse != 0) {
                    variabilaStorage[key].numarProduse=0;
                }
            }
            localStorage.listaDeObiecte= JSON.stringify(variabilaStorage);
            window.open("../PROJECT/desktop-home.html", "_self");

        })
    }

});

window.addEventListener('resize', function (event) {
    const marginSection = document.getElementById('marginSection');
    let designHeader = marginSection.currentStyle || window.getComputedStyle(marginSection);
    if (checkoutCreated === true) {
        globalCheckoutDiv.style.marginLeft = designHeader.marginLeft;
    }
}, true);











