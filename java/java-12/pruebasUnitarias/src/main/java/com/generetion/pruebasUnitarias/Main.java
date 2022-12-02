package com.generetion.pruebasUnitarias;

public class Main {
public static void main (String[] arg) {
	Calculadora calc = new Calculadora (true);
	
	System.out.println(calc.suma(2, 5));
	System.out.println(calc.division(2, 0));
}
}
