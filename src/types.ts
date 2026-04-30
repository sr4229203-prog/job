export interface Job {
  id: string;
  title: string;
  department: string;
  institution: string;
  location: string;
  jobType: 'Full-time' | 'Part-time' | 'Postdoc' | 'Contract';
  field: string;
  description: string;
  salary?: string;
  deadline: string;
  url?: string;
}
