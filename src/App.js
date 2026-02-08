import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';

/* ============================================
   SVG Icons
   ============================================ */
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ============================================
   Hooks
   ============================================ */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView];
}

/* ============================================
   Animated Section Wrapper
   ============================================ */
function AnimatedSection({ children, className = '', id }) {
  const [ref, isInView] = useInView(0.1);
  return (
    <section
      ref={ref}
      id={id}
      className={`section-animate ${isInView ? 'in-view' : ''} ${className}`}
    >
      {children}
    </section>
  );
}

/* ============================================
   Data
   ============================================ */
const skillCategories = [
  {
    name: 'Languages',
    skills: [
      { name: 'JavaScript', color: 'F7DF1E', logo: 'javascript', logoColor: 'black' },
      { name: 'TypeScript', color: '3178C6', logo: 'typescript' },
      { name: 'Python', color: '3776AB', logo: 'python' },
      { name: 'Java', color: '007396', logo: 'openjdk' },
      { name: 'C', color: 'A8B9CC', logo: 'c', logoColor: 'black' },
      { name: 'C++', color: '00599C', logo: 'cplusplus' },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React', color: '61DAFB', logo: 'react', logoColor: 'black' },
      { name: 'HTML5', color: 'E34F26', logo: 'html5' },
      { name: 'CSS3', color: '1572B6', logo: 'css3' },
      { name: 'Tailwind CSS', color: '06B6D4', logo: 'tailwindcss' },
      { name: 'Redux', color: '764ABC', logo: 'redux' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', color: '339933', logo: 'nodedotjs' },
      { name: 'NestJS', color: 'E0234E', logo: 'nestjs' },
      { name: 'Spring', color: '6DB33F', logo: 'spring' },
      { name: 'Flask', color: '000000', logo: 'flask' },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'MySQL', color: '4479A1', logo: 'mysql' },
      { name: 'PostgreSQL', color: '4169E1', logo: 'postgresql' },
      { name: 'Oracle', color: 'F80000', logo: 'oracle' },
      { name: 'Redis', color: 'DC382D', logo: 'redis' },
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { name: 'AWS', color: '232F3E', logo: 'amazonwebservices' },
      { name: 'Docker', color: '2496ED', logo: 'docker' },
      { name: 'Git', color: 'F05032', logo: 'git' },
      { name: 'Vercel', color: '000000', logo: 'vercel' },
    ],
  },
];

