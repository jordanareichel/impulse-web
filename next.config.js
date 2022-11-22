/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
		domains: ['images.pexels.com'],
		formats: ['image/avif', 'image/webp'],
	},
  
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: {
				and: [/\.(js|ts|md)x?$/],
			},
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						prettier: false,
						svgo: true,
						svgoConfig: { plugins: [{ removeViewBox: false }] },
						titleProp: true,
					},
				},
			],
		});

		return config;
	},
}

module.exports = nextConfig
