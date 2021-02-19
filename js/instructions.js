class Instructions {
    constructor(){
        this.crossButton = createButton("X");
    }

    display(){
        this.crossButton.position(displayWidth - 40,displayHeight / 2 - 380);
        this.crossButton.style("background-color:transparent; font-weight:bold;");
        this.crossButton.style("border:none; outline:none; color:red;");
        this.crossButton.style("font-size:40px; cursor:pointer; user-select:none;");
        
        this.crossButton.mousePressed(() => {
            this.crossButton.hide();
            form.input.show();
            form.button.show();
            form.label.show();
            form.title.show();
            form.instructionButton.show();
            gameState = "FORM";
        });
    }
}