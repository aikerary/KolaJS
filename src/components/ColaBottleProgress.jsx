import React, { useState, useEffect } from "react";
const ColaBottleProgress = ({
  score,
  maxScore,
  animated = true,
  label = "Progreso",
}) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const percentage = Math.min((score / maxScore) * 100, 100);
  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setAnimatedScore(score);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setAnimatedScore(score);
    }
  }, [score, animated]);
  const animatedPercentage = Math.min((animatedScore / maxScore) * 100, 100);
  const generateBubbles = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      left: Math.random() * 80 + 10,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
    }));
  };
  const bubbles = generateBubbles(12);
  const getScoreMessage = (percentage) => {
    if (percentage >= 90) return "¡Excelente!";
    if (percentage >= 80) return "¡Muy Bien!";
    if (percentage >= 70) return "Buen Trabajo";
    if (percentage >= 60) return "Puedes Mejorar";
    return "Sigue Practicando";
  };
  return (
    <div className="flex flex-col items-center w-20 min-h-[220px]">
      <div className="h-8 flex items-center justify-center mb-2">
        {score === 0 && (
          <div className="text-sm font-semibold text-cola-red text-center">
            {label}
          </div>
        )}
      </div>

      <div className="relative w-20 h-40 flex-shrink-0 flex-grow-0">
        <div className="relative w-20 h-40">
          <svg
            width="80"
            height="160"
            viewBox="0 0 60 120"
            className="absolute inset-0 z-10"
          >
            <defs>
              <linearGradient
                id="colaGlassGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.15)" />
                <stop offset="30%" stopColor="rgba(255, 255, 255, 0.05)" />
                <stop offset="70%" stopColor="rgba(255, 255, 255, 0.05)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
              </linearGradient>

              <mask
                id="liquidMask"
                maskUnits="userSpaceOnUse"
                x="7"
                y="21"
                width="46"
                height="91"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.2689 21V36.3638C22.3876 38.6233 20.4401 40.8155 18.4418 42.9727C12.4894 49.398 8.16666 54.3731 7.99756 60.5567V109.133C8.06672 109.876 8.4024 110.573 8.94691 111.099C9.49877 111.631 10.227 111.951 10.9978 112H49.7925C50.3857 111.976 50.9948 111.701 51.3958 111.273C51.8056 110.836 52.0356 110.2 51.9981 109.608L51.9885 60.544C51.8551 54.3728 47.547 49.4062 41.5921 42.9744C39.5963 40.8188 37.6455 38.6211 35.7672 36.362V21H24.2689Z"
                  fill="white"
                />
              </mask>
            </defs>

            <path
              d="M16.6471 33.421L16.7713 33.2794V33.0911V13.5715H16.7714L16.7712 13.5609C16.752 12.6595 16.7596 11.3302 16.7662 10.1832L16.7662 10.1797C16.7697 9.55977 16.773 8.99298 16.7714 8.58232C16.7622 6.27107 17.742 4.65402 18.9898 3.52009C20.2505 2.37451 21.7869 1.72308 22.8486 1.39209C25.2352 0.647995 27.9799 0.5 29.9932 0.5C31.8223 0.5 34.6128 0.532453 37.0204 1.20434C38.2505 1.54763 39.7739 2.15908 41.0393 3.35139C42.4368 4.66811 43.2537 6.44998 43.265 8.49239C43.2664 8.73543 43.2702 9.05655 43.2746 9.42256C43.2893 10.6665 43.3102 12.4311 43.2655 13.5516L43.2651 13.5616V13.5715V33.0927V33.2809L43.3892 33.4224C44.4008 34.576 45.4798 35.7407 46.6167 36.9681L46.6189 36.9706C46.8625 37.2335 47.1087 37.4993 47.3578 37.7688C49.1709 39.7305 51.0937 41.8442 52.8315 44.089C56.3067 48.5782 59.3618 53.99 59.4857 60.6548L59.4864 60.6947V107.379V107.391L59.487 107.403C59.635 110.462 58.5111 113.506 56.3914 115.765C54.2333 118.065 51.1563 119.43 47.9636 119.499L47.9193 119.5H47.9141H12.7797L12.6875 119.496C9.52838 119.369 6.5322 118.096 4.28146 115.925C2.03099 113.755 0.686716 110.844 0.507258 107.76L0.5 107.635V60.6841L0.501191 60.6335C0.657936 53.9774 3.71959 48.573 7.19826 44.0862C8.93782 41.8425 10.8611 39.7297 12.6752 37.7679C12.9253 37.4976 13.1724 37.2309 13.4169 36.9671L13.4171 36.9669L13.42 36.9637C14.5563 35.7377 15.635 34.5738 16.6471 33.421Z"
              fill="url(#colaGlassGradient)"
              stroke="#dc2626"
              strokeWidth="1"
              opacity="0.8"
            />

            <ellipse cx="30" cy="2" rx="8" ry="2.5" fill="#dc2626" />
            <ellipse cx="30" cy="1" rx="6" ry="1.8" fill="#ef4444" />
            <circle cx="30" cy="0.8" r="1" fill="#fca5a5" opacity="0.6" />
          </svg>

          <div className="absolute inset-0">
            <svg
              width="80"
              height="160"
              viewBox="0 0 60 120"
              className="absolute inset-0"
            >
              <defs>
                <linearGradient
                  id={`liquidGradient-${percentage}`}
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor={
                      percentage >= 80
                        ? "#22c55e"
                        : percentage >= 60
                        ? "#eab308"
                        : percentage >= 40
                        ? "#f97316"
                        : "#dc2626"
                    }
                  />
                  <stop
                    offset="100%"
                    stopColor={
                      percentage >= 80
                        ? "#16a34a"
                        : percentage >= 60
                        ? "#ca8a04"
                        : percentage >= 40
                        ? "#ea580c"
                        : "#b91c1c"
                    }
                  />
                </linearGradient>
              </defs>
              <g mask="url(#liquidMask)">
                <rect
                  x="5"
                  y="21"
                  width="50"
                  height="91"
                  fill={`url(#liquidGradient-${percentage})`}
                  className="transition-all duration-1000 ease-out"
                  style={{
                    transformOrigin: "0 100%",
                    transform: `scaleY(${Math.max(
                      animatedPercentage / 100,
                      0.01
                    )})`,
                  }}
                />
              </g>
            </svg>

            {animatedPercentage > 25 && (
              <div
                className="absolute flex items-center justify-center text-white font-bold text-sm drop-shadow-lg"
                style={{
                  bottom: `${8 + (animatedPercentage / 100) * 72}px`,
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 20,
                }}
              >
                {Math.round(animatedPercentage)}%
              </div>
            )}

            {animatedPercentage > 10 && (
              <div className="absolute inset-0" style={{ zIndex: 15 }}>
                {bubbles.slice(0, 6).map((bubble) => {
                  const bubbleBottom = 25 + (animatedPercentage / 100) * 65;
                  const bubbleLeft = 20 + (bubble.left / 100) * 20;
                  return (
                    <div
                      key={bubble.id}
                      className="absolute rounded-full bg-white opacity-40"
                      style={{
                        width: `${Math.min(bubble.size, 3)}px`,
                        height: `${Math.min(bubble.size, 3)}px`,
                        left: `${bubbleLeft}%`,
                        bottom: `${Math.random() * bubbleBottom + 10}%`,
                        animation: `bubble-float-${bubble.id} ${bubble.duration}s ${bubble.delay}s infinite ease-in-out`,
                      }}
                    />
                  );
                })}
              </div>
            )}

            {animatedPercentage > 20 && (
              <div
                className="absolute bg-white bg-opacity-50 rounded-full"
                style={{
                  bottom: `${25 + (animatedPercentage / 100) * 72}px`,
                  left: "22%",
                  right: "22%",
                  height: "2px",
                  animation: "foam 3s ease-in-out infinite alternate",
                }}
              />
            )}

            <div className="absolute top-4 left-2 w-1 h-16 bg-gradient-to-b from-white to-transparent opacity-30 rounded-full transform rotate-12"></div>
          </div>
        </div>
      </div>

      <div className="text-center w-full h-16 flex flex-col justify-center mt-2">
        <div className="text-xl font-bold text-cola-dark-gray mb-1">
          {animatedScore}/{maxScore}
        </div>
        <div
          className={`text-sm font-medium h-5 ${
            percentage >= 70
              ? "text-green-600"
              : percentage >= 50
              ? "text-yellow-600"
              : "text-red-600"
          }`}
        >
          {animatedPercentage > 0 ? getScoreMessage(animatedPercentage) : ""}
        </div>
      </div>
      <style jsx>{`
        @keyframes foam {
          0% {
            transform: scaleX(1);
            opacity: 0.6;
          }
          100% {
            transform: scaleX(1.1);
            opacity: 0.3;
          }
        }
        ${bubbles
          .slice(0, 6)
          .map(
            (bubble) => `
          @keyframes bubble-float-${bubble.id} {
            0% { 
              transform: translateY(0px) scale(0.8); 
              opacity: 0.6; 
            }
            50% { 
              transform: translateY(-${10 + Math.random() * 20}px) scale(1); 
              opacity: 0.8; 
            }
            100% { 
              transform: translateY(-${20 + Math.random() * 30}px) scale(0.6); 
              opacity: 0.2; 
            }
          }
        `
          )
          .join("")}
      `}</style>
    </div>
  );
};
export default ColaBottleProgress;
