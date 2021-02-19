class Form {
    constructor(){
        this.label = createElement("h3");
        this.input = createInput().attribute("placeholder", "Name").attribute("id", "play").attribute("value", "Player");
        this.title = createElement("h1");
        this.button = createButton("Join Game");
        this.instructionButton = createButton("Instructions");
    }

    // Function to display the form on the screen
    display(){

        // Display Title of Game
        this.title.html("Stop the Steal");
        this.title.position(displayWidth/3 - 50, 0);
        this.title.style("font-size", "100px");
        this.title.style("user-select", "none");

        // Display Label for Entering name Textbox
        this.label.html("Enter Name: ");
        this.label.style("fontWeight", "bold");
        this.label.style("font-size", "40px");
        this.label.style("user-select", "none");
        this.label.position(displayWidth/3 + 120, displayHeight/4 + 50);

        // Display input box for entering the Player's name
        this.input.position(displayWidth/2 - 100, displayHeight/2 - 50);
        this.input.style("width", "200px");
        this.input.style("height", "30px");
        this.input.style("border", "2px solid black");
        this.input.style("text-align", "center");
        this.input.style("border-radius", "5px");
        this.input.style("outline", "none");
        this.input.style("font-size", "20px");
        this.input.style("user-select", "none");
        this.input.style("font-family", "cursive");

        // Display the Join Game Button
        this.button.position(displayWidth/2 - 250, displayHeight/2 + 70);
        this.button.style("user-select", "none");
        this.button.style("width", "500px");
        this.button.style("height", "80px");
        this.button.style("cursor", "pointer");
        this.button.style("font-size", "30px");
        this.button.style("background-color", "green");
        this.button.style("font-weight", "bold");
        this.button.style("border", "10px inset blue");
        this.button.style("background-color", "lightgreen");
        

        // Action once the Join Game Button is pressed
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            this.label.hide();
            this.title.hide();
            this.instructionButton.hide();
            instructions.crossButton.show();
            gameState = "PLAY";
        });

        // Display the Instructions Button at the top of the screen
        this.instructionButton.position(displayWidth / 2 - 150, 0);
        this.instructionButton.style("cursor", "pointer");
        this.instructionButton.style("width", "300px");
        this.instructionButton.style("background-color", "orange");
        this.instructionButton.style("border-radius", "0 0 20px 20px");
        this.instructionButton.style("font-size", "20px");
        this.instructionButton.style("outline", "none");
        this.instructionButton.style("user-select", "none");

        // Action once the Instructions Button is pressed
        this.instructionButton.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            this.label.hide();
            this.title.hide();
            this.instructionButton.hide();
            gameState = "INSTRUCTIONS";
        });
    }
}