export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  period: string;
  dept: string;
  position: string;
  summary: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  org: string;
  period: string;
  stack: string[];
  achievements: string[];
}

export const ABOUT_PARAGRAPHS = [
  "대규모 B2C 서비스 운영과 금융·헬스케어·글로벌까지, 다양한 산업군 프로젝트를 섭렵한 5년 차 웹퍼블리셔입니다.",
  "웹표준과 웹접근성을 기반으로 레거시 코드를 리팩토링하고 공통 컴포넌트화하는 데 강점이 있습니다.",
  "AI 도구를 활용해 작업 생산성을 높이는 방식에도 익숙합니다.",
];

export const CORE_COMPETENCIES = [
  "웹표준/웹접근성 준수",
  "React/Vue2/jQuery 크로스 스택 대응",
  "레거시 코드 리팩토링 및 공통 컴포넌트화",
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      "HTML5",
      "CSS3",
      "SCSS",
      "TypeScript",
      "JavaScript(ES6+)",
      "jQuery",
    ],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Vue2", "PUG"],
  },
  {
    category: "Collaboration",
    items: [
      "GitHub",
      "GitLab",
      "SVN",
      "Jira",
      "Confluence",
      "Redmine",
      "Figma",
      "Zeplin",
      "Photoshop",
    ],
  },
];

// 최신순 — Info.tsx에 있던 부서/직급 그대로 복원
export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "sk-rentcar",
    company: "SK렌터카",
    period: "2025.02 – 현재",
    dept: "IT 개발팀",
    position: "매니저 / 팀원",
    summary:
      "인하우스 퍼블리셔로 신규 B2C 사이트 구축 및 전사 퍼블리싱 가이드 수립 주도",
  },
  {
    id: "the51x",
    company: "더피프티원엑스",
    period: "2024.02 – 2025.02",
    dept: "DT Group",
    position: "선임 / 팀원",
    summary:
      "선임 퍼블리셔로 금융·헬스케어 신규 구축 및 웹접근성 개선 등 다양한 프로젝트 수행",
  },
  {
    id: "the51",
    company: "더피프티원",
    period: "2022.01 – 2024.02",
    dept: "DT Group",
    position: "선임 / 팀원",
    summary:
      "선임 퍼블리셔로 금융·B2B 대시보드·글로벌 페이지 등 다양한 산업군 프로젝트 수행",
  },
];

