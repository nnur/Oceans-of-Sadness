#pragma strict
var time;
var dir = 1;
function Start () {
var time = Time.time + 15;

}

function Update () {
	
	Rotatet();
	
}

function Rotatet(){

	if ( transform.rotation.eulerAngles.z >= 90.0 && transform.rotation.eulerAngles.z <= 270){

	transform.Rotate((new Vector3(0,0,40))*(dir*Time.deltaTime));


	}
	//transform.Rotate((new Vector3(0,0,40))*(dir*Time.deltaTime));
	if(transform.rotation.eulerAngles.z >= 270 || transform.rotation.eulerAngles.z <= 89.9){
	dir *= -1;
	yield WaitForSeconds (15);
	transform.Rotate((new Vector3(0,0,40))*(dir*Time.deltaTime));
	}
}
