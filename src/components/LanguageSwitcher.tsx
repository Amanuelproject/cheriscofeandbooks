import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, Hand } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { languages, Language } from '@/i18n/translations';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showPointer, setShowPointer] = useState(true);

  const currentLang = languages.find(l => l.code === language);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPointer(false);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  // Hide pointer when user interacts
  const handleOpen = () => {
    setShowPointer(false);
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hand Pointer */}
      <AnimatePresence>
        {showPointer && (
          <motion.div
            className="absolute -bottom-16 right-0 z-50 flex items-center gap-2 pointer-events-none"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-2 bg-card/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-border"
            >
              <span className="text-xs text-muted-foreground whitespace-nowrap">{t('langPointer.text')}</span>
              <motion.div
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                <Hand className="w-4 h-4 text-primary transform -rotate-45" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={handleOpen}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-sm"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLang?.nativeName}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="absolute top-full right-0 mt-2 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-50 min-w-[160px]"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as Language);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left text-sm hover:bg-secondary/50 transition-colors flex items-center justify-between ${
                    language === lang.code ? 'bg-primary/10 text-primary' : ''
                  }`}
                >
                  <span>{lang.nativeName}</span>
                  {language === lang.code && (
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
