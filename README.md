# elice-devOps

- elice 프로젝트를 구현한 레포지토리입니다.

## gitops

### addons

- argocd 및 harbor가 helm chart 매니페스트로 있으며, 다음의 명령어를 통해서 실행할 수 있습니다.

```bash
# helm chart를 이용한 argocd 생성
kubectl create namespace argocd

# helm chart 매니패스트 실행
helm install argocd ./gitops/addons/argo-cd -n argocd

# password 확인 ( 기본 username은 admin )
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d; echo
```

```bash
# helm chart를 이용한 harbor 생성
kubectl create namespace harbor
helm install argocd ./gitops/addons/harbor -n harbor
```

### projects

- 마이크로서비스는 직접 쿠버네티스 매니페스트를 통해서 배포합니다.
- 모든 서비스는 Kustomize를 통해서 멀티 스테이지 배포를 지원합니다.

## nestjs-server ( user-server )

- 테스트용으로 간단하게 제작된 nest.js 프레임워크 API Server입니다. PostgreSQL에서 데이터를 간단하게 반환합니다.
- Health Check를 위한 URL이 있습니다.

## spring-server ( coupon-server )

- 테스트용으로 간단하게 제작된 spring 프레임워크 API Server입니다. PostgreSQL에서 데이터를 간단하게 반환합니다.
- Health Check를 위한 URL이 있습니다.
