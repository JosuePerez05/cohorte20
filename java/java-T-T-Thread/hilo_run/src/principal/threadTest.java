package principal;

import threads.thread1;
import threads.thread2;

public class threadTest {
	public static void main(String[] args) {
	
	thread1 t1 = new thread1();
	thread2 t2 = new thread2();
	
	t1.start();
	t2.start();
	try{
		t1.join();
		t2.join();
		
	}catch(InterruptedException e) {
		
	}
	System.out.println("sean ejecutado los 2 thread ");
	
}
}