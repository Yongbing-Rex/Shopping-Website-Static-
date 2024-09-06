// fuzzy search
let keyword = document.querySelector('.keyword');

let searchHelper = document.querySelector('.search-helper')

let searchArr = ['mazad',"bmw","audi","benzi"]

keyword.oninput = function(){
    searchHelper.innerHTML=''
    for(let i =0; i< searchArr.length;i++){
        if(searchArr[i].indexOf(keyword.value) != -1){
            searchHelper.innerHTML += '<p>' + searchArr[i] + '</p>'
            searchHelper.style.display='block'
        }
    }
}

keyword.onblur = function(){
    searchHelper.style.display='none'
}



// Banner
let img = document.querySelector(".car-image")

let imgArr = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg']

let count = 0

// auto-switch image path 
function cutImg(){
    img.src='./images/carPic/'+imgArr[count]

    for(let i = 0; i < lists.length; i++){
            lists[i].className=''
    }

    lists[count].className = 'active'
}

timer = setInterval(function(){
    count++;

    if(count > imgArr.length - 1){
        count =0
    }

    cutImg();
},2000)

// manual-switch
let prev = document.querySelector('.prev')

let next = document.querySelector('.next')

next.onclick = function(){
    count++

    if(count> imgArr.length - 1){
        count =0
    }

    cutImg()
}

prev.onclick = function(){
    count--

    if(count < 0){
        count = imgArr.length - 1
    }

    cutImg()
}

// stop switch when cursor hover
let slide = document.querySelector('.slideshow')

slide.onmouseover = function(){
    clearInterval(timer)
}

slide.onmouseout = function(){

    timer = setInterval(function(){
    count++;

    if(count > imgArr.length - 1){
        count =0
    }

    cutImg();
},2000)
}

// list switch
let lists = document.querySelectorAll('.banner-btn li')

for(let i = 0; i < lists.length; i++){
    lists[i].onclick = ()=>{
        count = i;
        cutImg();
    }
}

// font color change with elevator change
let header = document.querySelector('.header')
let banner = document.querySelector('.banner')

let elevator = document.querySelector('.elevator-list')

let items = document.querySelectorAll('.content .item')
let elevatorA = document.querySelectorAll('.elevator-list a')

let search = document.querySelector('.search')

let searchM = document.querySelector('.search-m')

let form = document.querySelector('.form')

let logoSearch = document.querySelector('.search_logo')

let elevatorArr = []

let base = header.offsetHeight + banner.offsetHeight

for(let i =0; i< items.length; i++){
    base = base + items[i].offsetHeight;
    elevatorArr.push(base);
}

function clearColor(){
    for(let i = 0; i< elevatorA.length; i++){
        elevatorA[i].style.color = '';
    }
}

// elevator list switch to fixed
document.onscroll = function(){
    let top = document.documentElement.scrollTop || document.body.scrollTop;

    let headerHeight = header.offsetHeight

    let bannerHeight = banner.offsetHeight

  

    if(top >= headerHeight + bannerHeight){
        elevator.className = 'elevator-list elevator-fix'
        search.className = 'search search-fix'
        searchM.style.height = '50px'
        form.style.top = "8px"
        logoSearch.style.display = 'block'
    }else{
        elevator.className = 'elevator-list'
          search.className = 'search'
        searchM.style.height = '60px'
        form.style.top = "25px"
        logoSearch.style.display = "none"
    }

    if(top < header.offsetHeight + banner.offsetHeight){
        clearColor();
    }else if(top >= header.offsetHeight + banner.offsetHeight && top < elevatorArr[0]){
        clearColor();
        elevatorA[0].style.color = 'red';
    }else if(top >= elevatorArr[0] && top < elevatorArr[1]){
        clearColor();
        elevatorA[1].style.color = 'red';
    }else if(top >= elevatorArr[1] && top < elevatorArr[2]){
        clearColor();
        elevatorA[2].style.color = 'red';
    }else if(top >= elevatorArr[2]){
        clearColor();
        elevatorA[3].style.color = 'red';
    }
}

























