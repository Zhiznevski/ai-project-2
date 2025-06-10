import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import UserDetailModal from '../UserDetailModal';
import type { User } from '../../types';

const mockUser: User = {
  id: 1,
  name: 'John Doe',
  username: 'johndoe',
  email: 'john@example.com',
  address: {
    street: '123 Main St',
    suite: 'Apt 4',
    city: 'New York',
    zipcode: '10001',
    geo: {
      lat: '40.7128',
      lng: '-74.0060'
    }
  },
  phone: '123-456-7890',
  website: 'johndoe.com',
  company: {
    name: 'Company Inc',
    catchPhrase: 'Best company ever',
    bs: 'Making things better'
  }
};

describe('UserDetailModal', () => {
  it('renders user details correctly', () => {
    const onClose = vi.fn();
    render(<UserDetailModal user={mockUser} onClose={onClose} />);

    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
    expect(screen.getByText(mockUser.phone)).toBeInTheDocument();
    expect(screen.getByText(mockUser.website)).toBeInTheDocument();
    expect(screen.getByText(mockUser.company.name)).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    render(<UserDetailModal user={mockUser} onClose={onClose} />);

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('renders correct links', () => {
    const onClose = vi.fn();
    render(<UserDetailModal user={mockUser} onClose={onClose} />);

    const emailLink = screen.getByRole('link', { name: mockUser.email });
    expect(emailLink).toHaveAttribute('href', `mailto:${mockUser.email}`);

    const websiteLink = screen.getByRole('link', { name: mockUser.website });
    expect(websiteLink).toHaveAttribute('href', `http://${mockUser.website}`);

    const mapLink = screen.getByRole('link', { name: /view on map/i });
    expect(mapLink).toHaveAttribute('href', `https://www.google.com/maps?q=${mockUser.address.geo.lat},${mockUser.address.geo.lng}`);
  });
}); 
