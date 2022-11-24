package clases;

public class MiClase {
	private int atributo1;//atributo referencia 
	private String atributo2;//atributo referencia

	
	public MiClase() {
		
	}
	

	
	
	public MiClase(int atributo1, String atributo2) {
		
		this.atributo1 = atributo1;
		this.atributo2 = atributo2;
	}
	public void  metodo() { // void
		MiClase obj = new  MiClase();
		int n=obj.atributo1 =123;
		String s=obj.atributo2 = "Hola";
	System.out.println("-->"+n);
	System.out.println("--->"+s);
	
	System.out.println(atributo1);
	System.out.println(atributo2);
	}
	double metodo1() { //primitivo
		double a =0.0;
		return a;
	}


}
