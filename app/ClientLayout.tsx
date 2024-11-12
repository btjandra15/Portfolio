"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Transition from "@/components/Transition";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div className="h-full" key={pathname}>
        <Transition />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}