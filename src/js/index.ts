let bilKnap: HTMLElement = document.getElementById("bilKnap")
let elBilKnap: HTMLElement = document.getElementById("elBilKnap")
let inputValue = document.getElementById("bilPris")

bilKnap.addEventListener("click", bilAfgift)
elBilKnap.addEventListener("click", elBilAfgift)

let afgift1  = 85;
let afgift2 = 150;
let  fradrag = 130000;
let eBilAfgift = 20;

function bilAfgift() {
    let input = (<HTMLElement>inputValue).nodeType
            if (input <= 200000) {
        return console.log((input*afgift1)/100)

            
    }
}

function elBilAfgift():void {
    
}
