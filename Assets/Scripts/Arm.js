#pragma strict


var velocity : float;
public var BulletPrefab : GameObject;

function Start () {
}

function Update () {

//stores x,y,z of mouse
var v3 = Camera.main.ScreenToWorldPoint(new Vector3 (Input.mousePosition.x,Input.mousePosition.y,transform.position.z));
//difference between shoulder and mouse
var dv3 = v3 - transform.position;


var rads = Mathf.Atan(dv3.y/dv3.x);

if(v3.x < 0) {
	rads = rads + Mathf.PI;
	}
transform.localEulerAngles = new Vector3(0,0,rads*180/Mathf.PI);



}
