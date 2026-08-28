'use client';

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import CustomCursor from '@/components/ui/CustomCursor';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    // Admin routes render their own layout (sidebar etc.) without the public
    // site's Header/Footer/WhatsApp button.
    return <>{children}</>;
  }

  return (
    <>
      <CustomCursor />
      <div className="flex flex-col min-h-screen">
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            className="flex-1"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}
