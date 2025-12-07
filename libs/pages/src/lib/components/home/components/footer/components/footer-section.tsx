import clsx from 'clsx';
import { ChevronDownIcon } from '@webbitstudio/ui-components';
import * as footerStyles from '../../../utils/styles';

interface FooterSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export const FooterSection = ({
  title,
  isOpen,
  onToggle,
  children,
}: FooterSectionProps) => {
  return (
    <div className={footerStyles.footer.section.wrapper}>
      {/* Desktop: Always show content */}
      <div className={footerStyles.footer.section.desktop}>{children}</div>

      {/* Mobile: Collapsible accordion */}
      <div className={footerStyles.footer.section.mobile}>
        <button
          onClick={onToggle}
          className={footerStyles.footer.section.accordionButton}
          aria-expanded={isOpen}
          type="button"
        >
          <h3 className={footerStyles.footer.section.title}>{title}</h3>
          <ChevronDownIcon
            className={clsx(
              footerStyles.footer.section.accordionIcon,
              isOpen && footerStyles.footer.section.accordionIconOpen
            )}
          />
        </button>
        {isOpen && (
          <div className={footerStyles.footer.section.accordionContent}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
