import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const username = "JulioCezarTI";
    
    console.log(`Fetching GitHub data for user: ${username}`);

    // Buscar dados do perfil
    const profileResponse = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Lovable-Portfolio-App'
      }
    });

    if (!profileResponse.ok) {
      throw new Error(`GitHub API error: ${profileResponse.status}`);
    }

    const profile = await profileResponse.json();

    // Buscar repositórios (ordenados por estrelas)
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Lovable-Portfolio-App'
        }
      }
    );

    if (!reposResponse.ok) {
      throw new Error(`GitHub API error: ${reposResponse.status}`);
    }

    const allRepos = await reposResponse.json();
    
    // Filtrar e ordenar repositórios (não-fork, com descrição, ordenados por estrelas)
    const repos = allRepos
      .filter((repo: any) => !repo.fork && repo.description)
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
      .map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        topics: repo.topics || [],
        updated_at: repo.updated_at,
      }));

    // Buscar linguagens mais usadas
    const languageCount: Record<string, number> = {};
    allRepos.forEach((repo: any) => {
      if (repo.language && !repo.fork) {
        languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
      }
    });

    const topLanguages = Object.entries(languageCount)
      .sort(([, a], [, b]) => (b as number) - (a as number))
      .slice(0, 10)
      .map(([lang, count]) => ({ language: lang, count }));

    const result = {
      profile: {
        name: profile.name || profile.login,
        bio: profile.bio,
        location: profile.location,
        company: profile.company,
        blog: profile.blog,
        twitter_username: profile.twitter_username,
        public_repos: profile.public_repos,
        followers: profile.followers,
        following: profile.following,
        avatar_url: profile.avatar_url,
        html_url: profile.html_url,
      },
      repos,
      topLanguages,
    };

    console.log(`Successfully fetched data for ${username}`);
    console.log(`Found ${repos.length} repositories`);

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in github-data function:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error',
        details: 'Failed to fetch GitHub data'
      }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
