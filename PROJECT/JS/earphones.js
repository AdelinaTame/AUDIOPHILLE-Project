import { counterNumberOfProduct } from './cart.js';

const clickYx1EarphonesButton = document.getElementById('button1');

const h1RemoveElement = document.querySelector('.earphones-title');
const headerModifyDimension = document.querySelector('.headerModifyDimension');
const mainModify = document.querySelector('main');
const buttonRemoveElement = document.getElementById('button1');
const bigBoxModifyDimension = document.querySelector('.yx1EarphonesText');
const cart = document.querySelector('.cart');

const shopContainer = document.querySelector('.shop-container');
const bestAudioContainer = document.querySelector('.bestAudio-container');
const headphonesFooter = document.querySelector('footer');

// const changeTitle1 = document.querySelector('yx1-h1');
// const speakersZx9Image = document.querySelector('.yx1EarphonesImage');
// const changeTextMark1 = document.querySelector('.describe');

// const subtitleNewProduct = document.querySelector('.subtitle');

let numberOfProducts = 1;

function subProduct(paragraphParam) {
    if (numberOfProducts > 1) {
        numberOfProducts--;
    }
    paragraphParam.innerHTML = numberOfProducts.toString();
}

function addProduct(paragraphParam) {
    numberOfProducts++;
    paragraphParam.innerHTML = numberOfProducts.toString();
}

function addInLocalStorage1(nameOfProductParam) {
    let variabilaListaObiecte = JSON.parse(localStorage.listaDeObiecte);
    if (nameOfProductParam === "YX1 EARPHONES") {
        variabilaListaObiecte['obiect-6'].numarProduse = variabilaListaObiecte['obiect-6'].numarProduse + numberOfProducts;
    }
    localStorage.listaDeObiecte = JSON.stringify(variabilaListaObiecte);
    counterNumberOfProduct();

        ///////////////////// ANIMATIE
    const addCartPicture = document.createElement('img');
    addCartPicture.setAttribute("src", "../PROJECT/images/checkout/icon-order-confirmation.svg");
    addCartPicture.setAttribute("alt", "imgConfirm");
    addCartPicture.setAttribute("id", "imgSuccessCart");
    addCartPicture.style.position = 'absolute';
    addCartPicture.style.width = '30px';
    addCartPicture.style.height = '30px';
    addCartPicture.style.top = '370px';
    addCartPicture.style.left = '310px';
    bigBoxModifyDimension.appendChild(addCartPicture);
}

