import { Container } from '../components/css-modules/elements/container/container';
import { Hero } from '../components/css-modules/sections/hero/hero';
import { FeaturesGrid } from '../components/css-modules/sections/features/features';
import { FAQSection } from '../components/css-modules/sections/faq/faq';
import { TextImage } from '@/components/css-modules/sections/text-image/text-image';
import { ShowcaseGrid } from '../components/css-modules/sections/showcase/showcase';
import { Process } from '../components/css-modules/sections/process/process';
import { ContactForm } from '@/components/css-modules/sections/contact/contact';
import { Pricing } from '@/components/css-modules/sections/pricing/pricing';
import { Testimonials } from '@/components/css-modules/sections/testimonials/testimonials';
import { Stats } from '@/components/css-modules/sections/stats/stats';
import { Partners } from '@/components/css-modules/sections/partners/partners';
import { BlogGrid } from '@/components/css-modules/sections/blog/blog';
import { Tabs } from '@/components/css-modules/sections/tabs/tabs';

export default function Home() {
  return (
    <Container data-full-width>
      <Hero
        title="Welcome to Our Platform"
        subtitle="Experience the difference with our modern, performant components"
        ctaText="Get Started"
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
      <Partners
        title="Trusted By Industry Leaders"
        subtitle="Companies using our platform"
        variant="carousel"
        partners={[
          {
            name: 'TechCorp',
            logo: { src: '/logos/tech-corp.svg', alt: 'TechCorp logo' },
            href: '#',
          },
          {
            name: 'InnovateLabs',
            logo: { src: '/logos/innovate-labs.svg', alt: 'InnovateLabs logo' },
            href: '#',
          },
          {
            name: 'FutureScale',
            logo: { src: '/logos/future-scale.svg', alt: 'FutureScale logo' },
            href: '#',
          },
          {
            name: 'CloudNine',
            logo: { src: '/logos/cloud-nine.svg', alt: 'CloudNine logo' },
            href: '#',
          },
          {
            name: 'DataFlow',
            logo: { src: '/logos/data-flow.svg', alt: 'DataFlow logo' },
            href: '#',
          },
          {
            name: 'CodeCraft',
            logo: { src: '/logos/code-craft.svg', alt: 'CodeCraft logo' },
            href: '#',
          },
        ]}
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
      <Tabs
        title="Explore Features"
        subtitle="Discover what makes our platform unique"
        defaultTab="design"
        tabs={[
          {
            id: 'design',
            label: 'Design System',
            content: {
              title: 'Consistent Design Language',
              description: 'Create beautiful interfaces with our comprehensive design system',
              image: {
                src: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
                alt: 'Design system preview',
              },
              features: ['Customizable themes', 'Dark mode support', 'Responsive layouts', 'Accessibility built-in'],
            },
          },
          {
            id: 'components',
            label: 'Components',
            content: {
              title: 'Extensive Component Library',
              description: 'Build faster with our pre-built, customizable components',
              image: {
                src: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg',
                alt: 'Component library preview',
              },
              features: [
                '100+ ready-to-use components',
                'TypeScript support',
                'Modular architecture',
                'Regular updates',
              ],
            },
          },
          {
            id: 'performance',
            label: 'Performance',
            content: {
              title: 'Optimized for Speed',
              description: 'Lightning-fast performance without compromising on features',
              image: {
                src: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
                alt: 'Performance metrics',
              },
              features: [
                'Tree-shakeable imports',
                'Lazy loading support',
                'Optimized bundle size',
                'Runtime performance',
              ],
            },
          },
          {
            id: 'developer',
            label: 'Developer Experience',
            content: {
              title: 'Built for Developers',
              description: 'An exceptional development experience from start to finish',
              image: {
                src: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
                alt: 'Developer tools',
              },
              features: [
                'Comprehensive documentation',
                'Developer tools integration',
                'Hot reload support',
                'Advanced debugging tools',
              ],
            },
          },
        ]}
      />
      <BlogGrid
        title="Latest Updates"
        subtitle="News and insights from our team"
        background="gray"
        columns={3}
        posts={[
          {
            title: 'Introducing New Components',
            excerpt:
              'Check out the latest additions to our component library, including advanced data visualization tools and improved form controls.',
            date: '2024-03-15',
            category: 'Product',
            author: {
              name: 'Alex Chen',
              avatar: {
                src: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
                alt: 'Alex Chen',
              },
            },
            image: {
              src: 'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg',
              alt: 'New components preview',
            },
            href: '/blog/new-components',
          },
          {
            title: 'Performance Optimization Guide',
            excerpt: "Learn how to optimize your application's performance using our latest tools and best practices.",
            date: '2024-03-10',
            category: 'Tutorial',
            author: {
              name: 'Sarah Johnson',
              avatar: {
                src: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
                alt: 'Sarah Johnson',
              },
            },
            image: {
              src: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
              alt: 'Performance optimization',
            },
            href: '/blog/performance-guide',
          },
          {
            title: 'Building Accessible Applications',
            excerpt: 'Discover how our components help you create more accessible web applications for all users.',
            date: '2024-03-05',
            category: 'Accessibility',
            author: {
              name: 'Marcus Kim',
              avatar: {
                src: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
                alt: 'Marcus Kim',
              },
            },
            image: {
              src: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
              alt: 'Accessibility features',
            },
            href: '/blog/accessibility',
          },
        ]}
      />
      <Stats
        title="Platform Statistics"
        subtitle="Our impact in numbers"
        background="gradient"
        columns={4}
        stats={[
          { value: '10M+', label: 'Downloads', description: 'Active monthly downloads' },
          { value: '99.9%', label: 'Uptime', description: 'Guaranteed availability' },
          { value: '24/7', label: 'Support', description: 'Round-the-clock assistance' },
          { value: '150+', label: 'Components', description: 'Ready-to-use components' },
        ]}
      />

      <Testimonials
        title="What Our Users Say"
        subtitle="Real feedback from real developers"
        variant="grid"
        background="gray"
        testimonials={[
          {
            quote: "The best component library we've used. It's transformed our development workflow.",
            author: {
              name: 'Sarah Johnson',
              title: 'Lead Developer',
              company: 'TechCorp',
              avatar: {
                src: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
                alt: 'Sarah Johnson',
              },
            },
            rating: 5,
          },
          {
            quote: 'Incredible developer experience and top-notch performance. Highly recommended!',
            author: {
              name: 'Michael Chen',
              title: 'Senior Frontend Engineer',
              company: 'InnovateLabs',
              avatar: {
                src: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
                alt: 'Michael Chen',
              },
            },
            rating: 5,
          },
          {
            quote: 'The documentation and support are outstanding. Makes development a breeze.',
            author: {
              name: 'Emily Rodriguez',
              title: 'Tech Lead',
              company: 'FutureScale',
              avatar: {
                src: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
                alt: 'Emily Rodriguez',
              },
            },
            rating: 5,
          },
        ]}
      />
      <Pricing
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that's right for you"
        tiers={[
          {
            name: 'Starter',
            price: 'Free',
            description: 'Perfect for side projects and learning',
            features: [
              'Up to 5 projects',
              'Basic components',
              'Community support',
              'Monthly updates',
              'Basic documentation',
            ],
            ctaText: 'Get Started',
            ctaHref: '/signup',
          },
          {
            name: 'Pro',
            price: '$29',
            description: 'Ideal for professional developers',
            features: [
              'Unlimited projects',
              'Advanced components',
              'Priority support',
              'Weekly updates',
              'Advanced documentation',
              'API access',
              'Custom themes',
            ],
            isPopular: true,
            ctaText: 'Start Free Trial',
            ctaHref: '/trial',
          },
          {
            name: 'Team',
            price: '$99',
            description: 'Best for growing teams',
            features: [
              'Everything in Pro',
              'Team collaboration',
              'Audit logs',
              'Analytics dashboard',
              'Custom integrations',
              '24/7 phone support',
              'SLA guarantees',
            ],
            ctaText: 'Contact Sales',
            ctaHref: '/contact',
          },
        ]}
      />

      <FAQSection
        title="Frequently Asked Questions"
        background="gray"
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
