class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
            this.txtElement = txtElement;
            this.words = words;
            this.txt = "";
            this.wordIndex = 0;
            this.wait = parseInt(wait, 10);
            this.type();
            this.isDeleting = false;
        }
        //Type method
    type() {
        //Current index of words
        const curr = this.wordIndex % this.words.length;

        //Get full text of curr word
        const fulltxt = this.words[curr];

        //Check if deleting
        if (this.isDeleting) {
            //Remove char
            this.txt = fulltxt.substring(0, this.txt.length - 1);
        } else {
            //Add char
            this.txt = fulltxt.substring(0, this.txt.length + 1);
        }

        //Insert txt into elements
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        //Initial Type speed
        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        //Check if word is complete
        if (!this.isDeleting && this.txt === fulltxt) {
            //Make pause at end
            typeSpeed = this.wait;

            //Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false;

            //MMove to the next word
            this.wordIndex++;

            //Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

//Init on DOM Load
document.addEventListener("DOMContentLoaded", init);

//Init app
function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    //Init typeWriter
    new TypeWriter(txtElement, words, wait);
}