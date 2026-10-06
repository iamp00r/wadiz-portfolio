# 하지연의 포트폴리오 — Design System

팬덤 비즈니스 PM 하지연의 개인 포트폴리오를 위한 디자인 시스템입니다. 랜딩 페이지, 프로젝트 상세 페이지 등 모든 시각 아티팩트가 이 토큰과 컴포넌트를 참조합니다.

**소스**: 사용자가 제공한 브랜드 가이드 문서(컬러/타이포/스페이싱/컴포넌트 규칙 텍스트). 연결된 코드베이스나 Figma 파일은 없습니다 — 이 문서의 규칙을 바탕으로 처음부터 설계했습니다.

## 브랜드 개요

- **브랜드명**: 하지연의 포트폴리오
- **한 줄 소개**: 좋아하는 콘텐츠가, 좋은 비즈니스가 되기까지 — 프로젝트를 운영하고, 데이터를 분석하며, 글로벌 팬덤 비즈니스의 성장을 만들어가는 PM
- **타겟**: 채용 담당자, 협업 파트너, 팬덤/콘텐츠 업계 관계자
- **핵심 가치**: 연결(콘텐츠·사람·데이터를 잇는다) · 다재다능(기획·운영·분석을 넘나드는 실행력) · 따뜻함(애정 어린 시선으로 팬덤을 이해한다)
- **무드**: 애플 인텔리전스 페이지 같은 넉넉한 여백과 절제된 레이아웃 + 레드 톤의 생동감과 웜 뉴트럴로 더한 사람 냄새. Warm Minimalism.

## Components

- `Button` (`components/forms/Button.jsx`) — primary/secondary/ghost, sm/md, disabled
- `Input` (`components/forms/Input.jsx`) — label, focus ring, error state
- `Card` (`components/display/Card.jsx`) — default / featured(primary-50 wash)
- `Badge` (`components/display/Badge.jsx`) — pill tag, primary/green/pink/neutral tones

**Intentional additions**: 소스 문서가 정의한 컴포넌트(버튼/입력창/카드/뱃지)만 그대로 구현했습니다. Toast, Tabs, Dialog 등은 문서에 없어 추가하지 않았습니다.

## CONTENT FUNDAMENTALS (카피 톤)

- **어조**: 담백하고 전문적인 존댓말. 딱딱하지 않게 — 과한 격식체나 딱딱한 사업계획서 톤 지양.
  - 예: "좋아하는 콘텐츠가, 좋은 비즈니스가 되기까지" (선언적이면서 다정한 헤드라인)
  - 예: "언제든 편하게 연락 주세요." (CTA 주변은 부드러운 권유형)
- **화자 시점**: 1인칭("\~합니다", "\~해왔습니다")으로 스스로를 소개. 방문자를 향해 직접 말 걸 때는 "귀하"/"당신" 대신 자연스러운 생략 주어 사용.
- **문장 길이**: 짧고 명확한 문장 위주. 헤드라인은 한 줄 또는 두 줄바꿈 이내.
- **케이싱**: 한글은 자연스러운 문장체. 라벨/카테고리 등 영문 사용 시 대문자 + 자간(letter-spacing) (예: "PRODUCT · GROWTH · FANDOM").
- **이모지**: 사용하지 않음 — 전문적인 인상 유지가 우선.
- **숫자/데이터**: 성과는 구체적 수치로 제시하되(예: "재구매율 27%", "만족도 4.8/5.0") 과도한 수치 나열은 피함.

## VISUAL FOUNDATIONS

