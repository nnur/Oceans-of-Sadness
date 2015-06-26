#pragma strict
var velocity : float;

function Start () {
	Destroy(gameObject, 20);
}

function Update () {

transform.Translate(0,transform.position.y*velocity, 0);

}