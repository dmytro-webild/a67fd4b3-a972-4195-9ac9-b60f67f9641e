"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Sparkles, Home, Mail, DollarSign, Users } from "lucide-react";

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
        <NavbarStyleApple
          brandName="Luxe Properties"
          navItems={[
            { name: "Properties", id: "properties" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Team", id: "team" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
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
            { text: "Explore Properties", href: "#properties" },
            { text: "Contact Agent", href: "#contact" }
          ]}
          mediaItems={[
            { imageSrc: "https://img.b2bpic.net/free-photo/modern-spacious-room-with-large-panoramic-window_7502-7289.jpg?_wi=1" },
            { imageSrc: "https://img.b2bpic.net/free-photo/shanghai-night-china_1127-3170.jpg?_wi=1" },
            { imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920926.jpg?_wi=1" }
          ]}
          mediaAnimation="slide-up"
        />
      </div>

      <div id="properties" data-section="properties">
        <ProductCardFour
          title="Featured Properties"
          description="Handpicked luxury properties showcasing the finest real estate opportunities in Dubai."
          tag="Exclusive Listings"
          tagIcon={Home}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          products={[
            { id: "1", name: "Palm Jumeirah Villa", price: "AED 12.5M", variant: "Luxury", imageSrc: "https://img.b2bpic.net/free-photo/shanghai-night-china_1127-3170.jpg?_wi=2" },
            { id: "2", name: "Downtown Penthouse", price: "AED 8.7M", variant: "Modern", imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920926.jpg?_wi=2" },
            { id: "3", name: "Emirates Hills Home", price: "AED 6.2M", variant: "Classic", imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920931.jpg" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Crafting Legacies in Luxury Real Estate"
          tag="About Our Heritage"
          tagIcon={Sparkles}
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardThree
          title="Our Professional Services"
          description="Comprehensive real estate solutions."
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          useInvertedBackground={false}
          features={[
            { title: "Property Selection", description: "Access to off-market homes.", imageSrc: "https://img.b2bpic.net/free-photo/modern-spacious-room-with-large-panoramic-window_7502-7289.jpg?_wi=2" },
            { title: "Investment Advisory", description: "Data-driven insights.", imageSrc: "https://img.b2bpic.net/free-photo/shanghai-night-china_1127-3170.jpg?_wi=3" },
            { title: "Closing Services", description: "Seamless transactions.", imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920926.jpg?_wi=3" }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Our Executive Leaders"
          description="Meet the experts behind our success."
          members={[
            { id: "1", name: "Hassan Al-Maktoum", role: "Founder & CEO" },
            { id: "2", name: "Layla Al-Mansoori", role: "Managing Director" },
            { id: "3", name: "Marcus Wellington", role: "Lead Consultant" }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Proven Performance"
          description="We have successfully facilitated transactions across major luxury hubs in Dubai."
          textboxLayout="default"
          useInvertedBackground={false}
          metrics={[
            { id: "1", icon: Home, title: "Properties", value: "450+" },
            { id: "2", icon: Users, title: "Clients", value: "650+" },
            { id: "3", icon: DollarSign, title: "Value", value: "$2.3B" }
          ]}
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Client Perspectives"
          description="Hear from our valued clients."
          useInvertedBackground={false}
          textboxLayout="default"
          tagAnimation="slide-up"
          testimonials={[
            { id: "1", name: "Ahmed Al Mansouri", date: "2024-05-12", title: "Exceptional Service", quote: "The team at Luxe Properties made the process effortless.", tag: "Verified", avatarSrc: "https://img.b2bpic.net/free-photo/business-people-using-digital-tablet-airport_107420-95868.jpg", imageSrc: "https://img.b2bpic.net/free-photo/modern-spacious-room-with-large-panoramic-window_7502-7289.jpg?_wi=3" },
            { id: "2", name: "Sarah Johnson", date: "2024-06-20", title: "Luxury Expert", quote: "I found my dream penthouse thanks to their extensive network.", tag: "Verified", avatarSrc: "https://img.b2bpic.net/free-photo/attractive-satisfied-young-female-entrepreneur-standing-proud-smiling-with-crossed-hands-confident_197531-23012.jpg", imageSrc: "https://img.b2bpic.net/free-photo/luxury-architecture-exterior-design_23-2151920926.jpg?_wi=4" }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Reach Out"
          title="Discuss Your Property Ambitions"
          description="Our private consultants are available to assist with your inquiries."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Luxe Properties"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}