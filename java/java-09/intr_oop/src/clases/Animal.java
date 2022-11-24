package clases;
public class Animal {
	private String raza;
	private String nombre;
	private int edad;



public Animal() {
		
	}
public Animal (String nuevoNombre, String nuevaRaza) {
	nombre =nuevoNombre;
	raza =nuevaRaza;
}
public int getEdad() {
	return edad;
}
public void setEdad(int nuevaEdad) {
	edad=nuevaEdad;

}
public String getNombre() {
	return nombre;
}

public String getRaza() {
	return raza;
}


}