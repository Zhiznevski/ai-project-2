import { expect, it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import UsersTable from '../UsersTable';
import { ModalProvider } from '../../context/ModalContext';
import type { User } from '../../types';

const mockUsers: User[] = [
  {
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
  }
];

describe('UsersTable', () => {
  it('renders user data in table', () => {
    render(
      <ModalProvider>
        <UsersTable users={mockUsers} />
      </ModalProvider>
    );

    expect(screen.getByText(mockUsers[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockUsers[0].email)).toBeInTheDocument();
    expect(screen.getByText(mockUsers[0].company.name)).toBeInTheDocument();
  })
})