import { counterNumberOfProduct } from './cart.js';

const clickMark2Button = document.getElementById('mark2Button');
const clickMark1Button = document.getElementById('mark1Button');
const clickXx59Button = document.getElementById('xx59Button');

const h1RemoveElement = document.querySelector('.headphones-title');
const headerModifyDimension = document.querySelector('.headerModifyDimension');
const mainModify = document.querySelector('main');
const buttonRemoveElement = document.getElementById('mark2Button');
const bigBoxModifyDimension = document.querySelector('.bigBoxText');
const cart = document.querySelector('.cart');

const removeElem1 = document.querySelector('.mark1-headphones');
const removeElem2 = document.querySelector('.xx59-headphones');

const shopContainer = document.querySelector('.shop-container');
const bestAudioContainer = document.querySelector('.bestAudio-container');
const headphonesFooter = document.querySelector('footer');

const changeTitle1 = document.querySelector('.bigBox-h1');
const markHeadphonesImage = document.querySelector('.bigBoxImage');
const changeTextMark1 = document.querySelector('.describe');

const subtitleNewProduct = document.querySelector('.subtitle');

let numberOfProducts = 1;

let createOnceSeeProduct = 0;

let _listener1;
let _listener2;
let _listener3;
let _listener4;
let _listener5;
let _listener6;
let _listener7;

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
    if (nameOfProductParam === "XX99 Mark II Headphones") {
        variabilaListaObiecte['obiect-1'].numarProduse = variabilaListaObiecte['obiect-1'].numarProduse + numberOfProducts;
    }
    else if (nameOfProductParam === "XX99 Mark I Headphones") {
        variabilaListaObiecte['obiect-2'].numarProduse = variabilaListaObiecte['obiect-2'].numarProduse + numberOfProducts;
    }
    else {
        variabilaListaObiecte['obiect-3'].numarProduse = variabilaListaObiecte['obiect-3'].numarProduse + numberOfProducts;
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
    // addCartPicture.style.animation="fadeIn 2s";
    // addCartPicture.style.animation="fadeOut 2s";
    bigBoxModifyDimension.appendChild(addCartPicture);
}

