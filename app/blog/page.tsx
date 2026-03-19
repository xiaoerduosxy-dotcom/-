import { ArrowRight } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "为什么好的设计系统需要「设计原则」",
    category: "设计系统",
    date: "2024年11月",
    readTime: "8 分钟",
    excerpt:
      "设计系统不只是组件库，它背后的设计原则才是保持一致性和可扩展性的核心。本文分享如何制定有效的设计原则...",
    color: "from-blue-50 to-indigo-50",
  },
  {
    id: 2,
    title: "移动端手势交互设计的 10 个原则",
    category: "交互设计",
    date: "2024年10月",
    readTime: "12 分钟",
    excerpt:
      "手势交互让移动端体验更自然，但设计不当也会造成困惑。从实际项目中总结出的 10 个手势设计原则，帮助你避开常见陷阱...",
    color: "from-purple-50 to-violet-50",
  },
  {
    id: 3,
    title: "如何做一次高质量的用户访谈",
    category: "用户研究",
    date: "2024年9月",
    readTime: "10 分钟",
    excerpt:
      "用户访谈是 UX 研究中最常用的方法之一，但很多设计师容易陷入「确认偏差」。这篇文章分享访谈的准备、执行与分析技巧...",
    color: "from-emerald-50 to-teal-50",
  },
  {
    id: 4,
    title: "设计师如何与工程师更好地协作",
    category: "职场成长",
    date: "2024年8月",
    readTime: "6 分钟",
    excerpt:
      "设计与研发之间的鸿沟是很多团队面临的问题。如何建立共同语言、有效沟通设计意图，从而减少「还原度」的争论...",
    color: "from-amber-50 to-orange-50",
  },
  {
    id: 5,
    title: "从 0 到 1：搭建企业级设计系统的完整流程",
    category: "设计系统",
    date: "2024年7月",
    readTime: "15 分钟",
    excerpt:
      "分享在实际项目中从零搭建设计系统的完整经验，包括如何说服团队、如何规划优先级、如何保证落地...",
    color: "from-rose-50 to-pink-50",
  },
  {
    id: 6,
    title: "2024 UI 设计趋势回顾与思考",
    category: "设计趋势",
    date: "2024年6月",
    readTime: "7 分钟",
    excerpt:
      "盘点 2024 年值得关注的 UI 设计趋势，哪些是真正有价值的演进，哪些只是短暂的流行，如何在趋势中保持自己的判断...",
    color: "from-sky-50 to-cyan-50",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-14">
      {/* Header */}
      <section className="py-24 bg-white text-center px-6">
        <p className="text-[14px] text-[#0071e3] font-medium uppercase tracking-widest mb-4">
          设计博客
        </p>
        <h1 className="text-[52px] md:text-[72px] font-semibold text-[#1d1d1f] tracking-[-0.04em] leading-[1.05] mb-6">
          设计思考
        </h1>
        <p className="text-[19px] text-[#6e6e73] max-w-xl mx-auto">
          记录设计实践中的思考与沉淀，分享 UI/UX 设计、用户研究、设计系统等话题。
        </p>
      </section>

      {/* Posts */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Featured post */}
          <div className="mb-6">
            <Link
              href={`/blog/${posts[0].id}`}
              className="group block rounded-3xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`h-64 bg-gradient-to-br ${posts[0].color} flex items-center justify-center`}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0071e3]/15" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[12px] text-[#0071e3] font-medium uppercase tracking-wider">
                    {posts[0].category}
                  </span>
                  <span className="text-[12px] text-[#86868b]">
                    {posts[0].date} · {posts[0].readTime}
                  </span>
                </div>
                <h2 className="text-[28px] font-semibold text-[#1d1d1f] tracking-tight mb-3 group-hover:text-[#0071e3] transition-colors">
                  {posts[0].title}
                </h2>
                <p className="text-[16px] text-[#6e6e73] leading-relaxed max-w-2xl">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-1.5 mt-6 text-[#0071e3] text-[14px] font-medium">
                  阅读全文 <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group block rounded-3xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`h-44 bg-gradient-to-br ${post.color} flex items-center justify-center`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0071e3]/15" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] text-[#0071e3] font-medium uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-[11px] text-[#86868b]">
                      · {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-[17px] font-semibold text-[#1d1d1f] tracking-tight mb-2 group-hover:text-[#0071e3] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-[13px] text-[#6e6e73] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <p className="text-[12px] text-[#86868b] mt-3">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
