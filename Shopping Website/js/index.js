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

