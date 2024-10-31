import '../index.css';

const sectionWidthOptions = {
  topSectionWidth: {
    xs: '100%',
    sm: '100%',
    md: '40%',
  },
  bottomSectionWidth: {
    xs: '100%',
    sm: '40%',
    md: '30%',
    lg: '20%',
  },
};

export const fullBorderGridStyle = (section) => ({
  width: sectionWidthOptions[section],
  '--Grid-borderWidth': '1px',
  borderTop: 'var(--Grid-borderWidth) solid',
  borderLeft: 'var(--Grid-borderWidth) solid',
  borderRight: 'var(--Grid-borderWidth) solid',
  borderBottom: 'var(--Grid-borderWidth) solid',
  borderColor: 'white',
  p: 1,
});

const paperStyle = {
  color: 'whitesmoke',
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
    md: '35vw',
    lg: '38vw',
  },
  height: {
    sm: 'calc(32vw * 3 / 4)',
    md: 'calc(35vw * 3 / 4)',
    lg: 'calc(38vw * 9 / 16)',
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

export const expandedGridStyle = {
  ...darkPaperStyle,
  border: '4px solid var(--color-pale-blue)',
  width: '100%',
};

// projects section grid ---------- [end]
