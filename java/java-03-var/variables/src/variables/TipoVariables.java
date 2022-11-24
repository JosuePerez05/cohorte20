package variables;

public class TipoVariables {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// byte,short,int, long (primitivos enteros)
			byte numeroB= 12;//un bite guarda -128 a 127
			System.out.println("Tamaño de un byte "+ Byte.SIZE);
			System.out.println("Valor maximo "+ Byte.MAX_VALUE);
			System.out.println("valor minimo "+ Byte.MIN_VALUE);
			
			int entero=5;
			System.out.println(" Tamaño de unentero  " + Integer.BYTES);
			System.out.println(" Tamaño " + Integer.SIZE);
			System.out.println(" Valor max  " + Integer.MAX_VALUE);
			System.out.println(" Valor min " + Integer.MIN_VALUE);
	
			
			//short 
			System.out.println("--> Short <----");
			short variableS=6;			
			System.out.println(" Tamaño de bytes short  " + Short.BYTES);
			System.out.println(" Tamaño " + Short.SIZE);
			System.out.println(" Valor max  " + Short.MAX_VALUE);
			System.out.println(" Valor min " + Short.MIN_VALUE);
			//long
			long variable565;
			System.out.println("--> Long <----");
			
			System.out.println(" Tamaño bytes Long  " + Long.BYTES);
			System.out.println(" Tamaño de long " + Long.SIZE);
			System.out.println(" Valor max  " + Long.MAX_VALUE);
			System.out.println(" Valor min " + Long.MIN_VALUE);

			System.out.println("------------------------------------------");			
			var num = 21474836473L;
			System.out.println(" Esta es la variable con var  " +num);	
			//Sistema binario (0b)
			var sistemNum=0b101; 
			System.out.println("binario: " + sistemNum);
			//Sistema octal(0)
			var sistemoctal=05; 
			System.out.println("octal: " + sistemoctal);
			//Sistema hexa(0x)
			var sistemhexa=0xFC; 
			System.out.println("Hexadecimal: " + sistemhexa);
	//PRIMITIVOS FLOTANTES (float,double)
			System.out.println("-----------------PRIMITIVOS FLOTANTES------------------------------");
	System.out.println("--> float <----");
			
			System.out.println(" Tamaño en bits en float  " + Float.SIZE);
			System.out.println(" Tamaño en bytes en  float " + Float.BYTES);
			System.out.println(" Valor max  " + Float.MAX_VALUE);
			System.out.println(" Valor min " + Float.MIN_VALUE);
			float coma =100f;
			float comaD =100f;
			System.out.println("--> Double <----");
			System.out.println(" Tamaño bits double  " + Double.SIZE);
			System.out.println(" Tamaño de bytes double " + Double.BYTES);
			System.out.println(" Valor double  " + Double.MAX_VALUE);
			System.out.println(" Valor double " + Double.MIN_VALUE);

			System.out.println("float -->"+ coma);
			System.out.println("double -->"+ comaD);
			
			System.out.println("--------Boolena-------");
			
		boolean estado =false;
			System.out.println("-->" + estado);
	
			var edad =10;
			boolean adulto =edad >=10;
			
			if (adulto) {
				System.out.println("varBool si edad es ,mayor igual a "+ edad);
			
			
			
			
			} else {
				System.out.println("--->: valorBool la edad es menor a "+edad);
			}
				
			
			System.out.println("-----------char------------------");
			char caracter = '\u0021'; //!
			System.out.println("---->"+ caracter);
	
			char caracter1 = '\u06A0'; //!
			System.out.println("---->"+ caracter1);
	
	
	
	
	
	}

}
