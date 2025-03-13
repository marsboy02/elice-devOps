# build stage
FROM gradle:7.6.4-jdk17 AS build

WORKDIR /apps
COPY . .
CMD ["gradle", "clean", "build", "--no-daemon"]


# runtime stage
FROM openjdk:17

WORKDIR /apps
COPY --from=build /apps/build/libs/*.jar app.jar

EXPOSE 8000
CMD ["java", "-jar", "app.jar"]