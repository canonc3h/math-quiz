var minimum = 1;
var maximum = 100;
var int1 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var int2 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
document.getElementById('question').innerHTML = int1 + " " + "+" + " " + int2;
var qanswer = int1 + int2;
 
    function fire() {
var uanswer = document.getElementById('answer').value;
      if (uanswer == qanswer) {
        alert("Nice math skills! Click Next!");
        
        
      } else {
        alert("WRONG! Don't snooze during math class!")
      }
    }
document.querySelector("next")
    next.addEventListener('click', () => {
      window.location.reload(true);
    })