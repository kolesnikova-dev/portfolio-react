import { NavLink } from 'react-router-dom';
import { FormattedArray } from '../index';
import { DiGithubFull } from 'react-icons/di';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Box, Typography } from '@mui/material';

const Project = ({ data, isTransitioning }) => {
  return (
    <Box sx={{ maxWidth: '100%', mx: 'auto', mb: 4 }}>
      <Typography variant="h6" component="div" gutterBottom>
        {data.title}
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        {data.liveLink && (
          <NavLink
            href={data.liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              Live <FaExternalLinkAlt />
            </span>
          </NavLink>
        )}

        <NavLink
          href={data.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiGithubFull /> <FaExternalLinkAlt />
        </NavLink>
      </Box>

      <Box sx={{ overflow: 'hidden', width: '100%' }}>
        {data.image ? (
          <img
            src={data.image}
            alt={data.title}
            style={{ width: '100%', height: 'auto' }}
          />
        ) : (
          <video
            src={data.video}
            loop
            autoPlay
            controls
            muted
            style={{ width: '100%', height: 'auto' }}
          />
        )}
      </Box>

      <Box>
        <FormattedArray arr={data.details} />
      </Box>
    </Box>
  );
};

export default Project;
