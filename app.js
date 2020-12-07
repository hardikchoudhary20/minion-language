var inputText = document.querySelector('#inputtext')
var translateBtn = document.querySelector('#translatebtn')
var outputText = document.querySelector('#outputtext')


// add event listener 
translateBtn.addEventListener("click", translate);
 

var url1 = "https://api.funtranslations.com/translate/minion.json";


function gettranslatioURL(input){
    return url1 + "?text=" + input;
}
function translate(){


    var value2 = inputText.value;

    if(value2 ===""){
        alert("Please enter a value to translate")
        document.getElementById('inputtext').style.border="2px solid red";
    }


    fetch(gettranslatioURL(value2))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputText.innerHTML=translatedText;
    })


  console.log(value2)

}
