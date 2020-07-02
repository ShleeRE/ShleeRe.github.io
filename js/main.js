
var gBiolog = document.getElementById("biolog_img");
var gTimer = document.getElementById("timer");
var gWasAlerted = false; 

gTimer.shouldIntervalWork = false;

function everySecFunction()
            {
                console.log(gWasAlerted);
                if (!gWasAlerted && gTimer.wasSet && gBiolog.wasClicked &&
                    (gBiolog.seconds == 30 || gBiolog.seconds == 0))
                {
                    new Audio("sound_alert.mp3").play();

                    gWasAlerted = true;
                }
                if (gBiolog.seconds > 0)
                {
                    gWasAlerted = false;
                    gBiolog.seconds--;
                }
            }

function biologOnClick()
{
    gTimer.shouldIntervalWork = true;
    gBiolog.wasClicked = true;
    gBiolog.src = "biolog_test.png";

    document.getElementById("spirala20").hidden = false;
    document.getElementById("spirala30").hidden = false;
    document.getElementById("spirala40").hidden = false;
}

gBiolog.onclick = biologOnClick;

var wantedInterval = 1000;
var expectedTime = Date.now() + wantedInterval;
setTimeout(step, wantedInterval);

function step()
{
    var waitingFunc = function()
    {
        if(gTimer.shouldIntervalWork)
        {
            //expectedTime = Date.now() + wantedInterval;
            return;
        }

        setTimeout(waitingFunc, 50);
    }

    if(!gTimer.shouldIntervalWork)
    {
        waitingFunc();
    }

    var drift = Date.now() - expectedTime;

    if(gTimer.shouldIntervalWork)
    {
         everySecFunction();
    }
    
    expectedTime += wantedInterval;
    setTimeout(step, Math.max(0, wantedInterval - drift));
}