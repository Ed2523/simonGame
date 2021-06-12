var gamePattern = []
var btnColors = ['green', 'red', 'yellow', 'blue']
var userClickedPattern = []
var gameStart = true;
var restart = false;
var level = 0;
var correctAnswer;



function checkAnswer(answer) {
    var userAnswer = answer;
    userClickedPattern.push(userAnswer);
    var index = (userClickedPattern.length - 1)



    if ((gamePattern[index] == userClickedPattern[index])) {

        if (gamePattern.length == userClickedPattern.length) {
            nextSequence();
            setTimeout(animation, 700);
            userClickedPattern = [];
            console.log('success one')
            level++
        }

    } else {
        console.log('GAME OVER')
        var wrong = new Audio('./sounds/wrong.mp3');//Plays a random sound
        wrong.play();
        document.querySelector('.tittle').innerHTML = 'Press any key to start over';
        document.querySelector('.tittle').style.color = 'red';
        document.querySelector('body').classList.add('game-over');
        setTimeout(function () {
            console.log('what the oh')
            document.querySelector('body').classList.remove('game-over');
        }, 200);
        //restart = true;
        gameStart = true;
        console.log('restart: ' + restart)

    }




}

function nextSequence() {

    var randomNum = Math.floor(Math.random() * 4)// Generates random num
    randomChosenColour = btnColors[randomNum]; //randomChosenColour is assigned the value of a random color from our btnColors array using randomNum as index
    gamePattern.push(randomChosenColour);

}
function animation() {
    //Animation
    $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)//flash a random color box
    playColorSound(randomChosenColour);
    //document.querySelector('.tittle').innerHTML = 'Level 0';
    $('.tittle').html('Level ' + level);
}

function playColorSound(randomChosenColour) {
    var colorSound = new Audio('./sounds/' + randomChosenColour + '.mp3');//Plays a random sound

    colorSound.play();
}

function animatePress(userChosenColour) {

    var userPressedColor = (('#') + userChosenColour);

    $(userPressedColor).addClass('pressed');
    setTimeout(function () {
        $(userPressedColor).removeClass('pressed');

    }, 150)

}

function restartGame() {
    gamePattern = []
    gameStart = true;
    document.querySelector('.tittle').innerHTML = 'Press a key to start';
    document.querySelector('.tittle').style.color = 'whitesmoke';

    level = 0;

}


$(document).keydown(function () {

    if (gameStart) {
        gameStart = false;
        level = 0;
        gamePattern = []
        userClickedPattern = []
        document.querySelector('.tittle').style.color = 'whitesmoke';
        nextSequence()
        animation()

    }/* else if (restart == true) {
        restartGame()
        console.log('heey')
    }*/
})

$('.btn').on('click', function () {

    //CHECK THIS OUT
    playColorSound(this.id);
    animatePress(this.id);
    checkAnswer(this.id);

})






/*
$('.green').on('click', function () {
    alert('green and yellow');
})







function checkAnswer(answer) {
    var userAnswer = answer;

    userClickedPattern.push(userAnswer);
    // create boolean value to check loop amd them u call nextsecuence
    for (i = 0; i < gamePattern.length; i++) {

        if (!(gamePattern[i] == userClickedPattern[i])) {
            correctAnswer = false;
            break;
        }
        else {
            correctAnswer = true;
            console.log('when truth ' + gamePattern[i] + ' ' + userClickedPattern[i])
        }

        if (gamePattern.length == userClickedPattern.length) {//The problem is here


            if (correctAnswer == true) {
                setTimeout(nextSequence, 700);
                userClickedPattern = [];
                console.log('success')
                level++
            }
            else if (correctAnswer == false) {
                alert('GAME OVER');
            }


        }
    }




}






 if (level == 0) {

        gamePattern.push(randomChosenColour)//Push a random color to the array gamePattern
        $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)//flash a random color box
        playColorSound(randomChosenColour);
        level++
        console.log('success at level 0');
    }
    // i is being reseted everytime you call the function
    else if (level == 1) {

        if (gamePattern[0] == userChosenColour) {
            gamePattern.push(randomChosenColour)
            setTimeout(function () {
                $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)//flash a random color box
                playColorSound(randomChosenColour);
            }, 500)
            level++
            console.log('success at level One');
        } else {
            console.log('failure')
        }



    }
    else {
        //For when level  and gamepattern lenght is bigger than two
        for (i = 0 ; i < gamePattern.length; i++) {// i  = level - 1 is the last random color pushed to the gamepattern array



            if (gamePattern[i] == j) {
                $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)//flash a random color box
                playColorSound(randomChosenColour);
                console.log('success at level 3')
                level++
            }
            else {
                console.log('game over')
            }

        }
        gamePattern.push(randomChosenColour)



    }
*/
