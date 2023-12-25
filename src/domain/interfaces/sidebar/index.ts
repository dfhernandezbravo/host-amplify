export enum To {
  Local = 'local',
  External = 'external',
}
enum Target {
  Blank = '_blank',
  Parent = '_parent',
}
interface Redirect {
  to: To;
  target: Target | null;
  url: string;
}
export interface Sidebar {
  id: string;
  label: string;
  isActive: boolean;
  isDefault: boolean;
  redirect: Redirect;
}
