package polimorfismo;

import java.util.Scanner;

public class Cuadrado extends FigurasGeometricas {
	protected double lado;
	Scanner s;
	
	@Override
	public void pedirDatos() {
		// TODO Auto-generated method stub
		s= new Scanner(System.in);
	System.out.println("\t\t\t Area del Cuadrado");
	
	System.out.print("Introduzca elprimer lado");
	lado=s.nextDouble();
	
	}
	
		
	

	@Override
	public void area() {
		// TODO Auto-generated method stub
		
		resultado=lado*lado;
	}

}
