const searchIcon = document.querySelector(".search-icon");
const searchContainer = document.querySelector(".search-container");

searchIcon.addEventListener("click", function (){
    searchContainer.classList.toggle("active");
});

let catList = document.querySelectorAll(".cat-list");
let box = document.querySelectorAll(".box");

for(let i = 0; i<catList.length; i++){
    catList[i].addEventListener('click', function(){
        for(let j = 0; j<catList.length; j++){
            catList[j].classList.remove("active");
        }
        this.classList.add("active")

        let dataFilter = this.getAttribute("data-filter");

        for(let k = 0; k<box.length; k++){
            box[k].classList.remove("active");
            box[k].classList.add("hide");

            if(box[k].getAttribute("data-item") == dataFilter || dataFilter == "all"){
                box[k].classList.remove("hide");
                box[k].classList.add("active");
            }
        }
    });
}