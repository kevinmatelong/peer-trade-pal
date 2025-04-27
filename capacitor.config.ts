
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.1265d277700643efaaec07794c11eeaa',
  appName: 'crypto-sokoni',
  webDir: 'dist',
  server: {
    url: "https://1265d277-7006-43ef-aaec-07794c11eeaa.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  android: {
    backgroundColor: "#ffffffff",
    buildOptions: {
      keystorePath: 'release-key.keystore',
      keystoreAlias: 'key0',
      keystorePassword: 'your_keystore_password',
      storePassword: 'your_store_password'
    }
  }
};

export default config;
