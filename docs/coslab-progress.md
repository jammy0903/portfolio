# COSLAB 리팩토링 진행 상황

## 완료된 작업

### 1. 시각화 철학 정립
- 기존 교육용 비유의 문제점 분석 (포스트잇 비유, 스택에 올린다 비유 등)
- 통일된 시각화 프레임워크 제안: `[name] → [memory location] → [value]`
- 언어별 variableModel 정의: allocation(C), binding(Python), reference(Java/JS)

### 2. 시각화 그룹 분류 (docs/coslab-visualization-groups.md)
- Group A: 4개 언어 공통 (12개 개념) — 변수, 함수, 콜스택, 재귀, 스코프 등
- Group B: 3개 언어 공통 Java+Py+JS (16개) — OOP, 예외, GC 등
- Group C: 2개 언어 공통 (11개) — 클로저, 제너레이터, 정적타이핑 등
- Group D: 언어 전용 (28개) — 포인터, 프로토타입, LEGB, JVM 등

### 3. 시뮬레이터 아키텍처 설계 (docs/coslab-simulator-architecture.md)
- 핵심 원칙: 하나의 쉘, 하나의 이벤트 버스, N개의 독립 모듈
- 조건문 분기 금지 — 언어 프로파일이 모듈 조합을 결정
- EventBus 기반 Pub/Sub 통신
- 10개 시각화 모듈 정의
- 4개 언어 프로파일 정의
- 구현 우선순위 (Phase 1~4)

### 4. 리팩토링 계획 (docs/coslab-refactoring-plan.md)
- 현재 구조 분석: 이미 있는 것 70% (이벤트 스키마, EventProcessor, 어댑터 패턴, 4개 백엔드 엔진)
- 문제점 5개 식별: switch/case, C중심 이벤트, EventBus 없음, 스토어 혼재, 플레이스홀더
- 디렉토리 매핑: playground/ + visualizers/ → simulator/
- 이벤트 스키마 확장: 기존 7개 + 신규 5개 = 12개
- Phase 0~5 마이그레이션 순서 정의

### 5. Phase 0 구현 완료 ✅
생성된 파일 (14개):
```
packages/frontend/src/features/simulator/
├── engine/
│   ├── types.ts          — SimulatorEvent (기존 7 + 신규 5 타입)
│   ├── EventBus.ts       — plain class singleton Pub/Sub 허브
│   └── index.ts
├── modules/
│   ├── types.ts          — VisualizationModule 인터페이스
│   ├── ModuleRegistry.ts — 모듈 등록/조회 싱글턴
│   ├── ModuleRenderer.tsx— 프로파일 기반 동적 렌더링 (useEffect + cleanup)
│   └── index.ts
├── profiles/
│   ├── types.ts          — LanguageProfile, VariableModel
│   ├── c.ts              — C 프로파일
│   ├── python.ts         — Python 프로파일
│   ├── java.ts           — Java 프로파일
│   ├── javascript.ts     — JS 프로파일
│   └── index.ts
└── index.ts
```

### 6. 데드 코드 정리 완료 ✅
`.del` 처리 (5개):
```
visualizers/java/JavaMessagesView.tsx.del     — 다형성 시각화 (미사용)
visualizers/java/components/DeviceCard.tsx.del
visualizers/java/components/RemoteControl.tsx.del
visualizers/java/examples.ts.del
visualizers/java/types.ts.del
```
- `java/index.tsx`에서 관련 export 제거

### 7. Phase 1 구현 완료 ✅
call-stack 모듈 포팅 + 코드 리뷰:
```
modules/call-stack/
├── CallStackModule.tsx  — subscribes=['frame','variable'], init/onEvent/render/reset/replayTo/destroy
├── CallStackView.tsx    — 다크테마 콜스택 시각화, Framer Motion 애니메이션
├── store.ts             — Zustand 내부 스토어 (frames[], frameCounter)
└── index.ts
modules/register.ts      — registerAllModules() 진입점
```

