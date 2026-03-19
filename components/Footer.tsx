import Link from "next/link";
import { Github, Linkedin, ExternalLink } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: ExternalLink, href: "https://behance.net", label: "Behance" },
];

const footerLinks = [
  { href: "/portfolio", label: "作品集" },
  { href: "/about", label: "关于我" },
  { href: "/blog", label: "博客" },
  { href: "/contact", label: "联系" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#e8e8ed]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <Link
              href="/"
              className="text-[20px] font-semibold text-[#1d1d1f] tracking-tight"
            >
              商曦匀
            </Link>
            <p className="mt-3 text-[14px] text-[#6e6e73] max-w-xs leading-relaxed">
              UI/UX 设计师，专注于创造有温度的数字体验。
            </p>
            <div className="flex items-center gap-4 mt-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider">
              导航
            </span>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider">
              合作
            </span>
            <p className="text-[14px] text-[#6e6e73]">有项目想法？欢迎联系！</p>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center px-4 py-2 rounded-full bg-[#0071e3] text-white text-[13px] font-medium hover:bg-[#0077ed] transition-colors"
            >
              发起合作
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#d2d2d7] flex flex-col sm:flex-row justify-between items-center gap-2 text-[12px] text-[#86868b]">
          <span>
            © {new Date().getFullYear()} 商曦匀. All rights reserved.
          </span>
          <span>Designed &amp; Built with care</span>
        </div>
      </div>
    </footer>
  );
}
