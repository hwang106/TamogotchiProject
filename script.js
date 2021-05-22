// console.log("this script is running");

let reproduceButton = document.querySelector("button");
let populationDisplay = document.querySelector("#popNumber");
let reebopOne = document.querySelector("#reebopDad");
let reebopTwo = document.querySelector("#reebopMom");
let reebopNursery = document.querySelector("#nursery");
let reebopHunting = document.querySelector("#predator");
let endVideo = document.querySelector("#endingVideo");
let scratchReview = document.querySelector("#scratchReview");
let reebopPop = 2;
let timer = 0;
const babyReebop = "<img src='Reebop.svg' class='babyreebop' alt='Image of Baby Reebop'>";
const reebopPredator = "<img src='reebopdeath.webp' class='img-fluid'>";

let predationCountdown = window.setInterval(myTimer, 1000);

function myTimer(){
    
    if (reebopPop < 1){
    // console.log("Testing condition")
        window.clearInterval(predationCountdown);
        reebopTwo.innerHTML = "";
        reebopOne.innerHTML = "";
        window.alert("No! The reebops have been eaten to extinction.");
        document.getElementById("reproduce").disabled = true;
        endVideo.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/M0yhHKWUa0g?controls=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        // scratchReview.innerHTML = '<iframe src="https://scratch.mit.edu/projects/357189554/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>';
    }

    // Changing button label to asexual reproduction
    if (reebopPop == 1){
        reproduceButton.innerHTML = "Click to Asexually Reproduce More Reebops";
        reebopOne.innerHTML = "<img src='Reebop.svg' id='reebop1' alt='Image of Parent Reebop 1'>";
        reebopTwo.innerHTML = "";
    }

    if (reebopPop >= 2){
        reproduceButton.innerHTML = "Click to Reproduce More Reebops";
        reebopOne.innerHTML = "<img src='Reebop.svg' id='reebop1' alt='Image of Parent Reebop 1'>";
        reebopTwo.innerHTML = "<img src='Reebop.svg' id='reebop2' alt='Image of Parent Reebop 2'>";
    }

    timer++;
    // console.log(`This is the current Reebop population: ${reebopPop}.`);
    if (timer % 5 == 0){
        // console.log(timer);
        reebopPop--;

        reebopHunting.innerHTML = reebopPredator;

        if(reebopPop >= 2){
            reebopNursery.innerHTML = babyReebop.repeat(reebopPop - 2);
        }        
        
        populationDisplay.innerHTML = `<h2> Reebop Population: ${reebopPop} </h2>`;
    }
    // This is to make the reebop predator image disappear after 1 second
    if ((timer - 1) % 5 == 0){
        reebopHunting.innerHTML = "";
    }
}

reproduceButton.addEventListener("click", (e) => {
    reebopPop++;
    // console.log(`This is the current Reebop population: ${reebopPop}.`);
    reebopNursery.innerHTML = babyReebop.repeat(reebopPop - 2);
    populationDisplay.innerHTML = `<h2> Reebop Population: ${reebopPop} </h2>`;
    if (reebopPop == 20){
        window.clearInterval(predationCountdown);
        window.alert("You have helped the reebops reach a sustainable population. Now just don't eat them!");
        document.getElementById("reproduce").disabled = true;
        endVideo.innerHTML = "Now that you've saved the Reebops from extinction, review the science behind Reebop inheritance!";
        scratchReview.innerHTML = '<iframe src="https://scratch.mit.edu/projects/357189554/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>';    
    }
})

