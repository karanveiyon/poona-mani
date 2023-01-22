/* https://api.thecatapi.com/v1/breeds?api_key=live_n7CSA9IUUzrV9T9JJQ0m3BaHyHh9tgKQUf322ZwjjKOlcgPZbQpT11c2vtBmqlF4 */
let catArray = new Array();  
function start(){
var btn = document.getElementById("select_btn");
btn.onclick = btnclick;
loadcats();
 
}

function loadcats ()
{
const catlist = document.getElementById("cat_list");

let newOption;

fetch('https://api.thecatapi.com/v1/breeds?api_key=live_n7CSA9IUUzrV9T9JJQ0m3BaHyHh9tgKQUf322ZwjjKOlcgPZbQpT11c2vtBmqlF4')
.then((response) =>response.json())
.then((data)=>{
    data.forEach(cat => {
        newOption = document.createElement('option');
        newOption.value = cat.name;
        newOption.text = cat.name;
        catlist.appendChild(newOption);
        catArray.push(cat); 
    });
});
}

function btnclick(){

    const catList = document.getElementById('cat_list');
    const index = catList.selectedIndex;

    const outputSpan = document.getElementById('output');

    let output = `<h2>${catArray[index].name}</h2>`;
    output += `<img class='cat_img' src='${catArray[index].image.url}'><br>`;
    output += `<h3>Description</h3><p>${catArray[index].description}</p>`

    outputSpan.innerHTML = output;
}




window.onload =start;