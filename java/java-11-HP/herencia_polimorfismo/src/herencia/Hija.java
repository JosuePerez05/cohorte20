package herencia;

public class Hija extends Padre{
	private int edad;
	
	public Hija(String nombre, String domicilio, int edad) {
		super(nombre,domicilio);
		this.edad=edad;
		// TODO Auto-generated constructor stub
	}
	public void mostrarDatos()
	{
		System.out.println("El nombre es: "+ nombre+" "+ " "+"El domicilio es "+" "+domicilio+" "+"La edad es"+edad);
	}
	public void mostrarDatos(String apellido) {
		System.out.println("El nombre es: "+ nombre+" "+ "El apellido es "+apellido +" "+"El domicilio es "+" "+domicilio+" "+"La edad es"+edad);
	}
	}


