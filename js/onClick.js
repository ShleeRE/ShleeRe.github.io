
var gSecondsToCompare = 0;

function functionSetTimer(seconds)
{
    var biolog = document.getElementById("biolog_img");
    var timer = document.getElementById("timer");

    var finalTimerString = "";
    var hours = Math.floor(Math.floor(biolog.seconds / 60) / 60);
    var minutes = Math.floor(biolog.seconds / 60) % 60;
    var secondsTo60 = biolog.seconds % 60;
    
    if(hours < 10)
    {
        finalTimerString += "0" + hours;
    }
    else
    {
        finalTimerString += hours;
    }

    if(minutes < 10)
    {
        finalTimerString += (":0" + minutes);
    }
    else
    {
        finalTimerString += (":" + minutes);
    }

    if(secondsTo60 < 10)
    {
        finalTimerString += (":0" + secondsTo60);
    }
    else
    {
        finalTimerString += (":" + secondsTo60);
    }
    

    document.title = finalTimerString;
    timer.textContent = finalTimerString;

    timer.hours = hours;
    timer.minutes = minutes;
    timer.seconds = secondsTo60
}

document.getElementById("biolog_img").seconds = 0;
document.getElementById("biolog_img").wantsReset = false;

function showBiologSetTimer(seconds)
{
    var biolog = document.getElementById("biolog_img");
    var timer = document.getElementById("timer");

    if(biolog.wasClicked && timer.wasSet)
    {
        biolog.wantsReset = true;
    }

    biolog.hidden = false;
    timer.hidden = false;
    timer.wasSet = true;

    biolog.seconds = seconds;

    gSecondsToCompare = biolog.seconds;

    functionSetTimer(biolog.seconds);
}

document.getElementById("zeby_orka_img").onclick = function()
{
    showBiologSetTimer(60);
}
document.getElementById("ksiegi_klatw_img").onclick = function()
{
    showBiologSetTimer(7200);
}
document.getElementById("pamiatki_po_demonie_img").onclick = function()
{
    showBiologSetTimer(10800);
}
document.getElementById("matowe_lody_img").onclick = function()
{
    showBiologSetTimer(14400);
}
document.getElementById("konary_zelkova_img").onclick = function()
{
    showBiologSetTimer(18000);
}
document.getElementById("czerw_konary_zelkova_img").onclick = function()
{
    showBiologSetTimer(21600);
}
document.getElementById("notatki_setaou_img").onclick = function()
{
    showBiologSetTimer(25200);
}
document.getElementById("notatki_przywodcy_img").onclick = function()
{
    showBiologSetTimer(28800);
}
document.getElementById("orkowe_maczugi_img").onclick = function()
{
    showBiologSetTimer(32400);
}
document.getElementById("liscie_entow_img").onclick = function()
{
    showBiologSetTimer(36000);
}
document.getElementById("elementy_wiwern").onclick = function()
{
    showBiologSetTimer(43200);
}


function updateTimerAndSite()
{
    var biolog = document.getElementById("biolog_img");
    var timer = document.getElementById("timer");

    if(!biolog.wasClicked || !timer.wasSet)
    {
        return;
    }

    if(gSecondsToCompare != biolog.seconds)
    {
        gSecondsToCompare = biolog.seconds;

        functionSetTimer(biolog.seconds);
    }

    if(biolog.wantsReset)
    {
        biolog.wasClicked = false;
        biolog.src = "biolog.png";
        biolog.wantsReset = false;

        document.getElementById("spirala20").hidden = true;
        document.getElementById("spirala30").hidden = true;
        document.getElementById("spirala40").hidden = true;

        timer.shouldIntervalWork = false;
        gWasAlerted = false;
    }

}

var biolog = document.getElementById("biolog_img");

biolog.addEventListener("mouseover", function ()
{
    if(!biolog.wasClicked)
    {
        biolog.src = "biolog_green.png";
    }
    
})

biolog.addEventListener("mouseleave", function()
{
    if(!biolog.wasClicked)
    {
        biolog.src = "biolog.png";
    }

})

var ut = setInterval(updateTimerAndSite, 50);

document.getElementById("spirala20").onclick = function()
{
    gBiolog.seconds = gBiolog.seconds * 0.8;
}

document.getElementById("spirala20").onclick = function()
{
    gBiolog.seconds = Math.floor(gBiolog.seconds * 0.8);
}
document.getElementById("spirala30").onclick = function()
{
    gBiolog.seconds = Math.floor(gBiolog.seconds * 0.7);
}
document.getElementById("spirala40").onclick = function()
{
    gBiolog.seconds = Math.floor(gBiolog.seconds * 0.6);
}