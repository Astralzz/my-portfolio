// Tipo para la api de github
interface GitHubRepo {
  id?: number;
  name?: string;
  description?: string;
  html_url?: string;
  language?: string;
  created_at?: string;
  updated_at?: string;
  stargazers_count?: number;
  forks_count?: number;
  open_issues_count?: number;
  default_branch?: string;
}

// URL de la api
//LINK - https://api.github.com/users/Astralzz/repos

export default GitHubRepo;
