## 서비스 이름

## 시스템 아키텍처

## 개발 환경

- 형상 관리 : Gitlab
- 이슈 관리 : Jira
- 커뮤니케이션 : Mattermost, Notion
- 디자인 : Figma
- 프론트
    - **CORE**
        - React Native
        - EXPO
        - TypeScript
    - **UI**
        - nativeWind
    - **Global State Management**
        - zustand
    - **ECT. Library**
        - msw: Backend API Mockup
        - smartthings-core-sdk (or The SmartThings API (Oauth 2.0)): Samsung Smart Things API
        - react-native-keychain: 암호화된 로컬 저장소 이용
- 백
    - Spring boot
    - ORM(JPA)
    - Socket IO
    - Flask
    - jwt
    - Oauth
    - Mysql
    - Amazon S3
    - Swagger
- 임베디드
- Infra

## 팀원

| 배영환 | 김연빈 | 서지수 | 최도훈 | 최진우 | 한성주 |
| --- | --- | --- | --- | --- | --- |
| 팀장 - FE | BE | EM | FE | AI | EM |

## Develop  Guide

### 사용 브랜치

&rarr; master, develop, develop-role, feature branch

- **master**: 최종 배포용으로 사용
    - 언제나 안정된 상태를 유지
    - 배포할 때마다 이 브랜치에 반영됩니다.
- **develop**: 개발 중인 기능들이 모두 합쳐지는 브랜치
    - 팀원들이 개발하는 기능들을 여기에 병합
    - 새로운 기능을 추가하거나 버그를 수정할 때마다 이 브랜치에서부터 시작
- **FE-develop, BE-develop, EM-develop**
    - front-end, back-end, embedded의 기능이 개발되는 브랜치
    - 각 영역별로 develop 브랜치에 병합하기 전에 conflict 처리 용도
- **feat/기능명**: 각 개발자가 자신의 기능을 개발하기 위해 생성하는 브랜치
    - 이 브랜치에서 실제로 코드 작성과 수정
    - 작업이 완료되면 해당 기능을 각 영역별 develop 브랜치로 병합하여 confilict 확인 후 develop으로 병합

## Commit Convention

#### 추가 및 수정의 대상과 추가 및 수정한 내용을 최대한 명확하게 기술

<aside>
📖 **예시**
feat:  홈화면에서 날씨 확인 기능 추가
fix: 홈화면에서 날씨 아이콘이 불러와지지 않는 문제 수정
</aside>


|Tag Name|Description|
|:--:|:--|
|feat|새로운 기능을 추가 및 수정|
|fix|버그 수정, 세미 콜론 누락 등 작은 버그 및 빌드 에러 등 포함|
|style|FE, 단순 디자인 변경만 있을 때(새로운 UI 추가는 기능과 관련되므로 feat)|
|refactor|코드 리팩토링, 버그 수정이나 기능 수정 없는 코드 수정|
|infra|Infra, 수정, 빌드 업무 수정 등 인프라 관련 모든 추가 및 수정사항|
|comment|필요한 주석 추가 및 변경|
|docs|문서 수정|
|test|테스트 코드, 리팩토링 테스트 코드 추가, <br/>Production Code(실제로 사용하는 코드) 변경 없음|
|chore|패키지 매니저 수정, 외부 라이브러리 추가 시 사용, 파일 이름 수정, 디렉토리 변경 등으로 인한 import 외의 코드 수정이 없음|
|rename|파일 혹은 폴더명을 수정하거나 옮기는 작업만 수행한 경우|
|remove|파일을 삭제하는 작업만 수행한 경우|


## 개발 환경

[Version](https://www.notion.so/Version-4f1f0c80517f4b8e9a0da5418c6bb2f7?pvs=21)

## 개발 가이드

[시작하기](https://www.notion.so/40e3a6b11abb4bcebe74f2744182de78?pvs=21)

[오류 해결](https://www.notion.so/ef26d09edbba4b75a6a05aa147635b55?pvs=21)

## 설계

[설계](https://www.notion.so/8ad9382b678f45aba5bfee3ec7a13f16?pvs=21)

## 서비스 화면

## 주요 기능