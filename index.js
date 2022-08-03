
document.addEventListener("DOMContentLoaded", function() {
    const numberAdvice = document.getElementById('number');
    const textAdvice = document.getElementById('text');
    const button = document.getElementById('btn');

    function getMeAdvice(){
        fetch('https://api.adviceslip.com/advice')
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                let numberData = data.slip.id;
                numberAdvice.innerText = `Advice #${numberData}`;
                
                let textData = data.slip.advice;
                let oldValue = textAdvice.innerHTML.replaceAll('"', '');

                if(textData === oldValue) {
                    getMeAdvice();
                } else {
                    textAdvice.innerText = `"${textData}"`;
                }

            })
    }

    getMeAdvice();



    button.addEventListener("click", ()=>{
        getMeAdvice();
    });
});

