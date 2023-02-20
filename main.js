function preload(){

}

function draw(){
    image(video,0,0,640,480);
    circle(15,15,35);//circulo ¡izquierda
    rect(20,3,450,20)//linea de arriba
    circle(480,15,35)//circulo ¡derecha
    rect(7,3,20,450)//linea izquierda
    rect(7,330,470,20)//linea abajo
    circle(475,340,35)//circulo inferior derecho
    rect(470,400,20,450)

}




function setup(){
    canvas=createCanvas(500,360);
    canvas.position(110,300);
    video=createCapture(VIDEO);
    video.hide();
}

