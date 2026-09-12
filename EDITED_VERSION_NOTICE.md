# 편집본 안내

이 압축파일은 `hicero/slscoach`의 기존 프로젝트를 바탕으로 편집 내용을 다시 적용한 배포용 묶음입니다. 현재 GitHub `main`을 그대로 압축한 원본 보관본과 다릅니다.

## 이번 편집에 포함된 핵심

- `src/App.tsx`
  - 유형별 우선 도구와 대안 1·2·3을 한 화면에 표시
  - 시도 결과(편하고, 가벼워짐, 더 눌림, 변화 없음)에 따른 다음 비교 후보 표시
  - SLS Exercise 7–8의 `Mum → Guh → Go → Gee → Koo` 흐름과 실제 수업에서 비교할 수 있는 `Goo`를 분리해 안내
- `src/coachData.ts`
  - 도구·유형·반응별 코칭 데이터와 SLS/Virtual Vocal Coach 규칙 통합
- `src/types.ts`
  - 기존 상세 레슨 자료를 유지하면서 고정 진단·절대 처방보다 관찰·비교·전이 중심으로 정리
- `src/components/VocalReference.tsx`
  - 근거가 확인된 연구 결과와 코칭 적용 가설을 구분
  - 생리 상태를 청취만으로 확정하지 않도록 표현 조정
- `src/components/MotorProtocolGuide.tsx`, `MotorChecklistGuide.tsx`, `LaxVoxGuide.tsx`
  - 한 조건씩 비교하고, 불편감·지속적 음질 악화가 있으면 중단하는 수업 흐름 반영

## 적용 방법

압축을 풀었을 때 나오는 파일과 폴더를 기존 저장소의 루트에 그대로 덮어씁니다. `rebuild`라는 바깥 폴더 자체를 저장소 안에 넣지 않습니다. 기존 `.env` 파일은 별도로 보존하고, `.env.example`은 참고용으로 사용합니다.

이 자료의 유형·음절·도구 순서는 논문이 직접 검증한 고정 진단표가 아니라 코칭용 관찰·비교 프레임입니다. 논문 결과는 연구 대상·조건·평가 지표의 범위 안에서만 해석합니다.
