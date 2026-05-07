<html>
<head>
<title>Quiz Application UI</title>
<style>
body {
background-color: lavender;
font-family: Arial;
}
h2 {
text-align: center;
color: darkblue;
}
i {
display: block;
text-align: center;
margin-bottom: 10px;
}
.progress {
width: 50%;
margin: auto;
height: 10px;
background-color: lightgray;
margin-bottom: 10px;
}
.progress-fill {
height: 100%;
width: 100%;
background-color: green;
}
#timer {
text-align: center;
font-weight: bold;
margin-bottom: 10px;
color: red;
}
form {
width: 50%;
margin: auto;
background-color: pink;
padding: 20px;
border-radius: 15px;
}
p {
font-size: 18px;
}
input[type="radio"] {
margin-right: 8px;
}
input[type="radio"]:hover {
transform: scale(1.2);
}
input[type="submit"] {
display: block;
margin: auto;
background-color: darkblue;
color: white;
padding: 10px;
cursor: pointer;
}
input[type="submit"]:hover {
background-color: green;
}
</style>
</head>
<body>
<h2>Interactive Quiz Application</h2>
<i>Let's solve Quiz!!</i>
<div id="timer">Time Left: 20 sec</div>
<div class="progress">
<div class="progress-fill" id="bar"></div>
</div>
<form id="quizForm">
<p><b>1. Which planet is known as the red planet?</b></p>
<input type="radio" name="q1" required> Jupiter<br>
<input type="radio" name="q1"> Mars<br>
<input type="radio" name="q1"> Earth<br>
<input type="radio" name="q1"> Venus<br>
<p><b>2. I speak without a mouth and hear without ears. What am I?</b></p>
<input type="radio" name="q2" required> Wind<br>
<input type="radio" name="q2"> Cloud<br>
<input type="radio" name="q2"> Echo<br>
<input type="radio" name="q2"> Tree<br>
<p><b>3. Which language is used for web pages?</b></p>
<input type="radio" name="q3" required> Python<br>
<input type="radio" name="q3"> HTML<br>
<input type="radio" name="q3"> C++<br>
<input type="radio" name="q3"> Java<br>
<p><b>4. What is 2 + 2?</b></p>
<input type="radio" name="q4" required> 3<br>
<input type="radio" name="q4"> 4<br>
<input type="radio" name="q4"> 5<br>
<input type="radio" name="q4"> 6<br>
<p><b>5. Which is the largest ocean on Earth?</b></p>
<input type="radio" name="q5" required> Atlantic Ocean<br>
<input type="radio" name="q5"> Indian Ocean<br>
<input type="radio" name="q5"> Pacific Ocean<br>
<input type="radio" name="q5"> Arctic Ocean<br>
<br>
<input type="submit" value="Submit Quiz">
</form>
<script>
let timeLeft = 20;
let totalTime = 20;
let timerText = document.getElementById("timer");
let bar = document.getElementById("bar");
let timer = setInterval(function() {
timeLeft--;
timerText.innerHTML = "Time Left: " + timeLeft + " sec";
let width = (timeLeft / totalTime) * 100;
bar.style.width = width + "%";
if(timeLeft <= 10) {
bar.style.backgroundColor = "orange";
}
if(timeLeft <= 5) {
bar.style.backgroundColor = "red";
}
if(timeLeft <= 0) {
clearInterval(timer);
timerText.innerHTML = "Time's up!";
bar.style.width = "0%";
bar.style.backgroundColor = "red";
alert("Time's up! Please submit your quiz.");
}
},1000);
</script>
</body>
</html>
