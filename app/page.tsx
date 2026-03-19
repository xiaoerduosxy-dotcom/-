  import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredWork = [
  {
    id: 1,
    title: "金融 App 重设计",
    category: "移动端 · UI/UX",
    desc: "为某头部金融平台重新设计移动端 App，提升核心流程转化率 34%。",
    cardBg:
      "linear-gradient(180deg, rgba(99,102,241,0.30) 0%, rgba(99,102,241,0.05) 100%)",
    borderBg:
      "linear-gradient(180deg, rgba(99,102,241,0.50) 0%, rgba(99,102,241,0.05) 100%)",
    accent: "#6366f1",
  },
  {
    id: 2,
    title: "SaaS 管理后台",
    category: "Web · 设计系统",
    desc: "从零搭建企业级 SaaS 产品设计系统，覆盖 200+ 组件，支撑多产品线。",
    cardBg:
      "linear-gradient(180deg, rgba(168,85,247,0.30) 0%, rgba(168,85,247,0.05) 100%)",
    borderBg:
      "linear-gradient(180deg, rgba(168,85,247,0.50) 0%, rgba(168,85,247,0.05) 100%)",
    accent: "#a855f7",
  },
  {
    id: 3,
    title: "智能硬件配套 App",
    category: "IoT · 交互设计",
    desc: "为智能家居设备设计配套移动端应用，打造流畅的设备控制体验。",
    cardBg:
      "linear-gradient(180deg, rgba(0,113,227,0.30) 0%, rgba(0,113,227,0.05) 100%)",
    borderBg:
      "linear-gradient(180deg, rgba(30,196,235,0.50) 0%, rgba(30,196,235,0.05) 100%)",
    accent: "#0071e3",
  },
];

const services = [
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
];

const GRADIENT_ACCENT =
  "linear-gradient(108deg, #6366f1 0%, #0071e3 50%, #a855f7 100%)";
const SERVICE_CARD_BG =
  "linear-gradient(108deg, rgba(99,102,241,0.15) 0%, rgba(0,113,227,0.15) 50%, rgba(168,85,247,0.15) 100%)";
const SERVICE_BORDER_BG =
  "linear-gradient(108deg, rgba(99,102,241,0.50) 0%, rgba(0,113,227,0.50) 50%, rgba(168,85,247,0.50) 100%)";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Featured Work ─────────────────────────────────────────── */}
      <section className="py-28 bg-[#050508]">
        <div className="max-w-[1100px] mx-auto px-6">
          <ScrollReveal>
            <div className="mb-11">
              <p className="text-[18px] text-white/60 font-normal tracking-tight text-center mb-4">
                Selected Works
              </p>
              <h2 className="text-[39px] md:text-[52px] font-normal text-white tracking-tight leading-[1.08]">
                近期项目
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
            {featuredWork.map((work, i) => (
              <ScrollReveal key={work.id} delay={i * 0.12} direction="up">
                {/* gradient border wrapper */}
                <div
                  className="rounded-[15px] p-[2px]"
                  style={{ background: work.borderBg }}
                >
                  <Link
                    href={`/portfolio/${work.id}`}
                    className="group flex flex-col rounded-[13px] overflow-hidden"
                    style={{ background: work.cardBg }}
                  >
                    {/* image placeholder */}
                    <div className="h-44 md:h-48 bg-white/[0.04] rounded-[11px] m-4 flex-shrink-0" />

                    {/* content */}
                    <div className="px-4 pb-6 pt-1 flex flex-col gap-1.5">
                      <p className="text-[10px] text-white/30 uppercase tracking-widest font-normal">
                        {work.category}
                      </p>
                      <h3 className="text-[18px] font-normal text-white tracking-tight">
                        {work.title}
                      </h3>
                      <p className="text-[13px] text-white/50 leading-relaxed">
                        {work.desc}
                      </p>
                      <div
                        className="flex items-center gap-1.5 mt-2 text-[12px] font-medium"
                        style={{ color: work.accent }}
                      >
                        查看详情 <ArrowRight size={12} />
                      </div>
                    </div>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────── */}
      <section className="py-28 bg-[#050508]">
        <div className="max-w-[1100px] mx-auto px-6">
          <ScrollReveal className="mb-11">
            <h2 className="text-[39px] md:text-[52px] font-normal text-white tracking-tight leading-[1.08]">
              我能为你做什么
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <ScrollReveal
                key={s.title}
                delay={i * 0.1}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                {/* gradient border */}
                <div
                  className="rounded-[15px] p-[2px] h-full"
                  style={{ background: SERVICE_BORDER_BG }}
                >
                  <div
                    className="rounded-[13px] p-6 h-full flex flex-col gap-6"
                    style={{ background: SERVICE_CARD_BG }}
                  >
                    {/* icon */}
                    <div
                      className="w-[50px] h-[50px] rounded-[9px] flex items-center justify-center text-[22px] text-white flex-shrink-0"
                      style={{
                        border: "1.5px solid",
                        borderImage: `${GRADIENT_ACCENT} 1`,
                        background: "rgba(255,255,255,0.04)",
                      }}
                    >
                      {s.icon}
                    </div>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-[24px] font-medium text-white tracking-tight">
                        {s.title}
                      </h3>
                      <p className="text-[15px] text-white/80 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden bg-[#050508]">
        {/* indigo radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(99,102,241,0.15) 0%, transparent 70%)",
          }}
        />

        <ScrollReveal className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-[40px] md:text-[56px] font-normal text-white tracking-[-0.04em] leading-[1.28] mb-6">
            有好的想法
            <br />
            让我们一起实现它
          </h2>
          <p className="text-[17px] md:text-[19px] text-white/40 mb-10 leading-relaxed">
            无论是新产品、改版升级还是设计系统，我都期待与你合作。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-[17px] font-medium transition-all hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: GRADIENT_ACCENT,
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
