package operadores;

import java.util.Scanner;

public class Ciclos {
	
	void saludo() { //funcion sin retorno es funcion void  y debes crear un objeto el el main funcion primitiva  
		System.out.println("Hola a las funciones en java ");
		
	}
	
	int operacion () {
		int f = (int) Math.pow(3, 2);
		return f;
	}
	static double nuevo() { //no necesita llamada por ser estatica
		double h= Math.pow(5, 3);//exponente 
		return h;
	}
	
	String caracteres () { // funcion referencial retorno de tipo objeto modificador
		String nombre = "Hola buen dia ";
		return nombre;
	}
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Ciclos objC ; // Declaramos
		objC = new Ciclos();// instancia
		objC.saludo();//llamada
		System.out.println("uso de pow(3,2)" + objC.operacion() );
		System.out.println("uso del clase estaticca Math.pow(5,3)--->"+nuevo());
		System.out.println(objC.caracteres());
		
		
		nuevo();
		
		Scanner scanner = new Scanner(System.in);
//		System.out.print("\t\t\tIntroduzca el valor de la tabla de multiplicar con el ciclo for --> ");	
//		int tabla = scanner.nextInt();
//		for (int i = 1; i <= 10; i++) {
//			System.out.println(tabla + " * " + i + " = " +(tabla * i));
//		}
//		
//		int j = 1;
//		System.out.print("\t\t\tIntroduzca el valor de la tabla de multiplicar con el ciclo while --> ");	
//		int tablaW = scanner.nextInt();
//		
//		while (j <= 10) {
//			System.out.println(tablaW + " * " + j + " = " +(tablaW * j));
//			j++;
//		}

	}

}
