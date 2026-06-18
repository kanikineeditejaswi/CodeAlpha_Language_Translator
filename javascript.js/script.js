const inputText =
document.getElementById("inputText");

const count =
document.getElementById("count");

inputText.addEventListener("input", () => {

    count.innerText =
    inputText.value.length;

});

function swapLanguages(){

    const source =
    document.getElementById("source");

    const target =
    document.getElementById("target");

    let temp =
    source.value;

    source.value =
    target.value;

    target.value =
    temp;
}

async function translateText(){

    const text =
    document.getElementById("inputText")
    .value.trim();

    const source =
    document.getElementById("source")
    .value;

    const target =
    document.getElementById("target")
    .value;

    const output =
    document.getElementById("outputText");

    if(text === ""){

        output.innerHTML =
        "Please enter text...";

        return;
    }

    output.innerHTML =
    "Translating...";

    try{

        const response =
        await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source}|${target}`
        );

        const data =
        await response.json();

        if(data.responseData){

            output.innerHTML =
            data.responseData.translatedText;

        }else{

            output.innerHTML =
            "Translation unavailable";
        }

    }
    catch(error){

        output.innerHTML =
        "Translation Failed";

        console.log(error);
    }
}

function copyText(){

    const text =
    document.getElementById("outputText")
    .innerText;

    navigator.clipboard.writeText(text);

    alert("Copied Successfully!");
}