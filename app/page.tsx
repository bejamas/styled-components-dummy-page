import { Container } from '../components/css-modules/elements/container/container';
import { Hero } from '../components/css-modules/sections/hero/hero';
import { FeaturesGrid } from '../components/css-modules/sections/features/features';
import { FAQSection } from '../components/css-modules/sections/faq/faq';
import { TextImage } from '@/components/css-modules/sections/text-image/text-image';
import { ShowcaseGrid } from '../components/css-modules/sections/showcase/showcase';
import { Process } from '../components/css-modules/sections/process/process';
import { ContactForm } from '@/components/css-modules/sections/contact/contact';

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
      <TextImage
        title="Transform Your Development"
        description="Build beautiful, responsive interfaces with our modern component library. Designed for developers who value clean code and exceptional user experiences."
        image={{
          src: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
          alt: 'Team collaborating on code',
        }}
        ctaText="Learn More"
        ctaHref="/about"
      />
      <TextImage
        title="Built for Scale"
        description="From startups to enterprises, our components are designed to grow with your needs. Fully customizable and performance-optimized."
        image={{
          src: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg',
          alt: 'Modern office workspace',
        }}
        reverse
        background="gray"
        ctaText="View Documentation"
        ctaHref="/docs"
      />
      <ShowcaseGrid
        title="Explore Our Solutions"
        subtitle="Discover how our components can transform your workflow"
        columns={3}
        items={[
          {
            title: 'Enterprise Solutions',
            description: 'Scale your applications with confidence using our enterprise-grade components',
            image: {
              src: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
              alt: 'Enterprise office building',
            },
            variant: 'gradient',
            size: 'lg',
            badge: 'Enterprise',
            accentColor: '#0070f3',
            href: '/solutions/enterprise',
          },
          {
            title: 'Developer Tools',
            description: 'Boost your productivity with our developer-focused components',
            image: {
              src: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
              alt: 'Developer workspace',
            },
            variant: 'default',
            size: 'lg',
            badge: 'Popular',
            href: '/solutions/developer-tools',
          },
          {
            title: 'Design System',
            description: 'Create consistent user experiences with our design system',
            image: {
              src: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
              alt: 'Design system elements',
            },
            variant: 'minimal',
            size: 'lg',
            href: '/solutions/design-system',
          },
        ]}
      />
      <Process
        title="How It Works"
        subtitle="Follow these simple steps to get started with our platform"
        background="gray"
        steps={[
          {
            number: 1,
            title: 'Install the Package',
            description:
              'Start by installing our package using your favorite package manager. We support npm, yarn, and pnpm.',
            image: {
              src: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
              alt: 'Installation process',
            },
          },
          {
            number: 2,
            title: 'Import Components',
            description:
              'Import the components you need and start building. Our components are tree-shakeable for optimal performance.',
            image: {
              src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
              alt: 'Code editor',
            },
          },
          {
            number: 3,
            title: 'Customize & Deploy',
            description: 'Customize the components to match your brand and deploy your application with confidence.',
            image: {
              src: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
              alt: 'Deployment dashboard',
            },
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
      <ContactForm
        title="Contact Us"
        subtitle="We'd love to hear from you! Use the form below to get in touch with us."
        background="white"
      />
    </Container>
  );
}
