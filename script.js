// Default circular placeholder avatar (photo-like gradient + face silhouette)
const defaultSvg = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>
  <defs>
    <radialGradient id='bgGrad' cx='50%' cy='40%' r='70%'>
      <stop offset='0%' stop-color='#dce7f7'/>
      <stop offset='100%' stop-color='#9db7d9'/>
    </radialGradient>
  </defs>
  <!-- Background circle -->
  <circle cx='60' cy='60' r='58' fill='url(#bgGrad)' stroke='#ffffff' stroke-width='4'/>
  <!-- Shoulders -->
  <path d='M30 90c0-12 12-22 30-22s30 10 30 22v10H30V90z' fill='#b0c4de'/>
  <!-- Head -->
  <circle cx='60' cy='50' r='16' fill='#cdd7e4'/>
</svg>
`;

const defaultAvatarDataURI = 'data:image/svg+xml;utf8,' + encodeURIComponent(defaultSvg);

// Make available for the onerror in HTML
window.defaultAvatarDataURI = defaultAvatarDataURI;
