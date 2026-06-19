import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Box,
  CalendarDays,
  Clapperboard,
  Cloud,
  Code2,
  Database,
  Layers3,
  Mail,
  Music2,
  Send,
  Sparkles,
  Users
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import "../styles/landing-page.css";

type PageKey = "home" | "projects" | "writing" | "life" | "contact";

type NavItem = {
  label: string;
  page: PageKey;
};

type ShelfItem = {
  title: string;
  meta: string;
  note: string;
};

const navItems: NavItem[] = [
  { label: "Journey", page: "home" },
  { label: "Projects", page: "projects" },
  { label: "Writing", page: "writing" },
  { label: "Life", page: "life" },
  { label: "Contact", page: "contact" }
];

const projects = [
  {
    name: "AWS Certification Platform",
    image: "linear-gradient(135deg, #eef3f0, #d7e0dc)",
    detail: "Full-stack platform to help users prepare, track, and achieve AWS certifications.",
    icon: <Cloud size={18} />
  },
  {
    name: "AI Question Generator",
    image: "linear-gradient(135deg, #161817, #3b3f3b)",
    detail: "AI-powered tool that generates contextual questions using advanced models.",
    icon: <Sparkles size={18} />
  },
  {
    name: "MongoDB Query Playground",
    image: "linear-gradient(135deg, #f1f0ec, #c7d0cb)",
    detail: "Visual query builder and playground for MongoDB queries.",
    icon: <Database size={18} />
  }
];

const writing: ShelfItem[] = [
  {
    title: "Building Better Defaults",
    meta: "Product thinking",
    note: "Notes on reducing friction, choosing constraints, and making interfaces feel obvious."
  },
  {
    title: "Learning in Public",
    meta: "Career",
    note: "A small argument for documenting experiments before they become polished lessons."
  },
  {
    title: "Systems That Scale",
    meta: "Engineering",
    note: "Cloud, automation, observability, and the kind of software that holds up over time."
  }
];

const life: ShelfItem[] = [
  {
    title: "Favourite Books",
    meta: "Reading",
    note: "The Almanack of Naval Ravikant, Atomic Habits, Deep Work, and books about clear thinking."
  },
  {
    title: "Films",
    meta: "Cinema",
    note: "Interstellar, The Social Network, Her, Whiplash, and stories with strong atmosphere."
  },
  {
    title: "Music",
    meta: "Soundtrack",
    note: "Film scores, ambient focus, indie evenings, and electronic drift for long work sessions."
  }
];

