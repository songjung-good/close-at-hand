FROM openjdk:17-alpine AS builder
COPY gradlew .
COPY gradle gradle
COPY build.gradle.kts .
COPY settings.gradle.kts .
COPY src src
RUN chmod +x ./gradlew
RUN ./gradlew bootJar

FROM openjdk:17-alpine
COPY --from=builder build/libs/*.jar back.jar

#EXPOSE 8080 # 컨테이너 Port 노출
ENTRYPOINT ["java","-jar","/back.jar"]