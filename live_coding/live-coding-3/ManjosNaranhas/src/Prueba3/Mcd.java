package Prueba3;

import java.util.Scanner;

public class Mcd {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner sc= new Scanner(System.in);
	//1. pedir datos
		System.out.println("Ingrese el primer numero ");
		int num1=sc.nextInt();
		
		
		//1. pedir datos

		System.out.println("Ingrese el segundo numero ");
		int num2=sc.nextInt();
		//Mostrar en consola
		int res=MCD(num1,num2);
	System.out.println("El MCD: "+res);
	}
		public static int MCD(int num1, int num2) {

		int a = Math.max(num1, num2);
		int b = Math.max(num1, num2);
		
		int resultado=0;
		
		do {
		resultado=b;
		b=a%b;
		a=resultado;
		}while(b!=0);
		return resultado;
		
		
		
	
	
	
	}
}