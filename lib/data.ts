// Demo content data for Atlantis Dental Society
// All pages read from this file for demo purposes.
// In production, TinaCMS will manage this content.

export const siteConfig = {
  name: "Atlantis Dental Society",
  tagline: "Elevating the Standard of Dental Excellence",
  description:
    "A premier dental society dedicated to advancing oral healthcare through education, collaboration, and innovation.",
  email: "info@atlantisdental.org",
  phone: "+1 (555) 234-5678",
  address: "1200 Ocean Boulevard, Suite 400, Marina Bay, CA 94105",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Events", href: "/events" },
  { label: "Insights", href: "/insights" },
  { label: "Resources", href: "/resources" },
  { label: "Partner With Us", href: "/partner" },
  { label: "Join", href: "/join" },
  { label: "Contact", href: "/contact" },
];

export const heroContent = {
  headline: "Where Dental Excellence Meets Innovation",
  subheadline:
    "Join the Atlantis Dental Society — a global community of dental professionals committed to pushing the boundaries of oral healthcare.",
  cta: "Become a Member",
  ctaSecondary: "Explore Our Work",
};

export const stats = [
  { value: "2,500+", label: "Active Members" },
  { value: "150+", label: "Annual Events" },
  { value: "45", label: "Countries Represented" },
  { value: "30+", label: "Years of Excellence" },
];

export const features = [
  {
    title: "Continuing Education",
    description:
      "Access world-class CE courses, workshops, and certifications designed by leading dental educators.",
    icon: "GraduationCap",
  },
  {
    title: "Research & Innovation",
    description:
      "Stay at the forefront with cutting-edge research publications and innovation grants for members.",
    icon: "Microscope",
  },
  {
    title: "Global Network",
    description:
      "Connect with dental professionals worldwide through our exclusive networking events and forums.",
    icon: "Globe",
  },
  {
    title: "Practice Growth",
    description:
      "Leverage our resources, mentorship programs, and tools to grow and optimize your dental practice.",
    icon: "TrendingUp",
  },
];

export const testimonials = [
  {
    quote:
      "Joining Atlantis Dental Society transformed my practice. The CE courses alone are worth the membership ten times over.",
    author: "Dr. Sarah Chen",
    position: "Prosthodontist, San Francisco",
  },
  {
    quote:
      "The global network has opened doors I never thought possible. I've collaborated on research with colleagues across three continents.",
    author: "Dr. Marcus Okafor",
    position: "Oral Surgeon, London",
  },
  {
    quote:
      "The mentorship program helped me transition from associate to practice owner with confidence and a clear roadmap.",
    author: "Dr. Elena Vasquez",
    position: "General Dentist, Miami",
  },
];

export const aboutContent = {
  mission:
    "To advance the art and science of dentistry through education, research, and the fostering of professional excellence within a global community of practitioners.",
  vision:
    "A world where every dental professional has access to the knowledge, tools, and support needed to deliver exceptional patient care.",
  history: `Founded in 1994 by a group of visionary dental professionals, the Atlantis Dental Society began as a small regional study club in Marina Bay, California. What started as monthly gatherings of twelve passionate dentists has grown into one of the most respected dental organizations in the world.

Over three decades, we've expanded our reach to 45 countries, established partnerships with leading dental schools, and built a comprehensive platform for continuing education and professional development.

Our commitment to excellence, innovation, and community has remained unchanged since day one. We believe that by elevating the profession, we elevate the standard of care for patients everywhere.`,
  values: [
    {
      title: "Excellence",
      description: "We pursue the highest standards in everything we do, from education to patient care.",
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and methodologies that advance the profession.",
    },
    {
      title: "Community",
      description: "We believe in the power of collaboration and mutual support among professionals.",
    },
    {
      title: "Integrity",
      description: "We uphold ethical standards that honor the trust patients place in us.",
    },
  ],
};

