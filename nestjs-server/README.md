# nestjs-server

- nestjs-server는 간단한 RESTful API를 테스트하기 위해 제작된 서버입니다. 다음과 같은 기능이 있습니다.

## Path

```bash
# GET
PREFIX/
```

- 기본 URL로 서버의 Healthy 정보를 반환합니다.

```bash
# GET
PREFIX/users
```

- 모든 users 리소스를 반환합니다.

```bash
# POST
PREFIX/users
```

- users에 대한 정보를 생성합니다.
