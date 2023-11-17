export interface CustomerData {
  id?: string;
  isActive: boolean;
  company: string;
  industry: string;
  projects: ProjectInfo[] | [];
  about: string;
}

export interface ProjectInfo {
  id?: string;
  name: string;
  contact: string | null;
  start_date: string | null;
  end_date: string | null;
}