function modifyHeadphonesPage(nameOfProduct) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    headerModifyDimension.style.height = '97px';
    mainModify.style.height = '4033px';
    shopContainer.style.top = '2841px';
    bestAudioContainer.style.top = '3285px';
    headphonesFooter.style.height = '365px';

    h1RemoveElement.remove();

    cart.setAttribute('id', 'cartImg');

    const linkGoBack = document.createElement('a');
    linkGoBack.setAttribute('href', '../PROJECT/desktop-category-headphones.html');

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

    buttonRemoveElement.remove();

    bigBoxModifyDimension.style.height = '407px';

    const price = document.createElement('h1');
    price.setAttribute("id", "priceSelectableProduct");
    price.style.position = 'absolute';
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

    const productsNumberBox = document.createElement('div');
    productsNumberBox.style.position = 'absolute';
    productsNumberBox.style.width = '120px';
    productsNumberBox.style.height = '48px';
    productsNumberBox.style.top = '359px';
    productsNumberBox.style.left = '0.5px';
    productsNumberBox.style.backgroundColor = '#F1F1F1';

    const addCartButton = document.createElement('button');
    addCartButton.innerHTML = 'ADD TO CART';
    addCartButton.setAttribute("id", "productAddToCart1");
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
    addCartButton.addEventListener('mouseenter', () => {
        addCartButton.style.color = '#FFFFFF';
        addCartButton.style.backgroundColor = '#FBAF85';
    });
    addCartButton.addEventListener('mouseleave', () => {
        addCartButton.style.color = '#FFFFFF';
        addCartButton.style.backgroundColor = '#D87D4A';
    });


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
    plusB.addEventListener('mouseenter', () => {
        plusB.style.color = '#D87D4A';
        plusB.style.backgroundColor = '#F1F1F1';
    });
    plusB.addEventListener('mouseleave', () => {
        plusB.style.color = '#000000';
        plusB.style.backgroundColor = '#F1F1F1';
    });
    plusB.addEventListener('click', () => addProduct(productResult));

    removeElem1.remove();
    removeElem2.remove();

    const features = document.createElement('div');
    features.style.position = 'absolute';
    features.style.width = '1110px';
    features.style.height = '318px';
    features.style.top = '880px';

    const featuresBox = document.createElement('div');
    featuresBox.style.position = 'absolute';
    featuresBox.style.width = '635px';
    featuresBox.style.height = '318px';

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

    const paragraphBox = document.createElement('p');
    paragraphBox.setAttribute("id", "pargraphBoxModify")
    paragraphBox.style.position = 'absolute';
    paragraphBox.style.width = '635px';
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

    const inTheBox = document.createElement('div');
    inTheBox.style.position = 'absolute';
    inTheBox.style.width = '350px';
    inTheBox.style.height = '225px';
    inTheBox.style.top = '0px';
    inTheBox.style.left = '760px';

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

    const itemInTheBox1 = document.createElement('li');
    itemInTheBox1.setAttribute("id", "itemInTheBox1Modify")
    itemInTheBox1.style.color = '#D87D4A';

    const itemInTheBox2 = document.createElement('li');
    itemInTheBox2.setAttribute("id", "itemInTheBox2Modify")
    itemInTheBox2.style.color = '#D87D4A';

    const itemInTheBox3 = document.createElement('li');
    itemInTheBox3.setAttribute("id", "itemInTheBox3Modify")
    itemInTheBox3.style.color = '#D87D4A';

    const itemInTheBox4 = document.createElement('li');
    itemInTheBox4.setAttribute("id", "itemInTheBox4Modify")
    itemInTheBox4.style.color = '#D87D4A';

    const itemInTheBox5 = document.createElement('li');
    itemInTheBox5.setAttribute("id", "itemInTheBox5Modify")
    itemInTheBox5.style.color = '#D87D4A';

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

    const list2itemInTheBox1 = document.createElement('li');
    list2itemInTheBox1.setAttribute("id", "list2itemInTheBox1Modify");

    const list2itemInTheBox2 = document.createElement('li');
    list2itemInTheBox2.setAttribute("id", "list2itemInTheBox2Modify");

    const list2itemInTheBox3 = document.createElement('li');
    list2itemInTheBox3.setAttribute("id", "list2itemInTheBox3Modify");

    const list2itemInTheBox4 = document.createElement('li');
    list2itemInTheBox4.setAttribute("id", "list2itemInTheBox4Modify");

    const list2itemInTheBox5 = document.createElement('li');
    list2itemInTheBox5.setAttribute("id", "list2itemInTheBox5Modify");

    const containerBox = document.createElement('div');
    containerBox.style.position = 'absolute';
    containerBox.style.height = '592px';
    containerBox.style.width = '1110px';
    containerBox.style.top = '1358px';

    const imgGallery1 = document.createElement('img');
    imgGallery1.setAttribute("id", "imgGallery1Modify")
    imgGallery1.style.position = 'absolute';
    imgGallery1.style.width = '445px';
    imgGallery1.style.height = '280px';
    imgGallery1.style.top = '0px';

    const imgGallery2 = document.createElement('img');
    imgGallery2.setAttribute("id", "imgGallery2Modify");
    imgGallery2.style.position = 'absolute';
    imgGallery2.style.width = '445px';
    imgGallery2.style.height = '280px';
    imgGallery2.style.top = '312px';

    const imgGallery3 = document.createElement('img');
    imgGallery3.setAttribute("id", "imgGallery3Modify");
    imgGallery3.style.position = 'absolute';
    imgGallery3.style.width = '635px';
    imgGallery3.style.height = '592px';
    imgGallery3.style.top = '0px';
    imgGallery3.style.left = '475px';

    const otherProducts = document.createElement('div');
    otherProducts.style.position = 'absolute';
    otherProducts.style.width = '1110px';
    otherProducts.style.height = '571px';
    otherProducts.style.top = '2110px';

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

    const firstBox = document.createElement('div');
    firstBox.setAttribute("id", "firstBoxModify");
    firstBox.style.position = 'absolute';
    firstBox.style.width = '350px';
    firstBox.style.height = '471px';
    firstBox.style.top = '100px';

    const img1Box = document.createElement('div');
    img1Box.style.position = 'relative';
    img1Box.style.width = '350px';
    img1Box.style.height = '318px';
    img1Box.style.backgroundColor = '#F1F1F1';
    img1Box.style.borderRadius = '8px';

    const image1 = document.createElement('img');
    image1.setAttribute("id", "image1Modify");
    image1.style.position = 'absolute';
    image1.style.width = '200px';
    image1.style.height = '210px';
    image1.style.top = '62px';
    image1.style.left = '75px';

    const title1 = document.createElement('h1');
    title1.setAttribute("id", "youMayAlsoLikeTitle1")
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

    const button1 = document.createElement('button');
    button1.setAttribute("id", "button1Modify");
    button1.innerHTML = 'SEE PRODUCT';
    button1.style.position = 'absolute';
    button1.style.width = '160px';
    button1.style.height = '48px';
    button1.style.left = '95px';
    button1.style.top = '423px';
    button1.style.cursor = 'pointer';
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

    const secondBox = document.createElement('div');
    secondBox.setAttribute("id", "secondBoxModify");
    secondBox.style.position = 'absolute';
    secondBox.style.width = '350px';
    secondBox.style.height = '471px';
    secondBox.style.top = '100px';
    secondBox.style.left = '380px';

    const img2Box = document.createElement('div');
    img2Box.style.position = 'relative';
    img2Box.style.width = '350px';
    img2Box.style.height = '318px';
    img2Box.style.backgroundColor = '#F1F1F1';
    img2Box.style.borderRadius = '8px';

    const image2 = document.createElement('img');
    image2.setAttribute("id", "image2Modify");
    image2.style.position = 'absolute';
    image2.style.width = '200px';
    image2.style.height = '210px';
    image2.style.top = '62px';
    image2.style.left = '75px';

    const title2 = document.createElement('h1');
    title2.setAttribute("id", "youMayAlsoLikeTitle2");
    title2.style.position = 'absolute';
    title2.style.height = '33px';
    title2.style.top = '358px';
    title2.style.left = '94px';
    title2.style.fontFamily = "Manrope";
    title2.style.fontStyle = "normal";
    title2.style.fontWeight = "700";
    title2.style.fontSize = "24px";
    title2.style.lineHeight = "33px";
    title2.style.textAlign = 'center';
    title2.style.letterSpacing = " 1.71429px";
    title2.style.textTransform = "uppercase";

    const button2 = document.createElement('button');
    button2.setAttribute("id", "button2Modify");
    button2.innerHTML = 'SEE PRODUCT';
    button2.style.position = 'absolute';
    button2.style.width = '160px';
    button2.style.height = '48px';
    button2.style.left = '95px';
    button2.style.top = '423px';
    button2.style.cursor = 'pointer';
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

    const thirdBox = document.createElement('div');
    thirdBox.style.position = 'absolute';
    thirdBox.style.width = '350px';
    thirdBox.style.height = '471px';
    thirdBox.style.top = '100px';
    thirdBox.style.left = '760px';

    const img3Box = document.createElement('div');
    img3Box.style.position = 'relative';
    img3Box.style.width = '350px';
    img3Box.style.height = '318px';
    img3Box.style.backgroundColor = '#F1F1F1';
    img3Box.style.borderRadius = '8px';

    const image3 = document.createElement('img');
    image3.setAttribute('src', '../PROJECT/images/product-zx9-speaker/desktop/image-product.jpg');
    image3.setAttribute('alt', 'image3');
    image3.style.position = 'absolute';
    image3.style.width = '200px';
    image3.style.height = '210px';
    image3.style.top = '62px';
    image3.style.left = '75px';

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

    const button3 = document.createElement('button');
    button3.innerHTML = 'SEE PRODUCT';
    button3.style.position = 'absolute';
    button3.style.width = '160px';
    button3.style.height = '48px';
    button3.style.left = '95px';
    button3.style.top = '423px';
    button3.style.cursor = 'pointer';
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

    if (createOnceSeeProduct === 0) {
        createOnceSeeProduct = 1;

        mainModify.appendChild(linkGoBack);
        linkGoBack.appendChild(pLink);
        bigBoxModifyDimension.appendChild(price);
        bigBoxModifyDimension.appendChild(productsNumberBox);
        bigBoxModifyDimension.appendChild(addCartButton);
        productsNumberBox.appendChild(productResult);
        productsNumberBox.appendChild(minusB);
        productsNumberBox.appendChild(plusB);
        mainModify.appendChild(features);
        features.appendChild(featuresBox);
        featuresBox.appendChild(titleBox);
        featuresBox.appendChild(paragraphBox);
        features.appendChild(inTheBox);
        inTheBox.appendChild(titleInTheBox);
        inTheBox.appendChild(listInTheBox);
        listInTheBox.appendChild(itemInTheBox1);
        listInTheBox.appendChild(itemInTheBox2);
        listInTheBox.appendChild(itemInTheBox3);
        listInTheBox.appendChild(itemInTheBox4);
        listInTheBox.appendChild(itemInTheBox5);
        inTheBox.appendChild(listInTheBox2);
        listInTheBox2.appendChild(list2itemInTheBox1);
        listInTheBox2.appendChild(list2itemInTheBox2);
        listInTheBox2.appendChild(list2itemInTheBox3);
        listInTheBox2.appendChild(list2itemInTheBox4);
        listInTheBox2.appendChild(list2itemInTheBox5);
        mainModify.appendChild(containerBox);
        containerBox.appendChild(imgGallery1);
        containerBox.appendChild(imgGallery2);
        containerBox.appendChild(imgGallery3);
        mainModify.appendChild(otherProducts);
        otherProducts.appendChild(title);
        otherProducts.appendChild(firstBox);
        firstBox.appendChild(img1Box);
        img1Box.appendChild(image1);
        firstBox.appendChild(title1);
        firstBox.appendChild(button1);
        otherProducts.appendChild(secondBox);
        secondBox.appendChild(img2Box);
        img2Box.appendChild(image2);
        secondBox.appendChild(title2);
        secondBox.appendChild(button2);
        otherProducts.appendChild(thirdBox);
        thirdBox.appendChild(img3Box);
        img3Box.appendChild(image3);
        thirdBox.appendChild(title3);
        thirdBox.appendChild(button3);
    }

    if (nameOfProduct === "XX99 Mark II Headphones") {

        const productResultId = document.getElementById("productResultId");
        productResultId.innerHTML = 1;
        const button1Modify = document.getElementById("button1Modify");
        // remove all event listner from button
        button1Modify.removeEventListener("click", _listener1);
        button1Modify.removeEventListener("click", _listener2);
        button1Modify.removeEventListener("click", _listener3);
        button1Modify.removeEventListener("click", _listener4);
        button1Modify.removeEventListener("click", _listener5);
        button1Modify.removeEventListener("click", _listener6);
        _listener1 = () => { modifyHeadphonesPage("XX99 Mark I Headphones") };
        button1Modify.addEventListener("click", _listener1);

        const button2Modify = document.getElementById("button2Modify");
        // remove all event listner from button
        button2Modify.removeEventListener("click", _listener1);
        button2Modify.removeEventListener("click", _listener2);
        button2Modify.removeEventListener("click", _listener3);
        button2Modify.removeEventListener("click", _listener4);
        button2Modify.removeEventListener("click", _listener5);
        button2Modify.removeEventListener("click", _listener6);
        _listener2 = () => { modifyHeadphonesPage("XX59 Headphones") };
        button2Modify.addEventListener("click", _listener2);
        button3.addEventListener("click", () => {
            localStorage.speakerSeeProduct = 1;
            window.open("../PROJECT/desktop-category-speakers.html", "_self");
        });

        changeTitle1.innerHTML = 'XX99 Mark II Headphones';
        markHeadphonesImage.setAttribute("src", "../PROJECT/images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg");
        markHeadphonesImage.setAttribute('alt', 'mark2');
        changeTextMark1.innerHTML = 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound. ';
        const priceSelectableProduct = document.getElementById("priceSelectableProduct");
        priceSelectableProduct.innerHTML = '$ 2,999';

        const pargraphBoxModify = document.getElementById("pargraphBoxModify");
        pargraphBoxModify.innerHTML = "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.<br></br>The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.";

        const itemInTheBox1Modify = document.getElementById("itemInTheBox1Modify");
        itemInTheBox1Modify.innerHTML = '1x';
        const itemInTheBox2Modify = document.getElementById("itemInTheBox2Modify");
        itemInTheBox2Modify.innerHTML = '2x';
        const itemInTheBox3Modify = document.getElementById("itemInTheBox3Modify");
        itemInTheBox3Modify.innerHTML = '1x';
        const itemInTheBox4Modify = document.getElementById("itemInTheBox4Modify");
        itemInTheBox4Modify.innerHTML = '1x';
        const itemInTheBox5Modify = document.getElementById("itemInTheBox5Modify");
        if (itemInTheBox5Modify != null) {
            itemInTheBox5Modify.innerHTML = '1x';
        }

        const list2itemInTheBox1Modify = document.getElementById("list2itemInTheBox1Modify");
        list2itemInTheBox1Modify.innerHTML = 'Headphone Unit';
        const list2itemInTheBox2Modify = document.getElementById("list2itemInTheBox2Modify");
        list2itemInTheBox2Modify.innerHTML = 'Replacement Earcups';
        const list2itemInTheBox3Modify = document.getElementById("list2itemInTheBox3Modify");
        list2itemInTheBox3Modify.innerHTML = 'User Manual';
        const list2itemInTheBox4Modify = document.getElementById("list2itemInTheBox4Modify");
        list2itemInTheBox4Modify.innerHTML = '3.5mm 5m Audio Cable';
        const list2itemInTheBox5Modify = document.getElementById("list2itemInTheBox5Modify");
        if (list2itemInTheBox5Modify != null) {
            list2itemInTheBox5Modify.innerHTML = 'Travel Bag';
        }

        const imgGallery1Modify = document.getElementById("imgGallery1Modify");
        imgGallery1Modify.setAttribute('src', '../PROJECT/images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg');
        imgGallery1Modify.setAttribute('alt', 'imgGallery1Modify');

        const imgGallery2Modify = document.getElementById("imgGallery2Modify");
        imgGallery2Modify.setAttribute('src', '../PROJECT/images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg');
        imgGallery2Modify.setAttribute('alt', 'imgGallery2Modify');

        const imgGallery3Modify = document.getElementById("imgGallery3Modify");
        imgGallery3Modify.setAttribute('src', '../PROJECT/images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg');
        imgGallery3Modify.setAttribute('alt', 'imgGallery3Modify');

        const image1Modify = document.getElementById("image1Modify");
        image1Modify.setAttribute('src', '../PROJECT/images/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg');
        image1Modify.setAttribute('alt', 'image1Modify');
        const youMayAlsoLikeTitle1 = document.getElementById("youMayAlsoLikeTitle1");
        youMayAlsoLikeTitle1.innerHTML = 'XX99 MARK I';

        const image2Modify = document.getElementById("image2Modify");
        image2Modify.setAttribute('src', '../PROJECT/images/product-xx59-headphones/desktop/image-product.jpg');
        image2Modify.setAttribute('alt', 'image2Modify');
        const youMayAlsoLikeTitle2 = document.getElementById("youMayAlsoLikeTitle2");
        youMayAlsoLikeTitle2.style.left = '140px';
        youMayAlsoLikeTitle2.innerHTML = 'XX59';
    }
    else if (nameOfProduct === "XX99 Mark I Headphones") {

        const productResultId = document.getElementById("productResultId");
        productResultId.innerHTML = 1;

        const button1Modify = document.getElementById("button1Modify");
        // remove all event listner from button
        button1Modify.removeEventListener("click", _listener1);
        button1Modify.removeEventListener("click", _listener2);
        button1Modify.removeEventListener("click", _listener3);
        button1Modify.removeEventListener("click", _listener4);
        button1Modify.removeEventListener("click", _listener5);
        button1Modify.removeEventListener("click", _listener6);
        _listener3 = () => { modifyHeadphonesPage("XX99 Mark II Headphones") };
        button1Modify.addEventListener("click", _listener3);

        const button2Modify = document.getElementById("button2Modify");
        // remove all event listner from button
        button2Modify.removeEventListener("click", _listener1);
        button2Modify.removeEventListener("click", _listener2);
        button2Modify.removeEventListener("click", _listener3);
        button2Modify.removeEventListener("click", _listener4);
        button2Modify.removeEventListener("click", _listener5);
        button2Modify.removeEventListener("click", _listener6);
        _listener4 = () => { modifyHeadphonesPage("XX59 Headphones") };
        button2Modify.addEventListener("click", _listener4);
        button3.addEventListener("click", () => {
            localStorage.speakerSeeProduct = 1;
            window.open("../PROJECT/desktop-category-speakers.html", "_self");
        });

        changeTitle1.innerHTML = 'XX99 Mark I Headphones';
        markHeadphonesImage.setAttribute("src", "../PROJECT/images/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg");
        markHeadphonesImage.setAttribute('alt', 'mark1');
        changeTextMark1.innerHTML = 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. ';
        const priceSelectableProduct = document.getElementById("priceSelectableProduct");
        priceSelectableProduct.innerHTML = '$ 1,750';
        subtitleNewProduct.remove();

        const pargraphBoxModify = document.getElementById("pargraphBoxModify");
        pargraphBoxModify.innerHTML = 'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. <br> <br>From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.';

        const itemInTheBox1Modify = document.getElementById("itemInTheBox1Modify");
        itemInTheBox1Modify.innerHTML = '1x';
        const itemInTheBox2Modify = document.getElementById("itemInTheBox2Modify");
        itemInTheBox2Modify.innerHTML = '2x';
        const itemInTheBox3Modify = document.getElementById("itemInTheBox3Modify");
        itemInTheBox3Modify.innerHTML = '1x';
        const itemInTheBox4Modify = document.getElementById("itemInTheBox4Modify");
        itemInTheBox4Modify.innerHTML = '1x';
        const itemInTheBox5Modify = document.getElementById("itemInTheBox5Modify");
        if (itemInTheBox5Modify != null) {
            itemInTheBox5Modify.remove();
        }

        const list2itemInTheBox1Modify = document.getElementById("list2itemInTheBox1Modify");
        list2itemInTheBox1Modify.innerHTML = 'Headphone Unit';
        const list2itemInTheBox2Modify = document.getElementById("list2itemInTheBox2Modify");
        list2itemInTheBox2Modify.innerHTML = 'Replacement Earcups';
        const list2itemInTheBox3Modify = document.getElementById("list2itemInTheBox3Modify");
        list2itemInTheBox3Modify.innerHTML = 'User Manual';
        const list2itemInTheBox4Modify = document.getElementById("list2itemInTheBox4Modify");
        list2itemInTheBox4Modify.innerHTML = '3.5mm 5m Audio Cable';
        const list2itemInTheBox5Modify = document.getElementById("list2itemInTheBox5Modify");
        if (list2itemInTheBox5Modify != null) {
            list2itemInTheBox5Modify.remove();
        }

        const imgGallery1Modify = document.getElementById("imgGallery1Modify");
        imgGallery1Modify.setAttribute('src', '../PROJECT/images/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg');
        imgGallery1Modify.setAttribute('alt', 'imgGallery1Modify');

        const imgGallery2Modify = document.getElementById("imgGallery2Modify");
        imgGallery2Modify.setAttribute('src', '../PROJECT/images/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg');
        imgGallery2Modify.setAttribute('alt', 'imgGallery2Modify');

        const imgGallery3Modify = document.getElementById("imgGallery3Modify");
        imgGallery3Modify.setAttribute('src', '../PROJECT/images/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg');
        imgGallery3Modify.setAttribute('alt', 'imgGallery3Modify');

        const image1Modify = document.getElementById("image1Modify");
        image1Modify.setAttribute('src', '../PROJECT/images/product-xx99-mark-two-headphones/desktop/image-product.jpg');
        image1Modify.setAttribute('alt', 'image1Modify');
        const youMayAlsoLikeTitle1 = document.getElementById("youMayAlsoLikeTitle1");
        youMayAlsoLikeTitle1.innerHTML = 'XX99 MARK II';

        const image2Modify = document.getElementById("image2Modify");
        image2Modify.setAttribute('src', '../PROJECT/images/product-xx59-headphones/desktop/image-product.jpg');
        image2Modify.setAttribute('alt', 'image2Modify');
        const youMayAlsoLikeTitle2 = document.getElementById("youMayAlsoLikeTitle2");
        youMayAlsoLikeTitle2.style.left = '140px';
        youMayAlsoLikeTitle2.innerHTML = 'XX59';
    }
    else if (nameOfProduct === "XX59 Headphones") {

        const productResultId = document.getElementById("productResultId");
        productResultId.innerHTML = 1;

        const button1Modify = document.getElementById("button1Modify");
        // remove all event listner from button
        button1Modify.removeEventListener("click", _listener1);
        button1Modify.removeEventListener("click", _listener2);
        button1Modify.removeEventListener("click", _listener3);
        button1Modify.removeEventListener("click", _listener4);
        button1Modify.removeEventListener("click", _listener5);
        button1Modify.removeEventListener("click", _listener6);
        _listener5 = () => { modifyHeadphonesPage("XX99 Mark II Headphones") };
        button1Modify.addEventListener("click", _listener5);

        const button2Modify = document.getElementById("button2Modify");
        // remove all event listner from button
        button2Modify.removeEventListener("click", _listener1);
        button2Modify.removeEventListener("click", _listener2);
        button2Modify.removeEventListener("click", _listener3);
        button2Modify.removeEventListener("click", _listener4);
        button2Modify.removeEventListener("click", _listener5);
        button2Modify.removeEventListener("click", _listener6);
        _listener6 = () => { modifyHeadphonesPage("XX99 Mark I Headphones") };
        button2Modify.addEventListener("click", _listener6);

        button3.addEventListener("click", () => {
            localStorage.speakerSeeProduct = 1;
            window.open("../PROJECT/desktop-category-speakers.html", "_self");
        });

        changeTitle1.innerHTML = 'XX59 <br>Headphones';
        markHeadphonesImage.setAttribute("src", "../PROJECT/images/product-xx59-headphones/desktop/image-category-page-preview.jpg");
        markHeadphonesImage.setAttribute('alt', 'xx59');
        changeTextMark1.innerHTML = 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move. ';
        const priceSelectableProduct = document.getElementById("priceSelectableProduct");
        priceSelectableProduct.innerHTML = '$ 899';
        subtitleNewProduct.remove();

        const pargraphBoxModify = document.getElementById("pargraphBoxModify");
        pargraphBoxModify.innerHTML = 'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.<br><br>More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.';

        const itemInTheBox1Modify = document.getElementById("itemInTheBox1Modify");
        itemInTheBox1Modify.innerHTML = '1x';
        const itemInTheBox2Modify = document.getElementById("itemInTheBox2Modify");
        itemInTheBox2Modify.innerHTML = '2x';
        const itemInTheBox3Modify = document.getElementById("itemInTheBox3Modify");
        itemInTheBox3Modify.innerHTML = '1x';
        const itemInTheBox4Modify = document.getElementById("itemInTheBox4Modify");
        itemInTheBox4Modify.innerHTML = '1x';
        const itemInTheBox5Modify = document.getElementById("itemInTheBox5Modify");
        if (itemInTheBox5Modify != null) {
            itemInTheBox5Modify.remove();
        }

        const list2itemInTheBox1Modify = document.getElementById("list2itemInTheBox1Modify");
        list2itemInTheBox1Modify.innerHTML = 'Headphone Unit';
        const list2itemInTheBox2Modify = document.getElementById("list2itemInTheBox2Modify");
        list2itemInTheBox2Modify.innerHTML = 'Replacement Earcups';
        const list2itemInTheBox3Modify = document.getElementById("list2itemInTheBox3Modify");
        list2itemInTheBox3Modify.innerHTML = 'User Manual';
        const list2itemInTheBox4Modify = document.getElementById("list2itemInTheBox4Modify");
        list2itemInTheBox4Modify.innerHTML = '3.5mm 5m Audio Cable';
        const list2itemInTheBox5Modify = document.getElementById("list2itemInTheBox5Modify");
        if (list2itemInTheBox5Modify != null) {
            list2itemInTheBox5Modify.remove();
        }

        const imgGallery1Modify = document.getElementById("imgGallery1Modify");
        imgGallery1Modify.setAttribute('src', '../PROJECT/images/product-xx59-headphones/desktop/image-gallery-1.jpg');
        imgGallery1Modify.setAttribute('alt', 'imgGallery1Modify');

        const imgGallery2Modify = document.getElementById("imgGallery2Modify");
        imgGallery2Modify.setAttribute('src', '../PROJECT/images/product-xx59-headphones/desktop/image-gallery-2.jpg');
        imgGallery2Modify.setAttribute('alt', 'imgGallery2Modify');

        const imgGallery3Modify = document.getElementById("imgGallery3Modify");
        imgGallery3Modify.setAttribute('src', '../PROJECT/images/product-xx59-headphones/desktop/image-gallery-3.jpg');
        imgGallery3Modify.setAttribute('alt', 'imgGallery3Modify');

        const image1Modify = document.getElementById("image1Modify");
        image1Modify.setAttribute('src', '../PROJECT/images/product-xx99-mark-two-headphones/desktop/image-product.jpg');
        image1Modify.setAttribute('alt', 'image1Modify');
        const youMayAlsoLikeTitle1 = document.getElementById("youMayAlsoLikeTitle1");
        youMayAlsoLikeTitle1.innerHTML = 'XX99 MARK II';

        const image2Modify = document.getElementById("image2Modify");
        image2Modify.setAttribute('src', '../PROJECT/images/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg');
        image2Modify.setAttribute('alt', 'image2Modify');
        const youMayAlsoLikeTitle2 = document.getElementById("youMayAlsoLikeTitle2");
        youMayAlsoLikeTitle2.style.left = "94px";
        youMayAlsoLikeTitle2.innerHTML = 'XX99 MARK I';
    }

    let produs1 = document.getElementById("productAddToCart1");
    if (!Object.is(produs1, null)) {
        produs1.removeEventListener("click", _listener7);
        _listener7 = () => { addInLocalStorage1(nameOfProduct) };
        produs1.addEventListener("click", _listener7);
    }
}

if (localStorage.getItem("headphonesSeeProduct1") != null) {
    if (localStorage.headphonesSeeProduct1 === "1") {
        localStorage.headphonesSeeProduct1 = 0;
        modifyHeadphonesPage("XX99 Mark II Headphones");
    }
}

if (localStorage.getItem("headphonesSeeProduct2") != null) {
    if (localStorage.headphonesSeeProduct2 === "1") {
        localStorage.headphonesSeeProduct2 = 0;
        modifyHeadphonesPage("XX99 Mark I Headphones");
    }
}

if (localStorage.getItem("headphonesSeeProduct3") != null) {
    if (localStorage.headphonesSeeProduct3 === "1") {
        localStorage.headphonesSeeProduct3 = 0;
        modifyHeadphonesPage("XX59 Headphones");
    }
}

if (clickMark2Button != null) {
    clickMark2Button.addEventListener('click', () => modifyHeadphonesPage("XX99 Mark II Headphones"));
}

if (clickMark1Button != null) {
    clickMark1Button.addEventListener('click', () => modifyHeadphonesPage("XX99 Mark I Headphones"));
}

if (clickXx59Button != null) {
    clickXx59Button.addEventListener('click', () => modifyHeadphonesPage('XX59 Headphones'));
}