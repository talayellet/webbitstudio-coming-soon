import * as styles from '../../../utils/styles';

interface MobileMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenuOverlay = ({
  isOpen,
  onClose,
}: MobileMenuOverlayProps) => {
  return (
    <div
      className={`${styles.header.mobileMenu.overlay} ${
        isOpen
          ? styles.header.mobileMenu.overlayVisible
          : styles.header.mobileMenu.overlayHidden
      }`}
      onClick={onClose}
    />
  );
};