const projectsData = [
  {
    title: 'CtyTerm',
    period: '2026.02',
    type: 'Personal',
    description:
      'Windows 전용 Rust/egui/wgpu 기반 커스텀 터미널입니다. 블록 기반 출력, 탭/Pane 레이아웃, AI 패널, 애니메이션 마스코트 등 현대적인 터미널 UX를 제공합니다.',
    features: [
      '블록 기반 커맨드 워크플로우 (명령/출력 누적 타임라인)',
      'AI 패널 통합 (Codex CLI / Claude Code)',
      '탭/Pane 레이아웃 및 세션 저장/복원',
      '애니메이션 마스코트 및 커스텀 상단바',
    ],
    tech: ['Rust', 'egui', 'wgpu', 'Windows API'],
    links: {
      github: 'https://github.com/KIMMUSIC/CtyTerm',
    },
  },
  {
    title: 'Claude Code KakaoTalk Bridge',
    period: '2026.01',
    type: 'Personal',
    description:
      'Claude Code에서 AI 코딩 세션 중 카카오톡을 통해 사용자에게 질문하고 응답받을 수 있는 Human-In-The-Loop 브릿지 시스템입니다.',
    features: [
      '카카오톡으로 실시간 질문/응답 전송',
      'MCP(Model Context Protocol) 서버 기반 Claude Code 연동',
      'AWS 기반 릴레이 서버 아키텍처 (ECS, DynamoDB, Cognito)',
      '자동 토큰 갱신 및 세션 관리',
    ],
    tech: ['TypeScript', 'AWS ECS', 'DynamoDB', 'Cognito', 'KakaoTalk API'],
    links: {
      github: 'https://github.com/KIMMUSIC/claude-code-kakaotalk',
    },
  },
  {
    title: 'Music Quiz Game',
    period: '2026.01',
    type: 'Personal',
    description:
      '실시간 멀티플레이어 음악 퀴즈 게임 플랫폼입니다. 2~20명이 동시에 접속하여 음악을 듣고 제목이나 가수를 맞추는 대전형 게임입니다.',
    features: [
      '2~20명 실시간 멀티플레이어 대전',
      'YouTube URL 또는 MP3로 커스텀 퀴즈 생성',
      'Google OAuth 및 게스트 인증 지원',
      '마이크로서비스 아키텍처 (Auth, Quiz, Game, Social)',
    ],
    tech: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'Socket.IO', 'AWS ECS'],
    links: {
      github: 'https://github.com/KIMMUSIC/music-game',
      demo: 'https://musicquiz.cloud',
    },
  },
  {
    title: 'Chess Stats Card',
    period: '2025.12',
    type: 'Personal',
    description:
      'Chess.com 프로필 통계를 GitHub README에 표시할 수 있는 동적 SVG 카드 생성기입니다. 8가지 테마와 다양한 커스터마이징 옵션을 제공합니다.',
    features: [
      '8가지 테마 지원 (dark, dracula, nord 등)',
      '게임 타입별 필터링 (rapid, blitz, bullet, daily)',
      '프로필 아바타, 온라인 상태, 확장 통계 표시',
      'Vercel 서버리스 배포 및 캐싱 최적화',
    ],
    tech: ['JavaScript', 'Node.js', 'Vercel', 'Chess.com API', 'SVG'],
    links: {
      github: 'https://github.com/KIMMUSIC/chess-stats',
      demo: 'https://chess-stats-mu.vercel.app',
    },
  },
  {
    title: '옷을 골라주는 인공지능',
    period: '2022.03 ~ 2022.06',
    type: 'Team',
    description:
      'AI 기반 의류 추천 시스템입니다. 사용자 기반 및 아이템 기반 추천, 이미지 검색, 스케치 이미지 검색 기능을 제공합니다.',
    features: [
      '사용자 기반 & 아이템 기반 추천 알고리즘',
      '이미지 기반 의류 검색',
      '스케치 이미지 검색 기능',
      'Naver Cloud 플랫폼 연동',
    ],
    tech: ['Flask', 'SqlAlchemy', 'Pytorch', 'Naver Cloud'],
    links: {
      github: 'https://github.com/KIMMUSIC/clothes',
      youtube: 'https://youtu.be/SzWjEJoL0FA',
    },
  },
  {
    title: 'OWN BOOK',
    period: '2021.09 ~ 2021.12',
    type: 'Team',
    description:
      '오프라인 서점 재고 확인, 개인화 도서 추천, 중고서적 거래 시스템, 학교 교재 정보를 제공하는 종합 도서 플랫폼입니다.',
    features: [
      '오프라인 서점 재고 실시간 확인',
      '개인화 도서 추천 시스템',
      '중고서적 거래 플랫폼',
      '학교 교재 정보 제공',
    ],
    tech: ['Node.js', 'MySQL', 'Flask API', 'Pytorch', 'Naver Cloud'],
    links: {
      github: 'https://github.com/KIMMUSIC/book_server',
    },
  },
  {
    title: '포트폴리오 웹사이트',
    period: '2022.10 ~',
    type: 'Personal',
    description:
      '현재 보고 계신 포트폴리오 웹사이트입니다. React로 구축하고 GitHub Pages로 배포했습니다.',
    features: [
      '프로젝트 포트폴리오 전시',
      '기술 스택 소개',
      '백준 프로필 연동',
      '반응형 디자인',
    ],
    tech: ['React', 'GitHub Pages'],
    links: {
      github: 'https://github.com/KIMMUSIC/portfolio',
    },
  },
];

/* ============================================
   Navbar
   ============================================ */
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">
        <span className="navbar-logo" onClick={() => scrollTo('hero')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && scrollTo('hero')}>
          KIMMUSIC
        </span>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <button type="button" onClick={() => scrollTo('hero')}>About</button>
          <button type="button" onClick={() => scrollTo('skills')}>Skills</button>
          <button type="button" onClick={() => scrollTo('projects')}>Projects</button>
          <button type="button" onClick={() => scrollTo('archiving')}>Archiving</button>
        </div>
      </div>
    </nav>
  );
}

