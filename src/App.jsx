import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import {
  BrainCircuit,
  Stethoscope,
  LineChart,
  Database,
  Link as LinkIcon,
  Sparkles,
  ArrowRight,
  Bot,
  Zap,
  Eye,
  MessageSquare,
  FileText,
  Building2,
  Target,
  Heart,
  Users,
  Award,
  Phone,
  Mic,
  ShieldCheck,
  Cpu,
} from "lucide-react";

// MEDiY logo component
const MediyLogo = ({ className = "h-8 w-8" }) => (
  <img
    src="/mediy-logo.png"
    alt="MEDiY logo"
    className={className}
    style={{ objectFit: 'contain' }}
  />
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

const BrandLockup = () => (
  <a href="#" className="group flex shrink-0 items-center gap-2.5">
    <div className="hidden h-9 w-1 rounded-full bg-gradient-to-b from-sky-500 via-sky-600 to-emerald-500 sm:block" />
    <div className="flex flex-col justify-center">
      <span className="whitespace-nowrap text-base font-bold leading-none tracking-[0.12em] sm:text-lg sm:tracking-[0.18em]">
        <span className="text-slate-800">金睿</span>
        <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
          医联
        </span>
      </span>
      <span className="mt-1 hidden text-[10px] font-medium tracking-[0.28em] text-slate-400 sm:block">
        JINRUI MEDICAL
      </span>
    </div>
  </a>
);

const Header = () => (
  <header className="sticky top-0 z-40 w-full border-b border-white/20 bg-white/75 backdrop-blur-md">
    <Container>
      <div className="flex h-16 items-center justify-between">
        <BrandLockup />
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink href="#features">产品优势</NavLink>
          <NavLink href="#solutions">解决方案</NavLink>
          <NavLink href="#modules">核心模块</NavLink>
          <NavLink href="#agents">MEDIY智能体</NavLink>
          <NavLink href="#pricing">部署与支持</NavLink>
          <NavLink href="#about">关于公司</NavLink>
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
  <section className="relative overflow-hidden">
    <Container>
      <div className="grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-2 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          {/* 标签区域美化 */}
          <div className="mb-8 flex flex-wrap gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Pill>
                <Bot className="h-4 w-4" /> 大模型·AI 驱动
              </Pill>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Pill>
                <Sparkles className="h-4 w-4" /> 智慧医疗
              </Pill>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Pill>
                <LinkIcon className="h-4 w-4" /> 互联互通
              </Pill>
            </motion.div>
          </div>

          {/* 主标题美化 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            <span className="bg-gradient-to-r from-slate-800 via-sky-700 to-slate-800 bg-clip-text text-transparent">
              智启医疗，慧联健康
            </span>
          </motion.h1>

          {/* 描述文字美化 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-xl leading-8 text-slate-600 max-w-2xl"
          >
            基于大语言模型与知识图谱的医疗智能化平台：融合NLP、向量检索与深度学习技术，实现大模型质控、无纸化智慧病案管理、智能上报与35项核心制度监测，打造以AI驱动的连续性医疗质量提升体系。
          </motion.p>

          {/* 按钮区域美化 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/25 hover:from-sky-700 hover:to-blue-700"
            >
              立即咨询
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="group inline-flex items-center gap-3 rounded-2xl border-2 border-slate-200 bg-white/80 px-8 py-4 text-base font-semibold text-slate-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-sky-200 hover:bg-sky-50/50"
            >
              了解产品
            </a>
          </motion.div>

          {/* 数据统计卡片美化 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 grid grid-cols-3 gap-4 text-center md:max-w-lg"
          >
            {[{ k: "医院覆盖", v: "200+" }, { k: "规则条目", v: "10k+" }, { k: "系统可用性", v: "99.9%" }].map((i, index) => (
              <motion.div
                key={i.k}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="group rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/50 hover:border-sky-200"
              >
                <div className="text-3xl font-black text-slate-900 group-hover:text-sky-600 transition-colors duration-300">{i.v}</div>
                <div className="mt-2 text-sm font-medium text-slate-500 group-hover:text-slate-600 transition-colors duration-300">{i.k}</div>
              </motion.div>
            ))}
          </motion.div>
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
              <MediyLogo className="h-12 w-24" />
              <div>
                <div className="text-xs text-slate-500">Smart Healthy · Connected Care</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Bot, title: "大模型质控", desc: "LLM + 知识图谱，智能识别病历书写与诊疗逻辑问题。" },
                { icon: Eye, title: "AI 决策支持", desc: "基于循证医学的智能诊断建议与临床决策支持。" },
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

const About = () => (
  <section id="about" className="py-20">
    <Container>
      <SectionTitle
        overline="ABOUT US"
        title="关于公司"
        subtitle="MEDIY 专注医疗智能化，以 AI 技术赋能医院质量管理与数字化转型。"
      />
      <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4 lg:order-1">
          {[
            { icon: Target, label: "企业愿景", value: "成为医疗智能化领域的领先服务商" },
            { icon: Heart, label: "企业使命", value: "智启医疗，慧联健康" },
            { icon: Users, label: "服务客户", value: "200+ 医疗机构" },
            { icon: Award, label: "核心能力", value: "大模型质控 · 数据中台 · 互联互通" },
          ].map((item) => (
            <div
              key={item.label}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-sky-200"
            >
              <div className="rounded-xl bg-sky-50 p-2.5 text-sky-600 w-fit">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="mt-3 text-xs font-semibold tracking-wide text-sky-600">{item.label}</div>
              <div className="mt-1 text-sm font-medium leading-6 text-slate-800">{item.value}</div>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-8 shadow-sm lg:order-2">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-2xl bg-white p-3 shadow-sm">
              <Building2 className="h-6 w-6 text-sky-600" />
            </div>
            <div>
              <div className="text-lg font-bold text-slate-900">北京金睿医联科技有限公司</div>
              <div className="text-sm text-slate-500">MEDIY · Smart Healthy · Connected Care</div>
            </div>
          </div>
          <p className="text-sm leading-7 text-slate-600">
            北京金睿医联科技有限公司（MEDIY）是一家聚焦智慧医疗领域的科技公司，致力于将大语言模型、知识图谱与医疗信息化深度融合，
            为医院及区域医疗提供质控、病案、上报与制度监测等一体化解决方案。我们深入理解临床场景与监管要求，
            以可落地的产品帮助医疗机构提升质量、降本增效，推动医疗服务的智能化与连续性。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            团队具备丰富的医疗信息化与 AI 工程经验，产品已服务全国 200 余家医疗机构，
            持续迭代质控规则与模型能力，助力客户实现数字化转型与数据资产沉淀。
          </p>
          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-sky-100 bg-white/80 px-4 py-3">
            <div className="rounded-xl bg-sky-50 p-2 text-sky-600">
              <Phone className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500">联系电话</div>
              <a
                href="tel:4001686908"
                className="text-base font-semibold text-sky-700 hover:text-sky-800"
              >
                400-168-6908
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          {
            title: "专业深耕",
            desc: "长期专注病历质控、病案管理与卫统上报等核心场景，产品贴合医院实际业务流程。",
          },
          {
            title: "技术领先",
            desc: "融合 LLM、向量检索与知识图谱，持续投入 AI 质控引擎与智能决策能力研发。",
          },
          {
            title: "可靠交付",
            desc: "支持私有化、混合云与 SaaS 多种部署模式，提供从实施到运维的全生命周期服务。",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200/60 bg-slate-50 p-6"
          >
            <div className="text-base font-semibold text-slate-900">{item.title}</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "大模型质控引擎",
      desc: "基于 LLM 的智能病历质控，自动识别书写规范、诊疗逻辑与一致性错误。",
      highlight: "准确率 95%+",
    },
    {
      icon: BrainCircuit,
      title: "AI 临床决策支持",
      desc: "融合知识图谱与大语言模型，提供个性化诊断建议、用药安全审查与风险预警。",
      highlight: "循证驱动",
    },
    {
      icon: MessageSquare,
      title: "智能问答助手",
      desc: "基于医疗知识库的智能问答系统，支持病历查询、用药咨询与诊疗指南检索。",
      highlight: "7×24 响应",
    },
    {
      icon: Database,
      title: "统一数据底座",
      desc: "主索引 + 标准映射 + 元数据管理，沉淀高质量结构化医疗数据资产。",
      highlight: "标准互通",
    },
    {
      icon: LinkIcon,
      title: "互联互通生态",
      desc: "兼容 HL7/FHIR/DICOM 与地区卫统上报，开放 API 与三方系统协同。",
      highlight: "全链路对接",
    },
    {
      icon: Zap,
      title: "实时 AI 推理",
      desc: "毫秒级 AI 推理响应，支持实时质控、预警与决策支持，满足临床时效要求。",
      highlight: "毫秒级响应",
    },
  ];

  return (
  <section id="features" className="py-20">
    <Container>
      <SectionTitle
        overline="PRODUCT ADVANTAGES"
        title="产品优势"
        subtitle="以大模型为核、以数据为轴、以连接为骨，AI 驱动医疗质量与效率双提升。"
      />
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {features.map((f, index) => (
          <div
            key={f.title}
            className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-sky-300 hover:bg-gradient-to-br hover:from-sky-400 hover:via-sky-500 hover:to-cyan-400 hover:shadow-xl hover:shadow-sky-400/25 hover:ring-2 hover:ring-sky-200/60"
          >
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sky-200/40 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-white/25" />
            <div className="relative flex h-full flex-col">
              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="inline-flex rounded-2xl bg-gradient-to-br from-sky-50 to-cyan-50 p-3.5 text-sky-600 shadow-sm ring-1 ring-sky-100/80 transition-all duration-500 group-hover:bg-white/25 group-hover:text-white group-hover:ring-white/30">
                  <f.icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-semibold tracking-widest text-slate-300 transition-colors duration-500 group-hover:text-white/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 transition-colors duration-500 group-hover:text-white">
                {f.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 transition-colors duration-500 group-hover:text-white/95">
                {f.desc}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 transition-colors duration-500 group-hover:border-white/25">
                <span className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 transition-all duration-500 group-hover:bg-white/20 group-hover:text-white">
                  {f.highlight}
                </span>
                <ArrowRight className="h-4 w-4 text-slate-300 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
  );
};

const Modules = () => {
  const modules = [
    {
      icon: Bot,
      title: "大模型质控",
      desc: "• 基于大语言模型与医疗知识图谱\n• 智能审查书写规范、诊疗逻辑\n• 质控准确率达98%以上\n• 实时质控与预警机制\n• 显著提升医疗质量与安全水平",
    },
    {
      icon: FileText,
      title: "无纸化智慧病案管理",
      desc: "• 全流程电子病案管理体系\n• 集成OCR识别与结构化提取技术\n• 多维度检索与深度分析功能\n• 管理效率提升300%以上\n• 助力医院数字化转型与数据资产化",
    },
    {
      icon: Stethoscope,
      title: "智能上报",
      desc: "• 无缝对接HIS/EMR/LIS/PACS系统\n• 智能完成病案首页、卫统报表上报\n• 内置数据校验、错误回溯机制\n• 上报准确率99.5%以上\n• 大幅降低人工成本与风险",
    },
    {
      icon: LineChart,
      title: "35项核心制度监测平台",
      desc: "• 基于国家卫健委35项核心制度\n• 全流程智能监测体系\n• 实时预警、趋势分析、根因挖掘\n• 持续改进闭环管理机制\n• 27项病案质控全覆盖，提升质量",
    },
  ];

  return (
  <section id="modules" className="py-20">
    <Container>
      <SectionTitle overline="CORE MODULES" title="核心模块" />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {modules.map((m) => (
          <div
            key={m.title}
            className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/85 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-sky-300 hover:bg-gradient-to-br hover:from-sky-400 hover:via-sky-500 hover:to-cyan-400 hover:shadow-xl hover:shadow-sky-400/25 hover:ring-2 hover:ring-sky-200/70"
          >
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br from-sky-100/50 to-emerald-100/50 blur-xl transition-all duration-500 group-hover:scale-125 group-hover:bg-white/20" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 p-3 text-sky-600 shadow-sm transition-all duration-500 group-hover:bg-white/20 group-hover:text-white group-hover:shadow-white/10">
                <m.icon className="h-6 w-6" />
              </div>
              <div className="mb-3 text-lg font-bold text-slate-900 transition-colors duration-500 group-hover:text-white">
                {m.title}
              </div>
              <div className="text-sm leading-relaxed whitespace-pre-line text-slate-600 transition-colors duration-500 group-hover:text-white/95">
                {m.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
  );
};

const MediyAgent = () => (
  <section id="agents" className="py-20">
    <Container>
      <SectionTitle
        overline="MEDIY AI AGENT"
        title="MEDIY智能体"
        subtitle="多模型协同的医疗 AI 智能体平台，统一接入语音、医疗、质控等专业大模型，赋能临床、管理与运营全场景。"
      />
      <div className="mt-12 rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-8 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
          <div className="flex shrink-0 items-center gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-sky-600 to-emerald-600 p-4 text-white shadow-lg">
              <Cpu className="h-8 w-8" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900">智能体平台介绍</div>
              <div className="mt-1 text-sm text-slate-500">Agent Orchestration · Multi-Model</div>
            </div>
          </div>
          <div className="space-y-4 text-sm leading-7 text-slate-600 lg:flex-1">
            <p>
              MEDIY智能体是金睿医联面向医院打造的医疗 AI 中枢，以智能体架构串联各类垂直大模型与业务系统。
              支持自然语言、语音等多模态交互，可理解临床语境、调用专业知识库，并自动完成质控审查、病案检索、上报校验等任务。
            </p>
            <p>
              平台采用「基础大模型 + 领域微调 + 工具调用」的技术路线，模型可私有化部署，数据不出院；
              通过统一的 Agent 编排引擎，实现多模型按需组合、任务分解与结果汇总，让 AI 能力真正融入日常医疗工作流。
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {["多模态交互", "工具链调用", "知识库增强", "私有化部署", "任务自动编排"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 text-xs font-medium text-sky-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-center text-lg font-semibold text-slate-900">专业大模型矩阵</h3>
        <p className="mt-2 text-center text-sm text-slate-600">
          覆盖感知、认知与质控全链路，可按场景灵活组合调用
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Mic,
              title: "语音大模型",
              tag: "Speech LLM",
              desc: "支持医患对话语音识别、语音指令交互与会议记录转写，适配门诊、查房、远程会诊等场景，实现「说即录、说即查」。",
              points: ["高精度医疗术语识别", "实时语音转写与摘要", "语音驱动的智能体指令"],
            },
            {
              icon: Stethoscope,
              title: "医疗大模型",
              tag: "Medical LLM",
              desc: "基于海量医学文献、指南与临床语料训练，提供诊断辅助、用药建议、病历解读与循证问答，助力临床决策智能化。",
              points: ["循证医学知识问答", "病历智能解读与摘要", "个性化诊疗建议生成"],
            },
            {
              icon: ShieldCheck,
              title: "质控大模型",
              tag: "QC LLM",
              desc: "专注病历书写规范、诊疗逻辑一致性与核心制度合规审查，结合规则引擎与知识图谱，实现实时质控与闭环整改。",
              points: ["书写规范智能审查", "诊疗逻辑一致性检测", "质控问题根因分析"],
            },
            {
              icon: FileText,
              title: "病案大模型",
              tag: "Record LLM",
              desc: "面向电子病案的全文理解、结构化抽取与智能检索，支持无纸化病案管理、编码辅助与多维度统计分析。",
              points: ["病案全文语义检索", "OCR 与结构化提取", "编码与归档智能辅助"],
            },
            {
              icon: LineChart,
              title: "上报大模型",
              tag: "Report LLM",
              desc: "智能完成病案首页、卫统报表等数据填报与校验，自动识别异常字段、回溯数据来源，提升上报准确率与效率。",
              points: ["报表智能填报", "跨系统数据校验", "错误自动定位与修正建议"],
            },
            {
              icon: BrainCircuit,
              title: "决策大模型",
              tag: "Decision LLM",
              desc: "融合患者多维数据与质量指标，提供风险预警、资源调度与质量改进建议，支撑医院精细化管理与持续改进。",
              points: ["高风险患者预警", "质量趋势智能分析", "管理决策辅助建议"],
            },
          ].map((model) => (
            <div
              key={model.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/50"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-sky-100/60 to-emerald-100/40 blur-2xl transition group-hover:scale-110" />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 p-3 text-sky-600">
                    <model.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-slate-500">
                    {model.tag}
                  </span>
                </div>
                <h4 className="mt-4 text-base font-bold text-slate-900 group-hover:text-sky-700">
                  {model.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{model.desc}</p>
                <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                  {model.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
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
      <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl">
        <video
          className="aspect-video w-full bg-black object-contain"
          controls
          muted
          playsInline
          preload="metadata"
          poster="/800.png"
        >
          <source src="/videos/mediy-qc-demo.mp4" type="video/mp4" />
          您的浏览器不支持视频播放。
        </video>
      </div>
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
  <section id="pricing" className="py-20">
    <Container>
      <SectionTitle overline="DEPLOYMENT" title="部署与支持" />
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {[
          {
            name: "私有化部署",
            features: ["医院内网可用", "适配国产化", "多活容灾"],
            cta: "获取方案",
          },
          {
            name: "混合云",
            features: ["数据可控", "弹性扩展", "成本优化"],
            cta: "咨询架构",
          },
          {
            name: "SaaS",
            features: ["快速开通", "按需计费", "持续更新"],
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

const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    contactInfo: '',
    position: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({
          companyName: '',
          contactName: '',
          contactInfo: '',
          position: '',
          requirements: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      console.error('提交错误:', error);
      setSubmitStatus({ type: 'error', message: '网络错误，请稍后重试' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
              <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="单位名称"
                  required
                  className="rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-500"
                />
                <input
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  placeholder="联系人"
                  required
                  className="rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-500"
                />
                <input
                  name="contactInfo"
                  value={formData.contactInfo}
                  onChange={handleInputChange}
                  placeholder="联系方式"
                  required
                  className="rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-500"
                />
                <input
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  placeholder="职位/科室"
                  className="rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-500"
                />
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  placeholder="需求简述"
                  rows={4}
                  className="sm:col-span-2 rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-500"
                />

                {submitStatus && (
                  <div className={`sm:col-span-2 p-4 rounded-xl ${submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '提交中...' : '提交信息'}
                  {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>
            </div>
            <div className="rounded-2xl border bg-slate-50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <MediyLogo className="h-10 w-20" />
              </div>
              <div className="space-y-1 text-sm text-slate-700">
                <div>
                  <span className="font-semibold">品牌口号：</span>
                  智启医疗，慧联健康
                </div>
                <div>
                  <span className="font-semibold">英文：</span>
                  Smart Healthy · Connected Care
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t border-white/20 bg-white/75 py-8 backdrop-blur-md">
    <Container>
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-3 text-slate-600">
          <MediyLogo className="h-6 w-12" />
          <span className="text-sm">© {new Date().getFullYear()} MEDIY 版权所有</span>
        </div>
        <div className="text-xs text-slate-500">
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-700 transition-colors"
          >
            京ICP备2025149901号-1
          </a>
        </div>
      </div>
    </Container>
  </footer>
);

export default function MediyWebsite() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen text-slate-900">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-20 bg-[url('/site-bg.png')] bg-cover bg-right bg-no-repeat"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-r from-white/90 via-white/72 to-white/20"
        />
        <Header />
        <main>
          <Hero />
          <Features />
          <Modules />
          <MediyAgent />
          <Solutions />
          <Pricing />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
