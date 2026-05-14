/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import logo from "../p.webp";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart, ArrowRight, Instagram, MessageCircle, ArrowLeft } from "lucide-react";

const LinkItem = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  variant = "default",
  colorClass = "",
  href = "#",
  onClick,
}: { 
  icon: any, 
  title: string, 
  subtitle?: string, 
  variant?: "default" | "social",
  colorClass?: string,
  href?: string,
  onClick?: () => void;
}) => {
  return (
    <motion.a
      href={href}
      target={onClick ? undefined : "_blank"}
      rel={onClick ? undefined : "noopener noreferrer"}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ scale: 1.01, x: 2 }}
      whileTap={{ scale: 0.98 }}
      className={`
        w-full flex items-center justify-between p-4 mb-3 rounded-2xl transition-all duration-200 cursor-pointer
        ${variant === "default" ? "bg-[#F8F9FA] hover:bg-[#F2F3F5]" : "bg-white hover:bg-gray-50 border border-transparent hover:border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"}
      `}
    >
      <div className="flex items-center gap-4">
        <div className={`
          flex items-center justify-center w-12 h-12 rounded-xl
          ${variant === "default" ? "bg-white shadow-sm border border-gray-50" : colorClass || "bg-gray-100"}
        `}>
          <Icon className={`w-6 h-6 ${variant === "default" ? "text-black" : "text-white"}`} />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-[#1A1F26] text-base">{title}</span>
          {subtitle && <span className="text-xs text-gray-400 font-medium tracking-tight">{subtitle}</span>}
        </div>
      </div>
      <ArrowRight className="w-4 h-4 text-gray-300 mr-1" />
    </motion.a>
  );
};



export default function App() {
  const [view, setView] = useState<"bio" | "coming-soon">("bio");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#F2F4F7] to-[#E5E7EB] font-sans flex flex-col items-center overflow-x-hidden p-4">
      <div className="w-full max-w-sm flex flex-col items-center mt-8 relative">
        
        {/* Header Shape / Pocket */}
        <div className="relative w-full flex justify-center h-20">
          <AnimatePresence mode="wait">
            {view === "bio" && (
              <motion.div 
                key="header-pocket"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="relative bg-white w-32 h-20 rounded-t-[40px] flex items-center justify-center z-10"
              >
                <div className="absolute -left-[20px] bottom-0 w-[20px] h-[20px] bg-transparent rounded-br-[20px] shadow-[8px_8px_0_0_#fff]" />
                <div className="absolute -right-[20px] bottom-0 w-[20px] h-[20px] bg-transparent rounded-bl-[20px] shadow-[-8px_8px_0_0_#fff]" />
                <motion.div 
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="w-20 h-20 rounded-[24px] flex items-center justify-center "
                >
                  <img src={logo} width={500} alt="Logo" className="w-20 h-20" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          {view === "bio" ? (
            <motion.div 
              key="bio-view"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              className="bg-white w-full rounded-[40px] px-6 pb-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] flex flex-col items-center text-center relative z-0"
            >
              <div className="h-4" />
              <motion.h1 variants={itemVariants} className="text-2xl font-bold text-[#0F172A] tracking-tight mb-2">
                PRESKEY
              </motion.h1>
              <motion.p variants={itemVariants} className="text-sm text-gray-500 leading-relaxed max-w-[280px] mb-6 font-medium opacity-80">
                Our shopping service helps people find fashion items that suit their style, needs, and budget. We save you time by picking out the best options, whether you need a new wardrobe, an outfit for a special event, or just help keeping up with fashion trends. We do the shopping so you don’t have to, making it easy and stress-free to look your best.
              </motion.p>
              <motion.div variants={itemVariants} className="w-full h-px bg-gray-50 mb-6" />
              <div className="w-full space-y-1">
                <LinkItem 
                  icon={ShoppingCart} 
                  title="Our Webstore" 
                  onClick={() => setView("coming-soon")}
                />
                <motion.div variants={itemVariants} className="pt-3 pb-2 px-4">
                  <h2 className="text-left font-bold text-lg text-[#0F172A]">Find Us on</h2>
                </motion.div>
                <LinkItem 
                  icon={Instagram} 
                  title="Instagram" 
                  subtitle="Connect with us"
                  variant="social"
                  colorClass="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
                  href="https://www.instagram.com/preskey"
                />
                <LinkItem 
                  icon={MessageCircle} 
                  title="WhatsApp" 
                  subtitle="Talk to us"
                  variant="social"
                  colorClass="bg-[#25D366]"
                  href="https://wa.me/message/Q67HHNHDH35FH1"
                />
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="coming-soon-view"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-white w-full rounded-[40px] px-8 py-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] flex flex-col items-center text-center"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 15, delay: 0.2 }}
                className="w-20 h-20 rounded-[24px] flex items-center justify-center mb-8"
              >
                <img src={logo} width={500} alt="Logo" className="w-20 h-20" />
              </motion.div>
              
              <h1 className="text-3xl font-bold text-[#0F172A] tracking-tight mb-4">Coming Soon</h1>
              <p className="text-gray-500 mb-8 max-w-[280px] leading-relaxed">
                Our webstore is currently under development. Check back soon for updates!
              </p>

              <button 
                onClick={() => {
                  setView("bio");
                }}
                className="mt-10 text-gray-400 hover:text-black transition-all flex items-center gap-2 text-sm font-semibold group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Links
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 pb-4">
        <div className="w-24 h-1 bg-gray-900/10 rounded-full" />
      </div>
    </div>
  );
}

