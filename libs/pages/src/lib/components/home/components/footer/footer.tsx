import { useState } from 'react';
import * as footerStyles from '../../utils/styles';
import type { LocaleStrings } from '../../../../shared';
import { useScrollToTop } from '@webbitstudio/shared-utils';
import { FOOTER } from '../../utils';
import { FooterSection } from './components';

interface FooterProps {
  content: LocaleStrings['footer'];
}

export const Footer = ({ content }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const copyrightText = content.copyright
    .replace('{year}', currentYear.toString())
    .replace('{companyName}', content.companyName);

  const { scrollToTop } = useScrollToTop();

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    links: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className={footerStyles.footer.root}>
      <div className={footerStyles.footer.container}>
        {/* Copyright - Always visible */}
        <p className={footerStyles.footer.copyright}>{copyrightText}</p>

        {/* Links Section - Collapsible on mobile */}
        <FooterSection
          title={content.linksTitle}
          isOpen={openSections.links}
          onToggle={() => toggleSection('links')}
        >
          <div className={footerStyles.footer.links}>
            <a
              href={FOOTER.PRIVACY_POLICY_HREF}
              className={footerStyles.footer.link}
            >
              {content.links.privacy}
            </a>
            <span className={footerStyles.footer.separator} />
            <a
              href={FOOTER.TERMS_OF_SERVICE_HREF}
              className={footerStyles.footer.link}
            >
              {content.links.terms}
            </a>
            <span className={footerStyles.footer.separator} />
            <a
              href={FOOTER.COOKIE_POLICY_HREF}
              className={footerStyles.footer.link}
            >
              {content.links.cookies}
            </a>
            <span className={footerStyles.footer.separator} />
            <a
              href={FOOTER.ACCESSIBILITY_STATEMENT_HREF}
              className={footerStyles.footer.link}
            >
              {content.links.accessibility}
            </a>
            <span className={footerStyles.footer.separator} />
            <button
              type="button"
              className={footerStyles.footer.link}
              onClick={scrollToTop}
              aria-label={content.backToTop}
            >
              {content.backToTop}
            </button>
          </div>
        </FooterSection>
      </div>
    </footer>
  );
};