export const services = [
  {
    title: "Continuing Education",
    description:
      "Comprehensive CE programs including live courses, online modules, and hands-on workshops. Earn credits while learning from the best in the field.",
    icon: "BookOpen",
    features: ["ADA CERP Recognized", "Online & In-Person", "Hands-on Workshops", "Self-paced Learning"],
  },
  {
    title: "Research Grants",
    description:
      "Funding opportunities for clinical research, innovative treatment methodologies, and dental technology development.",
    icon: "FlaskConical",
    features: ["Up to $50,000 per grant", "Annual application cycle", "Peer-reviewed process", "Publication support"],
  },
  {
    title: "Mentorship Program",
    description:
      "One-on-one mentorship pairing experienced practitioners with emerging professionals to accelerate career growth.",
    icon: "Users",
    features: ["Personalized matching", "12-month program", "Monthly check-ins", "Career roadmapping"],
  },
  {
    title: "Practice Management",
    description:
      "Tools, templates, and consulting services to help you build, manage, and grow a thriving dental practice.",
    icon: "BarChart3",
    features: ["Financial planning", "Staff management", "Marketing support", "Compliance guidance"],
  },
  {
    title: "Technology Integration",
    description:
      "Guidance on adopting digital dentistry tools, from CAD/CAM systems to AI-powered diagnostics.",
    icon: "Cpu",
    features: ["Digital workflow design", "Vendor partnerships", "Training programs", "ROI analysis"],
  },
  {
    title: "Global Conferences",
    description:
      "World-class dental conferences featuring keynote speakers, exhibitions, and networking opportunities.",
    icon: "Calendar",
    features: ["Annual summit", "Regional meetups", "Virtual attendance", "Exhibition hall"],
  },
];

export const teamMembers = [
  {
    name: "Dr. Alexander Reef",
    position: "President",
    specialty: "Prosthodontics",
    bio: "A board-certified prosthodontist with over 25 years of clinical experience. Dr. Reef has published extensively on digital implant workflows and serves on the editorial board of the Journal of Prosthetic Dentistry.",
    image: "/team/alexander-reef.jpg",
  },
  {
    name: "Dr. Priya Sharma",
    position: "Vice President",
    specialty: "Periodontics",
    bio: "An internationally recognized periodontist and researcher. Dr. Sharma leads our research grants program and has pioneered minimally invasive surgical techniques adopted worldwide.",
    image: "/team/priya-sharma.jpg",
  },
  {
    name: "Dr. James Thornton",
    position: "Director of Education",
    specialty: "Endodontics",
    bio: "Former professor at Columbia University College of Dental Medicine. Dr. Thornton oversees our continuing education curriculum and has trained over 3,000 dentists in advanced endodontic techniques.",
    image: "/team/james-thornton.jpg",
  },
  {
    name: "Dr. Amara Osei",
    position: "Director of Global Outreach",
    specialty: "Public Health Dentistry",
    bio: "With experience spanning 20 countries, Dr. Osei leads our international partnerships and community health initiatives. She is a WHO consultant on oral health policy.",
    image: "/team/amara-osei.jpg",
  },
  {
    name: "Dr. Lucas Moretti",
    position: "Chief Innovation Officer",
    specialty: "Digital Dentistry",
    bio: "A pioneer in AI-assisted dental diagnostics. Dr. Moretti bridges the gap between technology and clinical practice, leading our digital transformation initiatives.",
    image: "/team/lucas-moretti.jpg",
  },
  {
    name: "Catherine Wells",
    position: "Executive Director",
    specialty: "Healthcare Administration",
    bio: "With 18 years in healthcare management, Catherine oversees the society's operations, membership services, and strategic growth initiatives.",
    image: "/team/catherine-wells.jpg",
  },
];

