/** @type {import('next').NextConfig} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Désactiver l'optimisation des images
  },
  output: 'export',
};
