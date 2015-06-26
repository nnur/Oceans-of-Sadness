#pragma strict

var speed = 0.75;
var dir = 1;

function Start(){

}

function Update(){

	if(transform.position.x >= 40){
		dir *= -1;	
	}
	
	if(transform.position.x <= -40){
		dir *= -1;	
	}

	transform.Translate ((Vector2(dir*1.8,Mathf.Sin(this.transform.position.x))) * Time.deltaTime*speed);

}