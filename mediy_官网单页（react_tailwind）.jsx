import React from "react";
import { MotionConfig, motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  Stethoscope,
  Gauge,
  ShieldCheck,
  LineChart,
  Database,
  Link as LinkIcon,
  Hospital,
  Sparkles,
  Cpu,
  ArrowRight,
  Bot,
  Zap,
  Eye,
  MessageSquare,
} from "lucide-react";

// Simple inline SVG logo approximating the user's brand
const MediyLogo = ({ className = "h-8 w-8" }) => (
  <svg
    viewBox="0 0 120 80"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="MEDIY logo"
  >
    <path d="M30 60 L50 20 C55 10 70 10 75 20 L55 60 Z" fill="#2F7CF0" />
    <path d="M65 60 L85 20 C90 10 105 10 110 20 L90 60 Z" fill="#2F7CF0" />
    <polygon points="18,60 30,40 30,60" fill="#19C39C" />
  </svg>
);

const Container = ({ children }) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
    {children}
  </span>
);

const SectionTitle = ({ overline, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    {overline && (
      <div className="mb-3 text-sm font-semibold tracking-widest text-sky-600">
        {overline}
      </div>
    )}
    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-base leading-7 text-slate-600">{subtitle}</p>
    )}
  </div>
);

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm font-medium text-slate-600 hover:text-slate-900"
  >
    {children}
  </a>
);

