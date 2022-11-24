package oop;

public class SubMarino {
//main temporal
	void submenu() {
		Menu m = new Menu();	
		OperacionesAritmeticas oa = new OperacionesAritmeticas ();

			int opccion=0;	
			do { 	
			switch (opccion){
			case 1 : {
				System.out.println(oa.add());
				break;
			}
			case 2:{
				System.out.println(oa.sustrac());
				break;
			}
			case 3:{
				System.out.println(oa.producto());
				break;
			}
			case 4:{
				System.out.println(oa.divide());
				break;
			}
			case 5:{
				System.out.println(oa.modulo());
				break;
			}
			default:
		}
	
	
 }while (opccion !=7);
			
	}
	
}
