let beregnKnap: HTMLButtonElement = document.getElementById("beregn") as HTMLButtonElement
let inputValue: HTMLInputElement = document.getElementById("bilPris") as HTMLInputElement
let result: HTMLElement = document.getElementById("udregning") as HTMLElement
let picker: HTMLSelectElement = document.getElementById("selection") as HTMLSelectElement

beregnKnap.addEventListener("click", bilAfgift)

let afgift1  = 85;
let afgift2 = 150;
let  fradrag = 130000;
let eBilAfgift = 20;

function bilAfgift() {
            if(picker.value == "Bil"){
                if (inputValue.valueAsNumber <= 200000) {
                    result.innerHTML = ((inputValue.valueAsNumber * afgift1)/100).toString()
                    }   
                else if(inputValue.valueAsNumber > 200000) {
                    result.innerHTML = ((inputValue.valueAsNumber * afgift2)/100-130000).toString()
                }
            }

            if(picker.value == "Elbil"){
                if (inputValue.valueAsNumber <= 200000) {
                    result.innerHTML = (((inputValue.valueAsNumber * afgift1)/100)*(eBilAfgift/100)).toString()
                    }   
                else if(inputValue.valueAsNumber > 200000) {
                    result.innerHTML = (((inputValue.valueAsNumber * afgift2)/100-130000)*(eBilAfgift/100)).toString()
                }
            }
}


