let classifier, video;
let label, confidence = "";

function setup() {
    createCanvas(640, 480);
    background(0);

    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('model/model.json', video, modelReady);
}

function modelReady(){
    console.log("Model Ready");
    classifier.classify(getResults);
}

function draw() {
    image(video, 0, 0);
    fill(255, 69, 0);
    textSize(34);
    text(label, 10, height-50);
    text(`${Math.round(confidence * 100)}%`, width-90, height-50);
}

function getResults(error, results) {
    if (error)
        console.log(error);
    else {
        label = results[0].label;
        confidence = results[0].confidence;
        classifier.classify(getResults);
    }
}

