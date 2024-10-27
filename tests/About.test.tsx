import React from 'react';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { About } from '../src/sections/index';


describe('About component', () => {
    test('renders about section', () => {
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );
    //     const { container } = render(
    //         <MemoryRouter>
    //           <About />
    //         </MemoryRouter>
    //       );

    //    console.log(container.innerHTML);

       expect(screen.getByAltText('Nika\'s Picture')).toBeInTheDocument();
       expect(screen.getByText('Hi, I\'m Nika!')).toBeInTheDocument();

       const aboutText = screen.getByText(/I am a software engineer\.\s+My interest lies in finding ways to make living more sustainable and less intrusive\.\s+I am having fun in React and RESTing in between\./i);
 
       expect(aboutText).toBeInTheDocument();
    })
})