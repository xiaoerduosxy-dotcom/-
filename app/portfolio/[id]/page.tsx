import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects: Record<
  string,
  {
    id: number;
    title: string;
    category: string;
    year: string;
    role: string;
    duration: string;
    overview: string;
    challenge: string;
    solution: string;
    result: string;
    color: string;
    accent: string;
    tags: string[];
  }
> = {
  "1": {
    id: 1,
    title: "金融 App 重设计",
    category: "移动端 · UI/UX",
    year: "2024",
    role: "主设计师",
    duration: "3 个月",
    overview:
      "为某头部金融平台重新设计移动端 App。通过深入的用户研究发现，原有 App 的核心转账、投资流程过于繁琐，导致用户流失率偏高。",
    challenge:
      "如何在保持金融产品严谨性和安全感的同时，大幅简化操作流程、降低认知负担，让用户在完成复杂金融操作时感到轻松自信。",
    solution:
      "通过用户访谈和数据分析重新梳理核心流程，减少操作步骤 40%；引入渐进式披露设计模式，按需展示信息；建立统一的组件库确保视觉一致性。",
    result:
      "核心转化率提升 34%，用户满意度评分从 3.2 提升至 4.6（满分 5 分），App Store 评分从 3.8 提升至 4.7。",
    color: "from-blue-50 to-indigo-100",
    accent: "#0071e3",
    tags: ["用户研究", "交互设计", "原型制作", "可用性测试", "移动端"],
  },
  "2": {
    id: 2,
    title: "SaaS 管理后台",
    category: "Web · 设计系统",
    year: "2024",
    role: "设计负责人",
    duration: "6 个月",
    overview:
      "从零搭建企业级 SaaS 产品设计系统，覆盖 200+ 组件，建立完整的设计语言与规范文档，支撑 3 条产品线并行开发。",
    challenge:
      "团队分散、产品线多，缺乏统一设计语言导致界面割裂感强，开发效率低下，设计与研发沟通成本高。",
    solution:
      "建立原子设计方法论，从基础 Token 到复杂组件逐层搭建；配套完整的 Figma 组件库与 Storybook 文档；建立设计评审机制保证规范落地。",
    result:
      "设计交付效率提升 50%，组件复用率达 85%，新功能上线周期从 4 周缩短至 2 周。",
    color: "from-purple-50 to-violet-100",
    accent: "#7c3aed",
    tags: ["设计系统", "组件库", "Figma", "前端协作", "文档"],
  },
  "3": {
    id: 3,
    title: "智能硬件配套 App",
    category: "IoT · 交互设计",
    year: "2023",
    role: "UI/UX 设计师",
    duration: "4 个月",
    overview:
      "为智能家居设备设计配套移动端应用，覆盖设备配对、场景设置、远程控制等核心功能。",
    challenge:
      "IoT 产品的配对和配置流程技术复杂，如何让非技术用户也能轻松完成设备绑定，是核心设计挑战。",
    solution:
      "设计引导式配对流程，将技术细节转化为直观的步骤说明；通过动效反馈实时传达设备状态；简化场景配置为拖拽式交互。",
    result:
      "配对成功率从 68% 提升至 94%，客服工单减少 45%，用户好评率 4.8 星。",
    color: "from-emerald-50 to-teal-100",
    accent: "#059669",
    tags: ["IoT", "移动端", "交互动效", "蓝牙配对", "用户引导"],
  },
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects[id];

  if (!project) {
    return (
      <div className="pt-28 text-center py-40">
        <h1 className="text-[32px] font-semibold text-[#1d1d1f]">
          项目不存在
        </h1>
        <Link
          href="/portfolio"
          className="mt-6 inline-flex items-center gap-2 text-[#0071e3]"
        >
          <ArrowLeft size={16} /> 返回作品集
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-14">
      {/* Hero */}
      <div
        className={`h-[50vh] min-h-[400px] bg-gradient-to-br ${project.color} flex items-center justify-center`}
      >
        <div
          className="w-24 h-24 rounded-3xl opacity-30"
          style={{ background: project.accent }}
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Back */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-[#6e6e73] text-[14px] mb-10 hover:text-[#1d1d1f] transition-colors"
        >
          <ArrowLeft size={14} /> 返回作品集
        </Link>

        {/* Title */}
        <p className="text-[13px] text-[#0071e3] uppercase tracking-widest mb-3">
          {project.category}
        </p>
        <h1 className="text-[44px] font-semibold text-[#1d1d1f] tracking-[-0.03em] leading-[1.1] mb-8">
          {project.title}
        </h1>

        {/* Meta */}
        <div className="grid grid-cols-3 gap-6 py-8 border-y border-[#e8e8ed] mb-12">
          {[
            { label: "年份", value: project.year },
            { label: "角色", value: project.role },
            { label: "周期", value: project.duration },
          ].map((m) => (
            <div key={m.label}>
              <p className="text-[12px] text-[#86868b] uppercase tracking-wider mb-1">
                {m.label}
              </p>
              <p className="text-[15px] font-medium text-[#1d1d1f]">
                {m.value}
              </p>
            </div>
          ))}
        </div>

        {/* Content sections */}
        {[
          { title: "项目概述", content: project.overview },
          { title: "设计挑战", content: project.challenge },
          { title: "解决方案", content: project.solution },
          { title: "项目成果", content: project.result },
        ].map((section) => (
          <div key={section.title} className="mb-10">
            <h2 className="text-[22px] font-semibold text-[#1d1d1f] tracking-tight mb-4">
              {section.title}
            </h2>
            <p className="text-[17px] text-[#6e6e73] leading-[1.7]">
              {section.content}
            </p>
          </div>
        ))}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[#e8e8ed]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[13px] px-3 py-1.5 rounded-full bg-[#f5f5f7] text-[#6e6e73]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Next project */}
        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[#0071e3] text-[15px] font-medium"
          >
            查看更多作品 <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
