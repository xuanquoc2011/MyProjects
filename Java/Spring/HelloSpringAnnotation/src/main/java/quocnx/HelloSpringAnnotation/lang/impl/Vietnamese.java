package quocnx.HelloSpringAnnotation.lang.impl;

import quocnx.HelloSpringAnnotation.lang.Language;

// VietNamese
public class Vietnamese implements Language{

	@Override
	public String getGreeting() {
		return "Xin Chào";
	}

	@Override
	public String getBye() {
		return "Tạm Biệt";
	}

}
