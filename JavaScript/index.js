
const languageButton = document.querySelector('#LanguageButton');
const languageCheckbox = document.querySelector('#Language')
let languageChecked = languageCheckbox.checked

let wantedLanguage = "english"
languageButton.addEventListener('click', ()=>{
    // EN = FALSE | PT-BR = TRUE 
    if(!languageChecked){
        languageChecked = true;
        languageButton.className = "PT-BR";
        wantedLanguage = "portuguese";
    }else{
        languageChecked = false;
        languageButton.className = "EN";
        wantedLanguage = "english";
    }
    text = data[wantedLanguage];

    for(id of Object.keys(text)){
        content = text[id];
        targetElement = document.getElementById(`${id}`);
        targetElement.innerText = content;
        
    }

})




const cards = document.querySelectorAll("#TecBody section");

cards.forEach(e =>{
    const NodeChilds = e.parentElement.childNodes;
    const NodeArray = [NodeChilds[1], NodeChilds[3]]
   
    e.addEventListener("mouseover", ()=>{
        if(e == NodeArray[0]){
            NodeArray[1].classList.add("disable")
            NodeArray[0].classList.add("open");
        }else{
            NodeArray[1].classList.add("open");
            NodeArray[0].classList.add("disable")
        }

    });
    
    e.addEventListener("mouseout", ()=>{
        if(e == NodeArray[0]){
            NodeArray[1].classList.remove("disable")
            NodeArray[0].classList.remove("open");
        }else{
            NodeArray[1].classList.remove("open");
            NodeArray[0].classList.remove("disable")
        }
    });
})





const boxes = document.querySelectorAll('article.Box');

boxes.forEach((box)=>{
    box.addEventListener('focusout', ()=>{
        box.classList.add("Open");
    })
})
