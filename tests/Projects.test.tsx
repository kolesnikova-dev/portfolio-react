import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { Projects } from '../src/sections/index';
import { projectsData } from '../src/data/projectsData';


const projects = Object.values(projectsData);

beforeEach(() => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    );
  });

describe('Projects component', () => {
    test('renders all projects of Projects section', () => {
        projects.map((project) => {
            expect(screen.getByText(project.title)).toBeInTheDocument();
        })

        const githubIcons = screen.getAllByTestId('GitHubIcon');
        expect(githubIcons.length).toBe(projects.length);

        const moreInformationIcons = screen.getAllByTestId('UnfoldMoreDoubleSharpIcon');
        expect(moreInformationIcons.length).toBe(projects.length);
    })


    test('expands a selected project', async () => {
        const moreInformationIcons = screen.getAllByTestId('UnfoldMoreDoubleSharpIcon');

        moreInformationIcons.map(async (icon, index) => {
            await userEvent.click(icon);
            const projectDetails = projects[index].details;
            
            projectDetails.map(async (detail) => {
            const element = await screen.findByText(detail);
            expect(element).toBeInTheDocument();

            // collapse the expanded project
            await userEvent.click(icon);
          })
        })

})

})
