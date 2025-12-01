import React from 'react';
import { packages, faqs } from './utils/constants';

export const WebbitStudioHomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Page wrapper */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header / Nav */}
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/90 shadow-lg shadow-sky-500/40">
              <span className="text-lg font-bold tracking-tight">W</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-tight">
                Webbit Studio
              </span>
              <span className="text-xs text-slate-400">
                Websites for modern businesses
              </span>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#packages" className="hover:text-sky-400">
              Packages
            </a>
            <a href="#process" className="hover:text-sky-400">
              How it works
            </a>
            <a href="#pricing" className="hover:text-sky-400">
              Pricing
            </a>
            <a href="#faq" className="hover:text-sky-400">
              FAQ
            </a>
            <a
              href="#contact"
              className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-md shadow-sky-500/40 hover:bg-sky-400"
            >
              Start your project
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section
          aria-labelledby="hero-heading"
          className="grid gap-10 py-10 md:grid-cols-2 md:py-16 lg:py-20"
        >
          <div className="flex flex-col justify-center space-y-6">
            <p className="inline-flex max-w-fit items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Serving clients in Israel, India, Europe, US & Canada
            </p>

            <h1
              id="hero-heading"
              className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
            >
              Websites that make your business look great — delivered fast.
            </h1>

            <p className="max-w-xl text-sm text-slate-300 sm:text-base">
              Webbit Studio builds landing pages, business websites, hosting
              setups, deployments, and custom admin panels so you can manage
              your content with ease. Designed for small businesses worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400"
              >
                Start your project
              </a>
              <a
                href="#packages"
                className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-sky-500/70 hover:text-sky-200"
              >
                See packages
              </a>
            </div>

            <p className="mt-2 text-xs text-slate-400 sm:text-sm">
              Trusted by small businesses and startups worldwide. Most projects
              completed in under 7 days.
            </p>
          </div>

          {/* Hero visual */}
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-sky-500/30 via-violet-500/20 to-emerald-400/20 blur-3xl" />
            <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl">
              {/* Browser mock */}
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-auto rounded-full bg-slate-800 px-2 py-1 text-[10px] text-slate-400">
                  webbitstudio.com
                </span>
              </div>

              <div className="space-y-4 pt-4">
                <div className="h-6 w-3/4 rounded-md bg-slate-800" />
                <div className="h-3 w-5/6 rounded-md bg-slate-800/90" />
                <div className="grid grid-cols-3 gap-3 pt-1">
                  <div className="h-24 rounded-xl bg-gradient-to-br from-sky-500/60 to-sky-400/80" />
                  <div className="space-y-2">
                    <div className="h-4 w-3/4 rounded bg-slate-800" />
                    <div className="h-3 w-5/6 rounded bg-slate-800/90" />
                    <div className="h-3 w-2/3 rounded bg-slate-800/70" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-4/5 rounded bg-slate-800/90" />
                    <div className="h-3 w-1/2 rounded bg-slate-800/80" />
                    <div className="h-8 w-full rounded-lg bg-sky-500/90" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] text-slate-300">
                  <div className="rounded-lg border border-slate-800/80 bg-slate-900/90 p-2">
                    <p className="font-medium">Landing</p>
                    <p className="text-[11px] text-slate-400">
                      Fast, simple, effective.
                    </p>
                  </div>
                  <div className="rounded-lg border border-slate-800/80 bg-slate-900/90 p-2">
                    <p className="font-medium">Pro Site</p>
                    <p className="text-[11px] text-slate-400">
                      Multi-page & hosted.
                    </p>
                  </div>
                  <div className="rounded-lg border border-slate-800/80 bg-slate-900/90 p-2">
                    <p className="font-medium">Premium CMS</p>
                    <p className="text-[11px] text-slate-400">
                      Edit content yourself.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof / tech strip */}
        <section className="border-y border-slate-800 py-6 text-xs text-slate-400 sm:text-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>Built with modern, reliable technology.</p>
            <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-wide text-slate-500">
              <span className="rounded-full border border-slate-800 px-2 py-1">
                React
              </span>
              <span className="rounded-full border border-slate-800 px-2 py-1">
                TypeScript
              </span>
              <span className="rounded-full border border-slate-800 px-2 py-1">
                Tailwind
              </span>
              <span className="rounded-full border border-slate-800 px-2 py-1">
                Vite
              </span>
              <span className="rounded-full border border-slate-800 px-2 py-1">
                Modern hosting
              </span>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section
          id="packages"
          aria-labelledby="packages-heading"
          className="py-12 sm:py-16"
        >
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="packages-heading"
                className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
              >
                Packages for every stage of your business
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300 sm:text-base">
                From simple landing pages to full websites with a self-managed
                admin panel, choose the option that fits your current needs.
              </p>
            </div>
            <p className="text-xs text-slate-400 sm:text-sm">
              Most projects completed in 3–7 days.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-[0_0_0_1px_rgba(15,23,42,0.7)] transition hover:border-sky-500/70 hover:bg-slate-900"
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
                    {pkg.name}
                  </h3>
                  <span className="rounded-full bg-sky-500/10 px-2.5 py-1 text-[10px] font-medium text-sky-300">
                    {pkg.highlight}
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-300 sm:text-sm">
                  {pkg.tagline}
                </p>
                <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                  {pkg.description}
                </p>

                <ul className="mt-4 space-y-2 text-xs text-slate-300 sm:text-sm">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 border-t border-slate-800 pt-4 text-sm">
                  <p className="text-slate-200">
                    <span className="text-xs uppercase tracking-wide text-slate-400">
                      Starting from{' '}
                    </span>
                    <span className="text-base font-semibold">
                      {pkg.startingPrice}
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Typical range: {pkg.typicalRange}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Final quote depends on region &amp; project complexity.
                  </p>
                </div>

                <div className="mt-4 flex flex-1 items-end">
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-950 shadow-sm hover:bg-slate-200"
                  >
                    Get a tailored quote
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section
          id="process"
          aria-labelledby="process-heading"
          className="border-y border-slate-800 py-12 sm:py-14"
        >
          <div className="mb-8 max-w-2xl">
            <h2
              id="process-heading"
              className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
            >
              A simple process from idea to live website
            </h2>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">
              We keep things straightforward so you always know what’s next.
              Most projects follow this four-step flow.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: '1',
                title: 'Tell us what you need',
                text: 'Share your business, goals, and what kind of website you’re looking for.',
              },
              {
                step: '2',
                title: 'We design it',
                text: 'We create a clean, modern layout tailored to your brand and audience.',
              },
              {
                step: '3',
                title: 'We build & deploy',
                text: 'We handle development, hosting, and deployment so everything just works.',
              },
              {
                step: '4',
                title: 'You go live — fast',
                text: 'We launch your site, and you start sharing it with your customers.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-xs font-semibold text-sky-300">
                    {item.step}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 sm:text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Webbit Studio */}
        <section aria-labelledby="why-heading" className="py-12 sm:py-16">
          <div className="mb-8 max-w-2xl">
            <h2
              id="why-heading"
              className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
            >
              Why Webbit Studio?
            </h2>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">
              We focus on modern technology, clean design, and timelines that
              actually work for busy business owners.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Fast delivery',
                text: 'Most landing pages are finished in 2–4 days. Pro and Premium websites typically ship within a week.',
              },
              {
                title: 'Global-friendly pricing',
                text: 'We serve clients in Israel, India, Europe, the US & Canada, and adjust final quotes based on region and business size.',
              },
              {
                title: 'Modern technology',
                text: 'React, TypeScript, Tailwind, and modern hosting platforms keep your site fast and reliable.',
              },
              {
                title: 'Designed for conversion',
                text: 'Each page is structured to guide visitors toward contacting you or using your service.',
              },
              {
                title: 'Flexible content management',
                text: 'Choose simple one-time build packages, or go Premium and manage your own content through a custom admin panel.',
              },
              {
                title: 'Clear communication',
                text: 'Reach us via email, WhatsApp, or video call. We keep you updated from start to launch.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
              >
                <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          aria-labelledby="pricing-heading"
          className="border-y border-slate-800 py-12 sm:py-16"
        >
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="pricing-heading"
                className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
              >
                Simple, fair, global pricing
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300 sm:text-base">
                We show USD “starting from” prices so expectations are clear,
                then adjust final quotes based on your region and project
                complexity.
              </p>
            </div>
            <div className="text-xs text-slate-400 sm:text-sm">
              <p>Regional pricing available.</p>
              <p>
                Ask for a tailored quote for Israel, India, Europe, US & Canada.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-200">
            <div>
              <h3 className="font-semibold text-slate-50">
                Landing Page Package
              </h3>
              <p className="mt-1">
                <span className="text-xs uppercase tracking-wide text-slate-400">
                  Starting from{' '}
                </span>
                <span className="font-semibold">$249</span>{' '}
                <span className="text-xs text-slate-400">
                  (typical range: $249–$399)
                </span>
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Final quote depends on region &amp; project complexity.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-50">
                Pro Business Website
              </h3>
              <p className="mt-1">
                <span className="text-xs uppercase tracking-wide text-slate-400">
                  Starting from{' '}
                </span>
                <span className="font-semibold">$499</span>{' '}
                <span className="text-xs text-slate-400">
                  (typical range: $499–$899)
                </span>
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Subscription for hosting &amp; domain applies. Regional pricing
                available.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-50">
                Premium Website + Admin Panel (CMS)
              </h3>
              <p className="mt-1">
                <span className="text-xs uppercase tracking-wide text-slate-400">
                  Starting from{' '}
                </span>
                <span className="font-semibold">$899</span>{' '}
                <span className="text-xs text-slate-400">
                  (typical range: $899–$1,599)
                </span>
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Subscription for hosting &amp; domain applies. Regional pricing
                available.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-sky-500/40 bg-slate-900/70 p-5 text-sm text-slate-200">
            <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
              Regional pricing & fairness
            </h3>
            <p className="mt-2 text-xs text-slate-300 sm:text-sm">
              Because we work with businesses in markets with very different
              purchasing power, we adjust final quotes by region and business
              size. This keeps our services accessible to early-stage founders
              in India and Israel, while remaining competitive for clients in
              Europe, the US & Canada.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-sky-500/40 hover:bg-sky-400"
            >
              Get your regional quote
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="py-12 sm:py-16"
        >
          <div className="mb-8 max-w-2xl">
            <h2
              id="faq-heading"
              className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
            >
              Frequently asked questions
            </h2>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">
              If you don’t see your question here, you can always reach out
              directly and we’ll be happy to help.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-medium text-slate-100">
                  <span>{faq.question}</span>
                  <span className="text-xs text-slate-400 group-open:hidden">
                    +
                  </span>
                  <span className="hidden text-xs text-slate-400 group-open:inline">
                    –
                  </span>
                </summary>
                <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact / CTA */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="pb-14 sm:pb-16"
        >
          <div className="rounded-3xl border border-sky-500/40 bg-gradient-to-br from-sky-500/20 via-slate-900 to-slate-900/90 p-6 sm:p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2
                  id="contact-heading"
                  className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
                >
                  Ready to start your website?
                </h2>
                <p className="mt-2 text-sm text-slate-200 sm:text-base">
                  Tell us a bit about your business, your location, and what
                  kind of website you need. We’ll get back with a tailored quote
                  and suggested package.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-200 sm:text-sm">
                  <li>• Landing page, business website, or Premium CMS</li>
                  <li>
                    • Regional pricing for Israel, India, Europe, US & Canada
                  </li>
                  <li>• Most projects completed within 3–7 days</li>
                </ul>
              </div>

              <form className="space-y-3 text-sm text-slate-900">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-100">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-100">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-100">
                    Country / Region
                  </label>
                  <input
                    type="text"
                    placeholder="Israel, India, Germany, US, Canada..."
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-100">
                    What are you looking for?
                  </label>
                  <select
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs text-slate-100 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a package
                    </option>
                    <option>Landing Page Package</option>
                    <option>Pro Business Website</option>
                    <option>Premium Website + Admin Panel (CMS)</option>
                    <option>Not sure yet / need help deciding</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-100">
                    Project details
                  </label>
                  <textarea
                    placeholder="Tell us about your business, pages you need, and any deadlines or special requirements."
                    rows={4}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>

                <button
                  type="button"
                  className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-slate-100 px-4 py-2.5 text-xs font-semibold text-slate-950 shadow-sm hover:bg-slate-200"
                >
                  Submit inquiry
                </button>

                <p className="mt-1 text-[11px] text-slate-200">
                  Prefer WhatsApp or a quick call? We can share direct contact
                  details in our reply.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 py-6 text-xs text-slate-500 sm:text-sm">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} Webbit Studio. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#hero" className="hover:text-sky-300">
                Back to top
              </a>
              <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:inline-block" />
              <span>webbitstudio.com</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
