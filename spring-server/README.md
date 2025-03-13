# spring-server

- spring-server는 간단한 RESTful API를 테스트하기 위해 제작된 서버입니다.
- coupons와 관련한 간단한 API를 제공합니다.

## Setting

### dev(Local)

- gradlew를 사용하는 경우

1.  다음의 명령어를 통해서 의존성을 설치합니다.

```bash
./gradlew clean build
```

2. springboot 서버를 실행합니다.

```bash
java -jar ./build/libs/spring-server-0.0.1-SNAPSHOT.jar  
```

- docker-compose를 사용하는 경우

```bash
# docker가 실행되고 있어야 합니다.
docker-compose up -d
```

## Path

```bash
# GET
PREFIX/
```

- 기본 URL로 서버의 Healthy 정보를 반환합니다.

```bash
# GET
PREFIX/coupons
```

- 모든 coupons 리소스를 반환합니다.

```bash
# POST
PREFIX/coupons
```

- coupons에 대한 정보를 생성합니다.
