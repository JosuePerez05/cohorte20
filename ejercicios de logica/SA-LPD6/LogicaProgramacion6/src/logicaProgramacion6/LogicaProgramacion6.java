package logicaProgramacion6;
import java.util.Scanner;
public class LogicaProgramacion6 {

	public static void main(String[] args) {
		Scanner s =new Scanner(System.in);
		
		String palabra;
		String invertir="";
		
		System.out.println("Ingrese una frase");
		palabra= s.nextLine();
		
		for (int contador = palabra.length()-1; contador>=0; contador--) {
			invertir += palabra.charAt(contador);
			
		}
		System.out.println(invertir);
	
	}
}