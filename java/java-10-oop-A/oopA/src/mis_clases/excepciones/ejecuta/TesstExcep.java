package mis_clases.excepciones.ejecuta;

import mis_clases.excepciones.operacion.Division;

public class TesstExcep {
public static void main(String [] args) {
	try {
		Division d= new Division(4,2);
		d.visualizarD();
	}catch(Exception e) {
		System.out.println(e.getMessage());
		e.printStackTrace();
	}
	System.out.println("Continua..........");
}
}
