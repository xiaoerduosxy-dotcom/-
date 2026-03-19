import { ArrowRight } from "lucide-react";
import Link from "next/link";
import TiltCard from "@/components/TiltCard";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    id: 1,
    title: "金融 App 重设计",
    category: "移动端 · UI/UX",
    desc: "为某头部金融平台重新设计移动端 App，深入分析用户痛点，重构核心交互流程，提升关键转化率 34%。",
    tags: ["用户研究", "交互设计", "原型制作", "可用性测试"],
    color: "from-blue-950 to-indigo-900",
    accent: "#6366f1",
    glow: "rgba(99,102,241,0.2)",
    year: "2024",
  },
  {
    id: 2,
    title: "SaaS 管理后台",
    category: "Web · 设计系统",
    desc: "从零搭建企业级 SaaS 产品设计系统，覆盖 200+ 组件，建立完整的设计语言，支撑多产品线并行开发。",
    tags: ["设计系统", "组件库", "Figma", "前端协作"],
    color: "from-purple-950 to-violet-900",
    accent: "#a855f7",
    glow: "rgba(168,85,247,0.2)",
    year: "2024",
  },
  {
    id: 3,
    title: "智能硬件配套 App",
    category: "IoT · 交互设计",
    desc: "为智能家居设备设计配套移动端应用，打造流畅的设备控制与自动化配置体验。",
    tags: ["IoT", "移动端", "交互动效", "蓝牙配对"],
    color: "from-emerald-950 to-teal-900",
    accent: "#10b981",
    glow: "rgba(16,185,129,0.2)",
    year: "2023",
  },
  {
    id: 4,
    title: "医疗预约平台",
    category: "Web · 医疗健康",
    desc: "为医疗机构设计线上预约挂号平台，简化繁琐流程，提升患者就医体验，上线后预约量提升 60%。",
    tags: ["医疗健康", "流程优化", "无障碍设计"],
    color: "from-rose-950 to-pink-900",
    accent: "#f43f5e",
    glow: "rgba(244,63,94,0.2)",
    year: "2023",
  },
  {
    id: 5,
    title: "电商品牌升级",
    category: "品牌 · 视觉",
    desc: "为新锐电商品牌进行全面视觉升级，涵盖 App 界面、营销物料与品牌视觉规范。",
    tags: ["品牌设计", "视觉系统", "电商", "营销"],
    color: "from-amber-950 to-orange-900",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.2)",
    year: "2023",
  },
  {
    id: 6,
    title: "教育平台 2.0",
    category: "Web · 在线教育",
    desc: "重新设计在线教育平台学习体验，提升课程完播率，降低学习焦虑感，打造沉浸式学习环境。",
    tags: ["教育科技", "学习体验", "数据可视化"],
    color: "from-sky-950 to-cyan-900",
    accent: "#0ea5e9",
    glow: "rgba(14,165,233,0.2)",
    year: "2022",
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-14">
      {/* Header */}
      <section className="py-24 bg-white text-center px-6">
        <ScrollReveal>
          <p className="text-[14px] text-[#0071e3] font-medium uppercase tracking-widest mb-4">
            作品集
          </p>
          <h1 className="text-[52px] md:text-[72px] font-semibold text-[#1d1d1f] tracking-[-0.04em] leading-[1.05] mb-6">
            精选设计案例
          </h1>
          <p className="text-[19px] text-[#6e6e73] max-w-xl mx-auto">
            涵盖 UI/UX、设计系统、品牌视觉等多个领域，每个项目都代表着对优质体验的追求。
          </p>
        </ScrollReveal>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-[#08090f]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={(i % 3) * 0.1} direction="up">
                <TiltCard glowColor={project.glow} className="rounded-3xl h-full">
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="group block rounded-3xl overflow-hidden bg-[#0d0d14] border border-white/8 hover:border-white/20 transition-all duration-300 h-full"
                  >
                    <div
                      className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}
                    >
                      <div
                        className="w-12 h-12 rounded-2xl opacity-70"
                        style={{
                          background: project.accent,
                          boxShadow: `0 0 30px ${project.accent}90`,
                        }}
                      />
                      <span className="absolute top-3 right-3 text-[11px] text-white/50 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
                        {project.year}
                      </span>
                    </div>
                    <div className="p-6">
                      <p className="text-[11px] text-white/30 uppercase tracking-wider mb-2">
                        {project.category}
                      </p>
                      <h2 className="text-[18px] font-semibold text-white tracking-tight mb-2 group-hover:text-[#6366f1] transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-[13px] text-white/50 leading-relaxed mb-4">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2.5 py-1 rounded-full bg-white/6 text-white/40 border border-white/8"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden bg-[#050508] text-center px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)",
          }}
        />
        <ScrollReveal className="relative">
          <h2 className="text-[36px] font-semibold text-white tracking-tight mb-4">
            期待为你的项目创造价值
          </h2>
          <p className="text-[17px] text-white/40 mb-8">有合作想法？随时联系我。</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-[15px] font-medium transition-all hover:scale-[1.03]"
            style={{
              background:
                "linear-gradient(135deg, #6366f1 0%, #0071e3 50%, #a855f7 100%)",
              boxShadow: "0 0 30px rgba(99,102,241,0.3)",
            }}
          >
            开始合作 <ArrowRight size={15} />
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
