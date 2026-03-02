import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  ChevronRight,
  CirclePlay,
  Layers3,
  LineChart,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
} from 'lucide-react';
import { CSSProperties, useEffect, useMemo, useState } from 'react';

import fashionLogo from './assets/fashion-logo.svg';

type Feature = {
  icon: typeof Sparkles;
  title: string;
  description: string;
  accent: string;
  metrics: string[];
};

type CaseStudy = {
  brand: string;
  impact: string;
  summary: string;
  stats: string[];
};

const navItems = [
  { label: 'Produto', href: '#features' },
  { label: 'Resultados', href: '#cases' },
  { label: 'Integrações', href: '#integrations' },
  { label: 'Demo', href: '#demo' },
];

const comparisonItems = [
  {
    title: 'Sem IA',
    tone: 'muted',
    points: [
      'Descrições manuais',
      'SEO inconsistente',
      'Baixa conversão',
      'Gestão complexa',
    ],
  },
  {
    title: 'Com FashionAI',
    tone: 'accent',
    points: [
      'Catálogo otimizado automaticamente',
      'SEO estruturado',
      'Insights de vendas',
      'Decisão baseada em dados',
    ],
  },
] as const;

const features: Feature[] = [
  {
    icon: Sparkles,
    title: 'Geração Inteligente de Descrições',
    description:
      'Crie descrições premium com contexto de moda, tom de voz da marca e foco real em conversão.',
    accent: 'coral',
    metrics: ['Tom de voz consistente', 'Atualização em lote', 'Pronto para catálogo'],
  },
  {
    icon: Search,
    title: 'SEO Automático',
    description:
      'Padronize metadados, categorias e copy orientada a descoberta para capturar tráfego qualificado.',
    accent: 'rose',
    metrics: ['Titles e meta tags', 'Estrutura escalável', 'Visibilidade orgânica'],
  },
  {
    icon: LineChart,
    title: 'Análise de Performance',
    description:
      'Veja o que está limitando vendas por coleção, SKU ou canal com leitura clara e acionável.',
    accent: 'peach',
    metrics: ['Sinais por produto', 'Leituras em tempo real', 'Priorização inteligente'],
  },
  {
    icon: BrainCircuit,
    title: 'Estratégias Automatizadas',
    description:
      'Transforme comportamento de catálogo e vendas em recomendações operacionais prontas para execução.',
    accent: 'slate',
    metrics: ['Ações recomendadas', 'Playbooks automáticos', 'Escala sem atrito'],
  },
];

const cases: CaseStudy[] = [
  {
    brand: 'FARM',
    impact: '+37% aumento na conversão',
    summary:
      'FashionAI reduziu gargalos de catálogo e acelerou a entrega de SEO e copy para novos drops.',
    stats: ['-61% tempo operacional', '+22% CTR orgânico', '+18% ticket em sessões otimizadas'],
  },
  {
    brand: 'Arezzo',
    impact: '+29% crescimento em receita assistida',
    summary:
      'A camada de IA priorizou sortimento, otimizou páginas críticas e melhorou performance comercial.',
    stats: ['+41% cobertura de SEO', '-48% retrabalho', '+13% vendas por coleção'],
  },
  {
    brand: 'Shoulder',
    impact: '+33% ganho em produtividade do time',
    summary:
      'Operação editorial e analítica passaram a rodar com consistência global e menos dependência manual.',
    stats: ['4x mais velocidade', '+26% indexação', '100% padrão de copy'],
  },
];

const integrations = [
  'Shopify',
  'VTEX',
  'WooCommerce',
  'Wix',
  'Magento',
  'Nuvemshop',
  'Tray',
  'Salesforce',
];

const authorityStats = [
  { value: '+250', label: 'lojas confiando na plataforma' },
  { value: '+12M', label: 'produtos otimizados' },
  { value: '+38M', label: 'descrições geradas' },
  { value: '+180', label: 'integrações ativas' },
];

const footerColumns = [
  {
    title: 'Produto',
    links: ['Descrições com IA', 'SEO automático', 'Analytics', 'Estratégias'],
  },
  {
    title: 'Empresa',
    links: ['Sobre', 'Clientes', 'Carreiras', 'Contato'],
  },
  {
    title: 'Recursos',
    links: ['Demo', 'Documentação', 'Integrações', 'Cases'],
  },
  {
    title: 'Legal',
    links: ['Privacidade', 'Termos', 'Segurança', 'LGPD'],
  },
];

function DashboardCard({
  title,
  value,
  caption,
}: {
  title: string;
  value: string;
  caption: string;
}) {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card__title">{title}</div>
      <div className="dashboard-card__value">{value}</div>
      <div className="dashboard-card__caption">{caption}</div>
    </div>
  );
}

