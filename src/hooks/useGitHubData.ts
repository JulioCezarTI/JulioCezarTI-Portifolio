import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface GitHubProfile {
  name: string;
  bio: string;
  location: string;
  company: string;
  blog: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

export interface GitHubData {
  profile: GitHubProfile;
  repos: GitHubRepo[];
  topLanguages: { language: string; count: number }[];
}

export const useGitHubData = () => {
  return useQuery<GitHubData>({
    queryKey: ["github-data"],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke("github-data");

      if (error) {
        console.error("Error fetching GitHub data:", error);
        throw error;
      }

      return data;
    },
    staleTime: 1000 * 60 * 5, // Cache por 5 minutos
    retry: 2,
  });
};
