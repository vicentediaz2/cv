import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';

describe('App', () => {
  it('renders main portfolio sections', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /vicente daniel diaz artigas/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /proyectos/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /contacto/i })).toBeInTheDocument();
  });
});
