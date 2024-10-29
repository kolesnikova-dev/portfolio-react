import React from 'react';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Skills } from '../src/sections/index';
import { skillsData } from '../src/data/skillsData';


const skills = Object.keys(skillsData);


describe('Skills component', () => {
    test('renders all skills of Skills section', () => {
        render(
            <MemoryRouter>
                <Skills />
            </MemoryRouter>
        );
        

        skills.forEach((skill) => {
            expect(screen.getByText(skill)).toBeInTheDocument();
        })

    })
})