function FeatureMockup({ accent }: { accent: string }) {
  return (
    <div className={`feature-mockup feature-mockup--${accent}`}>
      <div className="feature-mockup__header">
        <span />
        <span />
        <span />
      </div>
      <div className="feature-mockup__body">
        <div className="feature-mockup__column">
          <div className="feature-mockup__panel feature-mockup__panel--lg" />
          <div className="feature-mockup__row">
            <div className="feature-mockup__panel" />
            <div className="feature-mockup__panel" />
          </div>
        </div>
        <div className="feature-mockup__column feature-mockup__column--narrow">
          <div className="feature-mockup__metric" />
          <div className="feature-mockup__metric" />
          <div className="feature-mockup__metric feature-mockup__metric--tall" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const heroStyle = useMemo(
    () =>
      ({
        '--hero-shift': `${Math.min(scrollY * 0.08, 28)}px`,
      }) as CSSProperties,
    [scrollY],
  );

  return (
    <div className="page-shell">
      <div className="ambient ambient--left" />
      <div className="ambient ambient--right" />

      <header className="topbar">
        <div className="brand-lockup">
          <img
            className="brand-logo"
            src={fashionLogo}
            alt="Fashion.ai Data with Style"
          />
        </div>

        <nav className="topbar-nav" aria-label="Principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <a className="button button--ghost button--sm" href="#demo">
            Ver demonstração
          </a>
          <a className="button button--primary button--sm" href="#cta">
            Começar agora
          </a>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="hero__content" data-reveal>
            <div className="eyebrow-group">
              <span className="pill pill--soft">
                <Bot size={14} />
                IA treinada para moda
              </span>
              <span className="eyebrow">Integração em minutos</span>
            </div>

            <h1>A IA que transforma seu e-commerce em máquina de vendas.</h1>

            <p className="hero__lead">
              Automatize descrições, SEO, performance e decisões estratégicas
              com inteligência artificial criada para moda.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#cta">
                Começar agora
                <ArrowRight size={18} />
              </a>
              <a className="button button--ghost" href="#demo">
                Ver demonstração
              </a>
            </div>

            <p className="microcopy">Integração em minutos</p>

            <div className="hero__trust">
              <div>
                <strong>+250 lojas</strong>
                <span>confiando em IA aplicada ao varejo de moda</span>
              </div>
              <div>
                <strong>Operação global</strong>
                <span>governança, escala e consistência para grandes catálogos</span>
              </div>
            </div>
          </div>

          <div className="hero__visual" data-reveal style={heroStyle}>
            <div className="hero-glow" />
            <div className="hero-blur" />
            <div className="dashboard-float">
              <div className="dashboard-header">
                <div className="dashboard-title">
                  <div className="dashboard-title__label">FashionAI Command</div>
                  <div className="dashboard-title__text">Inteligência comercial em tempo real</div>
                </div>
                <div className="dashboard-chip">Global SaaS</div>
              </div>

              <div className="dashboard-grid">
                <DashboardCard
                  title="Conversão assistida"
                  value="+37%"
                  caption="uplift médio em catálogos otimizados"
                />
                <DashboardCard
                  title="SEO score"
                  value="94/100"
                  caption="estrutura, semântica e escalabilidade"
                />
                <div className="dashboard-panel dashboard-panel--chart">
                  <div className="dashboard-panel__heading">
                    <span>Performance por coleção</span>
                    <span>Últimos 30 dias</span>
                  </div>
                  <div className="chart-area">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="dashboard-panel dashboard-panel--feed">
                  <div className="dashboard-panel__heading">
                    <span>Recomendações da IA</span>
                    <span>Agora</span>
                  </div>
                  <ul>
                    <li>
                      <Check size={16} />
                      Atualizar SEO de categoria resort wear
                    </li>
                    <li>
                      <Check size={16} />
                      Reforçar copy dos produtos com alta saída
                    </li>
                    <li>
                      <Check size={16} />
                      Priorizar 24 SKUs com potencial de margem
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--comparison">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">Antes e depois</span>
            <h2>Da operação manual para uma máquina de crescimento orientada por IA.</h2>
            <p>
              Substitua esforço fragmentado por uma camada inteligente que conecta
              catálogo, descoberta e decisão comercial.
            </p>
          </div>

          <div className="comparison-grid">
            {comparisonItems.map((item) => (
              <article
                className={`comparison-card comparison-card--${item.tone}`}
                key={item.title}
                data-reveal
              >
                <div className="comparison-card__header">
                  <div className="comparison-card__icon">
                    {item.tone === 'accent' ? <ShieldCheck size={20} /> : <Layers3 size={20} />}
                  </div>
                  <h3>{item.title}</h3>
                </div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>
                      <ChevronRight size={16} />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="features">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">Features</span>
            <h2>Ferramentas premium para crescer com menos fricção e mais precisão.</h2>
            <p>
              Cada módulo foi desenhado para parecer software global de alto nível,
              mas operar com profundidade real de moda e e-commerce.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="feature-card" key={feature.title} data-reveal>
                  <div className="feature-card__top">
                    <span className="feature-icon">
                      <Icon size={20} />
                    </span>
                    <span className="feature-tag">{feature.metrics[0]}</span>
                  </div>
                  <div className="feature-card__body">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                  <FeatureMockup accent={feature.accent} />
                  <div className="feature-card__footer">
                    {feature.metrics.slice(1).map((metric) => (
                      <span key={metric}>{metric}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section section--cases" id="cases">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">Case de sucesso</span>
            <h2>Resultados reais para marcas reais.</h2>
            <p>
              Autoridade é consequência de impacto mensurável. A FashionAI entra
              na operação para destravar velocidade, escala e margem.
            </p>
          </div>

          <div className="editorial-case" data-reveal>
            <div className="editorial-case__brand">
              <span className="editorial-case__badge">Cliente destaque</span>
              <h3>FARM</h3>
            </div>
            <div className="editorial-case__impact">+37% aumento na conversão</div>
            <p>
              FashionAI organizou catalogação, acelerou produção de conteúdo e
              orientou ações de maior retorno por categoria.
            </p>
            <a className="button button--ghost editorial-case__button" href="#demo">
              Ver case completo
            </a>
          </div>

          <div className="cases-slider" data-reveal>
            {cases.map((item) => (
              <article className="case-slide" key={item.brand}>
                <div className="case-slide__brand">{item.brand}</div>
                <h3>{item.impact}</h3>
                <p>{item.summary}</p>
                <ul>
                  {item.stats.map((stat) => (
                    <li key={stat}>{stat}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--integrations" id="integrations">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">Integrações</span>
            <h2>Conecte com as principais plataformas.</h2>
            <p>
              Entre em operação sem reinventar sua stack. FashionAI se conecta ao
              ecossistema que sustenta o comércio digital moderno.
            </p>
          </div>

          <div className="integration-grid" data-reveal>
            {integrations.map((integration) => (
              <div className="integration-chip" key={integration}>
                <Store size={18} />
                <span>{integration}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section authority-section">
          <div className="authority-card" data-reveal>
            <div className="section-heading section-heading--centered">
              <span className="eyebrow">Autoridade</span>
              <h2>Confiado por operações que tratam IA como infraestrutura.</h2>
              <p>
                Tecnologia séria, discurso claro e entrega construída para times
                que precisam vender mais sem perder governança.
              </p>
            </div>

            <div className="authority-stats">
              {authorityStats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section demo-section" id="demo">
          <div className="demo-card" data-reveal>
            <div className="demo-copy">
              <span className="eyebrow eyebrow--inverse">Demo</span>
              <h2>Veja a FashionAI em ação</h2>
              <p>
                Uma visão clara de como descrições, SEO, análise e estratégia se
                conectam em uma operação única e escalável.
              </p>
              <a className="button button--light" href="#cta">
                Assistir demonstração
              </a>
            </div>

            <div className="video-shell">
              <div className="video-shell__frame">
                <button className="play-button" aria-label="Assistir demonstração">
                  <CirclePlay size={64} strokeWidth={1.5} />
                </button>
                <div className="video-shell__scrim" />
                <div className="video-shell__timeline" />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="cta">
          <div className="cta-banner" data-reveal>
            <div>
              <span className="eyebrow eyebrow--inverse">Escala com IA</span>
              <h2>Pronto para vender mais com IA?</h2>
              <p>Comece hoje. Escale amanhã.</p>
            </div>
            <a className="button button--white" href="mailto:contato@fashionai.com">
              Criar conta gratuita
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="brand-lockup brand-lockup--inverse">
              <img
                className="brand-logo brand-logo--inverse"
                src={fashionLogo}
                alt="Fashion.ai Data with Style"
              />
            </div>
            <p>
              Inteligência artificial para transformar catálogo, SEO e performance
              em vantagem competitiva.
            </p>
            <div className="social-row">
              <a href="/" aria-label="LinkedIn">
                in
              </a>
              <a href="/" aria-label="Instagram">
                ig
              </a>
              <a href="/" aria-label="X">
                x
              </a>
            </div>
          </div>

          <div className="footer__columns">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3>{column.title}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="/">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 FashionAI. Todos os direitos reservados.</span>
          <span>Built for global fashion teams.</span>
        </div>
      </footer>

      <a className="mobile-cta" href="#cta">
        Começar agora
        <ArrowRight size={16} />
      </a>
    </div>
  );
}
