# elice-devOps

- elice 프로젝트를 구현한 레포지토리입니다.

### gitops

- ArgoCD 관련 애드온 및 ArgoCD가 바라보고 있는 쿠버네티스 매니페스트가 들어있습니다.

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

### nestjs-server

- 테스트용으로 간단하게 제작된 nest.js 프레임워크 API Server입니다. PostgreSQL에서 데이터를 간단하게 반환합니다.
- Health Check를 위한 URL이 있습니다.

### spring-server

- 테스트용으로 간단하게 제작된 spring 프레임워크 API Server입니다. PostgreSQL에서 데이터를 간단하게 반환합니다.
- Health Check를 위한 URL이 있습니다.
