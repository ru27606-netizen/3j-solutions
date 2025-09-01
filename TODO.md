# Add Automatic Image Timer to Service Pages

## Task: Add image timer on service pages to automatically refresh with new photos

### Steps:
- [x] Update app/services/allied/page.tsx: Add useEffect with setInterval for auto-slide
- [x] Update app/services/digital/page.tsx: Add useEffect with setInterval for auto-slide
- [x] Update app/services/facility/page.tsx: Add useEffect with setInterval for auto-slide
- [x] Update app/services/It/page.tsx: Add useEffect with setInterval for auto-slide
- [x] Update app/services/maintenance/page.tsx: Add useEffect with setInterval for auto-slide
- [x] Update app/services/renovation/page.tsx: Add useEffect with setInterval for auto-slide

### Details:
- Add import { useEffect } from "react";
- Add useEffect(() => { const interval = setInterval(() => { nextImage(); }, 4000); return () => clearInterval(interval); }, []);
- Timer interval: 4 seconds (matching ProjectImageSlider)
- Ensure the timer is cleared on component unmount to prevent memory leaks