function modifyEarphonesPage(nameOfProduct) {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;

    headerModifyDimension.style.height = '97px';
    mainModify.style.height = '4033px';
    shopContainer.style.top = '2841px';
    bestAudioContainer.style.top = '3285px';
    headphonesFooter.style.height = '365px';

    h1RemoveElement.remove();

    cart.setAttribute('id', 'cartImg');

    const linkGoBack = document.createElement('a');
    mainModify.appendChild(linkGoBack);
    linkGoBack.setAttribute('href', '../PROJECT/desktop-category-earphones.html');

    const pLink = document.createElement('p');
    pLink.innerHTML = 'Go back';
    pLink.style.position = 'absolute';
    pLink.style.width = '57px';
    pLink.style.height = '25px';
    pLink.style.top = '79px';
    pLink.style.left = '165px';
    pLink.style.fontFamily = "Manrope";
    pLink.style.fontStyle = "normal";
    pLink.style.fontWeight = "500";
    pLink.style.fontSize = "15px";
    pLink.style.lineHeight = "25px";
    pLink.style.color = "#000000";
    pLink.style.mixBlendMode = "normal";
    pLink.style.opacity = "0.5";
    linkGoBack.appendChild(pLink);

    buttonRemoveElement.remove();

    bigBoxModifyDimension.style.height = '407px';

    const price = document.createElement('h1');
    price.style.position = 'absolute';
    price.innerHTML = '$ 599';
    price.style.height = '25px';
    price.style.top = '287px';
    price.style.left = '0px';
    price.style.fontFamily = "Manrope";
    price.style.fontStyle = "normal";
    price.style.fontWeight = "700";
    price.style.fontSize = "18px";
    price.style.lineHeight = "25px";
    price.style.color = "#000000";
    price.style.letterSpacing = "1.28571px";
    price.style.textTransform = "uppercase";
    bigBoxModifyDimension.appendChild(price);

    const productsNumberBox = document.createElement('div');
    productsNumberBox.style.position = 'absolute';
    productsNumberBox.style.width = '120px';
    productsNumberBox.style.height = '48px';
    productsNumberBox.style.top = '359px';
    productsNumberBox.style.left = '0.5px';
    productsNumberBox.style.backgroundColor = '#F1F1F1';
    bigBoxModifyDimension.appendChild(productsNumberBox);

    const addCartButton = document.createElement('button');
    addCartButton.innerHTML = 'ADD TO CART';
    addCartButton.setAttribute("id", "productAddToCart1")
    addCartButton.style.position = 'absolute';
    addCartButton.style.width = '160px';
    addCartButton.style.height = '48px';
    addCartButton.style.top = '359px';
    addCartButton.style.left = '136.5px';
    addCartButton.style.cursor = 'pointer';
    addCartButton.style.fontFamily = "Manrope";
    addCartButton.style.fontStyle = "normal";
    addCartButton.style.fontWeight = "700";
    addCartButton.style.fontSize = "13px";
    addCartButton.style.lineHeight = "18px";
    addCartButton.style.color = "#FFFFFF";
    addCartButton.style.backgroundColor = "#D87D4A";
    addCartButton.style.textAlign = 'center';
    addCartButton.style.letterSpacing = '1px';
    addCartButton.style.stroke = "#979797";
    addCartButton.style.textTransform = "uppercase";
    bigBoxModifyDimension.appendChild(addCartButton);
    addCartButton.addEventListener('mouseenter', () => {
        addCartButton.style.color = '#FFFFFF';
        addCartButton.style.backgroundColor = '#FBAF85';
    });
    addCartButton.addEventListener('mouseleave', () => {
        addCartButton.style.color = '#FFFFFF';
        addCartButton.style.backgroundColor = '#D87D4A';
    });
    let produs1 = document.getElementById("productAddToCart1");
    if (!Object.is(produs1, null)) {
        produs1.addEventListener("click",() =>{addInLocalStorage1(nameOfProduct)});
    }

    const productResult = document.createElement('p');
    productResult.setAttribute("id", "productResultId");
    productResult.innerHTML = '1';
    productResult.style.position = 'absolute';
    productResult.style.height = '18px';
    productResult.style.top = '15px';
    productResult.style.left = '51.5px';
    productResult.style.backgroundColor = '#F1F1F1';
    productResult.style.color = '#000000';
    productResult.style.cursor = 'pointer';
    productResult.style.fontFamily = "Manrope";
    productResult.style.fontStyle = "normal";
    productResult.style.fontWeight = "700";
    productResult.style.fontSize = "13px";
    productResult.style.lineHeight = "18px";
    productResult.style.color = "#000000";
    productResult.style.textAlign = 'center';
    productResult.style.textTransform = "uppercase";
    productResult.style.letterSpacing = "1px";
    productsNumberBox.appendChild(productResult);

    const minusB = document.createElement('button');
    minusB.innerHTML = '-';
    minusB.style.position = 'absolute';
    minusB.style.width = '16px';
    minusB.style.height = '18px';
    minusB.style.top = '15px';
    minusB.style.left = '15.5px';
    minusB.style.border = 'none';
    minusB.style.backgroundColor = '#F1F1F1';
    minusB.style.color = '#000000';
    minusB.style.cursor = 'pointer';
    minusB.style.fontFamily = "Manrope";
    minusB.style.fontStyle = "normal";
    minusB.style.fontWeight = "700";
    minusB.style.fontSize = "13px";
    minusB.style.lineHeight = "18px";
    minusB.style.color = "#000000";
    minusB.style.textAlign = 'center';
    minusB.style.mixBlendMode = 'normal';
    minusB.style.opacity = "0.25px";
    minusB.style.textTransform = "uppercase";
    productsNumberBox.appendChild(minusB);
    minusB.addEventListener('mouseenter', () => {
        minusB.style.color = '#D87D4A';
        minusB.style.backgroundColor = '#F1F1F1';
    });
    minusB.addEventListener('mouseleave', () => {
        minusB.style.color = '#000000';
        minusB.style.backgroundColor = '#F1F1F1';
    });
    minusB.addEventListener('click', () => subProduct(productResult));

    const plusB = document.createElement('button');
    plusB.innerHTML = '+';
    plusB.style.position = 'absolute';
    plusB.style.width = '16px';
    plusB.style.height = '18px';
    plusB.style.top = '15px';
    plusB.style.left = '88.5px';
    plusB.style.border = 'none';
    plusB.style.backgroundColor = '#F1F1F1';
    plusB.style.color = '#000000';
    plusB.style.cursor = 'pointer';
    plusB.style.fontFamily = "Manrope";
    plusB.style.fontStyle = "normal";
    plusB.style.fontWeight = "700";
    plusB.style.fontSize = "13px";
    plusB.style.lineHeight = "18px";
    plusB.style.color = "#000000";
    plusB.style.textAlign = 'center';
    plusB.style.mixBlendMode = 'normal';
    plusB.style.opacity = "0.25px";
    plusB.style.textTransform = "uppercase";
    productsNumberBox.appendChild(plusB);
    plusB.addEventListener('mouseenter', () => {
        plusB.style.color = '#D87D4A';
        plusB.style.backgroundColor = '#F1F1F1';
    });
    plusB.addEventListener('mouseleave', () => {
        plusB.style.color = '#000000';
        plusB.style.backgroundColor = '#F1F1F1';
    });
    plusB.addEventListener('click', () => addProduct(productResult));

    const features = document.createElement('div');
    features.style.position = 'absolute';
    features.style.width = '1110px';
    features.style.height = '318px';
    features.style.top = '880px';
    mainModify.appendChild(features);

    const featuresBox = document.createElement('div');
    featuresBox.style.position = 'absolute';
    featuresBox.style.width = '635px';
    featuresBox.style.height = '318px';
    features.appendChild(featuresBox);

    const titleBox = document.createElement('h1');
    titleBox.style.position = 'absolute';
    titleBox.innerHTML = 'FEATURES';
    titleBox.style.width = '445px';
    titleBox.style.height = '36px';
    titleBox.style.top = '0px';
    titleBox.style.fontFamily = "Manrope";
    titleBox.style.fontStyle = "normal";
    titleBox.style.fontWeight = "700";
    titleBox.style.fontSize = "32px";
    titleBox.style.lineHeight = "36px";
    titleBox.style.color = "#000000";
    titleBox.style.textTransform = "uppercase";
    titleBox.style.letterSpacing = "1.14286px";
    featuresBox.appendChild(titleBox);

    const paragraphBox = document.createElement('p');
    paragraphBox.style.position = 'absolute';
    paragraphBox.innerHTML = 'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.<br><br>The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.';
    paragraphBox.style.height = '250px';
    paragraphBox.style.top = '68px';
    paragraphBox.style.left = '0px';
    paragraphBox.style.fontFamily = "Manrope";
    paragraphBox.style.fontStyle = "normal";
    paragraphBox.style.fontWeight = "500";
    paragraphBox.style.fontSize = "15px";
    paragraphBox.style.lineHeight = "25px";
    paragraphBox.style.color = "#000000";
    paragraphBox.style.mixBlendMode = "normal";
    paragraphBox.style.opacity = "0.5";
    featuresBox.appendChild(paragraphBox);

    const paragraphBox2 = document.createElement('p');
    paragraphBox2.style.position = 'absolute';
    paragraphBox2.style.width = '635px';
    paragraphBox2.style.height = '250px';
    paragraphBox2.style.top = '205px';
    paragraphBox2.style.left = '0px';
    paragraphBox2.style.fontFamily = "Manrope";
    paragraphBox2.style.fontStyle = "normal";
    paragraphBox2.style.fontWeight = "500";
    paragraphBox2.style.fontSize = "15px";
    paragraphBox2.style.lineHeight = "25px";
    paragraphBox2.style.color = "#000000";
    paragraphBox2.style.mixBlendMode = "normal";
    paragraphBox2.style.opacity = "0.5";
    featuresBox.appendChild(paragraphBox2);

    const inTheBox = document.createElement('div');
    inTheBox.style.position = 'absolute';
    inTheBox.style.width = '350px';
    inTheBox.style.height = '225px';
    inTheBox.style.top = '0px';
    inTheBox.style.left = '760px';
    features.appendChild(inTheBox);

    const titleInTheBox = document.createElement('h1');
    titleInTheBox.style.position = 'absolute';
    titleInTheBox.innerHTML = 'IN THE BOX';
    titleInTheBox.style.width = '350px';
    titleInTheBox.style.height = '36px';
    titleInTheBox.style.top = '0px';
    titleInTheBox.style.fontFamily = "Manrope";
    titleInTheBox.style.fontStyle = "normal";
    titleInTheBox.style.fontWeight = "700";
    titleInTheBox.style.fontSize = "32px";
    titleInTheBox.style.lineHeight = "36px";
    titleInTheBox.style.color = "#000000";
    titleInTheBox.style.textTransform = "uppercase";
    titleInTheBox.style.letterSpacing = "1.14286px";
    inTheBox.appendChild(titleInTheBox);

    const listInTheBox = document.createElement('ul');
    listInTheBox.style.position = 'absolute';
    listInTheBox.style.width = '15px';
    listInTheBox.style.height = '25px';
    listInTheBox.style.top = '68px';
    listInTheBox.style.left = '0px';
    listInTheBox.style.listStyle = 'none';
    listInTheBox.style.fontFamily = "Manrope";
    listInTheBox.style.fontStyle = "normal";
    listInTheBox.style.fontWeight = "700";
    listInTheBox.style.fontSize = "15px";
    listInTheBox.style.lineHeight = "25px";
    listInTheBox.style.color = "#FFFFFF";
    listInTheBox.style.mixBlendMode = "normal";
    listInTheBox.style.opacity = "0.5";
    inTheBox.appendChild(listInTheBox);

    const itemInTheBox1 = document.createElement('li');
    itemInTheBox1.style.color = '#D87D4A';
    listInTheBox.appendChild(itemInTheBox1);

    const itemInTheBox2 = document.createElement('li');
    itemInTheBox2.style.color = '#D87D4A';
    listInTheBox.appendChild(itemInTheBox2);

    const itemInTheBox3 = document.createElement('li');
    itemInTheBox3.style.color = '#D87D4A';
    listInTheBox.appendChild(itemInTheBox3);

    const itemInTheBox4 = document.createElement('li');
    itemInTheBox4.style.color = '#D87D4A';
    listInTheBox.appendChild(itemInTheBox4);

    const itemInTheBox5 = document.createElement('li');
    itemInTheBox5.style.color = '#D87D4A';
    listInTheBox.appendChild(itemInTheBox5);

    const listInTheBox2 = document.createElement('ul');
    listInTheBox2.style.position = 'absolute';
    listInTheBox2.style.height = '25px';
    listInTheBox2.style.top = '68px';
    listInTheBox2.style.left = '39px';
    listInTheBox2.style.listStyle = 'none';
    listInTheBox2.style.fontFamily = "Manrope";
    listInTheBox2.style.fontStyle = "normal";
    listInTheBox2.style.fontWeight = "500";
    listInTheBox2.style.fontSize = "15px";
    listInTheBox2.style.lineHeight = "25px";
    listInTheBox2.style.color = "#000000";
    listInTheBox2.style.mixBlendMode = "normal";
    listInTheBox2.style.opacity = "0.5";
    inTheBox.appendChild(listInTheBox2);

    const list2itemInTheBox1 = document.createElement('li');
    listInTheBox2.appendChild(list2itemInTheBox1);

    const list2itemInTheBox2 = document.createElement('li');
    listInTheBox2.appendChild(list2itemInTheBox2);

    const list2itemInTheBox3 = document.createElement('li');
    listInTheBox2.appendChild(list2itemInTheBox3);

    const list2itemInTheBox4 = document.createElement('li');
    listInTheBox2.appendChild(list2itemInTheBox4);

    const list2itemInTheBox5 = document.createElement('li');
    listInTheBox2.appendChild(list2itemInTheBox5);

    itemInTheBox1.innerHTML = '2x';
    itemInTheBox2.innerHTML = '6x';
    itemInTheBox3.innerHTML = '1x';
    itemInTheBox4.innerHTML = '1x';
    itemInTheBox5.innerHTML = '1x';

    list2itemInTheBox1.innerHTML = 'Earphone Unit';
    list2itemInTheBox2.innerHTML = 'Multi-size Earplugs';
    list2itemInTheBox3.innerHTML = 'User Manual';
    list2itemInTheBox4.innerHTML = 'USB-C Charging Cable';
    list2itemInTheBox5.innerHTML = 'Travel Pouch';

    const containerBox = document.createElement('div');
    containerBox.style.position = 'absolute';
    containerBox.style.height = '592px';
    containerBox.style.width = '1110px';
    containerBox.style.top = '1358px';
    mainModify.appendChild(containerBox);

    const imgGallery1 = document.createElement('img');
    imgGallery1.style.position = 'absolute';
    imgGallery1.style.width = '445px';
    imgGallery1.style.height = '280px';
    imgGallery1.style.top = '0px';
    containerBox.appendChild(imgGallery1);

    const imgGallery2 = document.createElement('img');
    imgGallery2.style.position = 'absolute';
    imgGallery2.style.width = '445px';
    imgGallery2.style.height = '280px';
    imgGallery2.style.top = '312px';
    containerBox.appendChild(imgGallery2);

    const imgGallery3 = document.createElement('img');
    imgGallery3.style.position = 'absolute';
    imgGallery3.style.width = '635px';
    imgGallery3.style.height = '592px';
    imgGallery3.style.top = '0px';
    imgGallery3.style.left = '475px';
    containerBox.appendChild(imgGallery3);

    const otherProducts = document.createElement('div');
    otherProducts.style.position = 'absolute';
    otherProducts.style.width = '1110px';
    otherProducts.style.height = '571px';
    otherProducts.style.top = '2110px';
    mainModify.appendChild(otherProducts);

    const title = document.createElement('h1');
    title.style.position = 'absolute';
    title.innerHTML = 'YOU MAY ALSO LIKE';
    title.style.height = '36px';
    title.style.top = '0px';
    title.style.left = '396px';
    title.style.fontFamily = "Manrope";
    title.style.fontStyle = "normal";
    title.style.fontWeight = "700";
    title.style.fontSize = "32px";
    title.style.lineHeight = "36px";
    title.style.color = "#000000";
    title.style.letterSpacing = " 1.14286px";
    title.style.textTransform = "uppercase";
    otherProducts.appendChild(title);

    const firstBox = document.createElement('div');
    firstBox.style.position = 'absolute';
    firstBox.style.width = '350px';
    firstBox.style.height = '471px';
    firstBox.style.top = '100px';
    otherProducts.appendChild(firstBox);

    const img1Box = document.createElement('div');
    img1Box.style.position = 'relative';
    img1Box.style.width = '350px';
    img1Box.style.height = '318px';
    img1Box.style.backgroundColor = '#F1F1F1';
    img1Box.style.borderRadius = '8px';
    firstBox.appendChild(img1Box);

    const image1 = document.createElement('img');
    image1.style.position = 'absolute';
    image1.style.width = '200px';
    image1.style.height = '210px';
    image1.style.top = '62px';
    image1.style.left = '75px';
    img1Box.appendChild(image1);

    const title1 = document.createElement('h1');
    title1.style.position = 'absolute';
    title1.style.height = '33px';
    title1.style.top = '358px';
    title1.style.left = '94px';
    title1.style.fontFamily = "Manrope";
    title1.style.fontStyle = "normal";
    title1.style.fontWeight = "700";
    title1.style.fontSize = "24px";
    title1.style.lineHeight = "33px";
    title1.style.textAlign = 'center';
    title1.style.letterSpacing = " 1.71429px";
    title1.style.textTransform = "uppercase";
    firstBox.appendChild(title1);

    const button1 = document.createElement('button');
    button1.innerHTML = 'SEE PRODUCT';
    button1.style.position = 'absolute';
    button1.style.width = '160px';
    button1.style.height = '48px';
    button1.style.left = '95px';
    button1.style.top = '423px';
    button1.style.cursor = 'pointer';
    button1.style.border = 'none';
    button1.style.fontFamily = "Manrope";
    button1.style.fontStyle = "normal";
    button1.style.fontWeight = "700";
    button1.style.fontSize = "13px";
    button1.style.lineHeight = "18px";
    button1.style.color = "#FFFFFF";
    button1.style.backgroundColor = "#D87D4A";
    button1.style.textAlign = 'center';
    button1.style.letterSpacing = '1px';
    button1.style.stroke = "#979797";
    button1.style.textTransform = "uppercase";
    button1.addEventListener('mouseenter', () => {
        button1.style.color = '#FFFFFF';
        button1.style.backgroundColor = '#FBAF85';
    });
    button1.addEventListener('mouseleave', () => {
        button1.style.color = '#FFFFFF';
        button1.style.backgroundColor = '#D87D4A';
    });
    firstBox.appendChild(button1);


    button1.addEventListener("click", () => {
        localStorage.headphonesSeeProduct2 = 1;
        window.open("../PROJECT/desktop-category-headphones.html", "_self");
    });

    const secondBox = document.createElement('div');
    secondBox.style.position = 'absolute';
    secondBox.style.width = '350px';
    secondBox.style.height = '471px';
    secondBox.style.top = '100px';
    secondBox.style.left = '380px';
    otherProducts.appendChild(secondBox);

    const img2Box = document.createElement('div');
    img2Box.style.position = 'relative';
    img2Box.style.width = '350px';
    img2Box.style.height = '318px';
    img2Box.style.backgroundColor = '#F1F1F1';
    img2Box.style.borderRadius = '8px';
    secondBox.appendChild(img2Box);

    const image2 = document.createElement('img');
    image2.style.position = 'absolute';
    image2.style.width = '200px';
    image2.style.height = '210px';
    image2.style.top = '62px';
    image2.style.left = '75px';
    img2Box.appendChild(image2);

    const title2 = document.createElement('h1');
    title2.style.position = 'absolute';
    title2.style.height = '33px';
    title2.style.top = '358px';
    title2.style.left = '140px';
    title2.style.fontFamily = "Manrope";
    title2.style.fontStyle = "normal";
    title2.style.fontWeight = "700";
    title2.style.fontSize = "24px";
    title2.style.lineHeight = "33px";
    title2.style.textAlign = 'center';
    title2.style.letterSpacing = " 1.71429px";
    title2.style.textTransform = "uppercase";
    secondBox.appendChild(title2);

    const button2 = document.createElement('button');
    button2.innerHTML = 'SEE PRODUCT';
    button2.style.position = 'absolute';
    button2.style.width = '160px';
    button2.style.height = '48px';
    button2.style.left = '95px';
    button2.style.top = '423px';
    button2.style.cursor = 'pointer';
    button2.style.border = 'none';
    button2.style.fontFamily = "Manrope";
    button2.style.fontStyle = "normal";
    button2.style.fontWeight = "700";
    button2.style.fontSize = "13px";
    button2.style.lineHeight = "18px";
    button2.style.color = "#FFFFFF";
    button2.style.backgroundColor = "#D87D4A";
    button2.style.textAlign = 'center';
    button2.style.letterSpacing = '1px';
    button2.style.stroke = "#979797";
    button2.style.textTransform = "uppercase";
    button2.addEventListener('mouseenter', () => {
        button2.style.color = '#FFFFFF';
        button2.style.backgroundColor = '#FBAF85';
    });
    button2.addEventListener('mouseleave', () => {
        button2.style.color = '#FFFFFF';
        button2.style.backgroundColor = '#D87D4A';
    });
    secondBox.appendChild(button2);

    button2.addEventListener("click", () => {
        localStorage.headphonesSeeProduct3 = 1;
        window.open("../PROJECT/desktop-category-headphones.html", "_self");
    });

    const thirdBox = document.createElement('div');
    thirdBox.style.position = 'absolute';
    thirdBox.style.width = '350px';
    thirdBox.style.height = '471px';
    thirdBox.style.top = '100px';
    thirdBox.style.left = '760px';
    otherProducts.appendChild(thirdBox);

    const img3Box = document.createElement('div');
    img3Box.style.position = 'relative';
    img3Box.style.width = '350px';
    img3Box.style.height = '318px';
    img3Box.style.backgroundColor = '#F1F1F1';
    img3Box.style.borderRadius = '8px';
    thirdBox.appendChild(img3Box);

    const image3 = document.createElement('img');
    image3.setAttribute('src', '../PROJECT/images/product-zx9-speaker/desktop/image-product.jpg');
    image3.setAttribute('alt', 'image3');
    image3.style.position = 'absolute';
    image3.style.width = '200px';
    image3.style.height = '210px';
    image3.style.top = '62px';
    image3.style.left = '75px';
    img3Box.appendChild(image3);

    const title3 = document.createElement('h1');
    title3.style.position = 'absolute';
    title3.innerHTML = 'ZX9 SPEAKER';
    title3.style.height = '33px';
    title3.style.top = '358px';
    title3.style.left = '86.5px';
    title3.style.fontFamily = "Manrope";
    title3.style.fontStyle = "normal";
    title3.style.fontWeight = "700";
    title3.style.fontSize = "24px";
    title3.style.lineHeight = "33px";
    title3.style.textAlign = 'center';
    title3.style.letterSpacing = " 1.71429px";
    title3.style.textTransform = "uppercase";
    thirdBox.appendChild(title3);

    const button3 = document.createElement('button');
    button3.innerHTML = 'SEE PRODUCT';
    button3.style.position = 'absolute';
    button3.style.width = '160px';
    button3.style.height = '48px';
    button3.style.left = '95px';
    button3.style.top = '423px';
    button3.style.cursor = 'pointer';
    button3.style.border = 'none';
    button3.style.fontFamily = "Manrope";
    button3.style.fontStyle = "normal";
    button3.style.fontWeight = "700";
    button3.style.fontSize = "13px";
    button3.style.lineHeight = "18px";
    button3.style.color = "#FFFFFF";
    button3.style.backgroundColor = "#D87D4A";
    button3.style.textAlign = 'center';
    button3.style.letterSpacing = '1px';
    button3.style.stroke = "#979797";
    button3.style.textTransform = "uppercase";
    button3.addEventListener('mouseenter', () => {
        button3.style.color = '#FFFFFF';
        button3.style.backgroundColor = '#FBAF85';
    });
    button3.addEventListener('mouseleave', () => {
        button3.style.color = '#FFFFFF';
        button3.style.backgroundColor = '#D87D4A';
    });
    thirdBox.appendChild(button3);

    button3.addEventListener("click", () => {
        localStorage.speakerSeeProduct = 1;
        window.open("../PROJECT/desktop-category-speakers.html", "_self");
    });

    imgGallery1.setAttribute('src', '../PROJECT/images/product-yx1-earphones/desktop/image-gallery-1.jpg');
    imgGallery1.setAttribute('alt', 'imgGallery1');

    imgGallery2.setAttribute('src', '../PROJECT/images/product-yx1-earphones/desktop/image-gallery-2.jpg');
    imgGallery2.setAttribute('alt', 'imgGallery2');

    imgGallery3.setAttribute('src', '../PROJECT/images/product-yx1-earphones/desktop/image-gallery-3.jpg');
    imgGallery3.setAttribute('alt', 'imgGallery3');

    image1.setAttribute('src', '../PROJECT/images/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg');
    image1.setAttribute('alt', 'image1');
    title1.innerHTML = 'XX99 MARK I';

    image2.setAttribute('src', '../PROJECT/images/product-xx59-headphones/desktop/image-product.jpg');
    image2.setAttribute('alt', 'image2');
    title2.innerHTML = 'XX59';

}


if (localStorage.getItem("headphonesSeeProduct2") != null){
    if (localStorage.headphonesSeeProduct2 === "1"){
        localStorage.headphonesSeeProduct2=0;
        modifyEarphonesPage("XX99 Mark I Headphones");
    }
}

if (localStorage.getItem("headphonesSeeProduct3") != null){
    if (localStorage.headphonesSeeProduct3 === "1"){
        localStorage.headphonesSeeProduct3=0;
        modifyEarphonesPage("XX59 Headphones");
    }
}

if (localStorage.getItem("speakerSeeProduct") != null) {
    if (localStorage.speakerSeeProduct === "1") {
        localStorage.speakerSeeProduct = 0;
        modifyEarphonesPage("ZX9 SPEAKER");
    }
}

if (localStorage.getItem("earphonesSeeProduct") != null) {
    if (localStorage.earphonesSeeProduct === "1") {
        localStorage.earphonesSeeProduct = 0;
        modifyEarphonesPage("YX1 Earphones");
    }
}

clickYx1EarphonesButton.addEventListener('click', () => modifyEarphonesPage("YX1 EARPHONES"));
