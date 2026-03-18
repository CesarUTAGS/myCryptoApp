import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.simpson.app', 
  appName: 'SimpsonApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;