// 최신순 — 경력기술서 PDF 기준. 전부 동일한 상세 카드로 나열 (구축/운영 각각 별도 항목)
export const PROJECT_TIMELINE: ProjectItem[] = [
  {
    id: "sk-rentcar-direct",
    title: "다이렉트 1.5 B2C 사이트 구축",
    org: "SK렌터카",
    period: "2025.03 – 2025.09",
    stack: ["React", "Next.js", "SCSS", "TypeScript", "Jira", "Confluence"],
    achievements: [
      "API 구조를 고려한 Mock Data 활용으로 개발 착수 전 퍼블리싱 완성도 확보 및 개발 협업 효율 향상",
      "장기렌트, 월렌트, 타고페이 등 다수 서비스의 UI 중복 개발 문제 해결을 위해 공통 패키지 레포지토리 구축",
      "PC/모바일 영역을 분리한 폴더 구조와 CSS Module 시스템 적용으로 스타일 충돌 방지 및 마크업 누락 최소화",
      "SVG 아이콘을 CSS url() 방식으로 처리해 별도 이미지 파일 요청을 줄이고 리소스 용량 최적화",
    ],
  },
  {
    id: "sk-rentcar-operation",
    title: "전사 사이트 운영",
    org: "SK렌터카",
    period: "2025.02 – 현재",
    stack: ["React", "Next.js", "SCSS", "TypeScript", "Jira", "Confluence"],
    achievements: [
      "사이트별 특성에 맞춘 다양한 프레임워크 대응 및 최적화 작업 진행",
      "공통 UI 컴포넌트 기준을 정립한 전사 퍼블리싱 가이드 수립, 작업 표준화 기반 마련",
      "사내 VDI 환경의 낮은 크롬 버전을 고려해 최신 CSS 속성 호환성을 사전 검토하고 크로스 브라우징 이슈를 방지하는 방식으로 작업",
    ],
  },
  {
    id: "lg-accessibility",
    title: "LG전자 웹 접근성 개선",
    org: "더피프티원엑스",
    period: "2025.01 – 2025.02",
    stack: ["HTML5", "CSS", "jQuery"],
    achievements: [
      "실 서비스 사이트의 접근성 결함 전수 조사 및 수정",
      "시맨틱 마크업 최적화로 보편적 사용성 확보",
    ],
  },
  {
    id: "mirae-asset-healthcare",
    title: "미래에셋생명 헬스케어 앱 구축",
    org: "더피프티원엑스",
    period: "2024.07 – 2024.12",
    stack: ["HTML5", "SCSS", "JS", "GitHub"],
    achievements: [
      "외부 라이브러리 없이 순수 JS/CSS만으로 동적 차트 및 애니메이션 UI 구현",
      "퍼블리싱 가이드 수립으로 작업 표준화에 기여",
    ],
  },
  {
    id: "hyundai-n-brand",
    title: "현대 N브랜드 리뉴얼",
    org: "더피프티원엑스",
    period: "2024.04 – 2024.06",
    stack: ["HTML5", "SCSS", "jQuery", "GitHub"],
    achievements: [
      "다양한 그리드 레이아웃 구성으로 브랜드 콘텐츠를 시각적으로 효과적이게 구현",
      "PC·태블릿 반응형 대응으로 디바이스별 최적화된 사용자 경험 제공",
    ],
  },
  {
    id: "lg-global-the51x",
    title: "LG 글로벌 페이지 운영",
    org: "더피프티원엑스",
    period: "2023.11 – 2024.04",
    stack: ["PUG", "GULP", "SCSS", "GitLab"],
    achievements: [
      "Pug 기반 컴포넌트 활용으로 대규모 글로벌 사이트 효율적 운영",
      "GitLab MR 프로세스를 통한 개발 파트와의 긴밀한 협업",
    ],
  },
  {
    id: "medialog-rcs",
    title: "미디어로그 기업형 메시지(RCS) 리뉴얼",
    org: "더피프티원",
    period: "2023.05 – 2023.10",
    stack: ["Vue2", "SCSS", "JS", "Chart.js", "GitLab", "Figma", "Jira"],
    achievements: [
      "Vue2 기반 대화형 UI 및 어드민 대시보드 구현",
      "Chart.js 활용 통계 데이터 시각화로 관리자 시스템 편의성 향상",
    ],
  },
  {
    id: "lg-content-operation",
    title: "LG전자 콘텐츠 운영",
    org: "더피프티원",
    period: "2022.06 – 2023.04",
    stack: ["HTML5", "CSS", "jQuery", "CMS"],
    achievements: [
      "대규모 B2C 사이트 정기·상시 유지보수 전담",
      "CMS 환경 내 JSP 작업 병행으로 플랫폼 운영 전 과정 경험",
    ],
  },
  {
    id: "hyundai-card",
    title: "현대카드 법인 모바일 사이트 구축",
    org: "더피프티원",
    period: "2022.03 – 2022.06",
    stack: ["HTML5", "CSS", "jQuery", "JS", "SVN", "Jira", "Redmine", "Zeplin"],
    achievements: [
      "금융권의 엄격한 보안 및 가이드에 맞춘 적응형 웹 UI 구축",
      "협업 툴 기반의 긴밀한 커뮤니케이션으로 일정 준수",
    ],
  },
  {
    id: "amorepacific-operation",
    title: "아모레퍼시픽 사이트 운영",
    org: "더피프티원",
    period: "2022.01 – 2022.02",
    stack: ["HTML5", "CSS", "jQuery", "Photoshop"],
    achievements: [
      "PDP 페이지 등 디자인 시안을 픽셀 단위로 정교하게 구현 및 운영 대응",
    ],
  },
];

export const CONTACT_EMAIL = "dahyun123410@gmail.com";
