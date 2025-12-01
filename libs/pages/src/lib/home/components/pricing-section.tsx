import React from 'react';
import * as styles from '../utils/styles';

export const PricingSection: React.FC = () => {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className={styles.section.withBorderLarge}
    >
      <div className={styles.pricing.container}>
        <div>
          <h2 id="pricing-heading" className={styles.typography.h2}>
            Simple, fair, global pricing
          </h2>
          <p className={styles.combined.pricingIntro}>
            We show USD "starting from" prices so expectations are clear, then
            adjust final quotes based on your project complexity.
          </p>
        </div>
      </div>

      <div className={styles.pricing.list}>
        <div>
          <h3 className={styles.typography.h3Pricing}>Landing Page Package</h3>
          <p className={styles.pricing.item}>
            <span className={styles.pricing.label}>Starting from </span>
            <span className={styles.pricing.amount}>$249</span>{' '}
            <span className={styles.typography.bodyExtraSmall}>
              (typical range: $249–$399)
            </span>
          </p>
          <p className={styles.pricing.note}>
            Final quote depends on project complexity.
          </p>
        </div>

        <div>
          <h3 className={styles.typography.h3Pricing}>Pro Business Website</h3>
          <p className={styles.pricing.item}>
            <span className={styles.pricing.label}>Starting from </span>
            <span className={styles.pricing.amount}>$499</span>{' '}
            <span className={styles.typography.bodyExtraSmall}>
              (typical range: $499–$899)
            </span>
          </p>
          <p className={styles.pricing.note}>
            Subscription for hosting &amp; domain applies.
          </p>
        </div>

        <div>
          <h3 className={styles.typography.h3Pricing}>
            Premium Website + Admin Panel (CMS)
          </h3>
          <p className={styles.pricing.item}>
            <span className={styles.pricing.label}>Starting from </span>
            <span className={styles.pricing.amount}>$899</span>{' '}
            <span className={styles.typography.bodyExtraSmall}>
              (typical range: $899–$1,599)
            </span>
          </p>
          <p className={styles.pricing.note}>
            Subscription for hosting &amp; domain applies.
          </p>
        </div>
      </div>
    </section>
  );
};
