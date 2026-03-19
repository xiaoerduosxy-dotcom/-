import Hero from "@/components/Hero";
import TiltCard from "@/components/TiltCard";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredWork = [
  {
    id: 1,
    title: "金融 App 重设计",
    category: "移动端 · UI/UX",
    desc: "为某头部金融平台重新设计移动端 App，提升核心流程转化率 34%。",
    color: "from-blue-950 to-indigo-900",
    accent: "#6366f1",
    glow: "rgba(99,102,241,0.25)",
  },
  {
    id: 2,
    title: "SaaS 管理后台",
    category: "Web · 设计系统",
    desc: "从零搭建企业级 SaaS 产品设计系统，覆盖 200+ 组件，支撑多产品线。",
    color: "from-purple-950 to-violet-900",
    accent: "#a855f7",
    glow: "rgba(168,85,247,0.25)",
  },
  {
    id: 3,
    title: "智能硬件配套 App",
    category: "IoT · 交互设计",
    desc: "为智能家居设备设计配套移动端应用，打造流畅的设备控制体验。",
    color: "from-emerald-950 to-teal-900",
    accent: "#10b981",
    glow: "rgba(16,185,129,0.25)",
  },
];

const stats = [
  { value: "50+", label: "完成项目" },
  { value: "30+", label: "服务客户" },
  { value: "5年", label: "设计经验" },
  { value: "3项", label: "行业奖项" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Stats — dark transition from hero */}
      <section className="py-20 bg-[#08090f]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1} direction="up">
                <div className="text-center">
                  <div
                    className="text-[52px] font-semibold tracking-tight leading-none"
                    style={{
                      background:
                        "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.5) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[14px] text-white/40 mt-2">{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-[14px] text-[#0071e3] font-medium uppercase tracking-widest mb-3">
                  精选作品
                </p>
                <h2 className="text-[40px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-[-0.03em] leading-[1.08]">
                  近期项目
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="hidden md:inline-flex items-center gap-1.5 text-[#0071e3] text-[15px] font-medium hover:gap-2.5 transition-all"
              >
                查看全部 <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredWork.map((work, i) => (
              <ScrollReveal key={work.id} delay={i * 0.12} direction="up">
                <TiltCard
                  glowColor={work.glow}
                  className="rounded-3xl overflow-hidden h-full"
                >
                  <Link
                    href={`/portfolio/${work.id}`}
                    className="group block rounded-3xl overflow-hidden bg-[#0d0d14] border border-white/8 hover:border-white/20 transition-all duration-300 h-full"
                  >
                    <div
                      className={`h-52 bg-gradient-to-br ${work.color} flex items-center justify-center relative`}
                    >
                      <div
                        className="w-14 h-14 rounded-2xl opacity-60"
                        style={{
                          background: work.accent,
                          boxShadow: `0 0 40px ${work.accent}80`,
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-[11px] text-white/30 uppercase tracking-wider mb-2">
                        {work.category}
                      </p>
                      <h3 className="text-[20px] font-semibold text-white tracking-tight mb-2 group-hover:text-[#6366f1] transition-colors">
                        {work.title}
                      </h3>
                      <p className="text-[14px] text-white/50 leading-relaxed">
                        {work.desc}
                      </p>
                      <div className="flex items-center gap-1.5 mt-4 text-[#6366f1] text-[13px] font-medium">
                        查看详情 <ArrowRight size={13} />
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 md:hidden text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-[#0071e3] text-[15px] font-medium"
            >
              查看全部作品 <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="text-[14px] text-[#0071e3] font-medium uppercase tracking-widest mb-3">
              服务范围
            </p>
            <h2 className="text-[40px] md:text-[52px] font-semibold text-[#1d1d1f] tracking-[-0.03em]">
              我能为你做什么
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "用户体验设计",
                desc: "从用户研究到信息架构，打造以人为本的产品体验，让用户爱上你的产品。",
                icon: "✦",
              },
              {
                title: "界面视觉设计",
                desc: "精心打磨每个像素，创造视觉一致、赏心悦目的界面，提升品牌价值感。",
                icon: "◈",
              },
              {
                title: "设计系统搭建",
                desc: "构建可扩展的组件库与设计规范，为团队提供高效、统一的设计生产力工具。",
                icon: "⬡",
              },
              {
                title: "产品设计咨询",
                desc: "提供产品策略与设计方向建议，帮助团队找到设计与商业目标的最佳平衡点。",
                icon: "◎",
              },
            ].map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <TiltCard className="rounded-3xl h-full">
                  <div className="bg-white rounded-3xl p-8 h-full border border-transparent hover:border-[#0071e3]/20 transition-colors">
                    <span className="text-[28px] block mb-4">{s.icon}</span>
                    <h3 className="text-[20px] font-semibold text-[#1d1d1f] tracking-tight mb-3">
                      {s.title}
                    </h3>
                    <p className="text-[15px] text-[#6e6e73] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner — dark */}
      <section className="relative py-32 overflow-hidden bg-[#050508]">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(99,102,241,0.15) 0%, transparent 70%)",
          }}
        />
        <ScrollReveal className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-[40px] md:text-[56px] font-semibold text-white tracking-[-0.04em] leading-[1.05] mb-6">
            有好的想法，
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #6366f1 0%, #0071e3 50%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              让我们一起实现它
            </span>
          </h2>
          <p className="text-[19px] text-white/40 mb-10">
            无论是新产品、改版升级还是设计系统，我都期待与你合作。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-[17px] font-medium transition-all hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background:
                "linear-gradient(135deg, #6366f1 0%, #0071e3 50%, #a855f7 100%)",
              boxShadow: "0 0 40px rgba(99,102,241,0.35)",
            }}
          >
            开始合作 <ArrowRight size={18} />
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
