import React, { useState } from "react";
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
  Building2,
  Sparkles,
  Cpu,
  ArrowRight,
  Bot,
  Zap,
  Eye,
  MessageSquare,
  FileText,
  ClipboardList,
} from "lucide-react";

// MEDiY logo component
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
    {/* 背景装饰元素 */}
    <div className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-200/30 via-blue-200/20 to-emerald-200/30 blur-3xl" />
    <div className="pointer-events-none absolute right-[-20%] top-[-5%] -z-10 h-[30rem] w-[30rem] rounded-full bg-gradient-to-l from-emerald-200/25 to-sky-200/15 blur-2xl" />
    <div className="pointer-events-none absolute left-[-15%] bottom-[-10%] -z-10 h-[25rem] w-[25rem] rounded-full bg-gradient-to-r from-blue-100/20 to-sky-100/10 blur-2xl" />
    
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
            {[{k:"医院覆盖",v:"200+"},{k:"规则条目",v:"10k+"},{k:"系统可用性",v:"99.9%"}].map((i, index) => (
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
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
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
        ].map((m) => (
          <div key={m.title} className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100/50 hover:border-sky-200">
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br from-sky-100/50 to-emerald-100/50 blur-xl group-hover:scale-110 transition-transform duration-300" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 p-3 text-sky-600 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <m.icon className="h-6 w-6" />
              </div>
              <div className="mb-3 text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors duration-300">{m.title}</div>
              <div className="text-sm leading-relaxed text-slate-600 whitespace-pre-line group-hover:text-slate-700 transition-colors duration-300">{m.desc}</div>
            </div>
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
      const response = await fetch('http://localhost:3002/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (result.success) {
        // 发送短信通知
        try {
          await fetch('http://localhost:3002/api/sms', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              phone: '13621110621',
              message: `新的预约演示申请：\n单位：${formData.companyName}\n联系人：${formData.contactName}\n联系方式：${formData.contactInfo}\n职位：${formData.position}\n需求：${formData.requirements}`
            }),
          });
        } catch (smsError) {
          console.error('短信发送失败:', smsError);
          // 短信发送失败不影响主流程
        }

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
                  <div className={`sm:col-span-2 p-4 rounded-xl ${
                    submitStatus.type === 'success' 
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
};

const Footer = () => (
  <footer className="border-t bg-white py-8">
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
