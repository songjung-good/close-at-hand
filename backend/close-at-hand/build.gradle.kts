plugins {
	java
	id("org.springframework.boot") version "3.2.3"
	id("io.spring.dependency-management") version "1.1.4"
}

group = "dev.rainbowmirror"
version = "0.0.1-SNAPSHOT"

java {
	sourceCompatibility = JavaVersion.VERSION_21
}

configurations {
	compileOnly {
		extendsFrom(configurations.annotationProcessor.get())
	}
}

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
	implementation("org.springframework.boot:spring-boot-starter-web")
//	implementation("org.flywaydb:flyway-core")
//	implementation("org.flywaydb:flyway-mysql")

	// https://mvnrepository.com/artifact/com.google.guava/guava
	implementation("com.google.guava:guava:32.1.3-jre")
	// https://mvnrepository.com/artifact/org.apache.commons/commons-lang3
	implementation("org.apache.commons:commons-lang3:3.12.0")
	// https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt
	implementation("io.jsonwebtoken:jjwt:0.12.3")
	implementation("io.jsonwebtoken:jjwt-impl:0.12.3")
	implementation("io.jsonwebtoken:jjwt-jackson:0.12.3")

	// NotEmpty
	implementation("org.springframework.boot:spring-boot-starter-validation")

//	implementation("org.springframework.boot:spring-boot-starter-security")
	// https://mvnrepository.com/artifact/com.mysql/mysql-connector-j
	runtimeOnly("com.mysql:mysql-connector-j")

	compileOnly("org.projectlombok:lombok")
	annotationProcessor("org.projectlombok:lombok")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
}

tasks.withType<Test> {
	useJUnitPlatform()
}
