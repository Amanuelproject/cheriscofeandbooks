import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, Phone, Heart } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import cherishLogo from '@/assets/cherish-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30">
                <img src={cherishLogo} alt="Cherish Addis" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-serif text-xl">Cherish Addis</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              {t('footer.tagline')}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/cherishaddis/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/CherishAddis/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:cherchiscafeandbook@gmail.com"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+251927957171"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">{t('footer.explore')}</h4>
            <ul className="space-y-3">
              {[
                { label: t('nav.about'), id: 'about' },
                { label: t('nav.menu'), id: 'menu' },
                { label: t('nav.reviews'), id: 'reviews' },
                { label: t('nav.visit'), id: 'location' },
                { label: t('nav.contact'), id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-medium mb-4">{t('footer.hours')}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="text-foreground">{t('location.monSat')}</span><br />
                {t('location.monSatTime')}
              </p>
              <p>
                <span className="text-foreground">{t('location.sunday')}</span><br />
                {t('location.sundayTime')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Cherish Addis Coffee & Books. {t('footer.rights')}
            </p>
            <motion.p 
              className="flex items-center gap-2 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span>{t('footer.motto')}</span>
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
