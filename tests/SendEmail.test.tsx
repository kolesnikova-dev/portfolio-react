import React from 'react';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { SendEmail } from '../src/sections/index';
import { textInputFields } from '../src/data/formData';


const inputFields = Object.values(textInputFields);


describe('SendEmail component', () => {
    test('renders SendEmail section', () => {
        render(
            <MemoryRouter>
                <SendEmail />
            </MemoryRouter>
        );

       expect(screen.getByText('Send me an email:')).toBeInTheDocument();

        inputFields.map((input) => (
            expect(screen.getByLabelText(input['aria-label'])).toBeInTheDocument()
        ));
    })
})