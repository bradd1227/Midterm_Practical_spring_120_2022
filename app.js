var list = [
    {
        name: "Caution",
        sound: 1
    },
    {
        name: "Dying Breed",
        sound: 3
    },
    {
        name: "Human",
        sound: 8
    },
    {
        name: "Spaceman",
        sound: 7
    },
    {
        name: "Sam's Town",
        sound: 5
    },
    {
        name: "Brightside",
        sound: 4
    }
];

for(var i=0; i<list.length; i++){
    var ele = document.createElement("div");
    var nameEle = document.createElement("h1");
    var soundEle = document.createElement("h3");
    nameEle.innerHTML="Name: "+list[i].name;
    soundEle.innerHTML="Sound: "+list[i].sound;

    if (list[i].sound > 5){
        ele.style.color = "blue";
    }
    ele.appendChild(nameEle);
    ele.appendChild(soundEle);
    document.body.appendChild(ele);


}

let count = 10;
let button = document.getElementById("increment");

button.addEventListener("click", function() {
    let increment = document.getElementById("count");
    increment.innerText = count;
    count++;

});
