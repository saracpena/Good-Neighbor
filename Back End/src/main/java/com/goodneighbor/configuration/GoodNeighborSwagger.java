package com.goodneighbor.configuration;

import com.fasterxml.classmate.TypeResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.UiConfiguration;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@Configuration
public class GoodNeighborSwagger {

    @SuppressWarnings("unused")
    @Autowired
    private TypeResolver typeResolver;

    @Bean
    public Docket gnApi() {
        return new Docket(DocumentationType.SWAGGER_2).groupName("goodneighbor").select()
                .apis(RequestHandlerSelectors.basePackage("com.goodneighbor")).paths(PathSelectors.any()).build()
                .pathMapping("").apiInfo(apiInfo()).useDefaultResponseMessages(false);
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder().title("goodneighbor").description(
                "The goodneighbor service is a volunteer-based community where neighbors help neighbors in need. Please note that due to limited resources, we are only able to serve East Boston at this time.")
                .licenseUrl("").version("1.0").contact(new Contact("Sara Pena", null, "s.cristal.p@gmail.com")).build();
    }

    @Bean
    UiConfiguration uiConfig() {
        return new UiConfiguration("validatorUrl", // url
                "list", // docExpansion => none | list
                "alpha", // apiSorter => alpha
                "schema", // defaultModelRendering => schema
                false, // enableJsonEditor => true | false
                true); // showRequestHeaders => true | false
    }

}