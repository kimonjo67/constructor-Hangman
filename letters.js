var Letter = function (ltr) {
    // property to store the actual letter
    this.letter = ltr;
    // boolean if the letter can be shown
    this.guessed = false;

    this.letterRender = function () {
        if (this.letter == ' ') {
            //word found doesn't read the blank as false.
            this.guessed = true;
            return '  ';
        } if (this.guessed === false) { 
            //if guessed wrong, it returns a ' _ '//
            return ' _ ';
        } else { 
            //otherwise it just appears as itself//
            return this.letter;
        }

    };
};

// export to use in word.js
module.exports = Letter;
