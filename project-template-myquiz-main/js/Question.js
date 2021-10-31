class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.input2 = createInput("Enter Correct Option No.");
    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement('h3');
    this.options = createElement('h4');

    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
    this.question.hide();
    this.options.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.message.html("Thank You, Your Answer Has Been Submitted");
    this.input2.position(270, 230);
    this.message.position(425, 300);
    this.question.position(150, 50);
    this.options.position(150, 60);




    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank You, Your Answer Has Been Submitted");
    })


  }
}
