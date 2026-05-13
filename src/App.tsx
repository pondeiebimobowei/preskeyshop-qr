/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShoppingCart, ArrowRight, Instagram, MessageCircle } from "lucide-react";

const LinkItem = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  variant = "default",
  colorClass = "",
  href = "#",
  delay = 0 
}: { 
  icon: any, 
  title: string, 
  subtitle?: string, 
  variant?: "default" | "social",
  colorClass?: string,
  href?: string,
  delay?: number
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.01, x: 2 }}
      whileTap={{ scale: 0.98 }}
      className={`
        w-full flex items-center justify-between p-4 mb-4 rounded-3xl transition-all duration-200
        ${variant === "default" ? "bg-[#F8F9FA] hover:bg-[#F2F3F5]" : "bg-white hover:bg-gray-50 border border-transparent hover:border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"}
      `}
    >
      <div className="flex items-center gap-4">
        <div className={`
          flex items-center justify-center w-14 h-14 rounded-2xl
          ${variant === "default" ? "bg-white shadow-sm border border-gray-50" : colorClass || "bg-gray-100"}
        `}>
          <Icon className={`w-7 h-7 ${variant === "default" ? "text-black" : "text-white"}`} />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-[#1A1F26] text-lg">{title}</span>
          {subtitle && <span className="text-sm text-gray-400 font-medium tracking-tight">{subtitle}</span>}
        </div>
      </div>
      <ArrowRight className="w-5 h-5 text-gray-300 mr-2" />
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#F2F4F7] font-sans flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-md flex flex-col items-center mt-16 px-4 relative">
        
        {/* Header Shape / Pocket */}
        <div className="relative w-full flex justify-center">
          {/* The white crown/pocket */}
          <div className="relative bg-white w-40 h-24 rounded-t-[54px] flex items-center justify-center z-10">
            
            {/* Inverted curve left */}
            <div className="absolute -left-[30px] bottom-0 w-[30px] h-[30px] bg-transparent rounded-br-[30px] shadow-[10px_10px_0_0_#fff]" />
            
            {/* Inverted curve right */}
            <div className="absolute -right-[30px] bottom-0 w-[30px] h-[30px] bg-transparent rounded-bl-[30px] shadow-[-10px_10px_0_0_#fff]" />

            {/* Content holder (Logo) */}
            <div className="w-20 h-20 bg-black rounded-[24px] flex items-center justify-center transform -translate-y-2 shadow-xl">
              {/* Graphic P Logo */}
              <svg 
                viewBox="0 0 24 24" 
                className="w-12 h-12 text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 3H13C16.866 3 20 6.13401 20 10C20 13.866 16.866 17 13 17H10V21H6V3ZM10 7V13H13C14.6569 13 16 11.6569 16 10C16 8.34315 14.6569 7 13 7H10Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white w-full rounded-[48px] px-8 pb-16 shadow-[0_10px_50px_rgba(0,0,0,0.04)] flex flex-col items-center text-center relative z-0"
        >
          <div className="h-8" /> {/* Spacer */}
          
          <h1 className="text-3xl font-bold text-[#0F172A] tracking-tight mb-3">Preskey</h1>
          
          <p className="text-base text-gray-500 leading-relaxed max-w-[320px] mb-10 font-medium opacity-90">
            Preskey is a modern lifestyle and fashion marketplace redefining how people discover premium style, quality, and culture.
          </p>

          <div className="w-full h-px bg-gray-50 mb-10" />

          {/* Links Section */}
          <div className="w-full space-y-2">
            <LinkItem 
              icon={ShoppingCart} 
              title="Our Webstore" 
              href="https://preskeyshop.com"
              delay={0.1}
            />

            <div className="pt-6 pb-4">
              <h2 className="text-left font-bold text-xl text-[#0F172A]">Find Us on</h2>
            </div>

            <LinkItem 
              icon={Instagram} 
              title="Instagram" 
              subtitle="Connect with us"
              variant="social"
              colorClass="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
              href="https://www.instagram.com/preskey"
              delay={0.2}
            />

            <LinkItem 
              icon={MessageCircle} 
              title="WhatsApp" 
              subtitle="Talk to us"
              variant="social"
              colorClass="bg-[#25D366]"
              href="https://wa.me/message/Q67HHNHDH35FH1"
              delay={0.3}
            />
          </div>
        </motion.div>
      </div>

      {/* Footer Indicator */}
      <div className="mt-auto pb-6">
        <div className="w-36 h-1.5 bg-gray-900/10 rounded-full" />
      </div>
    </div>
  );
}
