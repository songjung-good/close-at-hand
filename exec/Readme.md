# Front APK
## Android Studio 버전 정보

Android Studio Hedgehog | 2023.1.1 Patch 2
Build #AI-231.9392.1.2311.11330709, built on January 19, 2024
Runtime version: 17.0.7+0-b2043.56-10550314 amd64
VM: OpenJDK 64-Bit Server VM by JetBrains s.r.o.
Windows 10.0
GC: G1 Young Generation, G1 Old Generation
Memory: 2048M
Cores: 12
Registry:
external.system.auto.import.disabled=true
debugger.new.tool.window.layout=true
ide.text.editor.with.preview.show.floating.toolbar=false
ide.experimental.ui=true

## VSCode 버전 정보

Version: 1.85.1 (user setup)
Commit: 0ee08df0cf4527e40edc9aa28f4b5bd38bbff2b2
Date: 2023-12-13T09:49:37.021Z
Electron: 25.9.7
ElectronBuildId: 25551756
Chromium: 114.0.5735.289
Node.js: 18.15.0
V8: 11.4.183.29-electron.0
OS: Windows_NT x64 10.0.19045

## 환경 변수

API_URL=”<BE sever URL>”

## APK 파일 빌드 방법

```bash
// 프로젝트 루트 폴더에서...
cd ./frontend/
npm install

// Android Studio로 가상 에뮬레이터 실행 혹은 안드로이드 스마트폰과 USB 연결 후 디버깅 허용
npm start
// 정상 작동 확인

// 빌드 실행
cd ./android
./gradlew app:assembleRelease

//root/frontend/android/app/build/outputs/apk/release 경로에 app-release.apk로 파일 생성
```

# Back

## 환경 변수 // application.yml

```kotlin
// application.yml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url:
    username:
    password:
  jpa:
    hibernate:
      ddl-auto: update
    properties:
      hibernate:
        dialect: org.hibernate.dialect.MySQL8Dialect
        show_sql: true
  security:
    user:
      name: account
  jwt:
    secret:
server:
  port: 3000
  shutdown: graceful
  servlet:
    context-path: /api/v1
springdoc:
  swagger-ui:
    path: /swagger
    groups-order: desc
  api-docs:
    path: /api-docs
  show-actuator: true
cloud:
  aws:
    s3:
      bucket:
    credentials:
      access-key:
      secret-key:
    region:
      static:
      auto: false
    stack:
      auto: false
omni:
  X-Api-Key:
  url:
  get-key:
  get-url:
  recommend-url:
  recommend-key:
```

## 개발 환경

- IntelliJ : 23.3.2
- spring boot : 3.2.3
- JDK : azul-17
- Java : 17
- AWS EC2
- DB : Mysql - 8.0

### build.gradle.kts

```kotlin
plugins {
	java
	id("org.springframework.boot") version "3.2.3"
	id("io.spring.dependency-management") version "1.1.4"
}

group = "dev.rainbowmirror"
version = "0.0.1-SNAPSHOT"

java {
	sourceCompatibility = JavaVersion.VERSION_17
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

	// S3
	implementation("org.springframework.cloud:spring-cloud-starter-aws:2.2.6.RELEASE")
	// https://mvnrepository.com/artifact/com.konghq/unirest-java
	implementation("com.konghq:unirest-java:3.14.5")
	// https://mvnrepository.com/artifact/com.google.code.gson/gson
	implementation("com.google.code.gson:gson:2.10.1")
	// security
	implementation("org.springframework.boot:spring-boot-starter-security")
	// https://mvnrepository.com/artifact/com.mysql/mysql-connector-j
	runtimeOnly("com.mysql:mysql-connector-j")
	// swagger
	implementation("org.springdoc:springdoc-openapi-starter-webmvc-ui:2.2.0")

	compileOnly("org.projectlombok:lombok")
	annotationProcessor("org.projectlombok:lombok")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
}

tasks.withType<Test> {
	useJUnitPlatform()
}

```

서버 컨테이너 RUN
```
echo "Build id ${BUILD_ID}"
echo "Build url ${BUILD_URL}"

# 이렇게 해봣는데..
MYSQL_URL=$MYSQL_URL
MYSQL_USERNAME=$MYSQL_USERNAME
MYSQL_PASSWORD=$MYSQL_PASSWORD

application=$application

cd backend/close-at-hand/

cp -f ${application} "src/main/resources/application.yml"

# Docker 컨테이너 이름
CONTAINER_NAME="back"
# image 이름
IMAGE_NAME="jartest_c"

# Docker 컨테이너의 존재 여부 확인
if docker ps -a --format "{{.Names}}" | grep -q "$CONTAINER_NAME"; then
    echo "컨테이너가 존재합니다. 삭제 중..."
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
    docker rmi $IMAGE_NAME
else
    echo "컨테이너가 존재하지 않습니다."
    if docker images --format "{{.Names}}" | grep -q "$IMAGE_NAME"; then
      echo "이미지가 존재합니다. 삭제 중..."
      docker rmi $IMAGE_NAME
  else
      echo "이미지가 존재하지 않습니다."
  fi
fi

#sed -i "s|\${MYSQL_URL}|${MYSQL_URL}" "src/main/resources/application.yml"
sed -i "s|\${MYSQL_USERNAME}|${MYSQL_USERNAME}|g" -i "src/main/resources/application.yml"
sed -i "s|\${MYSQL_PASSWORD}|${MYSQL_PASSWORD}|g" -i "src/main/resources/application.yml"


docker build --build-arg MYSQL_URL=${MYSQL_URL} --build-arg MYSQL_PASSWORD=$MYSQL_PASSWORD --build-arg MYSQL_USERNAME=$MYSQL_USERNAME -t jartest_c .

docker run -d -p 3000:3000 --name back jartest_c

docker ps -a
```

# Embedded
embedded 위치에 venv생성
requirements.txt 설치
cd MagicMirror/
npm run install-mm
defaults를 제외한 MMM- 모듈 설치
매직미러 어플리케이션 시작 npm run start
