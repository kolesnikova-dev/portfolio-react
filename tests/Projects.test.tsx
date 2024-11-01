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
        projects.forEach((project) => {
            expect(screen.getByText(project.title)).toBeInTheDocument();
        })

        const githubIcons = screen.getAllByLabelText("View on GitHub");
        expect(githubIcons.length).toBe(projects.length);

        const moreInformationIcons = screen.getAllByLabelText("See more information");
        expect(moreInformationIcons.length).toBe(projects.length);
    })


    test('expands a selected project', async () => {
        const moreInformationIcons = screen.getAllByLabelText("See more information");

        moreInformationIcons.map(async (icon, index) => {
            await userEvent.click(icon);
            const projectDetails = projects[index].details;
            
            Object.values(projectDetails).map(async (detail) => {
            const element = await screen.findByText(detail);
            expect(element).toBeInTheDocument();

            // collapse the expanded project
            await userEvent.click(icon);
          })
        })

})

})
