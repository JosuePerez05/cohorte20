package Prueba3;

import java.util.Scanner;

public class Principal {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Ingrese el nÃºmero de mangos: ");
		int mangos = scanner.nextInt(); //para no. de mangos
		
		System.out.println("Ingrese el nÃºmero de naranjas: ");
		int naranjas = scanner.nextInt(); //para no. de naranjas
		
		
		
		//Instancia
		MangosNaranjas mangosNaranjas = new MangosNaranjas(mangos, naranjas);
		mangosNaranjas.imprimir();
		
	}

}