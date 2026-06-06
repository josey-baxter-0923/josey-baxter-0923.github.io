export type GithubRepo = {
  name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  size: number;
  updated_at: string;
  pushed_at: string;
  topics?: string[];
};

export type GithubProfile = {
  login: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  created_at: string;
  updated_at: string;
};

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "josey-baxter-portfolio",
};

export async function getGithubSnapshot() {
  const [profileResponse, reposResponse] = await Promise.all([
    fetch("https://api.github.com/users/josey-baxter-0923", {
      headers,
      next: { revalidate: 3600 },
    }),
    fetch("https://api.github.com/users/josey-baxter-0923/repos?per_page=100&sort=updated", {
      headers,
      next: { revalidate: 3600 },
    }),
  ]);

  if (!profileResponse.ok || !reposResponse.ok) {
    return null;
  }

  const profile = (await profileResponse.json()) as GithubProfile;
  const repos = (await reposResponse.json()) as GithubRepo[];

  const sourceRepos = repos.filter((repo) => !repo.fork);
  const forks = repos.filter((repo) => repo.fork);
  const substantiveRepos = sourceRepos.filter((repo) => repo.size > 25);
  const languageCounts = repos.reduce<Record<string, number>>((acc, repo) => {
    const key = repo.language ?? "Unspecified";
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});

  return {
    profile,
    repos,
    stats: {
      sourceRepos: sourceRepos.length,
      forks: forks.length,
      substantiveRepos: substantiveRepos.length,
      emptyRepos: repos.filter((repo) => repo.size === 0).length,
      languageCounts,
      recentlyUpdated: repos.slice(0, 6).map((repo) => ({
        name: repo.name,
        fork: repo.fork,
        language: repo.language,
        size: repo.size,
        updatedAt: repo.updated_at,
      })),
    },
  };
}
