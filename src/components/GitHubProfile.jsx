import React, { useState, useEffect } from 'react';
import { fetchGitHubStats, getLanguageColor } from '../api/github';

const GitHubProfile = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGitHubData = async () => {
      try {
        setLoading(true);
        const stats = await fetchGitHubStats();
        setData(stats);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('GitHub API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4 xs:space-y-6">
        <div className="card-cola animate-pulse">
          <div className="h-5 xs:h-6 bg-gray-200 rounded mb-3 xs:mb-4"></div>
          <div className="space-y-2 xs:space-y-3">
            <div className="h-3 xs:h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 xs:h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
        <div className="card-cola animate-pulse">
          <div className="h-5 xs:h-6 bg-gray-200 rounded mb-3 xs:mb-4"></div>
          <div className="space-y-2 xs:space-y-3">
            <div className="h-3 xs:h-4 bg-gray-200 rounded"></div>
            <div className="h-3 xs:h-4 bg-gray-200 rounded w-4/5"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card-cola border-red-200 bg-red-50">
        <h4 className="font-coca-cola text-lg xs:text-xl text-red-600 mb-2">
          Error al cargar datos de GitHub
        </h4>
        <p className="text-red-500 text-xs xs:text-sm">{error}</p>
        <p className="text-red-400 text-xs mt-2">
          Mostrando información estática como respaldo.
        </p>
      </div>
    );
  }

  const { profile, languageStats } = data;

  return (
    <div className="space-y-4 xs:space-y-6">
      {/* Top Languages */}
      <div className="card-cola">
        <h4 className="font-coca-cola text-lg xs:text-xl text-cola-dark-gray mb-3 xs:mb-4 flex items-center">
          <svg className="w-5 h-5 xs:w-6 xs:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          TOP LENGUAJES
        </h4>
        
        <div className="space-y-2 xs:space-y-3">
          {Object.entries(languageStats).slice(0, 5).map(([language, percentage]) => (
            <div key={language} className="flex items-center">
              <div className="flex items-center w-16 xs:w-20 sm:w-24">
                <div 
                  className="w-2.5 h-2.5 xs:w-3 xs:h-3 rounded-full mr-1.5 xs:mr-2 flex-shrink-0"
                  style={{ backgroundColor: getLanguageColor(language) }}
                ></div>
                <span className="text-xs xs:text-sm font-medium text-gray-700 truncate">{language}</span>
              </div>
              <div className="flex-1 mx-2 xs:mx-3">
                <div className="bg-gray-200 rounded-full h-2 xs:h-2.5">
                  <div 
                    className="h-2 xs:h-2.5 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${Math.max(parseFloat(percentage), 10)}%`,
                      backgroundColor: getLanguageColor(language)
                    }}
                  ></div>
                </div>
              </div>
              <span className="text-xs xs:text-sm font-semibold text-gray-600 w-8 xs:w-12 text-right">
                {percentage}%
              </span>
            </div>
          ))}
        </div>

        {profile?.public_repos > 0 && (
          <div className="mt-3 xs:mt-4 pt-3 xs:pt-4 border-t border-gray-200">
            <div className="text-center">
              <a 
                href={`https://github.com/${profile.login}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 xs:space-x-2 text-cola-red hover:text-cola-dark-red transition-colors duration-300"
              >
                <span className="text-xs xs:text-sm font-medium">Ver todos los repositorios</span>
                <svg className="w-3 h-3 xs:w-4 xs:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GitHubProfile;
