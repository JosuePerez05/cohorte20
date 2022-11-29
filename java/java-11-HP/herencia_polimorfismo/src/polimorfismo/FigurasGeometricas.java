package polimorfismo;
import java.util.*;
public abstract class FigurasGeometricas {

	
	protected double  resultado;
	
	
	
	
	
	
	public abstract void pedirDatos() ;
	
	
	
	public abstract void area();// metodo proceso
	
	public void visualizar() {
		System.out.println("El resultado es: "+ resultado);
	}
}
