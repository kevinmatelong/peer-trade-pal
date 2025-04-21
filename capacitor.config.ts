
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.1265d277700643efaaec07794c11eeaa',
  appName: 'peer-trade-pal',
  webDir: 'dist',
  server: {
    url: 'https://1265d277-7006-43ef-aaec-07794c11eeaa.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: null,
      keystorePassword: null,
      keystoreAlias: null,
      keystoreAliasPassword: null,
    }
  }
};

export default config;
