"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import LangToggle from "@/components/LangToggle";

export default function HeroSection() {
  const { t } = useLang();

  // 🔗 Google Calendar booking link
  const bookingLink =
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0a6yt-PY-Hw-c0Ug412iwIKT_V1_QjaBz6bCcDJdsgcmCcSPJtlv5iNifO71ya3pffpb8peR2W";

  return (
    <>
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative min-h-screen overflow-hidden text-white">
        {/* Floating Language Toggle */}
        <LangToggle />

        {/* Background: Venezuelan baseball image */}
        <Image
          src="/images/FOTO-INICIO-BASEBALL.jpg"
          alt="Venezuelan Baseball"
          fill
          priority
          className="object-cover object-center brightness-90"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

        {/* --- CENTER CONTENT --- */}
        <div className="relative z-10 flex flex-col justify-center items-start px-8 md:px-24 h-full">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
          >
            {t.hero.title}
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl mt-4 font-semibold text-gray-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
          >
            {t.hero.subtitle}
          </motion.h2>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-gray-300 mt-4 mb-8">
            {t.hero.text}
          </p>

          {/* CTA Button */}
          <motion.a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-[#C8102E] text-white px-6 py-3 font-semibold rounded-md shadow-md hover:bg-[#b00d25] transition"
          >
            {t.hero.cta}
          </motion.a>
        </div>
      </section>

      {/* ---------------- TOP DIVIDER ---------------- */}
      <div className="h-1 bg-gradient-to-r from-[#0033A0] via-[#FFD100] to-[#C8102E]" />

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section id="about" className="bg-white text-tib-dark py-20 px-8 md:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <Image
              src="/images/mario-profile.jpg"
              alt="Coach Mario Fernandez"
              width={240}
              height={320}
              className="rounded-xl shadow-md object-contain border border-gray-200 bg-white p-2"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              {t.about.title}
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              {t.about.p1}
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              {t.about.p2}
            </p>

            <motion.a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-[#C8102E] text-white px-6 py-3 font-semibold rounded-md shadow-md hover:bg-[#a11226] transition mt-6 md:mt-0"
            >
              {t.about.cta}
            </motion.a>
          </div>
        </div>
      </section>

      {/* ---------------- BOTTOM DIVIDER ---------------- */}
      <div className="h-1 bg-gradient-to-r from-[#0033A0] via-[#FFD100] to-[#C8102E]" />

      {/* ---------------- PROGRAMS SECTION ---------------- */}
      <section
        id="programs"
        className="relative bg-tib-dark text-white py-24 px-8 md:px-24 overflow-hidden"
      >
        {/* Optional faint background pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('/images/seamless-baseball-texture.png')] bg-cover bg-center" />

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-tib-white"
          >
            {t.programs.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-tib-gray mb-16 max-w-2xl mx-auto"
          >
            {t.programs.intro}
          </motion.p>
        </div>

        {/* Animated Cards */}
        <div className="relative max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
          {[
            {
              title: t.programs.private.title,
              desc: t.programs.private.desc,
              color: "from-tib-blue to-tib-red",
              button: "bg-[#FFD100] text-tib-dark hover:bg-[#e6c000]", // Yellow
              icon: "⚾",
              cta: t.programs.private.cta,
            },
            {
              title: t.programs.velocity.title,
              desc: t.programs.velocity.desc,
              color: "from-tib-red to-tib-blue",
              button: "bg-[#1E56F0] text-white hover:bg-[#163fd0]", // Brighter blue
              icon: "💪",
              cta: t.programs.velocity.cta,
            },
            {
              title: t.programs.group.title,
              desc: t.programs.group.desc,
              color: "from-tib-blue to-[#00297C]",
              button: "bg-[#C8102E] text-white hover:bg-[#a11226]", // Red
              icon: "🔥",
              cta: t.programs.group.cta,
            },
          ].map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative group bg-white text-tib-dark rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Accent gradient bar */}
              <div
                className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${program.color}`}
              />
              {/* Card content */}
              <div className="p-8 pt-10">
                <div className="text-5xl mb-4 text-center">{program.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-tib-blue text-center">
                  {program.title}
                </h3>
                <p className="text-gray-700 mb-8 text-center leading-relaxed">
                  {program.desc}
                </p>
                <div className="flex justify-center">
                  <a
                    href={bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${program.button} px-5 py-2 rounded-md font-semibold shadow-md transition`}
                  >
                    {program.cta}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stat Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 place-items-center">
            <div className="flex flex-col items-center text-center max-w-[240px]">
              <h3 className="text-2xl font-semibold text-[#FFD100] leading-snug">
                {t.programs.stats.p1}
              </h3>
            </div>
            <div className="flex flex-col items-center text-center max-w-[240px]">
              <h3 className="text-2xl font-semibold text-[#1E56F0] leading-snug">
                {t.programs.stats.p2}
              </h3>
            </div>
            <div className="flex flex-col items-center text-center max-w-[240px]">
              <h3 className="text-2xl font-semibold text-[#C8102E] leading-snug">
                {t.programs.stats.p3}
              </h3>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

