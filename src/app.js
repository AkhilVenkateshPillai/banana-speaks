var clickNotif = document.querySelector("#btn-translate");
var trnsltContent = document.querySelector("#txt-input");
var output = document.querySelector("#output");

var APIurl = 'https://api.funtranslations.com/translate/gungan.json?text=' + trnsltContent.value+''

console.log(APIurl);

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

const notifHandler = () => {


    fetch(APIurl).then(response => response.json()).then(json => { 
        var content = json.contents.translated;
        console.log(content);
        output.innerHTML = content; 
        
    }).catch(errorHandler)

}

clickNotif.addEventListener("click", notifHandler);

