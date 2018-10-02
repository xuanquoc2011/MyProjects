package quocnx.HelloSpringAnnotation.bean;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import quocnx.HelloSpringAnnotation.lang.Language;

@Service
public class GreetingService {
	@Autowired
	private Language languageVi;
	
	@Autowired
	private Language languageEn;
	
	public GreetingService() {
		
	}
	
	public void sayGreetingVi() {
		String greeting = languageVi.getGreeting();
		System.out.println(greeting);
	}
	
	public void sayGreetingEn() {
		String greeting = languageEn.getGreeting();
		System.out.println(greeting);
	}
}
