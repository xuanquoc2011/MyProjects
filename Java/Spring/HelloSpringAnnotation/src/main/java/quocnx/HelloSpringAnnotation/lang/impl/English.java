package quocnx.HelloSpringAnnotation.lang.impl;

import quocnx.HelloSpringAnnotation.lang.Language;

// English
public class English implements Language{

	@Override
	public String getGreeting() {
		return "Hello";
	}

	@Override
	public String getBye() {
		return "Bye Bye";
	}
	
}
