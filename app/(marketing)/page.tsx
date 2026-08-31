import {
  AppStoreBanner,
  BenefitsStatsSection,
  CompanyLogosCarouselSection,
  FaqSection,
  FeaturesSection,
  FinalCtaSection,
  HeroSection,
  HighlightsSection,
  PricingSection,
  TestimonialsSection,
} from '#components/sections'
import faq from '#data/faq'

export const metadata = { alternates: { canonical: '/' } }

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.items.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          }).replace(/</g, '\\u003c'),
        }}
      />
      <HeroSection />
      <CompanyLogosCarouselSection />
      <BenefitsStatsSection />
      <HighlightsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
      <AppStoreBanner />
    </>
  )
}
