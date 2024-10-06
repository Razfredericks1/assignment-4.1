let interval; //motion is based on ms. You can set interval to start at certain # of ms
let image = document.getElementById('move');

function StartMove(direction){
    StopMove();
    interval = setInterval (() => {
        let left = image.offsetLeft;
        // defining left with offset on image
        let top = image.offsetTop;
        // defining top with offset on image

        if(direction === 'right') left += 10; //creating movement for right
        if(direction === 'left') left -= 10; //creating movement for left
        if(direction === 'up') top -= 10; //creating movement for up
        if(direction === 'down') top += 10; //creating movement for down
        if(direction === 'diaDown'){ //creating movement for down diagonal
            top += 5;
            left += 5;
        }
        if(direction === 'diaUp'){ //creating movement for up diagonal 
            top -= 5;
            left -= 5;
        }
        
        
        image.style.left = `${left}px`; 
        image.style.top = `${top}px`;
        image.style.dia = `${dia}px`;
        // allows us to see the image move
        
    }, 50); //timeout 50ms
}

function StopMove(){
    clearInterval(interval); 
    //function that allows us to stop image from moving
}