export const events = [
  {
    title: "Annual Global Dental Summit 2026",
    date: "2026-06-15",
    endDate: "2026-06-18",
    time: "8:00 AM - 6:00 PM",
    location: "Marina Bay Convention Center, California",
    description:
      "Our flagship event bringing together 2,000+ dental professionals for four days of learning, innovation, and networking. Featuring 80+ speakers, live demonstrations, and an exhibition hall with 150 vendors.",
    category: "Conference",
    featured: true,
  },
  {
    title: "Digital Dentistry Masterclass",
    date: "2026-04-22",
    time: "9:00 AM - 4:00 PM",
    location: "Virtual Event",
    description:
      "An intensive hands-on workshop covering CAD/CAM workflows, intraoral scanning, and 3D printing in dental practice. Limited to 50 participants for personalized instruction.",
    category: "Workshop",
    featured: true,
  },
  {
    title: "Emerging Leaders Symposium",
    date: "2026-05-10",
    time: "10:00 AM - 3:00 PM",
    location: "The Grand Hotel, New York City",
    description:
      "A networking and development event designed for dental professionals in their first 10 years of practice. Includes panel discussions, career coaching, and peer networking.",
    category: "Networking",
    featured: false,
  },
  {
    title: "Research Showcase & Awards Gala",
    date: "2026-09-20",
    time: "6:00 PM - 10:00 PM",
    location: "Ritz-Carlton, Chicago",
    description:
      "An elegant evening celebrating the year's most impactful dental research. Grant recipients present their findings, followed by the annual Excellence Awards ceremony.",
    category: "Gala",
    featured: true,
  },
  {
    title: "Pediatric Dentistry Forum",
    date: "2026-07-08",
    time: "9:00 AM - 5:00 PM",
    location: "Children's Healthcare Center, Boston",
    description:
      "A specialized forum addressing the latest in pediatric oral health, behavioral management, and early intervention strategies.",
    category: "Forum",
    featured: false,
  },
];

