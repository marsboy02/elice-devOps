# nestjs-server

- nestjs-server는 간단한 RESTful API를 테스트하기 위해 제작된 서버입니다.
- user와 관련한 간단한 API를 제공합니다.

## Setting

### dev(Local)

- pnpm을 사용하는 경우

1. **.env.example** 파일을 **.env**로 복사합니다. 그 후, 알맞은 정보를 입력합니다.
2. 다음의 명령어를 통해서 의존성을 설치합니다.

```bash
pnpm install
```

3. nest.js 서버를 실행합니다.

```bash
pnpm start:dev
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
PREFIX/users
```

- 모든 users 리소스를 반환합니다.

```bash
# POST
PREFIX/users
```

- users에 대한 정보를 생성합니다.
