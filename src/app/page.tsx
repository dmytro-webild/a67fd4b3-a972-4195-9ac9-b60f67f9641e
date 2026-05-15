"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Sparkles, Home, Shield, Award, Star, Mail, TrendingUp, DollarSign, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="mediumSmall"
      sizing="mediumLarge"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Luxe Properties"
          navItems={[
            { name: "Properties", id: "properties" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Team", id: "team" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Schedule Viewing", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Discover Luxury Living in Dubai"
          description="Exclusive properties curated for discerning buyers. Experience the pinnacle of sophistication with our award-winning real estate portfolio."
          background={{ variant: "gradient-bars" }}
          tag="Premium Collections"
          tagIcon={Sparkles}
          buttons={[
            { text: "Explore Properties", href: "properties" },
            { text: "Contact Agent", href: "contact" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://img.b2bpic.net/free-photo/modern-spacious-room-with-large-panoramic-window_7502-7289.jpg",
              imageAlt: "Luxury penthouse in Dubai Marina"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/shanghai-night-china_1127-3170.jpg",
              imageAlt: "Dubai skyline at night"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920926.jpg",
              imageAlt: "Modern luxury exterior design"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920931.jpg",
              imageAlt: "Contemporary luxury architecture"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/modern-spacious-room-with-large-panoramic-window_7502-7289.jpg",
              imageAlt: "Spacious modern interior with panoramic view"
            }
          ]}
          mediaAnimation="slide-up"
        />
      </div>

      <div id="properties" data-section="properties">
        <ProductCardFour
          title="Featured Properties"
          description="Handpicked luxury properties showcasing the finest real estate opportunities in Dubai's most prestigious locations."
          tag="Exclusive Listings"
          tagIcon={Home}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          carouselMode="buttons"
          buttons={[
            { text: "See all properties", href: "/properties" }
          ]}
          products={[
            {
              id: "1",
              name: "Palm Jumeirah Villa",
              price: "AED 12,500,000",
              variant: "5 Bed Villa | Beachfront",
              imageSrc: "https://img.b2bpic.net/free-photo/shanghai-night-china_1127-3170.jpg",
              imageAlt: "Luxury villa on Palm Jumeirah",
              isFavorited: false,
              onProductClick: () => window.location.href = "/property/palm-jumeirah-villa"
            },
            {
              id: "2",
              name: "Downtown Dubai Penthouse",
              price: "AED 8,750,000",
              variant: "4 Bed Penthouse | City View",
              imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920926.jpg",
              imageAlt: "Modern penthouse in Downtown Dubai",
              isFavorited: false
            },
            {
              id: "3",
              name: "Emirates Hills Townhouse",
              price: "AED 6,200,000",
              variant: "4 Bed Townhouse | Golf View",
              imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920931.jpg",
              imageAlt: "Contemporary townhouse in Emirates Hills",
              isFavorited: false
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Your Trusted Dubai Real Estate Partner"
          description="With over 15 years of excellence in Dubai's luxury real estate market, we have established ourselves as the premier boutique agency for discerning international clientele. Our expert team specializes in sourcing and curating the finest properties across Dubai's most exclusive communities. We combine market mastery with personalized service, ensuring every transaction is seamless and satisfying."
          tag="About Us"
          imageSrc="https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920926.jpg"
          imageAlt="Luxe Properties Dubai team"
          useInvertedBackground={false}
          buttons={[
            { text: "Learn Our Story", href: "#" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardThree
          title="Our Services & Expertise"
          description="Comprehensive real estate solutions tailored to meet your unique needs and aspirations."
          tag="Professional Services"
          tagIcon={Shield}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          gridVariant="uniform-all-items-equal"
          carouselMode="buttons"
          features={[
            {
              title: "Property Selection",
              description: "Exclusive access to off-market and hand-selected luxury properties",
              imageSrc: "https://img.b2bpic.net/free-photo/modern-spacious-room-with-large-panoramic-window_7502-7289.jpg",
              imageAlt: "Property selection"
            },
            {
              title: "Investment Advisory",
              description: "Expert insights into market trends and investment opportunities",
              imageSrc: "https://img.b2bpic.net/free-photo/shanghai-night-china_1127-3170.jpg",
              imageAlt: "Investment advisory"
            },
            {
              title: "Negotiation & Closing",
              description: "Strategic negotiation and seamless transaction management",
              imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920926.jpg",
              imageAlt: "Negotiation and closing"
            },
            {
              title: "Legal Compliance",
              description: "Full support with documentation, permits, and regulatory compliance",
              imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920931.jpg",
              imageAlt: "Legal compliance"
            },
            {
              title: "Property Management",
              description: "Professional management services for rental income optimization",
              imageSrc: "https://img.b2bpic.net/free-photo/modern-spacious-room-with-large-panoramic-window_7502-7289.jpg",
              imageAlt: "Property management"
            },
            {
              title: "Concierge Services",
              description: "White-glove concierge support for renovations and lifestyle services",
              imageSrc: "https://img.b2bpic.net/free-photo/shanghai-night-china_1127-3170.jpg",
              imageAlt: "Concierge services"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Executive Team"
          description="Meet the visionary leaders guiding Luxe Properties with expertise and dedication."
          tag="Our Leadership"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          members={[
            {
              id: "1",
              name: "Hassan Al-Maktoum",
              role: "Chief Executive Officer",
              imageSrc: "https://img.b2bpic.net/free-photo/business-people-using-digital-tablet-airport_107420-95868.jpg",
              imageAlt: "Hassan Al-Maktoum"
            },
            {
              id: "2",
              name: "Layla Al-Mansoori",
              role: "Chief Operating Officer",
              imageSrc: "https://img.b2bpic.net/free-photo/attractive-satisfied-young-female-entrepreneur-standing-proud-smiling-with-crossed-hands-confident_197531-23012.jpg?id=13871705",
              imageAlt: "Layla Al-Mansoori"
            },
            {
              id: "3",
              name: "Marcus Wellington",
              role: "Chief Investment Officer",
              imageSrc: "https://img.b2bpic.net/free-photo/young-businessman-with-clipboard_1098-602.jpg",
              imageAlt: "Marcus Wellington"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="By The Numbers"
          description="Our proven track record speaks to our commitment and success in Dubai's luxury real estate market."
          tag="Track Record"
          tagIcon={Award}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          metrics={[
            {
              id: "1",
              icon: Home,
              title: "Properties Sold",
              value: "450+"
            },
            {
              id: "2",
              icon: Users,
              title: "Satisfied Clients",
              value: "650+"
            },
            {
              id: "3",
              icon: DollarSign,
              title: "Total Value",
              value: "$2.3B"
            },
            {
              id: "4",
              icon: TrendingUp,
              title: "International",
              value: "45 Countries"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="What Our Clients Say"
          description="Experience through the words of satisfied buyers and investors who found their dream properties with us."
          tag="Client Testimonials"
          tagIcon={Star}
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",
              name: "Ahmed Al Mansouri, Real Estate Investor",
              date: "Date: September 2024",
              title: "Exceptional Service & Market Expertise",
              quote: "The team at Luxe Properties demonstrated outstanding knowledge of the Dubai market. Their negotiation skills saved me significant time and money. I would not hesitate to recommend them for any luxury property transaction.",
              tag: "Premium Portfolio",
              avatarSrc: "https://img.b2bpic.net/free-photo/business-people-using-digital-tablet-airport_107420-95868.jpg",
              imageSrc: "https://img.b2bpic.net/free-photo/shanghai-night-china_1127-3170.jpg"
            },
            {
              id: "2",
              name: "Sarah Johnson, CEO - Tech Corp",
              date: "Date: August 2024",
              title: "A Smooth & Sophisticated Experience",
              quote: "Finding a penthouse that matched my exacting standards seemed impossible, yet within weeks, the team presented three exceptional options. Their professionalism and attention to detail were impeccable throughout.",
              tag: "Penthouse Collection",
              avatarSrc: "https://img.b2bpic.net/free-photo/attractive-satisfied-young-female-entrepreneur-standing-proud-smiling-with-crossed-hands-confident_197531-23012.jpg?id=13871705",
              imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920926.jpg"
            },
            {
              id: "3",
              name: "Michael Chen, International Investor",
              date: "Date: July 2024",
              title: "Trusted Partner for International Clients",
              quote: "As a foreign investor, I appreciated the comprehensive legal and financial guidance. The team navigated complex regulations effortlessly, allowing me to invest with complete confidence.",
              tag: "Investment Advisory",
              avatarSrc: "https://img.b2bpic.net/free-photo/young-businessman-with-clipboard_1098-602.jpg",
              imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920931.jpg"
            },
            {
              id: "4",
              name: "Fatima Al-Serkal, Luxury Lifestyle",
              date: "Date: June 2024",
              title: "Impeccable Taste & Attention to Detail",
              quote: "Beyond finding properties, they understand lifestyle. The concierge services and interior design recommendations have transformed my new home into a personal sanctuary.",
              tag: "Concierge Services",
              avatarSrc: "https://img.b2bpic.net/free-photo/executive-paying-attention-his-partner_1098-4058.jpg",
              imageSrc: "https://img.b2bpic.net/free-photo/shanghai-night-china_1127-3170.jpg"
            },
            {
              id: "5",
              name: "David Martinez, Corporate Executive",
              date: "Date: May 2024",
              title: "Seamless Relocation Experience",
              quote: "Moving to Dubai for business, I needed a quick turnaround. Their efficient process and white-glove service made the transition seamless and stress-free.",
              tag: "Corporate Solutions",
              avatarSrc: "https://img.b2bpic.net/free-photo/smiling-team-leader-looking-camera-group-corporate-meeting_1163-3920.jpg",
              imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920926.jpg"
            },
            {
              id: "6",
              name: "James Richardson, Family Relocation",
              date: "Date: April 2024",
              title: "Perfect Home for Family Living",
              quote: "They truly understood what our family needed. The search process was collaborative and transparent, resulting in finding our perfect family home in Emirates Hills.",
              tag: "Family Properties",
              avatarSrc: "https://img.b2bpic.net/free-photo/cheerful-businessman-eyeglasses-office_1262-3710.jpg",
              imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920931.jpg"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get In Touch"
          tagIcon={Mail}
          title="Ready to Find Your Dream Property?"
          description="Let our expert team guide you through your luxury real estate journey. Schedule a consultation today and discover properties that match your vision and investment goals."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          buttons={[
            { text: "Schedule Consultation", href: "#" },
            { text: "Browse Listings", href: "#properties" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Executive Team", href: "#team" },
                { label: "Properties", href: "#properties" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Investment Guide", href: "#" },
                { label: "Market Reports", href: "#" },
                { label: "FAQ", href: "#" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "LinkedIn", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "WhatsApp", href: "#" }
              ]
            }
          ]}
          bottomLeftText="© 2025 Luxe Properties Dubai. All rights reserved."
          bottomRightText="Luxury Real Estate Excellence"
        />
      </div>
    </ThemeProvider>
  );
}
