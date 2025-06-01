const GITHUB_API_BASE = 'https://api.github.com';
const USERNAME = 'aikerary';
export const fetchUserProfile = async () => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${USERNAME}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch profile: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub profile:', error);
    throw error;
  }
};
export const fetchUserRepositories = async (perPage = 30, sort = 'updated') => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${USERNAME}/repos?sort=${sort}&per_page=${perPage}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch repositories: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw error;
  }
};
export const calculateLanguageStats = (repositories) => {
  try {
    let languageStats = {};
    let totalSize = 0;
    repositories.forEach(repo => {
      if (repo.language && repo.size > 0) {
        languageStats[repo.language] = (languageStats[repo.language] || 0) + repo.size;
        totalSize += repo.size;
      }
    });
    const languagePercentages = {};
    Object.entries(languageStats).forEach(([lang, size]) => {
      languagePercentages[lang] = ((size / totalSize) * 100).toFixed(1);
    });
    return Object.entries(languagePercentages)
      .sort(([,a], [,b]) => parseFloat(b) - parseFloat(a))
      .slice(0, 6)
      .reduce((obj, [lang, percentage]) => {
        obj[lang] = percentage;
        return obj;
      }, {});
  } catch (error) {
    console.error('Error calculating language stats:', error);
    return {};
  }
};
export const fetchGitHubStats = async () => {
  try {
    const [profile, repositories] = await Promise.all([
      fetchUserProfile(),
      fetchUserRepositories(100) 
    ]);
    const languageStats = calculateLanguageStats(repositories);
    return {
      profile,
      repositories: repositories.slice(0, 6), 
      languageStats,
      totalRepos: repositories.length,
      totalLanguages: Object.keys(languageStats).length
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    throw error;
  }
};
export const formatDate = (dateString) => {
  try {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Fecha no disponible';
  }
};
export const getLanguageColor = (language) => {
  const colors = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    HTML: '#e34c26',
    CSS: '#563d7c',
    React: '#61dafb',
    Vue: '#4fc08d',
    Java: '#b07219',
    'C++': '#f34b7d',
    PHP: '#4F5D95',
    Go: '#00ADD8',
    Rust: '#dea584',
    Swift: '#fa7343',
    Kotlin: '#7F52FF',
    'C#': '#239120',
    Shell: '#89e051'
  };
  return colors[language] || '#6b7280';
};
