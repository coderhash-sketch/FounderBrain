const FounderBrainLogo = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Brain outline */}
    <path
      d="M24 6C16 6 10 12 10 20C10 26 13 30 16 33C18 35 19 38 19 40H29C29 38 30 35 32 33C35 30 38 26 38 20C38 12 32 6 24 6Z"
      stroke="hsl(217, 91%, 60%)"
      strokeWidth="2"
      fill="hsl(217, 91%, 60%)"
      fillOpacity="0.08"
    />
    {/* Neural circuit lines */}
    <path d="M18 18L22 22L18 26" stroke="hsl(217, 91%, 70%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M30 18L26 22L30 26" stroke="hsl(217, 91%, 70%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="22" y1="22" x2="26" y2="22" stroke="hsl(217, 91%, 70%)" strokeWidth="1.5" strokeLinecap="round" />
    {/* Growth arrow */}
    <path d="M24 14L24 8M24 8L21 11M24 8L27 11" stroke="hsl(210, 40%, 98%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Circuit dots */}
    <circle cx="18" cy="18" r="1.5" fill="hsl(217, 91%, 70%)" />
    <circle cx="30" cy="18" r="1.5" fill="hsl(217, 91%, 70%)" />
    <circle cx="18" cy="26" r="1.5" fill="hsl(217, 91%, 70%)" />
    <circle cx="30" cy="26" r="1.5" fill="hsl(217, 91%, 70%)" />
    {/* Base */}
    <rect x="19" y="40" width="10" height="2" rx="1" fill="hsl(217, 91%, 60%)" fillOpacity="0.5" />
  </svg>
);

export default FounderBrainLogo;
