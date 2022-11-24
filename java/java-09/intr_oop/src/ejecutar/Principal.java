package ejecutar;

import clases.MiClase;
import clases.Animal;
public class Principal {

	public static void main(String[] hugo) {
		// TODO Auto-generated method stub
		MiClase mc = new MiClase(1234,"Adios");
		mc.metodo();
		
		Animal miAnimal= new Animal ("Falco", "Halcón");
		miAnimal.setEdad(3);
		
		
		System.out.println("El nombre es "+ miAnimal.getNombre());
		System.out.println("y tiene " + miAnimal.getEdad() );
		System.out.println("La raza es " + miAnimal.getRaza() );
		 
		
	}

}