- **컬러**: Primary Red(#ED1D25)는 화면의 10\~15% 이내, CTA·강조 텍스트·포인트 아이콘 전용. Pink(#FF36AC)는 5% 이내 이벤트성 강조 전용. Green(#7FC241)은 데이터/성장 관련 포인트. 배경은 항상 #FFFFFF 또는 neutral-50 — 다크 배경은 히어로 섹션 등 제한적 용도로만 대비 삽입(예: 슬라이드 타이틀, footer CTA).
- **타이포**: Pretendard 단일 서체(한글/영문 모두), display 56 / h1 40 / h2 28 / h3 22 / body 16 / caption 13. 제목은 항상 neutral-900, 강조는 컬러보다 weight로.
- **스페이싱**: 8px 시스템(4/8/16/24/40). 컨테이너 max-width 1200px, 데스크톱 마진 80px. 12컬럼 그리드, 거터 24px. 밀도보다 여백 우선.
- **배경**: 이미지 사용 시 플레이스홀더 블록(neutral-100)으로 대체 — 실제 사진/일러스트 없음. 풀블리드 사용은 드묾; 컨테이너 내 여백 유지가 기본. 패턴/텍스처/그라디언트 사용 안 함(가이드 규칙 8).
- **다크 배경**: footer/CTA 등 제한적 용도로만 neutral-900 대비 삽입.
- **애니메이션**: 정의되지 않음 — 버튼/입력창의 색상·보더 전환(transition .15s ease)만 사용. 바운스/과한 모션 없음.
- **호버 상태**: 버튼은 배경색 전환(primary→700, secondary→primary-50, ghost→neutral-100). 카드는 보더 컬러만 neutral-100→neutral-300으로 전환(그림자 없음).
- **프레스 상태**: 별도 정의 없음 — 호버 상태를 유지, 축소(scale) 효과 없음.
- **보더/그림자**: 그림자 사용 안 함(가이드 규칙 8, 그림자 남용 금지) — 카드는 1px 보더로만 구분. 인풋 포커스는 3px 컬러 링(box-shadow)으로 예외 허용.
- **코너 반경**: 버튼/입력창 8px, 카드 12px, 뱃지 999px(pill).
- **투명도/블러**: 사용하지 않음.
- **레이아웃 고정 요소**: 상단 내비게이션은 sticky 없이 문서 흐름 상단 고정형(스크롤 시 고정 여부는 프로덕션 구현 시 결정).

## ICONOGRAPHY

제공된 아이콘 자산이나 코드베이스가 없어 자체 아이콘 세트를 갖고 있지 않습니다. 이모지도 사용하지 않습니다. 아이콘이 필요할 경우 [Lucide](https://lucide.dev) (stroke 1.5–2px, 라운드 캡)를 CDN(`https://unpkg.com/lucide@latest`)으로 불러와 neutral-700 또는 primary-500 컬러로 사용할 것을 권장합니다 — 이는 대체(substitution) 권장이며 브랜드 고유 아이콘이 아님을 명시합니다.

## 로고

제공된 로고 파일이 없습니다. 로고가 들어갈 자리에는 텍스트 워드마크("하지연 · 포트폴리오")를 Pretendard Bold로 표시합니다. 실제 로고 파일을 받으면 `assets/logo.svg`로 교체해주세요.

## 폰트 관련 참고

Pretendard 단일 서체로 통일했습니다(한글/영문 모두). jsDelivr CDN(`orioncactus/pretendard`)의 공식 웹폰트를 로드합니다. 로컬 폰트 파일은 포함하지 않았습니다 — 오프라인 사용이 필요하면 폰트 바이너리를 받아 `assets/fonts/`에 넣고 `tokens/typography.css`의 `@font-face` src를 교체해주세요.

## 인덱스

- `styles.css` — 전역 스타일 진입점 (토큰 전체 import)
- `tokens/` — colors.css, typography.css, spacing.css
- `guidelines/` — 파운데이션 스펙 카드 (Colors 4, Type 3, Spacing 2, Brand 2)
- `components/forms/` — Button, Input
- `components/display/` — Card, Badge
- `ui_kits/portfolio/` — index.html(랜딩), project-detail.html(프로젝트 상세)
- `templates/portfolio-landing/` — 재사용 가능한 랜딩 페이지 템플릿
- `thumbnail.html` — 프로젝트 홈 썸네일
- `SKILL.md` — Claude Code 등에서 재사용 가능한 스킬 정의

## 캐비엇 (한계)

- 실제 로고/사진/일러스트 자산이 없어 모든 이미지는 회색 플레이스홀더 블록으로 대체했습니다.
- Pretendard는 CDN 링크로 로드됩니다 — 오프라인 환경에서는 폰트가 깨질 수 있습니다.
- 코드베이스나 Figma 소스가 없어 컴포넌트/화면은 브랜드 가이드 문서만을 근거로 새로 설계했습니다.
