#pragma strict

var speed = 0.75;
var dir = 1;

function Start () {

}

function Update () {
//transform.Translate(new Vector3(0.7747191, transform.position.y, transform.position.z));

//Bobbing

if(transform.position.y >= -26 || transform.position.y <= -36){dir *= -1;}
var vect2 = new Vector2 (0, dir*1.8);
transform.Translate ((vect2) * Time.deltaTime*speed);

//Rotating

//transform.RotateAround (Vector3.zero, Vector3.up, 100 * Time.deltaTime);

var _Angle = 4;
var _Period = 1;
var _Time = Time.time;

   _Time = _Time + Time.deltaTime;
    var phase = Mathf.Sin(_Time / _Period);
    transform.localRotation = Quaternion.Euler( new Vector3(0, 0, phase * _Angle));


}