export const insights = [
  {
    slug: "future-of-ai-dental-diagnostics",
    title: "The Future of AI in Dental Diagnostics: What Every Practitioner Should Know",
    coverImage: "/insights/ai-diagnostics.jpg",
    excerpt:
      "Artificial intelligence is revolutionizing how we detect, diagnose, and treatment-plan dental conditions. Here's what the latest research tells us about the future of AI in your practice.",
    author: "Dr. Lucas Moretti",
    authorPosition: "Chief Innovation Officer",
    publishedDate: "2026-02-15",
    updatedDate: "2026-03-01",
    category: "Technology",
    body: `Artificial intelligence is no longer a futuristic concept in dentistry — it's here, and it's transforming the way we approach diagnostics. From detecting early-stage caries on radiographs to identifying patterns in periodontal disease progression, AI-powered tools are becoming indispensable in modern dental practice.

## The Current Landscape

Several AI systems have received FDA clearance for dental applications, including tools for:
- **Radiographic analysis** — detecting caries, periapical lesions, and bone loss with accuracy rates exceeding 95%
- **Oral cancer screening** — using image recognition to flag suspicious lesions during routine exams
- **Treatment planning** — generating evidence-based treatment options based on patient data and outcomes research

## What This Means for Your Practice

The integration of AI doesn't replace clinical judgment — it augments it. Think of these tools as a highly trained second opinion available for every patient, every time. Studies show that AI-assisted diagnostics reduce missed diagnoses by up to 30% and improve treatment plan acceptance through visual patient education.

## Getting Started

For practices looking to integrate AI, we recommend starting with radiographic analysis tools, which offer the clearest ROI and require minimal workflow changes. Our Technology Integration service can help you evaluate vendors and implement solutions tailored to your practice size and specialty.`,
  },
  {
    slug: "minimally-invasive-periodontal-therapy",
    title: "Minimally Invasive Periodontal Therapy: A Paradigm Shift",
    coverImage: "/insights/periodontal-therapy.jpg",
    excerpt:
      "New techniques in periodontal treatment are delivering better outcomes with less discomfort and faster recovery times. We explore the evidence behind this paradigm shift.",
    author: "Dr. Priya Sharma",
    authorPosition: "Vice President, Periodontics",
    publishedDate: "2026-01-28",
    updatedDate: null,
    category: "Clinical",
    body: `The field of periodontics is experiencing a fundamental shift toward minimally invasive approaches. Techniques such as the Pinhole Surgical Technique (PST), laser-assisted periodontal therapy, and microsurgical methods are redefining what's possible in soft tissue management.

## Why Minimally Invasive?

Traditional periodontal surgery, while effective, comes with significant patient morbidity — pain, swelling, and extended recovery times. Minimally invasive techniques address these concerns while maintaining or improving clinical outcomes.

## Key Techniques

### Pinhole Surgical Technique
This sutureless, graft-free approach to treating gum recession has shown remarkable results in clinical trials, with patients reporting 90% less discomfort compared to connective tissue grafting.

### Laser-Assisted Therapy
Er:YAG and diode lasers are being used for selective calculus removal, pocket decontamination, and biostimulation, offering precision that traditional instruments cannot match.

### Growth Factor Protocols
Platelet-rich fibrin (PRF) and recombinant growth factors are enhancing tissue regeneration when combined with minimally invasive surgical approaches.

## The Evidence

A 2025 systematic review published in the Journal of Clinical Periodontology found that minimally invasive approaches achieved comparable attachment gain to traditional surgery with significantly reduced patient morbidity and faster healing times.`,
  },
  {
    slug: "building-resilient-dental-practice",
    title: "Building a Resilient Dental Practice in an Uncertain Economy",
    coverImage: "/insights/practice-management.jpg",
    excerpt:
      "Economic uncertainty demands smarter practice management. Learn strategies that top-performing practices use to maintain stability and growth regardless of market conditions.",
    author: "Catherine Wells",
    authorPosition: "Executive Director",
    publishedDate: "2026-03-05",
    updatedDate: null,
    category: "Practice Management",
    body: `In an era of economic uncertainty, dental practices face unique challenges — rising overhead costs, staffing shortages, and shifting patient expectations. Yet some practices don't just survive turbulent times — they thrive. What do they do differently?

## Diversify Revenue Streams

Top-performing practices rarely rely on a single revenue source. They combine:
- **Core clinical services** with high-margin specialty procedures
- **Membership plans** for uninsured patients (reducing insurance dependency)
- **Ancillary services** such as sleep dentistry, Botox, or clear aligners

## Invest in Your Team

Staff turnover is one of the largest hidden costs in dentistry. Practices that invest in training, competitive compensation, and positive culture report 40% lower turnover rates and 25% higher production per operatory.

## Embrace Digital Marketing

Practices with a strong digital presence — including SEO-optimized websites, active social media, and reputation management — consistently attract 30-50% more new patients than those relying solely on traditional referrals.

## Financial Resilience

Maintain 3-6 months of operating expenses in reserve, regularly review fee schedules against market data, and consider strategic debt management for technology investments that improve efficiency.

## The ADS Advantage

Our Practice Management service provides members with benchmarking data, financial planning tools, and one-on-one consulting to help you implement these strategies effectively.`,
  },
  {
    slug: "innovations-in-dental-implantology",
    title: "5 Innovations Reshaping Dental Implantology in 2026",
    coverImage: "/insights/implantology.jpg",
    excerpt:
      "From 3D-printed custom implants to AI-guided surgical planning, implantology is evolving faster than ever. Discover the five innovations you need to know about.",
    author: "Dr. Alexander Reef",
    authorPosition: "President, Prosthodontics",
    publishedDate: "2025-12-10",
    updatedDate: "2026-01-15",
    category: "Technology",
    body: `Dental implantology continues to evolve at a breathtaking pace. Here are five innovations that are reshaping the field in 2026.

## 1. 3D-Printed Custom Implants

Patient-specific implants manufactured using titanium 3D printing are moving from research labs to clinical practice. These custom implants match the patient's anatomy precisely, reducing surgery time and improving osseointegration rates.

## 2. AI-Guided Surgical Planning

AI algorithms now analyze CBCT data to generate optimal implant positions, predict bone density, and identify critical anatomical structures with unprecedented accuracy. Surgeons report 40% reduction in planning time and improved predictability.

## 3. Ceramic Implants Maturation

Zirconia implants have overcome early reliability concerns. New two-piece designs with improved connection mechanics are offering a metal-free alternative with excellent long-term outcomes for patients with metal sensitivities or aesthetic demands.

## 4. Immediate Loading Protocols

Refined protocols and improved implant surface technologies are making same-day teeth a reality for more patients. Success rates for immediate loading now rival traditional delayed protocols in carefully selected cases.

## 5. Regenerative Approaches

Combination therapies using stem cells, growth factors, and 3D-printed scaffolds are enabling implant placement in previously impossible sites — patients with severe bone loss who would have been told "you're not a candidate" just five years ago.`,
  },
];

