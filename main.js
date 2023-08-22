let all = document.querySelector(".all");
let top1 = document.querySelector(".top1");
let top2 = document.querySelector(".top2");
let image = document.querySelector(".img");

image.addEventListener('click', function(){
    if(image.classList.contains('img-new')){
        image.classList.remove('img-new');
        image.src = "img/landscape-2.jpg";
    } else {
        image.classList.add('img-new');
        image.src="img/landscape-1.jpg"
    }
    if(top1.classList.contains('top1-new')){
        top1.classList.remove("top1-new");
    } else {
        top1.classList.add("top1-new");
    }
    if(top2.classList.contains('top2-new')){
        top2.classList.remove("top2-new");
    } else {
        top2.classList.add("top2-new");
    }
    if(all.classList.contains('all-new')){
        all.classList.remove("all-new");
    } else {
        all.classList.add("all-new");
    }
});