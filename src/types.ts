export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'Security' | 'Facility' | 'Staffing' | 'Technical';
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  image: string;
}

export interface HeroSlide {
  id: number;
  slideNumber: string;
  tag: string;
  heading: string;
  subheading: string;
  image: string;
  accent: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface WhyUsItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
}

export interface StackedCardItem {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  specs: { label: string; val: string }[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}
