"use client";

import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to a form service (e.g. Formspree, Resend)
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[#d2d2d7] bg-white text-[15px] text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/10 transition-all";

  return (
    <div className="pt-14">
      {/* Header */}
      <section className="py-24 bg-white text-center px-6">
        <p className="text-[14px] text-[#0071e3] font-medium uppercase tracking-widest mb-4">
          联系我
        </p>
        <h1 className="text-[52px] md:text-[72px] font-semibold text-[#1d1d1f] tracking-[-0.04em] leading-[1.05] mb-6">
          期待与你合作
        </h1>
        <p className="text-[19px] text-[#6e6e73] max-w-xl mx-auto">
          无论是新项目、设计咨询还是简单的问候，我都很乐意听你说。
        </p>
      </section>

      {/* Contact */}
      <section className="py-16 bg-[#f5f5f7] px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-[28px] font-semibold text-[#1d1d1f] tracking-tight mb-6">
              联系方式
            </h2>
            <div className="flex flex-col gap-5 mb-10">
              <a
                href="mailto:sxy13931439991@163.com"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white hover:shadow-md transition-shadow group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0071e3]/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[#0071e3]" />
                </div>
                <div>
                  <p className="text-[12px] text-[#86868b] mb-0.5">邮箱</p>
                  <p className="text-[15px] text-[#1d1d1f] font-medium group-hover:text-[#0071e3] transition-colors">
                    sxy13931439991@163.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white">
                <div className="w-10 h-10 rounded-xl bg-[#0071e3]/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={18} className="text-[#0071e3]" />
                </div>
                <div>
                  <p className="text-[12px] text-[#86868b] mb-0.5">微信</p>
                  <p className="text-[15px] text-[#1d1d1f] font-medium">
                    kranke-kinder
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white">
              <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-3">
                响应时间
              </h3>
              <p className="text-[14px] text-[#6e6e73] leading-relaxed">
                我通常会在 24 小时内回复消息。如果是紧急合作需求，请在邮件标题中注明「紧急」，我会优先处理。
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-white rounded-3xl">
                <div className="w-16 h-16 rounded-full bg-[#0071e3]/10 flex items-center justify-center mb-6">
                  <Send size={24} className="text-[#0071e3]" />
                </div>
                <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-3">
                  消息已发送！
                </h3>
                <p className="text-[16px] text-[#6e6e73]">
                  感谢你的来信，我会尽快回复。
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 flex flex-col gap-5"
              >
                <h2 className="text-[22px] font-semibold text-[#1d1d1f] tracking-tight mb-2">
                  发送消息
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-medium text-[#1d1d1f] mb-1.5">
                      姓名 <span className="text-[#e11d48]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="你的名字"
                      className={inputClass}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-[#1d1d1f] mb-1.5">
                      公司/机构
                    </label>
                    <input
                      type="text"
                      placeholder="可选"
                      className={inputClass}
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#1d1d1f] mb-1.5">
                    邮箱 <span className="text-[#e11d48]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className={inputClass}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#1d1d1f] mb-1.5">
                    项目描述 <span className="text-[#e11d48]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="简单描述一下你的项目或合作需求..."
                    className={`${inputClass} resize-none`}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#0071e3] text-white text-[15px] font-medium hover:bg-[#0077ed] transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  发送消息 <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
