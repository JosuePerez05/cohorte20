package oop;
import java.util.Scanner;
public class Menu {

	
	Scanner s  = new Scanner(System.in);
	int menuOp(){
		int numero=0;
		System.out.println("\t\t ----- Menu-----");
		System.out.println(" \t\t1: Tablas de multiplicar");
		System.out.println(" \t\t2: Operaciones Aritmeticas");;
		System.out.println(" \t\t3: Op");
		System.out.println(" \t\t4: Op");
		System.out.println(" \t\t5: Op");
		System.out.println(" \t\t6: ");
		System.out.println(" \t\\t  7: Salir");
		
	System.out.println("introduzca el numero de la opccion  ");
	return numero= s.nextInt();
}

	int SubMenuOp(){
		int numero=0;
		System.out.println("\t\t ----- Menu Operaciones aritmeticas -----");
		System.out.println(" \t\t 1: Suma");
		System.out.println(" \t\t 2: Resta");
		System.out.println(" \t\t 3: Multiplicacion");
		System.out.println(" \t\t 4: Division");
		System.out.println(" \t\t 5: Modulo");
		System.out.println(" \t\t 6: Booleans");
		System.out.println(" \t7: Salir");
		
	System.out.println("introduzca el numero de la opccion  ");
	return numero= s.nextInt();
}



}