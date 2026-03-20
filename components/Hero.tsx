"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: "easeOut" as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050508]">
      {/* ── Background glow blobs ────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* indigo center-left */}
        <motion.div
          className="absolute top-[-20%] left-[-5%] w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* blue right */}
        <motion.div
          className="absolute top-[5%] right-[-5%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,113,227,0.30) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* purple bottom-center */}
        <motion.div
          className="absolute bottom-[-10%] left-[30%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
          animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      {/* ── Main layout: left text | center image | bg type ── */}
      <div className="relative w-full max-w-[1440px] mx-auto px-10 md:px-24 min-h-screen flex items-center">

        {/* Left — text content */}
        <div className="relative z-10 flex flex-col gap-6 max-w-xs md:max-w-sm pt-20 pb-32">
          {/* 引号装饰 */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-[48px] leading-none font-serif text-indigo-400/40 select-none"
          >
            ❝
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.05}
            className="text-[44px] md:text-[52px] font-normal leading-[1.1] tracking-[-0.045em] text-white"
          >
            设计
            <br />
            让体验更美好
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.15}
            className="text-[12px] text-[#808396] leading-[2.3] tracking-[0.18em]"
          >
            专注于 UI/UX 设计，擅长将复杂问题转化为直观、优雅的数字体验。
            <br />
            为产品注入温度，让每一次交互都令人愉悦。
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
            className="flex items-center gap-4 mt-2"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-[16px] font-medium transition-all hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background:
                  "linear-gradient(108deg, #6366f1 0%, #0071e3 50%, #a855f7 100%)",
                boxShadow: "0 0 30px rgba(99,102,241,0.40)",
              }}
            >
              查看作品集
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white/80 text-[16px] font-medium border border-white/20 backdrop-blur-sm hover:border-white/40 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              联系合作
            </Link>
          </motion.div>
        </div>

        {/* Center — character image */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 pointer-events-none select-none"
          style={{ width: 398, height: 603 }}
        >
          <Image
            src="/images/更透版作品集封面-人物.png"
            alt="设计师形象"
            fill
            style={{ objectFit: "contain", objectPosition: "bottom" }}
            priority
          />
        </motion.div>

        {/* Background typography — "design" & "UI/UX" */}
        <div
          className="absolute right-[-2%] top-1/2 -translate-y-1/2 z-0 pointer-events-none select-none leading-none"
          aria-hidden="true"
        >
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            <p
              className="text-white font-black tracking-tight"
              style={{ fontSize: "clamp(80px, 11vw, 160px)", fontFamily: "'DIN Condensed', 'Impact', sans-serif" }}
            >
              design
            </p>
            <p
              className="text-white font-black tracking-tight"
              style={{ fontSize: "clamp(40px, 5vw, 75px)", fontFamily: "'DIN Condensed', 'Impact', sans-serif" }}
            >
              UI/UX
            </p>
          </motion.div>
        </div>

        {/* Right — decorative quote */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="absolute right-8 top-1/2 -translate-y-[120%] z-10 text-right hidden xl:block"
        >
          <p className="text-[12px] text-[#808396] tracking-[0.18em] leading-[2.3] max-w-[200px]">
            「设计是时光的诗行，在方寸之间，
            <br />
            以匠心为笔，书写生活的无尽浪漫」
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
      >
        <motion.div
          className="w-[1px] h-10 bg-gradient-to-b from-transparent to-white/30"
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
