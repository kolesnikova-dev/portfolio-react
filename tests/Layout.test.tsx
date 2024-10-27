import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Layout } from '../src/pages/index';


describe('Layout component', () => {
    test('renders a footer with a copyright icon', () => {
        render(
            <MemoryRouter>
                <Layout />
            </MemoryRouter>
        );

        expect(screen.getByTestId('CopyrightIcon')).toBeInTheDocument();        
    })
})