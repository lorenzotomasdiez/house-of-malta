/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
				fontFamily:{
					primary: ['Montserrat', 'sans-serif'],
					sans: ['Montserrat', 'sans-serif'],
				},
				width: {
					posterContainer: {
						DEFAULT: "422px",
					},
					posterFrame: {
						DEFAULT: "267.9px",
					},
					posterImage: {
						DEFAULT: "216px",
					},
				},
				height: {
					posterContainer: {
						DEFAULT: "478px",
					},
					posterFrame: {
						DEFAULT: "365.21px",
					},
					posterImage: {
						DEFAULT: "313px",
					},
				},
    		colors: {
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))',
						lighter: "#290d16"
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			tertiary: '#CCCCCC',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
					poster:{
						bg: "#F8F9FA"
					}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
				keyframes: {
					submerge: {
						'0%': { opacity: '1', transform: 'scale(1)' },
						'100%': { opacity: '0', transform: 'scale(0.95)' },
					},
					emerge: {
						'0%': { opacity: '0', transform: 'scale(1.05)' },
						'100%': { opacity: '1', transform: 'scale(1)' },
					},
					submergeReverse: {
						'0%': { opacity: '0', transform: 'scale(0.95)' },
						'100%': { opacity: '1', transform: 'scale(1)' },
					},
					emergeReverse: {
						'0%': { opacity: '1', transform: 'scale(1)' },
						'100%': { opacity: '0', transform: 'scale(1.05)' },
					},
				},
				animation: {
					submerge: 'submerge 2s ease-in-out forwards',
					emerge: 'emerge 2s ease-in-out forwards',
					submergeReverse: 'submergeReverse 2s ease-in-out forwards',
					emergeReverse: 'emergeReverse 2s ease-in-out forwards',
				},
    	}
    },
  plugins: [require("tailwindcss-animate")],
}
