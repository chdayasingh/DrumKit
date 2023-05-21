const buttons = document.querySelectorAll(".drum");


const drumName= ["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"];
const drumAudioObj = [];

for (let drum of drumName){
     drumAudioObj.push(new Audio(`sounds/${drum}.mp3`));
}


// Detecting Button click
for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function() {
        // console.log(`${drumName[i]}  played`)
        drumAudioObj[i].play();
        buttonAnnimation(this);
    })
}


// Detecting keyboard click
document.addEventListener("keydown", (event) => {
    const keyName = event.key.toLowerCase();

    switch (keyName) {
        case 'w':
            drumAudioObj[0].play();
            buttonAnnimation(document.querySelector("."+keyName));
            break;
        case 'a':
            drumAudioObj[1].play();
            buttonAnnimation(document.querySelector("."+keyName));
            break;
        case 's':
            drumAudioObj[2].play();
            buttonAnnimation(document.querySelector("."+keyName));
            break;
        case 'd':
            drumAudioObj[3].play();
            buttonAnnimation(document.querySelector("."+keyName));
            break;
        case 'j':
            drumAudioObj[4].play();
            buttonAnnimation(document.querySelector("."+keyName));
            break;
        case 'k':
            drumAudioObj[5].play();
            buttonAnnimation(document.querySelector("."+keyName));
            break;
        case 'l':
            drumAudioObj[6].play();
            buttonAnnimation(document.querySelector("."+keyName));
            break;
    
        default:
            console.log("unknown key pressed");
    }
})


function buttonAnnimation(element){
    // remove all animation from button first
    for(let button of buttons){
        button.classList.remove("pressed");
    }
    element.classList.add("pressed");
}


