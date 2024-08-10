function CalDay(dayCode){
    switch(dayCode){
        
        case 1:
            return "Pazartesi";
            break;
        case 2:
            return "Salı";
            break;
        case 3:
            return "Çarşamba";
            break;
        case 4:
            return "Perşembe";
            break;
        case 5:
            return "Cuma";
            break;
        case 6:
            return "Cumartesi";
            break;
        case 7:
            return "Pazar";
            break;
        default:
            return "Gün Hata";
    }

}


function SayHello(userInput,elementId){
    let dom = document.querySelector(`#${elementId}`);
    dom.innerHTML = `Merhaba ${userInput}, Hoşgeldin`
}

function DisplayTime(id){
    let dateData = new Date();
    let dataHour = dateData.getHours();
    let dataMin = dateData.getMinutes();
    let dataSec = dateData.getSeconds();
    let dataDay = CalDay(dateData.getDay())
    let dom = document.querySelector(`#${id}`);
    dom.innerHTML = `${dataHour}:${dataMin}:${dataSec}   ${dataDay}`
}

let input = prompt("İsminiz")
SayHello(input,"NAME_TEXT")


DisplayTime("CLOCK")
setInterval(function() {
    DisplayTime("CLOCK");
}, 1000);