export const resources = [
  {
    title: "Clinical Practice Guidelines",
    description: "Evidence-based guidelines covering common dental procedures and best practices.",
    icon: "FileText",
    category: "Guidelines",
  },
  {
    title: "CE Course Catalog",
    description: "Browse our complete library of continuing education courses, workshops, and certifications.",
    icon: "BookOpen",
    category: "Education",
  },
  {
    title: "Research Publications",
    description: "Access peer-reviewed publications from our members and research grant recipients.",
    icon: "Newspaper",
    category: "Research",
  },
  {
    title: "Practice Management Toolkit",
    description: "Templates, calculators, and guides for running an efficient dental practice.",
    icon: "Briefcase",
    category: "Tools",
  },
  {
    title: "Patient Education Materials",
    description: "Downloadable brochures and visual aids to help educate your patients.",
    icon: "Heart",
    category: "Patient Care",
  },
  {
    title: "Member Directory",
    description: "Connect with fellow members, find specialists, and build your referral network.",
    icon: "Users",
    category: "Network",
  },
];

export const partnerContent = {
  headline: "Partner With Us",
  description:
    "Join forces with the Atlantis Dental Society to reach a global community of dental professionals. We offer partnership opportunities for organizations, manufacturers, and educational institutions.",
  benefits: [
    {
      title: "Brand Visibility",
      description: "Reach 2,500+ dental professionals through our events, publications, and digital platforms.",
    },
    {
      title: "Thought Leadership",
      description: "Co-create content, sponsor research, and position your organization as an industry leader.",
    },
    {
      title: "Product Showcase",
      description: "Demonstrate your products and services at our conferences and through our digital channels.",
    },
    {
      title: "Networking Access",
      description: "Build relationships with decision-makers at practices, institutions, and organizations worldwide.",
    },
  ],
  tiers: [
    { name: "Bronze", price: "$5,000/year", features: ["Logo on website", "Newsletter mention", "1 event booth"] },
    {
      name: "Silver",
      price: "$15,000/year",
      features: ["All Bronze benefits", "Co-branded webinar", "3 event booths", "Member email feature"],
    },
    {
      name: "Gold",
      price: "$35,000/year",
      features: [
        "All Silver benefits",
        "Keynote sponsorship",
        "Dedicated product showcase",
        "Research co-sponsorship",
        "Priority placement",
      ],
    },
  ],
};

export const joinContent = {
  headline: "Join the Atlantis Dental Society",
  description:
    "Become part of a global community dedicated to advancing dental excellence. Choose the membership tier that fits your career stage and goals.",
  tiers: [
    {
      name: "Student",
      price: "$49/year",
      description: "For dental students and residents",
      features: [
        "Access to online CE library",
        "Student networking events",
        "Mentorship matching",
        "Discounted conference registration",
      ],
    },
    {
      name: "Professional",
      price: "$299/year",
      description: "For practicing dental professionals",
      features: [
        "Full CE course access",
        "All networking events",
        "Research publication access",
        "Practice management tools",
        "Annual conference pass",
      ],
    },
    {
      name: "Fellow",
      price: "$599/year",
      description: "For experienced practitioners seeking leadership",
      features: [
        "All Professional benefits",
        "Research grant eligibility",
        "Leadership committee access",
        "Speaking opportunities",
        "VIP conference access",
        "Exclusive retreats",
      ],
    },
  ],
};

export const contactContent = {
  headline: "Get in Touch",
  description: "Have questions about membership, events, or partnerships? We'd love to hear from you.",
  departments: [
    { name: "General Inquiries", email: "info@atlantisdental.org", phone: "+1 (555) 234-5678" },
    { name: "Membership Services", email: "membership@atlantisdental.org", phone: "+1 (555) 234-5679" },
    { name: "Events & Registration", email: "events@atlantisdental.org", phone: "+1 (555) 234-5680" },
    { name: "Partnerships", email: "partners@atlantisdental.org", phone: "+1 (555) 234-5681" },
  ],
  hours: "Monday - Friday: 8:00 AM - 6:00 PM PST",
};
