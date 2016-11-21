
//  PSEUDOCODE

// Instructions on how to play the game..... 

// 1st. Come out with questions and answers and place those in an array of objects \\
// 2nd. Create you div where you are going to hold those questions 
// 3rd. Print the questions and options (radio buttons) in the html using jQuery and a for loop


// Make a timer with certain amount of seconds to finish the test
// create the variables correct, incorrect and unanswered

// on click of the submit answer button
// use jQuery to check if the submitted answer matches the answers in the questions.options array of objects...
// if correct ++ the correct variable
// and if not ++ the incorrect variable 
// else if ++ the unanswered variable
// print out the stats
// reset all the variables to 0 and reset the timer 

// put some css design 




 // This "document.ready" code isn't necessary in this example... but is useful to become familiar with.
 // "document.ready" makes sure that our Javascript doesn't get run until the HTML document is finished loading.
 

// Make a timer with certain amount of seconds to finish the test
// create the variables correct, incorrect and unanswered
$(document).ready(function() {
window.onload = function() {
$("#start").on("click", stopwatch.start);
$("#reset").on("click", stopwatch.reset);
};
var counter;
var stopwatch = {
	time:0,

reset: function() {
    stopwatch.time = 0;
    // DONE: Change the "display" div to "00:00."
    $("#display").html("00:00");
},
start: function() {
    // DONE: Use setInterval to start the count here.
    counter = setInterval(stopwatch.count, 1000);
  },
count: function() {
    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time++;
    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").html(converted);
  },

timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  },
},
}
  

var correct = 0;
var incorrect = 0;
var unanswered = 0;

var score = null;
var questionNumber = 0;
var questions = [
//Question 1
  {
    'answer': 'b',
    'question': 'What is Apple\'s most lucrative product of 2015?',
    'options': ['Iphone', 'Apple Watch', 'Ipad']

  },

//Question 2  
  {
    'answer': 'a',
    'question': 'Who invented the tablet?',
    'options': ['Microsoft', 'Google', 'Apple']

  },

//Question 3
  {
    'answer': 'b',
    'question': 'In 1999 who created the first mp3 phone?',
    'options': ['Toshiba', 'Samsung', 'Sony']

  },  

//Question 4
{
  'answer': 'a',
  'question': 'Which tech company released The Walkman?',
  'options': ['Sony', 'Samsung', 'Toshiba']

},

//Question 5
{
  'answer': 'b',
  'question': 'Which company created the "slide to unlock" on smartphones?',
  'options': ['Apple', 'Microsoft', 'Google']

},

//Question 6
{
  'answer': 'c',
  'question': 'Who invented the holographic computer known as the HoloLens?',
  'options': ['Google', 'Apple', 'Microsoft']

},

//Question 7
{
  'answer': 'b',
  'question': 'NAND Flash Memory was created by which tech company?',
  'options': ['Sony', 'Samsung', 'Toshiba']

},   

//Question 8
{
  'answer': 'b',
  'question': 'Who first invented RDF Site Summary (RSS)?',
  'options': ['Lycos', 'Netscape', 'Yahoo']

},

//Question 9
{
  'answer': 'b',
  'question': 'Which company released their TV Product first?',
  'options': ['Roku', 'Apple TV', 'Chromecast']

},  

//Question 10
{
  'answer': 'b',
  'question': 'Who created the first Motion Controller?',
  'options': ['Nintendo', 'Microsoft', 'Sony']

}  

]


for(i=0; i<questions.length; i++){
	var newQuestionDiv = $('<div>').addClass('question' + i);
	var myQuestion = $('<p>').text(questions[i].question);

	newQuestionDiv.append(myQuestion);

	for(j=0; j<questions[i].options.length; j++){
		var answer = $('<input value=" ' + questions[i].options[j]+ '" name="answer' + i + '" type="radio"><label for="'+ questions[i].options[j] + ' "> '+ questions[i].options[j]+'</label>');
		newQuestionDiv.append(answer)
	}


	$('#questions-section').append(newQuestionDiv);
}
};


