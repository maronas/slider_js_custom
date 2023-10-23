var img = document.getElementById("gallery_img");
var imgUnder = document.getElementById("gallery_img_under");
let counter = 1;
let nextCounter = counter;
var maxImages = 4;
var imageSliderTimeDelay = 5000;

function dropMenu(){
    document.getElementById("myDropdown").classList.toggle("show");
}

// var sliderInterval = setInterval(() => {
//     changeImg("next");
// }, imageSliderTimeDelay);

var interval = setInterval("", 1500);

function pause(){
    clearInterval(interval);
}

function changeImg(direction){
    if(direction === "next"){
        nextImg();
    }
    else if(direction === "previous"){
        previousImg();
    }
    pause();
}

function nextImg(){
    counter += 1;

    if(counter === 1){
        nextCounter = maxImages;
        imgUnder.src = './img/gallery/' + counter + '.jpg';
        img.src = './img/gallery/' + nextCounter + '.jpg';
    }
    else if(counter > maxImages){
        nextCounter = maxImages;
        counter = 1;
        imgUnder.src = './img/gallery/' + counter + '.jpg';
        img.src = './img/gallery/' + nextCounter + '.jpg';
    }
    else if(counter <= maxImages){
        nextCounter = counter - 1;
        imgUnder.src = './img/gallery/' + counter + '.jpg';
        img.src = './img/gallery/' + nextCounter + '.jpg';
    }


    // if(counter === 1){
    //     nextCounter = 2;
    //     img.src = './img/gallery/' + counter + '.jpg';
    //     imgUnder.src = './img/gallery/' + nextCounter + '.jpg';
    // }
    // else if(counter < 1 ){
    //     counter = maxImages;
    //     nextCounter = 1;
    //     img.src = './img/gallery/' + counter + '.jpg';
    //     imgUnder.src = './img/gallery/' + nextCounter + '.jpg';
    // }
    // else{
    //     nextCounter = counter + 1;
    //     img.src = './img/gallery/' + counter + '.jpg';
    //     imgUnder.src = './img/gallery/' + nextCounter + '.jpg';
    // }
    animateImg("next");
}

function setImgSrc(){
    img.src = './img/gallery/' + counter + '.jpg';
}

function previousImg(){
    counter -= 1;
    if(counter === 1){
        nextCounter = 2;
        img.src = './img/gallery/' + counter + '.jpg';
        imgUnder.src = './img/gallery/' + nextCounter + '.jpg';
    }
    else if(counter < 1 ){
        counter = maxImages;
        nextCounter = 1;
        img.src = './img/gallery/' + counter + '.jpg';
        imgUnder.src = './img/gallery/' + nextCounter + '.jpg';
    }
    else{
        nextCounter = counter + 1;
        img.src = './img/gallery/' + counter + '.jpg';
        imgUnder.src = './img/gallery/' + nextCounter + '.jpg';
    }
    animateImg("previous");
}

function checkImageNumber(url){
    const regex = /[1-9]/;
    var number = url.match(regex);
    return number[0];
}

let checkImageExists = function(variable){
    var image = new Image();
    var url_image = './img/gallery/' + variable + '.jpg';
    image.src = url_image;
    if (image.width == 0) {
        counter = 1;
       return false;
    } else {
       return true;
    }
}

function animateImg(direction){
    let holder = img;

    if(direction === "next"){
        resetAnimationsImg();
        img.style.animation = "1.5s slide_next_hover";
        imgUnder.style.animation = "1.5s slide_next_under";
        setTimeout(() => {
            setImgSrc();
        }, 1500);
        // restartTimer();
    }
    else if(direction === "previous"){
        resetAnimationsImg();
        img.style.animation = "1.5s slide_previous_hover";
        imgUnder.style.animation = "1.5s slide_previous_under";
        // restartTimer();
    }
}

function resetAnimationsImg(){
    img.style.animation = 'none';
    imgUnder.style.animation = 'none';
    img.offsetHeight;
    imgUnder.offsetHeight;
    img.style.animation = null;
    imgUnder.style.animation = null;
}
function restartTimer(){
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
        changeImg();
    }, imageSliderTimeDelay);
}