package quocnx.HelloSpringAnnotation.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import quocnx.HelloSpringAnnotation.lang.Language;
import quocnx.HelloSpringAnnotation.lang.impl.English;
import quocnx.HelloSpringAnnotation.lang.impl.Vietnamese;

@Configuration
@ComponentScan({"quocnx.HelloSpringAnnotation.bean"})
public class AppConfiguration {
	
	@Bean(name="languageVi")
	public Language getLanguageVi() {
		return new Vietnamese();
	}
	
	@Bean(name="languageEn")
	public Language getLanguageEn() {
		return new English();
	}
}
