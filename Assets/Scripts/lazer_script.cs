using UnityEngine;
using System.Collections;
using System.Text;

public class lazer_script : MonoBehaviour {

	public float speed = 50.0f;

	[HideInInspector]

	void Start () {
	}

	void FixedUpdate () {
		rigidbody2D.AddForce (Vector2.up * 5);// * Time.deltaTime);
	}
}