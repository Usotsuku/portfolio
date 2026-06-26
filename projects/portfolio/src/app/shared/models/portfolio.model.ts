export interface PortfolioProfile {
  readonly name: string;
  readonly title: string;
  readonly location: string;
  readonly phone: string;
  readonly email: string;
  readonly githubUrl: string;
  readonly linkedinUrl: string;
  readonly cvUrl: string;
  readonly pictureUrl: string;
  readonly summary: readonly string[];
  readonly rotatingSkills: readonly string[];
}

export interface PortfolioMetric {
  readonly label: string;
  readonly value: string;
  readonly detail: string;
}

export interface ExperienceItem {
  readonly company: string;
  readonly role: string;
  readonly duration: string;
  readonly highlights: readonly string[];
}

export interface ProjectItem {
  readonly name: string;
  readonly problem: string;
  readonly architecture: string;
  readonly responsibilities: readonly string[];
  readonly stack: readonly string[];
  readonly outcome: string;
  readonly videoUrl?: string;
  readonly mediaLayout?: 'mobile' | 'desktop';
}

export interface EducationItem {
  readonly degree: string;
  readonly institution: string;
  readonly location: string;
  readonly duration: string;
}

export interface CertificationItem {
  readonly name: string;
}

export interface StackCategory {
  readonly name: string;
  readonly items: readonly string[];
}

export interface PrincipleItem {
  readonly title: string;
  readonly description: string;
}

export interface ContactAction {
  readonly label: string;
  readonly href: string;
  readonly icon: 'github' | 'linkedin' | 'mail' | 'download';
}

export interface PortfolioContent {
  readonly profile: PortfolioProfile;
  readonly metrics: readonly PortfolioMetric[];
  readonly experience: readonly ExperienceItem[];
  readonly projects: readonly ProjectItem[];
  readonly education: readonly EducationItem[];
  readonly certifications: readonly CertificationItem[];
  readonly languages: readonly string[];
  readonly softSkills: readonly string[];
  readonly stack: readonly StackCategory[];
  readonly principles: readonly PrincipleItem[];
  readonly roadmap: readonly PrincipleItem[];
  readonly contactActions: readonly ContactAction[];
}


