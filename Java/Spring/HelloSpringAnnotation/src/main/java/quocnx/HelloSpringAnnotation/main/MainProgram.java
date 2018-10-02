package quocnx.HelloSpringAnnotation.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import quocnx.HelloSpringAnnotation.bean.GreetingService;
import quocnx.HelloSpringAnnotation.bean.MyComponent;
import quocnx.HelloSpringAnnotation.config.AppConfiguration;
import quocnx.HelloSpringAnnotation.lang.Language;

public class MainProgram {

	public static void main(String[] args) {
		ApplicationContext context = new AnnotationConfigApplicationContext(AppConfiguration.class);
		GreetingService service =  (GreetingService) context.getBean("greetingService");
		
		System.out.println("======= Viet Nam ==============");
		Language langVi = (Language) context.getBean("languageVi");
		System.out.println("Bean Language: " + langVi);
		System.out.println("Say Bye: " + langVi.getBye());
		service.sayGreetingVi();
		
		System.out.println("======= English ==============");
	    Language langEn = (Language) context.getBean("languageEn");
		System.out.println("Bean Language: " + langEn);
		System.out.println("Say Bye: " + langEn.getBye());
		service.sayGreetingEn();
		
		System.out.println("======= App Info ==============");
		MyComponent myComponent = (MyComponent) context.getBean("myComponent");
	    myComponent.showAppInfo();
	}
}
