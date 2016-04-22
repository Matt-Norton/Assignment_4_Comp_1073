
// setup IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";


    

  //set size of the can
    var screenWidth = 465;
    var screenHeight = 60;

   
    var canvas = document.getElementById("canvas");
    canvas.setAttribute("width", screenWidth.toString());
    canvas.setAttribute("height", screenHeight.toString());

    // create a stage container object
    var stage = new createjs.Stage(canvas);

    var Portfolio = null;
    var design = null;

    var initials = null;
    var initialsMove = 5;

    var backgroundClick= null;
    var attractionText = true;

    function init() {
        console.log("Initialization");
        // enable mouseover effects for all backgroundClicks
        stage.enableMouseOver(20);

        // set frame rate to 60 fps
        createjs.Ticker.framerate = 60;
        // listen for frame changes and call the animationLoop function
        createjs.Ticker.on("tick", animationLoop);

        // call the main function
        main(); }

    // animation for the portfolio text that zooms in and out
    function animationLoop() {
        initials.x += initialsMove;

        if (attractionText) {
            if (Portfolio.scaleX < 1) {
                Portfolio.scaleX *= 1.1;
                Portfolio.scaleY *= 1.1;
            }
            else {
                attractionText = false;
            }
        } else {
            if (Portfolio.scaleX >= 0.25) {
                Portfolio.scaleX *= 0.99;
                Portfolio.scaleY *= 0.99;
            }
            else {
                attractionText = true;
            }
        }

        if ((initials.x >= screenWidth) || (initials.x <= 0)) {
            initialsMove *= -1;
        }

        // refresh the stage object
        stage.update();
    }

   
    function main() {
        //new createjs bitmap for my red background
        backgroundClick = new createjs.Bitmap('../Assets/images/background.png');
        stage.addChild(backgroundClick);

        //puts my logo/intials in the background
        initials = new createjs.Bitmap('../Assets/images/initials.png');
        initials.x = screenWidth * 0.45;
        initials.y = screenHeight * -0;
        stage.addChild(initials);

        //the main bit of text to advertise my portfolio
        Portfolio = new createjs.Text("View My Portfolio", "25px arial", "#000000");
        Portfolio.regX = Portfolio.getMeasuredWidth() * 0.5;
        Portfolio.regY = Portfolio.getMeasuredHeight() * 0.5;
        Portfolio.x = screenWidth * 0.5;
        Portfolio.y = screenHeight * 0.5;
        stage.addChild(Portfolio);
        
        //create js text for a little description
        design = new createjs.Text("Featuring my design work", "12px arial", "#000000");
        design.regX = design.getMeasuredWidth() * 0.5;
        design.regY = design.getMeasuredHeight() * 0.5;
        design.x = screenWidth * 0.16;
        design.y = screenHeight * 0.8;
        stage.addChild(design);
        // on click links to my projects page
        backgroundClick.on("click", function() {
            location.href="projects.html";
        });
        //adds transparency on mouseover
        backgroundClick.on('mouseover', function() {
            backgroundClick.alpha = 0.5;
        })
        //removes transparency when mouse leaves ad
        backgroundClick.on('mouseout', function() {
            backgroundClick.alpha = 1;
        })
    }

    window.onload = init;


})();

