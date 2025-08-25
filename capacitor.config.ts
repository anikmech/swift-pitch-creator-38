
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.ce0eb6ea0f5d4a9ea19fd1ddd1c07fe6',
  appName: 'swift-pitch-creator',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'https://ce0eb6ea-0f5d-4a9e-a19f-d1ddd1c07fe6.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: "#ffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
    }
  }
};

export default config;
