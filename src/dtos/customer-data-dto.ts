export interface CustomerDataDto {
  id: string;
  isActive: boolean;
  company: string;
  industry: string;
  projects: Project[] | [];
  about: string;
}

export interface Project {
  id: string;
  name: string;
  contact: string | null;
  start_date: string;
  end_date: string | null;
}
