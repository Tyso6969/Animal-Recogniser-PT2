function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Gzh8gdP5C/', modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}