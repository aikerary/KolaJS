/**
 * GitHub API Service
 * Handles all API calls to GitHub REST API
 */

const GITHUB_API_BASE = 'https://api.github.com';
const USERNAME = 'aikerary';

/**
 * Fetch user profile information
 * @returns {Promise<Object>} User profile data
 */
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

/**
 * Fetch user repositories
 * @param {number} perPage - Number of repositories per page (default: 30)
 * @param {string} sort - Sort criteria: 'created', 'updated', 'pushed', 'full_name' (default: 'updated')
 * @returns {Promise<Array>} Array of repositories
 */
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

/**
 * Get language statistics from repositories
 * @param {Array} repositories - Array of repository objects
 * @returns {Object} Language statistics with percentages
 */
export const calculateLanguageStats = (repositories) => {
  try {
    let languageStats = {};
    let totalSize = 0;
    
    // Calculate language distribution from repositories
    repositories.forEach(repo => {
      if (repo.language && repo.size > 0) {
        languageStats[repo.language] = (languageStats[repo.language] || 0) + repo.size;
        totalSize += repo.size;
      }
    });
    
    // Convert to percentages
    const languagePercentages = {};
    Object.entries(languageStats).forEach(([lang, size]) => {
      languagePercentages[lang] = ((size / totalSize) * 100).toFixed(1);
    });
    
    // Sort languages by usage and return top 6
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

/**
 * Get comprehensive GitHub statistics
 * @returns {Promise<Object>} Complete GitHub statistics
 */
export const fetchGitHubStats = async () => {
  try {
    const [profile, repositories] = await Promise.all([
      fetchUserProfile(),
      fetchUserRepositories(100) // Get more repos for better language stats
    ]);
    
    const languageStats = calculateLanguageStats(repositories);
    
    return {
      profile,
      repositories: repositories.slice(0, 6), // Only return first 6 for display
      languageStats,
      totalRepos: repositories.length,
      totalLanguages: Object.keys(languageStats).length
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    throw error;
  }
};

/**
 * Format date to Spanish locale
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
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

/**
 * Get color for programming language
 * @param {string} language - Programming language name
 * @returns {string} Hex color code
 */
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