const LandingPage = () => {
  const [activePage, setActivePage] = usePageFromHash();

  const goTo = (page: PageKey) => {
    window.history.pushState(null, "", page === "home" ? "#" : `#${page}`);
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className='site-shell'>
      <header className='site-header'>
        <button className='brand-mark' onClick={() => goTo("home")} aria-label='Go to home'>
          TEJAS
        </button>
        <nav className='nav-links' aria-label='Primary navigation'>
          {navItems.map((item) => (
            <button
              className={activePage === item.page ? "active" : ""}
              key={item.page}
              onClick={() => goTo(item.page)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button className='header-action' onClick={() => goTo("contact")}>
          Let's Talk <ArrowRight size={17} />
        </button>
      </header>

      <main>{activePage === "home" ? <HomePage goTo={goTo} /> : <InnerPage page={activePage} />}</main>
    </div>
  );
};

const usePageFromHash = (): [PageKey, (page: PageKey) => void] => {
  const getPage = (): PageKey => {
    const hash = window.location.hash.replace("#", "") as PageKey;
    return ["projects", "writing", "life", "contact"].includes(hash) ? hash : "home";
  };

  const [page, setPage] = useState<PageKey>(getPage);

  useEffect(() => {
    const syncPage = () => setPage(getPage());
    window.addEventListener("hashchange", syncPage);
    window.addEventListener("popstate", syncPage);
    return () => {
      window.removeEventListener("hashchange", syncPage);
      window.removeEventListener("popstate", syncPage);
    };
  }, []);

  return [page, setPage];
};

const HomePage = ({ goTo }: { goTo: (page: PageKey) => void }) => (
  <>
    <section className='hero-section'>
      <div className='hero-copy'>
        <p className='eyebrow'>Hi, I'm</p>
        <h1>Tejas Dadhe.</h1>
        <p className='hero-lede'>
          I build software systems, explore new technologies, and enjoy creating things that last.
        </p>

        <div className='feature-pills'>
          <FeaturePill icon={<Code2 size={19} />} label='Software Engineer' />
          <FeaturePill icon={<Cloud size={19} />} label='Cloud Enthusiast' />
          <FeaturePill icon={<BookOpen size={19} />} label='Lifelong Learner' />
        </div>

        <div className='hero-actions'>
          <button className='primary-action' onClick={() => goTo("projects")}>
            View My Work <ArrowRight size={18} />
          </button>
          <button className='secondary-action' onClick={() => goTo("home")}>
            Learn more <ArrowDown size={17} />
          </button>
        </div>
      </div>

      <div className='hero-art' aria-label='Abstract stone objects'>
        <img src='/hero-image.png' alt='' />
      </div>
    </section>

    <section className='about-section'>
      <div className='about-copy'>
        <p className='eyebrow'>A little about me</p>
        <h2>Engineer by profession. Builder by nature.</h2>
        <p>
          I enjoy turning ideas into products, learning how things work, and having meaningful
          conversations.
        </p>
        <p>Outside work, you'll usually find me watching films, listening to music, or exploring something new.</p>
        <button className='text-link' onClick={() => goTo("life")}>
          More about me <ArrowRight size={16} />
        </button>
      </div>

      <div className='stats-grid'>
        <StatCard icon={<CalendarDays size={23} />} value='9+' label='Years of Experience' />
        <StatCard icon={<Code2 size={23} />} value='30+' label='Projects Built' />
        <StatCard icon={<Cloud size={23} />} value='5+' label='Cloud & DevOps Certifications' />
        <StatCard icon={<Users size={23} />} value='∞' label='Curiosity & Learning' />
      </div>
    </section>

    <section className='curiosity-section'>
      <SectionTitle label='What keeps me curious' />
      <div className='curiosity-grid'>
        <InterestCard icon={<Code2 size={35} />} title='Technology' copy='Cloud, AI, automation and building systems that scale.' />
        <InterestCard icon={<Clapperboard size={35} />} title='Films' copy='Stories, CINEMA, and the art of storytelling.' />
        <InterestCard icon={<Music2 size={35} />} title='Music' copy='The right soundtrack for focus, creativity and calm.' />
        <InterestCard icon={<BookOpen size={35} />} title='Learning' copy='Books, courses and experiments that never stop.' />
      </div>
    </section>

    <section className='featured-section'>
      <div className='section-row'>
        <SectionTitle label='Featured projects' />
        <button className='text-link' onClick={() => goTo("projects")}>
          View all projects <ArrowRight size={16} />
        </button>
      </div>
      <ProjectCards />
    </section>

    <section className='now-strip'>
      <strong>Now</strong>
      <NowItem icon={<Box size={26} />} title='Learning' label='Kubernetes' />
      <NowItem icon={<Sparkles size={26} />} title='Exploring' label='AI systems' />
      <NowItem icon={<Code2 size={26} />} title='Building side' label='projects' />
      <NowItem icon={<Cloud size={26} />} title='Improving cloud' label='architecture skills' />
    </section>

    <blockquote className='quote-band'>
      <span>“</span>
      <p>We are what we repeatedly do. Excellence, then, is not an act, but a habit.</p>
      <cite>- Aristotle</cite>
    </blockquote>

    <ContactBand goTo={goTo} />
    <Footer goTo={goTo} />
  </>
);

const FeaturePill = ({ icon, label }: { icon: ReactNode; label: string }) => (
  <div className='feature-pill'>
    <span>{icon}</span>
    {label}
  </div>
);

const SectionTitle = ({ label }: { label: string }) => <p className='section-label'>{label}</p>;

const StatCard = ({ icon, value, label }: { icon: ReactNode; value: string; label: string }) => (
  <div className='stat-card'>
    {icon}
    <strong>{value}</strong>
    <span>{label}</span>
  </div>
);

const InterestCard = ({ icon, title, copy }: { icon: ReactNode; title: string; copy: string }) => (
  <article className='interest-card'>
    {icon}
    <div>
      <h3>{title}</h3>
      <p>{copy}</p>
    </div>
  </article>
);

const ProjectCards = () => (
  <div className='project-cards'>
    {projects.map((project) => (
      <article className='project-card' key={project.name}>
        <div className='project-visual' style={{ background: project.image }}>
          <span>{project.icon}</span>
        </div>
        <div className='project-card-copy'>
          <h3>{project.name}</h3>
          <p>{project.detail}</p>
          <ArrowRight size={18} />
        </div>
      </article>
    ))}
  </div>
);

const NowItem = ({ icon, title, label }: { icon: ReactNode; title: string; label: string }) => (
  <div className='now-item'>
    {icon}
    <span>
      <strong>{title}</strong>
      {label}
    </span>
  </div>
);

const ContactBand = ({ goTo }: { goTo: (page: PageKey) => void }) => (
  <section className='contact-band'>
    <h2>I'd love to hear from you.</h2>
    <p>
      Whether it's a project, an opportunity, or just a conversation.
      <strong> Let's connect.</strong>
    </p>
    <div className='contact-actions'>
      <button className='primary-action' onClick={() => goTo("contact")}>
        Get in Touch <ArrowRight size={18} />
      </button>
      <div className='social-links' aria-label='Social links'>
        <a href='https://linkedin.com' aria-label='LinkedIn'>
          <Send size={21} />
        </a>
        <a href='https://github.com/tejasdadhe' aria-label='GitHub'>
          <Code2 size={21} />
        </a>
        <a href='mailto:hello@tejasdadhe.com' aria-label='Email'>
          <Mail size={21} />
        </a>
      </div>
    </div>
  </section>
);

const Footer = ({ goTo }: { goTo: (page: PageKey) => void }) => (
  <footer className='site-footer'>
    <span>© 2026 Tejas Dadhe</span>
    <div>
      {navItems.map((item) => (
        <button key={item.page} onClick={() => goTo(item.page)}>
          {item.label}
        </button>
      ))}
    </div>
    <button className='top-button' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      ↑
    </button>
  </footer>
);

const InnerPage = ({ page }: { page: PageKey }) => {
  if (page === "contact") {
    return (
      <section className='inner-page contact-page'>
        <p className='eyebrow'>Contact</p>
        <h1>Let's build a thoughtful conversation.</h1>
        <div className='contact-grid'>
          <a className='contact-card' href='mailto:hello@tejasdadhe.com'>
            <Mail size={23} />
            <span>Email</span>
            <strong>hello@tejasdadhe.com</strong>
          </a>
          <a className='contact-card' href='https://github.com/tejasdadhe' target='_blank' rel='noreferrer'>
            <Code2 size={23} />
            <span>GitHub</span>
            <strong>@tejasdadhe</strong>
          </a>
          <article className='contact-card'>
            <Layers3 size={23} />
            <span>Open to</span>
            <strong>Projects, ideas, and collaboration</strong>
          </article>
        </div>
      </section>
    );
  }

  if (page === "projects") {
    return (
      <section className='inner-page'>
        <p className='eyebrow'>Projects</p>
        <h1>Selected things I've built.</h1>
        <ProjectCards />
      </section>
    );
  }

  const items = page === "writing" ? writing : life;

  return (
    <section className='inner-page'>
      <p className='eyebrow'>{page === "writing" ? "Writing" : "Life"}</p>
      <h1>{page === "writing" ? "Notes, ideas, and working thoughts." : "Books, films, music, and taste."}</h1>
      <div className='shelf-list'>
        {items.map((item) => (
          <article className='shelf-card' key={item.title}>
            <span>{item.meta}</span>
            <h2>{item.title}</h2>
            <p>{item.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LandingPage;
