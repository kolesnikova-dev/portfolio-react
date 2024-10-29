import React from 'react';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { MainPage } from '../src/pages/index';


describe('MainPage component', () => {
    test('renders a greeting and skills section', () => {
        render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>
        );

        expect(screen.getByText('Hi, I\'m Nika!')).toBeInTheDocument();

        expect(screen.getByText('JavaScript')).toBeInTheDocument();
    })
})