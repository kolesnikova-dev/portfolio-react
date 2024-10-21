import '../index.css'

const paperStyle = {
	color: 'white',
	p: '1rem',
};

export const darkPaperStyle = {
	...paperStyle,
	background: 'var(--color-pale-blue-gradient)',
	backdropFilter: 'blur(2px)',
};

export const lightPaperStyle = {
	...paperStyle,
	background: `var(--color-pale-blue)`,
};