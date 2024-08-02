import React, { useEffect } from 'react';

const TawkToScript: React.FC = () => {
  useEffect(() => {
    const Tawk_API = (window as any).Tawk_API || {};
    const Tawk_LoadStart = new Date();

    (function() {
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];

      if (s0 && s0.parentNode) { // Null check to ensure s0 and its parent node exist
        s1.async = true;
        s1.src = 'https://embed.tawk.to/6691574432dca6db2cae8529/1i2jrpp5b';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      }
    })();
  }, []);

  return null;
};

export default TawkToScript;
