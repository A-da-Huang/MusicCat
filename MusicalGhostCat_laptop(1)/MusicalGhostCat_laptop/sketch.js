let piano, pianoCRU, pianoCRD, pianoCLU, pianoCLD, pianoBody, drum, drumBody, drumLB, drumLC, drumLU, drumRB, drumRC, drumRU, pianobg, drumbg;
let piano1, piano2;
let cat1, cat2, cat3, cat4, cat5; 
let drum1, drum2, drum3, drum4, drum5;
let dog1, dog2, dog3, dog4;
let mode = 'Piano';
let sound = 'Music';
let leftPress = false;
let rightPress = false;
let hitDrumLC = false;
let hitDrumRC = false;
let hitDrumLB = false;
let hitDrumRB = false;
function preload(){
    // loads images
    piano = loadImage("assets/piano_piano.png");
    pianoCRU = loadImage("assets/piano_cat_right_up.png");
    pianoCRD = loadImage("assets/piano_cat_right_down.png");
    pianoCLU = loadImage("assets/piano_cat_left_up.png");
    pianoCLD = loadImage("assets/piano_cat_left_down.png");
    pianoBody = loadImage("assets/paino_cat_body.png");
    pianobg = loadImage("assets/piano_background.png");
    drum = loadImage("assets/drum_body.png");
    drumBody = loadImage("assets/drum_catbody.png");
    drumLB = loadImage("assets/drum_left_drum.png");
    drumLC = loadImage("assets/drum_left_cymbal.png");
    drumLU = loadImage("assets/drum_left_up.png");
    drumRB = loadImage("assets/drum_right_drum.png");
    drumRC = loadImage("assets/drum_right_cymbal.png");
    drumRU = loadImage("assets/drum_right_up.png");
    drumbg = loadImage("assets/drum_background.png");
    piano1 = loadSound("assets/piano1.mp3");
    piano2 = loadSound("assets/piano2.mp3");
    cat1 = loadSound("assets/cat1.mp3");
    cat2 = loadSound("assets/cat2meme.mp3");
    cat3 = loadSound("assets/cat3.mp3");
    cat4 = loadSound("assets/cat4.mp3");
    cat5 = loadSound("assets/cat5.mp3");
    dog1 = loadSound("assets/dog1.mp3");
    dog2 = loadSound("assets/dog2.mp3");
    dog3 = loadSound("assets/dog3.mp3");
    dog4 = loadSound("assets/dog4.mp3");
    drum1 = loadSound("assets/drum1.mp3");
    drum2 = loadSound("assets/drum2.mp3");
    drum3 = loadSound("assets/drum3.mp3");
    drum4 = loadSound("assets/drum5.mp3");
    

}



function setup(){
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);

    const pane = new Tweakpane.Pane();

    const PARAMS = {
        mode: 'Piano',
    };
    pane.addInput(PARAMS,'mode',{
        options:{
            Piano: 'Piano',
            Drum: 'Drum',
        },
    }).on('change', (ev)=>{
        mode = ev.value;
        console.log('Mode changed to:', mode);
    })

     const PARAMSs = {
        sound: 'Music',
    };
    pane.addInput(PARAMSs, 'sound',{
        options:{
            Music: 'Music',
            Cat: 'Cat',
            Dog: 'Dog',
        },
    }).on('change', (ev) => {
        sound = ev.value;
    })
}

function draw(){
    background(220);

    if(mode === 'Piano'){
        drawPiano();
    } else if (mode === 'Drum'){
        drawDrum();
    }
}

function drawPiano(){
    pianobg.resize(1900,0);
    image(pianobg, width * 0.25 + 220, height * 0.5 - 20);
    image(pianoBody, width * 0.25 + 150, height * 0.5 + 30);
    image(piano, width * 0.25 + 150, height * 0.5);
    if (rightPress) {
        image(pianoCRD, width * 0.25 + 150, height * 0.5 - 0);
    } else {
        image(pianoCRU, width * 0.25 + 150, height * 0.5 - 0);
    }
    if (leftPress) {
        image(pianoCLD, width * 0.25 + 150, height * 0.5 - 0);
    } else {
        image(pianoCLU, width * 0.25 + 150, height * 0.5 - 0);
    }
  console.log("drawing piano");
}

function drawDrum(){
    image(drumbg, width * 0.25 + 220, height * 0.5 - 20);
    image(drumBody, width * 0.5, height * 0.5);
    image(drum, width * 0.5, height * 0.5);

    if (hitDrumLB || hitDrumLC) {
        if (hitDrumLB) {
            image(drumLB, width * 0.5, height * 0.5);
        } else {
            image(drumLC, width * 0.5, height * 0.5);
        }
    } else {
        image(drumLU, width * 0.5, height * 0.5);
    }

    if (hitDrumRB || hitDrumRC){
        if (hitDrumRB){
            image(drumRB, width * 0.5, height * 0.5);
        } else{
            image(drumRC, width * 0.5, height * 0.5);
        }
    } else{
        image(drumRU, width * 0.5, height * 0.5);
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//Key events

function keyPressed(){
    // Piano controls
    if (mode === 'Piano') {
        if(key === 'A' || key === 'a'){
            leftPress = true;
            if (sound === 'Music') {
                piano1.play();
            } else if (sound === 'Cat') {
                cat1.play();
            } else if (sound === 'Dog'){
                dog1.play();
            }
        }
        if (key === 'D' || key === 'd'){
            rightPress = true;
            if (sound === 'Music') {
                piano2.play();
            } else if (sound === 'Cat') {
                cat2.play();
            } else if (sound === 'Dog'){
                dog2.play();
            }
        }
    }
    // Drum Controls
    if (mode === 'Drum') {
        if (key === 'E' || key === 'e') {
            hitDrumLC = true;
            if (sound === 'Music') {
                drum1.play();
        } else if (sound === 'Cat') {
                cat1.play();
        } else if (sound === 'Dog'){
                dog1.play();
        }
        }
        if (key === 'I' || key === 'i') {
            hitDrumRC = true;
            if (sound === 'Music') {
                drum2.play();
        } else if (sound === 'Cat') {
                cat2.play();
        } else if (sound === 'Dog'){
                dog2.play();
        }
            
        }
        if (key === 'F' || key === 'f') {
            hitDrumLB = true;
            if (sound === 'Music') {
                drum3.play();
        } else if (sound === 'Cat') {
                cat3.play();
        } else if (sound === 'Dog'){
                dog3.play();
        }
            
        }
        if (key === 'J' || key === 'j') {
            hitDrumRB = true;
            if (sound === 'Music') {
                drum4.play();
            } else if (sound === 'Cat') {
                cat4.play();
            } else if (sound === 'Dog'){
                dog4.play();
            } 
        }
    }
    if (key === '0' && mode === "Piano") {
        //console.log("switch");
        mode = "Drum";
    } else if (key === '0' && mode === "Drum") {
        mode = "Piano"
    }
}

function keyReleased(){
    // Piano Controls
    if(key === 'A' || key === 'a'){
        leftPress = false;
    }
    if (key === 'D' || key === 'd'){
        rightPress = false;
    }
    // Drum Controls
    if (mode === 'Drum') {
        if (key === 'E' || key === 'e') {
            hitDrumLC = false;
        }
        if (key === 'I' || key === 'i') {
            hitDrumRC = false;
        }
        if (key === 'F' || key === 'f') {
            hitDrumLB = false;
        }
        if (key === 'J' || key === 'j') {
            hitDrumRB = false;
        }
    }
}

console.log("setup is running");