document.querySelector("#clickMe").addEventListener("click", makeReq); //add event listener to button to call makeReq function

async function makeReq() {
    const userName = document.querySelector("#userName").value;
    const res = await fetch(`/api?coinResult=${userName}`);
    const data = await res.json();
    console.log(data);

    document.querySelector("#coinResult").src = data.coinImage;
}