### 8. 코드 리뷰 (memory-leak-detector) 완료 ✅
13개 이슈 발견 → 10개 수정, 3개 허용:
| # | 심각도 | 이슈 | 상태 |
|---|--------|------|------|
| 1 | CRITICAL | ModuleRenderer useMemo side effects | ✅ useEffect로 이동 |
| 2 | CRITICAL | Component called as function | ✅ JSX + .tsx 리네임 |
| 3 | CRITICAL | Mutable Map/Set in Zustand EventBus | ✅ plain class 전면 재작성 |
| 4 | WARNING | Stale eventBus closure | ✅ eventBus 직접 import |
| 5 | WARNING | Module-level frameCounter | ✅ Zustand 상태 내부로 이동 |
| 6 | WARNING | ModuleRegistry singleton retention | ⏭️ static lookup이라 적절 |
| 7 | WARNING | Missing module.destroy on unmount | ✅ cleanup에 추가 |
| 8 | WARNING | clearAll destroys others' subs | ✅ clearAll 제거 |
| 9 | WARNING | No try/catch in emit | ✅ try/catch 추가 |
| 10 | WARNING | Set mutation during iteration | ✅ Array.from snapshot |
| 11 | WARNING | useEventBus without selector | ✅ Zustand 제거 |
| 12 | INFO | Plain object singleton fragile | ⏭️ this 바인딩 안정적 |
| 13 | INFO | replayTo N set() calls | ⏭️ React 18+ 자동 배칭 |

TypeScript 체크: **0 에러** ✅

---

## 앞으로 할 작업

### ~~Phase 1: call-stack 모듈 포팅~~ ✅ 완료

### Phase 2: C 시각화 모듈화 ← 현재
```
목표: CMemoryView.tsx (606줄) 분해

할 일:
1. CMemoryView에서 스택 영역 → modules/stack-frame/StackFrameModule 추출
2. CMemoryView에서 힙 영역 → modules/heap-memory/HeapMemoryModule 추출
3. CMemoryView에서 포인터 → modules/pointer-graph/PointerGraphModule 추출
4. C 프로파일: 4개 모듈 (stack-frame + heap-memory + call-stack + pointer-graph)
5. VisualizerPanel의 case 'c'를 ModuleRenderer로 교체
6. playgroundStore에서 registers를 stack-frame 모듈 내부 상태로 이동
7. shellStore 생성 (공통 상태만)
```

### Phase 3: Python 모듈 구현
```
목표: Python 플레이스홀더 → 실제 시각화

할 일:
1. modules/name-binding/NameBindingModule 신규 구현
   - BindingEvent 처리 (bind/rebind/unbind)
   - 이름 → 객체 화살표 시각화
2. modules/object-heap/ObjectHeapModule 신규 구현
   - ObjectEvent 처리 (create/update/destroy)
   - 힙 위 객체 카드 시각화
3. packages/shared에 BindingEvent, ObjectEvent Zod 스키마 추가
4. 백엔드: python-normalizer 작성 (FlowStep → SimulatorEvent[])
5. Python 프로파일: name-binding + object-heap + call-stack
6. VisualizerPanel의 Python 플레이스홀더 제거
```

### Phase 4: Java + JS 모듈 구현
```
목표: 4개 언어 모두 모듈 시스템으로 작동

할 일:
1. stack-frame 모듈에 Java 모드 추가 (primitive는 스택 직접, object는 참조)
2. modules/scope-chain/ScopeChainModule 신규 구현 (JS)
   - ScopeEvent 처리 (enter/exit)
   - 중첩 스코프 박스 + 클로저 캡처 시각화
3. object-heap 모듈에 Java/JS 모드 추가
4. 백엔드: java-normalizer, js-normalizer 작성
5. packages/shared에 ScopeEvent, GCEvent, AsyncEvent Zod 스키마 추가
6. 모든 언어 프로파일 검증
```

### Phase 5: 클린업
```
목표: 레거시 코드 제거, 구조 정리

할 일:
1. features/playground/ → features/simulator/shell/ 이동
2. features/visualizers/ 삭제 (모듈로 흡수 완료)
3. VisualizerPanel.tsx 삭제
4. playgroundStore → shellStore 리네임
5. 라우터 업데이트 (/playground → SimulatorShell)
6. Lesson 시스템도 ModuleRenderer 사용하도록 마이그레이션
7. .del 파일 최종 삭제
8. 백엔드 v1 API 정리 (v2로 통합)
```

---

## 설계 문서 위치

| 문서 | 경로 |
|------|------|
| 시각화 그룹 분류 | docs/coslab-visualization-groups.md |
| 시뮬레이터 아키텍처 | docs/coslab-simulator-architecture.md |
| 리팩토링 계획 | docs/coslab-refactoring-plan.md |
| 진행 상황 (이 파일) | docs/coslab-progress.md |
