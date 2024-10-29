import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from '../src/components/Form';
import emailjs from '@emailjs/browser';
import { MemoryRouter } from 'react-router-dom';
import { isTimePeriodValid } from '../src/utils/isTimePeriodValid';

// Mock emailjs
vi.mock('@emailjs/browser', () => ({
  default: {
    init: vi.fn(),
    sendForm: vi.fn(() => Promise.resolve('Success')),
  }
}));

// Mock isTimePeriodValid
vi.mock('../src/utils/isTimePeriodValid', () => ({
  isTimePeriodValid: vi.fn(() => true),
}));

describe('Form Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    render(<MemoryRouter><Form /></MemoryRouter>);
    // const { container } = render(<MemoryRouter><Form /></MemoryRouter>);
    // console.log(container.innerHTML);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders form fields correctly', () => {
    expect(screen.getByTestId('user-name')).toBeDefined();
    expect(screen.getByLabelText('Enter your email')).toBeDefined();
    expect(screen.getByLabelText('Add a message')).toBeDefined();
    expect(screen.getByLabelText('Send the form')).toBeDefined();
  });

  it('prevents rapid form submissions', async () => {
    vi.mocked(isTimePeriodValid).mockReturnValue(false);

    await userEvent.type(screen.getByLabelText('Enter your name'), 'John Doe');
    await userEvent.type(screen.getByLabelText('Enter your email'), 'john@example.com');
    await userEvent.type(screen.getByLabelText('Add a message'), 'Test message');

    fireEvent.click(screen.getByLabelText('Send the form'));

    expect(emailjs.sendForm).not.toHaveBeenCalled();
  });

});