import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const skills = [
  {
    category: "设计能力",
    items: ["UI设计", "交互设计", "用户体验", "产品分析"],
  },
  {
    category: "视觉创意",
    items: ["视觉创新", "插画", "手绘", "动效视频", "三维视觉"],
  },
  {
    category: "前沿技术",
    items: ["AIGC", "Stable Diffusion", "Midjourney", "Figma", "Axure"],
  },
  {
    category: "软实力",
    items: ["逻辑思维", "沟通推动", "应变力", "抗压力", "自驱力"],
  },
];

const experiences = [
  {
    role: "UI/UX 设计师",
    company: "芯盾时代科技有限公司",
    period: "2020.11 — 2025.01",
    desc: "负责公司产品移动端、客户端、Web 端及网页的视觉与交互设计；主导设计系统搭建，制定设计规范；与产品和开发紧密对接，确保交互界面落地一致性；利用 AI 工具高效完成产品宣传。项目：SDP 安全客户端、CRM 客户关系管理系统、SDP 后管平台、公司官网等。",
  },
  {
    role: "UI/UX 设计师",
    company: "智才广赢信息技术有限公司",
    period: "2019.03 — 2020.09",
    desc: "结合公司品牌特点进行 APP、网站整体风格设计，参与制定设计规范；提出 UI、交互方面建议，优化视觉设计和用户体验；负责产品更新迭代及运营设计专题页、VIS、海报等。项目：瑜心瑜 APP（移动健身）、壹加田 APP（线上教育）、潮代 APP（电商）等。",
  },
  {
    role: "UI 设计师",
    company: "鲸落纷呈动漫科技有限公司",
    period: "2018.07 — 2019.03",
    desc: "负责蛋酱 APP 界面优化和功能升级；参与产品需求会议，提出有创意的设计想法；利用 Axure 绘制交互原型图，制定移动端产品规范并推动设计体验优化。",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-14">
      {/* Hero */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[14px] text-[#0071e3] font-medium uppercase tracking-widest mb-4">
                关于我
              </p>
              <h1 className="text-[48px] md:text-[64px] font-semibold text-[#1d1d1f] tracking-[-0.04em] leading-[1.05] mb-6">
                商曦匀
              </h1>
              <p className="text-[19px] text-[#6e6e73] leading-[1.6] mb-8">
                一名专注于 UI/UX 设计的设计师，相信好的设计不只是好看，
                更要解决真实问题、创造真实价值。
              </p>
              <p className="text-[17px] text-[#6e6e73] leading-[1.7] mb-8">
                拥有 5 年以上数字产品设计经验，擅长 B 端与 C 端产品的全链路设计，
                熟练运用色彩心理学、栅格系统和 Figma 组件化设计规范。
                具备完整的界面设计经验和设计创新意识，注重产品品质与细节，
                并积极探索 AI + 设计工作流优化方案。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0071e3] text-white text-[15px] font-medium hover:bg-[#0077ed] transition-colors"
              >
                联系我 <ArrowRight size={15} />
              </Link>
            </div>

            {/* Avatar */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-72 h-80 rounded-[40px] overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-100">
                <Image
                  src="/avatar.png"
                  alt="商曦匀"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 bg-[#f5f5f7] px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[36px] font-semibold text-[#1d1d1f] tracking-tight mb-12">
            专业技能
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.category} className="bg-white rounded-2xl p-6">
                <h3 className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wider mb-4">
                  {skill.category}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-[15px] text-[#1d1d1f] flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#0071e3]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[36px] font-semibold text-[#1d1d1f] tracking-tight mb-12">
            工作经历
          </h2>
          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="flex gap-6 pb-8 border-b border-[#e8e8ed] last:border-0"
              >
                <div className="flex-shrink-0 w-2 flex flex-col items-center pt-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#0071e3]" />
                  {i < experiences.length - 1 && (
                    <div className="w-[1px] flex-1 bg-[#e8e8ed] mt-2" />
                  )}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-[18px] font-semibold text-[#1d1d1f]">
                      {exp.role}
                    </h3>
                    <span className="text-[13px] text-[#86868b]">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[14px] text-[#0071e3] font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-[15px] text-[#6e6e73] leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#f5f5f7] px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[36px] font-semibold text-[#1d1d1f] tracking-tight">
              设计理念
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "以人为本",
                desc: "设计始终从用户的真实需求出发，数据和研究是决策的基础，而非直觉或偏好。",
              },
              {
                title: "简单即深刻",
                desc: "真正的好设计是做减法，把复杂留给系统，把简单留给用户。每一次交互都应该直觉自然。",
              },
              {
                title: "细节成就卓越",
                desc: "精心打磨每个细节，不是为了炫技，而是相信细节的积累才能创造令人难忘的整体体验。",
              },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8">
                <h3 className="text-[20px] font-semibold text-[#1d1d1f] tracking-tight mb-3">
                  {v.title}
                </h3>
                <p className="text-[15px] text-[#6e6e73] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
