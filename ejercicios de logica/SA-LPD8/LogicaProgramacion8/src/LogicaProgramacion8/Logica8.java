package LogicaProgramacion8;
import java.util.Scanner;
public class Logica8 {
	 public static void main(String[] args) {
		  
		    int[] n = new int[10];
		    int[] primo = new int[10];
		    int[] noPrimo = new int[10];
		    int i;
		    int j;
		    int primos = 0;
		    int noPrimos = 0;
		    boolean esPrimo = false;
		    Scanner s = new Scanner(System.in);
		    System.out.println("Introduzca 10 números separados por INTRO:");

		    for (i = 0; i < 10; i++) {
		      n[i] = Integer.parseInt(s.nextLine());
		      
		      // Comprueba si el número es o no primo.
		      esPrimo = true;
		      for (j = 2; j < n[i] - 1; j++) {
		        if (n[i] % j == 0) {
		          esPrimo = false;
		        }
		      }
		      
		      // Si el número es primo, se mete en un array y si
		      // no es primo, se mete en otro diferente.
		      if (esPrimo) {
		        primo[primos++] = n[i];
		      } else {
		        noPrimo[noPrimos++] = n[i];
		      }
		    }
		    
		    // Muestra el array original
		    System.out.println("\n\nArray original:");
		    
		    System.out.print(" Pocicion ");
		    for (i = 0; i < 10; i++) {
		      System.out.print( i+ ",");
		    }
		   
		    System.out.print(" Valor  ");
		    for (i = 0; i < 10; i++) {
		    	System.out.print( n[i]+",");
		    }
		  
		    
		    // Los números primos se menten en las primeras
		    // posiciones del array original.
		    for (i = 0; i < primos; i++) {
		      n[i] = primo[i];
		    }
		    
		    // Los números que no son primos se colocan al final.
		    for (i = primos; i < primos + noPrimos; i++) {
		      n[i] = noPrimo[i - primos];
		    }

		    // Muestra el resultado.
		    System.out.println("\n\n primos al principio:");
		    
		    System.out.print("Pocision ");
		    for (i = 0; i < 10; i++) {
		      System.out.print( i+",");
		    }
		 
		    System.out.print("Valor  ");
		    for (i = 0; i < 10; i++) {
		        System.out.print( n[i]+",");
		    }
		 
}
}
