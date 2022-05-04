const adviceId = document.getElementById("advice-id")
const adviceBody = document.getElementById("advice-body")

const getAdvice = () => {
    let advice;

    fetch("https://api.adviceslip.com/advice")
    .then(r => r.json())
    .then(({slip : advice}) =>  generateAdvice(advice))
}

const generateAdvice = (advice) =>{
    adviceId.innerText = `ADVICE #${advice.id}`;
    adviceBody.innerText = `“${advice.advice}”`;
}
