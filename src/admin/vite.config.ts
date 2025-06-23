import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        '8b0b-186-12-169-24.ngrok-free.app' // Agregá acá tu dominio ngrok
      ],
    },
  });
};