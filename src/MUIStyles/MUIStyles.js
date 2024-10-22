import '../index.css'

const paperStyle = {
	color: 'white',
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

// projects section grid ---------- [start]
export const regularGridStyle = (thumbnails) => ({
	position: 'relative',
	width: {
		sm: '32vw',
		lg: '38vw',
	},
	height: {
		sm: '32vh',
		lg: '42vh',
	},
	border: '3px solid var(--color-pale-blue)',
	backgroundColor: darkPaperStyle,
	'::before': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundImage: `url(${thumbnails})`,
		transition: 'opacity 0.3s ease-in-out',
		opacity: 0.4,
		zIndex: -1,
	},
	'&:hover::before': {
		opacity: 0.8,
	},
  });

  export const expandedGridStyle = (darkPaperStyle) => ({
    ...darkPaperStyle,
    border: '4px solid var(--color-pale-blue)',
    width: '100%'
  });
  
  // projects section grid ---------- [end]