/* ============================================
   Hero Section
   ============================================ */
function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-badge">Full-Stack Developer</div>
        <h1 className="hero-name">이동규</h1>
        <p className="hero-handle">KIMMUSIC</p>
        <p className="hero-description">
          AI, 웹 서비스, 실시간 애플리케이션 등 다양한 프로젝트를 통해
          풀스택 개발 역량을 키워온 개발자입니다.
        </p>
        <div className="hero-contact">
          <a href="mailto:hwa3060@naver.com" className="hero-link">
            <MailIcon /> hwa3060@naver.com
          </a>
          <a href="https://github.com/KIMMUSIC" className="hero-link" target="_blank" rel="noopener noreferrer">
            <GitHubIcon /> GitHub
          </a>
          <a href="https://kimmusic.github.io/" className="hero-link" target="_blank" rel="noopener noreferrer">
            <GlobeIcon /> Blog
          </a>
        </div>
        <div className="hero-baekjoon">
          <a href="https://www.acmicpc.net/user/hwa3060" target="_blank" rel="noopener noreferrer">
            <img
              src="http://mazassumnida.wtf/api/v2/generate_badge?boj=hwa3060"
              alt="Baekjoon Online Judge profile for hwa3060"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Skills Section
   ============================================ */
function Skills() {
  return (
    <AnimatedSection id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Tech Stack</div>
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.name} className="skill-category">
              <div className="skill-category-name">{category.name}</div>
              <div className="skill-badges">
                {category.skills.map((skill) => (
                  <img
                    key={skill.name}
                    src={`https://img.shields.io/badge/${encodeURIComponent(skill.name)}-${skill.color}?style=for-the-badge&logo=${skill.logo}&logoColor=${skill.logoColor || 'white'}`}
                    alt={skill.name}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ============================================
   Projects Section
   ============================================ */
function Projects() {
  return (
    <AnimatedSection id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-top">
                <span className="project-type">{project.type}</span>
                <span className="project-period">{project.period}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-features">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                {project.links.github && (
                  <a href={project.links.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon /> GitHub
                  </a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon /> Demo
                  </a>
                )}
                {project.links.youtube && (
                  <a href={project.links.youtube} className="project-link" target="_blank" rel="noopener noreferrer">
                    <YouTubeIcon /> YouTube
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ============================================
   Archiving Section
   ============================================ */
function Archiving() {
  return (
    <AnimatedSection id="archiving" className="archiving">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Links</div>
          <h2 className="section-title">Archiving</h2>
        </div>
        <div className="archiving-grid">
          <a
            href="https://kimmusic.github.io/"
            className="archiving-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlobeIcon />
            <h3>Blog</h3>
            <p className="archiving-subtitle">Algorithm what</p>
            <ul>
              <li>PS, Algorithm, 기타</li>
              <li>Baekjoon, Programmers, Codeforces 문제풀이</li>
              <li>Spring Boot, Node.js 등</li>
            </ul>
            <div className="archiving-arrow">
              Visit <ArrowRightIcon />
            </div>
          </a>
          <a
            href="https://github.com/KIMMUSIC"
            className="archiving-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            <h3>GitHub</h3>
            <p className="archiving-subtitle">KIMMUSIC</p>
            <ul>
              <li>개인 프로젝트 및 팀 프로젝트 소스 코드</li>
              <li>PS 문제풀이</li>
              <li>오픈소스 Fork</li>
            </ul>
            <div className="archiving-arrow">
              Visit <ArrowRightIcon />
            </div>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ============================================
   Footer
   ============================================ */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-name">이동규 | KIMMUSIC</div>
        <a href="mailto:hwa3060@naver.com" className="footer-email">
          hwa3060@naver.com
        </a>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} KIMMUSIC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ============================================
   App
   ============================================ */
function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Archiving />
      </main>
      <Footer />
    </div>
  );
}

export default App;
