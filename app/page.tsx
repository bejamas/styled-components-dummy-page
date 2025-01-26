import { Container } from '../components/css-modules/elements/container/container';
import { Hero } from '../components/css-modules/sections/hero/hero';
import { FeaturesGrid } from '../components/css-modules/sections/features/features';
import { FAQSection } from '../components/css-modules/sections/faq/faq';

export default function Home() {
  return (
    <Container data-full-width>
      <Hero
        title="Welcome to Our Platform"
        subtitle="Experience the difference with our modern, performant components"
        ctaText="Get Started"
      />
      <FeaturesGrid
        title="Why Choose Us"
        subtitle="Discover the benefits of using our component library"
        features={[
          {
            icon: '/icons/speed.svg',
            title: 'Lightning Fast',
            description: 'Optimized for maximum performance and minimal bundle size',
          },
          {
            icon: '/icons/flexible.svg',
            title: 'Highly Flexible',
            description: 'Customizable components that adapt to your needs',
          },
          {
            icon: '/icons/typescript.svg',
            title: 'Type Safe',
            description: 'Built with TypeScript for better developer experience',
          },
        ]}
      />
      <FAQSection
        title="Frequently Asked Questions"
        items={[
          {
            question: 'What is this platform?',
            answer: 'This platform is a component library for building modern web applications.',
          },
          {
            question: 'How do I get started?',
            answer: 'You can start by exploring our components and see how they can be used in your project.',
          },
        ]}
      />
    </Container>
  );
}
