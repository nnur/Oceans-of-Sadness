#pragma strict
var sspeed : float;
var facingRight;

function Start () {
facingRight = true;
}

function Update () {
	
	      if (Input.GetKey(KeyCode.RightArrow))
           {
           		if(!facingRight){flipScene();}
               transform.Translate (
               					(Vector3(1.8,Mathf.Sin(this.transform.position.x),0))
               					
               					  * Time.deltaTime*
               					  sspeed);
                
           }

		 if (Input.GetKey(KeyCode.LeftArrow))
           {
           		if(facingRight){flipScene();}
               transform.Translate ((Vector3(-1.8,(Mathf.Sin(this.transform.position.x)),0)) * Time.deltaTime*sspeed); 
                
           }
           
           if (Input.GetKey(KeyCode.UpArrow))
           {
           transform.Translate ((Vector3(0,2.8,0)) *Time.deltaTime*sspeed); 

           }
           if (Input.GetKey(KeyCode.DownArrow))
           {
                
           }
           
	
}

function flipScene()
{
//transform.RotateAround (Vector3.zero, Vector3.up, 100 * Time.deltaTime);
	facingRight = !facingRight;
	var scale = transform.localScale;
	scale.x*=-1;
	transform.localScale = scale;}
	
	//transform.Translate(new Vector3(transform.position.x - 10, transform.position.y, 0));}