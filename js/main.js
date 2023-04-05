document.querySelector("#clickMe").addEventListener("click", makeReq); //add event listener to button to call makeReq function

async function makeReq() {
    const inputText = document.querySelector("#coinResultText").value;
    const res = await fetch(`/api?coin=${inputText}`);
    const data = await res.json();
    console.log(data);

    document.querySelector("#coinSide").textContent = data.flipResult;
    document.querySelector("img").src = data.coinImage;
    console.log(data.coinImage);
    // if (data.flipResult == "heads") {
    //     coinImage = "https://imgur.com/a/8XnsueE";
    // } else {
    //     coinImage = "https://imgur.com/a/qKi37rq";
    // }
}
