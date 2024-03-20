FROM jenkins/jenkins:lts
ADD gradle-wrapper.jar back.jar
ENV JAVA_OPTS=""
ENTRYPOINT ["java", "-jar", "/back.jar"]