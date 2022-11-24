package Colecciones;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.HashSet;
import java.util.*;
public class Colecciones {
public static void main (String[] args) {
	//List - ArrayList
	//Valores de un mismo tipo
	
	System.out.println("--- ArrayList ---");
	
	List<String> miArray = new ArrayList<String>();

	 miArray.add("GDL");
	 miArray.add("CDMX");
	 miArray.add("MTY");
	 miArray.add(0,"  Manzanillo");
	String valorquitado = miArray.remove(0);
	
	//boolean valorQuitado= miArray.remove("GDLx");

System.out.println(miArray);
System.out.println(valorquitado);
System.out.println(miArray.get(2));
System.out.println(miArray.size());

	imprimir(miArray);

	System.out.println("--- HashSet ---");
	/*
	 * no repite datos
	 * es el mas rapido
	 * no guarda los elementos en un orden  aparente
	 * no maneja indice 
	 * */
	Set<String> miSet = new HashSet<String>();
	miSet.add("panchito");
	miSet.add("Paco");
	miSet.add("Juan");
	miSet.add("Juan");
	miSet.add("Martin");
	System.out.println(miSet);
	imprimir(miSet);
	//System.out.println(miSet.contains("Martin"));//pregunta si existe dentro de los sets 
	miSet.remove("Martin");
	System.out.println("--- HashMap ---");
	Map<String, Integer>miMap = new HashMap<String, Integer>();
	miMap.put("Valor 1", 56);
	miMap.put("Valor 2", 56);
	miMap.put("Valor 3", 70);
System.out.println(miMap);
System.out.println(miMap.keySet());

for(String llave : miMap.keySet()) {
	System.out.println(llave + " : " + miMap.get(llave));
}

}

	public static void imprimir(Collection coleccion) {
	for(Object elemento : coleccion ) {
		System.out.println("Elemento = " + elemento);
	}
}

}


