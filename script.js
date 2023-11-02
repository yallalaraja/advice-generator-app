const advId = document.getElementById('advice__id');
const advText = document.getElementById('advice__text');
const button = document.getElementById('generator');

const url = "https://api.adviceslip.com/advice";

async function getAdvices(){
    const res = await fetch(url);
    const {slip:{id,advice}} = await res.json();
    advId.innerText = id;
    advText.innerText = advice;
}

button.addEventListener("click",()=>{
    getAdvices();
})