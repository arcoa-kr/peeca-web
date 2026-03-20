# peeca 랜딩 페이지 — 디자인 레퍼런스

## 1. 참고 사이트 (레이아웃/구조 레퍼런스)
- https://appdrop.framer.website/
- https://geniai.framer.website/
- 스크린샷: /assets/ref/ref-appdrop-hero.png, /assets/ref/ref-appdrop-sections.png, /assets/ref/ref-appdrop-footer.png
- 스크린샷: /assets/ref/ref-geniai-hero.png

### 참고 사이트 공통 특징
- 라이트 배경 (화이트 ~ 라이트 그레이)
- 중앙 정렬, 넉넉한 여백
- Hero 상단에 소셜 프루프 (사용자 아바타 + 수치)
- 헤드라인: 큰 산세리프, 키워드 부분만 볼드 또는 컬러 강조
- 폰 목업이 Hero에 크게 배치
- 앱스토어/플레이스토어 버튼이 Hero에 바로 노출
- 섹션 타이틀 위에 작은 라벨 태그 (#Key Benefits 등)
- FAQ는 아코디언 접기 방식
- 하단 CTA 섹션에서 스텝 안내 (4 Easy steps) + 앱스토어 버튼 반복

### AppDrop에서 참고할 것
- Hero: 소셜 프루프(별점+다운로드) → 헤드라인 → 서브카피 → CTA 버튼 → 폰 목업 순서
- Benefits 섹션: 3칼럼 카드 안에 폰 목업 미니 스크린샷 삽입
- Features 섹션: 중앙에 폰 목업, 주변에 기능 설명 배치
- FAQ: 심플한 아코디언
- Final CTA: 스텝 안내 + 앱스토어 버튼

### GeniAI에서 참고할 것
- Hero 배경에 블루/퍼플 계열 그라디언트 블러 원형 → peeca 브랜드 컬러로 변환
- 폰 목업 1대가 중앙에 크고 시원하게 배치되는 느낌
- 전체적으로 부드럽고 몽글몽글한 분위기

---

## 2. peeca 앱 UI (브랜드 톤 레퍼런스)
[이미지 용도 구분]
- /assets/ref/ — Figma 디자인 시안. UI 구조와 톤 파악 참고용.
- /assets/mockup/ — 실제 앱 캡처. 폰 목업 안에 들어갈 이미지. 이것을 사용할 것.
- 스크린샷: /assets/ref/peeca-home.png (HOME 3스텝)
- 스크린샷: /assets/ref/peeca-card-register.png (카드등록+검색)
- 스크린샷: /assets/ref/peeca-card-list.png (보유카드+카드상세+삭제)
- 스크린샷: /assets/ref/peeca-result.png (추천결과+카드상세)
- 스크린샷: /assets/ref/peeca-log.png (LOG 히스토리)
- 스크린샷: /assets/ref/peeca-settings.png (설정)
- 목업용: /assets/mockup/
  home-main.png        ← HOME 첫 화면 (Hero 목업용)
  home-category.png    ← 카테고리 선택 화면 (How it works 1단계)
  home-amount.png      ← 금액 입력 화면 (How it works 2단계)  
  result.png           ← 추천 결과 화면 (How it works 3단계 + Example)

### peeca 앱 디자인 특징
- 메인 컬러: 퍼플-블루 그라디언트 (HOME/카드등록 배경)
- 포인트 컬러: 민트/시안 (CTA 버튼 "유리한 카드 보기", 등록하기 버튼)
- 보조 컬러: 레드/코럴 (할인 금액 강조, 하트 아이콘)
- 배경: 앱 내부는 다크(HOME, 카드등록) + 라이트(결과, LOG, 설정) 혼합
- 카드 리스트: 화이트 카드 위에 카드사 로고 + 카드명 + 혜택 요약
- 칩/태그 UI: 둥근 필(pill) 형태, 선택 시 화이트 텍스트 + 컬러 배경
- 하단 네비게이션: CARD / HOME / LOG 3탭
- 전체 인상: 금융앱치고 가볍고 컬러풀, 보라+민트 조합이 핵심

---

## 3. 랜딩에 적용할 디자인 방향

### 배경
- 전체 라이트 배경 (참고 사이트 기준)
- Hero 또는 일부 섹션에 peeca의 퍼플-블루 그라디언트를 은은한 블러로 활용
- GeniAI처럼 배경에 원형 그라디언트 블러 효과

### 컬러 시스템 (실제 앱 기준)

#### 브랜드
- Primary: #553FF3 (메인 퍼플)
- Secondary: #B1FFF3 (민트, CTA 포인트)
- Tertiary: #AA9FF9 (연한 퍼플, 보조)
- Alternate: #EEECFF (아주 연한 퍼플, 배경 강조용)

#### 배경
- Surface Primary: #F3F5F8 (기본 배경)
- Surface Secondary: #FFFFFF (화이트)

#### 텍스트
- Primary: #131313 (본문, 헤드라인)
- Secondary: #666666 (서브카피, 설명)
- Tertiary: #888888 (보조 텍스트, 캡션)

#### 중성색
- Neutral 1: #323232
- Neutral 2: #888888
- Neutral 3: #BFBFBF
- Neutral 4: #DEDEDE

#### 선/보조
- Line: #E6E5EE
- F3: #F3F3F3

#### 상태
- Success: #553FF3 (브랜드와 동일)
- Error: #DB3E30
- Warning: #FFC300

### 랜딩 적용 가이드
- Hero 배경: #FFFFFF 또는 #F3F5F8 위에 #553FF3 → #AA9FF9 그라디언트 블러
- 헤드라인 텍스트: #131313
- 서브카피: #666666
- CTA 버튼: #553FF3 (배경) + #FFFFFF (텍스트)
- CTA 보조/호버: #B1FFF3 포인트 활용
- 섹션 구분 배경: #F3F5F8과 #FFFFFF 교차
- 카드 컴포넌트 보더: #E6E5EE
- 혜택 금액 강조: #DB3E30 (에러 컬러를 할인 강조로 활용)

### 타이포그래피
- 헤드라인: 볼드 산세리프, 32~48px
- 서브카피: 레귤러~라이트, 16~20px
- 한글 폰트: Pretendard 권장

### 폰 목업
- Hero: peeca HOME 화면이 담긴 폰 목업 1~2대 중앙 배치
- How it works: 3스텝 각각에 해당 화면 스크린샷
- Example: 추천결과 화면 스크린샷

### 레이아웃
- AppDrop 구조 참고: 중앙 정렬, 섹션 간 넉넉한 여백
- 반응형 필수 (모바일 우선)

### 분위기
- 앱은 다크+컬러풀이지만, 랜딩은 라이트 배경 위에 앱의 컬러를 포인트로 사용
- 금융 느낌 배제, 생활형 가벼운 톤 유지