const Header = () => (
  <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur-md">
    <Container>
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <MediyLogo className="h-7 w-12" />
          <span className="text-xl font-extrabold tracking-wide text-slate-900">
            MEDIY
          </span>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink href="#features">产品优势</NavLink>
          <NavLink href="#solutions">解决方案</NavLink>
          <NavLink href="#modules">核心模块</NavLink>
          <NavLink href="#pricing">部署与支持</NavLink>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
        >
          预约演示
        </a>
      </div>
    </Container>
  </header>
);

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50">
    <div className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl" />
    <Container>
      <div className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <div className="mb-5 flex flex-wrap gap-2">
            <Pill>
              <Bot className="h-4 w-4" /> 大模型·AI 驱动
            </Pill>
            <Pill>
              <Sparkles className="h-4 w-4" /> 智慧医疗
            </Pill>
            <Pill>
              <LinkIcon className="h-4 w-4" /> 互联互通
            </Pill>
          </div>
          <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
            智启医疗，慧联健康
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            基于大语言模型与知识图谱的医疗智能化平台：融合NLP、向量检索与深度学习技术，实现病历智能质控、临床决策支持、用药安全审查与慢病管理，打造以AI驱动的连续性医疗质量提升体系。
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-700"
            >
              立即咨询 <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
            >
              了解产品
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 text-center md:max-w-md">
            {[{k:"医院覆盖",v:"200+"},{k:"规则条目",v:"10k+"},{k:"系统可用性",v:"99.9%"}].map((i)=> (
              <div key={i.k} className="rounded-2xl border bg-white/80 p-4 shadow-sm">
                <div className="text-2xl font-extrabold text-slate-900">{i.v}</div>
                <div className="mt-1 text-xs text-slate-500">{i.k}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-10 -top-10 h-20 w-20 rounded-2xl bg-emerald-200/60 blur-2xl" />
          <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-sky-200/60 blur-2xl" />
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center gap-3">
              <MediyLogo className="h-8 w-14" />
              <div>
                <div className="text-lg font-extrabold tracking-wide text-slate-900">MEDIY</div>
                <div className="text-xs text-slate-500">Smart Healthy · Connected Care</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Bot, title: "大模型质控", desc: "LLM + 知识图谱，智能识别病历书写与诊疗逻辑问题。" },
                { icon: Eye, title: "AI 决策支持", desc: "基于循证医学的智能诊断建议与用药安全审查。" },
                { icon: Database, title: "数据中台", desc: "统一标准与主索引，沉淀病案、检验、检查等结构化数据。" },
                { icon: LinkIcon, title: "互联互通", desc: "对接HIS/EMR/LIS/PACS/医保/卫统，HL7/FHIR全覆盖。" },
              ].map((f) => (
                <div key={f.title} className="rounded-2xl border p-4">
                  <f.icon className="h-5 w-5" />
                  <div className="mt-2 text-sm font-semibold text-slate-900">{f.title}</div>
                  <div className="mt-1 text-xs text-slate-600">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
);

const Features = () => (
  <section id="features" className="py-20">
    <Container>
      <SectionTitle
        overline="PRODUCT ADVANTAGES"
        title="产品优势"
        subtitle="以大模型为核、以数据为轴、以连接为骨，AI驱动医疗质量与效率双提升。"
      />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: Bot,
            title: "大模型质控引擎",
            desc: "基于LLM的智能病历质控，自动识别书写规范、诊疗逻辑与一致性错误，准确率95%+。",
          },
          {
            icon: BrainCircuit,
            title: "AI 临床决策支持",
            desc: "融合知识图谱与大语言模型，提供个性化诊断建议、用药安全审查与风险预警。",
          },
          {
            icon: MessageSquare,
            title: "智能问答助手",
            desc: "基于医疗知识库的智能问答系统，支持病历查询、用药咨询与诊疗指南检索。",
          },
          {
            icon: Database,
            title: "统一数据底座",
            desc: "主索引+标准映射+元数据管理，沉淀高质量结构化医疗数据资产。",
          },
          {
            icon: LinkIcon,
            title: "互联互通生态",
            desc: "兼容 HL7/FHIR/DICOM 与地区卫统上报，开放 API 与三方系统协同。",
          },
          {
            icon: Zap,
            title: "实时AI推理",
            desc: "毫秒级AI推理响应，支持实时质控、预警与决策支持，满足临床时效要求。",
          },
        ].map((f) => (
          <div
            key={f.title}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-sky-50 p-3 text-sky-600">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">{f.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const Modules = () => (
  <section id="modules" className="bg-slate-50 py-20">
    <Container>
      <SectionTitle overline="CORE MODULES" title="核心模块" />
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-4">
        {[
          {
            icon: Stethoscope,
            title: "智能上报",
            desc: "接入 EMR/HIS 数据，自动完成病案与卫统上报，错误回溯与重跑。",
          },
          {
            icon: Activity,
            title: "过程质控",
            desc: "入院到出院全流程监控，书写及时性、术前术后管理、用药规范。",
          },
          {
            icon: LineChart,
            title: "统计报表",
            desc: "一键生成科室/医生/病种多维报表，支持可视化与导出。",
          },
          {
            icon: Hospital,
            title: "单病种",
            desc: "DRG/病种质控、路径对齐与病例下钻，辅助绩效与质量改进。",
          },
        ].map((m) => (
          <div key={m.title} className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="mb-2 rounded-xl bg-emerald-50 p-3 text-emerald-600">
              <m.icon className="h-5 w-5" />
            </div>
            <div className="text-base font-semibold text-slate-900">{m.title}</div>
            <div className="mt-2 text-sm text-slate-600">{m.desc}</div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const Solutions = () => (
  <section id="solutions" className="py-20">
    <Container>
      <SectionTitle
        overline="SOLUTIONS"
        title="行业解决方案"
        subtitle="基于大模型技术，为医院提供智能化、个性化的医疗质控与决策支持解决方案。"
      />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {[
          {
            title: "大模型驱动的病历质控",
            points: [
              "LLM智能识别书写规范与逻辑错误",
              "基于知识图谱的诊疗一致性检查",
              "实时质控预警与闭环管理",
            ],
          },
          {
            title: "AI临床决策支持系统",
            points: [
              "个性化诊断建议与用药安全审查",
              "循证医学知识库智能检索",
              "高风险患者预警与干预建议",
            ],
          },
          {
            title: "智能问答与知识服务",
            points: [
              "基于大模型的医疗知识问答",
              "病历内容智能检索与摘要",
              "诊疗指南与用药咨询服务",
            ],
          },
          {
            title: "数据驱动的质量改进",
            points: [
              "AI分析医疗质量趋势与异常",
              "智能推荐质控规则与改进措施",
              "多维度质量指标可视化分析",
            ],
          },
        ].map((s) => (
          <div
            key={s.title}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="text-base font-semibold text-slate-900">{s.title}</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="bg-slate-50 py-20">
    <Container>
      <SectionTitle overline="DEPLOYMENT" title="部署与支持" />
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {[
          {
            name: "私有化部署",
            features: ["医院内网可用","适配国产化","多活容灾"],
            cta: "获取方案",
          },
          {
            name: "混合云",
            features: ["数据可控","弹性扩展","成本优化"],
            cta: "咨询架构",
          },
          {
            name: "SaaS",
            features: ["快速开通","按需计费","持续更新"],
            cta: "立即试用",
          },
        ].map((p) => (
          <div key={p.name} className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="text-base font-semibold text-slate-900">{p.name}</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
            >
              {p.cta}
            </a>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20">
    <Container>
      <div className="rounded-3xl border bg-white p-8 shadow-sm">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <SectionTitle
              overline="LET'S TALK"
              title="预约演示 / 获取方案"
              subtitle="留下您的信息，我们将在一个工作日内与您联系。"
            />
            <form className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input placeholder="单位名称" className="rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-500" />
              <input placeholder="联系人" className="rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-500" />
              <input placeholder="联系方式" className="rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-500" />
              <input placeholder="职位/科室" className="rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-500" />
              <textarea placeholder="需求简述" rows={4} className="sm:col-span-2 rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-500" />
              <button type="button" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700">
                提交信息 <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
          <div className="rounded-2xl border bg-slate-50 p-6">
            <div className="mb-4 flex items-center gap-3">
              <MediyLogo className="h-7 w-12" />
              <div className="text-lg font-extrabold text-slate-900">MEDIY</div>
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              <p>品牌口号：智启医疗，慧联健康</p>
              <p>英文：Smart Healthy · Connected Care</p>
              <p>支持：support@mediy.example</p>
              <p>地址：北京市·海淀区（示例）</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const Footer = () => (
  <footer className="border-t bg-white py-10">
    <Container>
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-3 text-slate-600">
          <MediyLogo className="h-5 w-9" />
          <span className="text-sm">© {new Date().getFullYear()} MEDIY. All rights reserved.</span>
        </div>
        <div className="text-xs text-slate-500">隐私政策 · 服务条款</div>
      </div>
    </Container>
  </footer>
);

export default function MediyWebsite() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-slate-900">
        <Header />
        <main>
          <Hero />
          <Features />
          <Modules />
          <Solutions />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
