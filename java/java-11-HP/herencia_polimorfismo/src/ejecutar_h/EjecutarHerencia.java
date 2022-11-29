package ejecutar_h;

import herencia.*;
public class EjecutarHerencia {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Padre p = new Padre("Juan", "Pancho");

		p.mostrarDatos();
	
	
	
	Hija h;
	h= new Hija ("Dora","CDMX",22);
	
	h.mostrarDatos();
	h.mostrarDatos("lara");
	
	Hija h1 =new Hija("Diego","Tulancingo",22);
	h1.mostrarDatos("Cruz");
	
}
	
}