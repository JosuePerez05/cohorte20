package polimorfismo;

import java.util.Scanner;

public class Rectangulo extends FigurasGeometricas {

	protected double base,altura;
	Scanner s;
	
	@Override
	public void pedirDatos() {
		// TODO Auto-generated method stub
		s= new Scanner(System.in);
	System.out.println("\t\t\t Area del Rectangulo");
	
	System.out.print("Introduzca la base");
	base=s.nextDouble();
	
	System.out.print("Introduzca la altura");
	altura=s.nextDouble();
	
	}
	
		
	

	@Override
	public void area() {
		// TODO Auto-generated method stub
		
		resultado=base*altura;
	}

}

