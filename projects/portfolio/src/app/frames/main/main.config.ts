export interface MainNavigationItem {
  readonly label: string;
  readonly fragment: string;
}

export const mainNavigationItems: readonly MainNavigationItem[] = [
  { label: 'About', fragment: 'about' },
  { label: 'Stack', fragment: 'stack' },
  { label: 'Approach', fragment: 'work' },
  { label: 'Career', fragment: 'experience' },
  { label: 'Projects', fragment: 'projects' },
  { label: 'Contact', fragment: 'contact' }
];
