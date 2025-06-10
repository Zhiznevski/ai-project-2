import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ModalProvider, ModalContext } from '../ModalContext';

const TestModal = ({ onClose }: { onClose: () => void }) => (
  <div data-testid="test-modal">
    <button onClick={onClose}>Close</button>
  </div>
);

describe('ModalContext', () => {
  it('should create context with initial state', () => {
    const TestComponent = () => {
      const context = React.useContext(ModalContext);
      expect(context).toBeDefined();
      expect(context?.modals).toEqual([]);
      return null;
    };

    render(
      <ModalProvider>
        <TestComponent />
      </ModalProvider>
    );
  });

  it('should open and close modal', async () => {
    const TestComponent = () => {
      const { openModal } = React.useContext(ModalContext)!;
      
      React.useEffect(() => {
        openModal(TestModal);
      }, [openModal]);
      
      return null;
    };

    render(
      <ModalProvider>
        <TestComponent />
      </ModalProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('test-modal')).toBeInTheDocument();
    });
    
    fireEvent.click(screen.getByText('Close'));
    
    await waitFor(() => {
      expect(screen.queryByTestId('test-modal')).not.toBeInTheDocument();
    });
  });

  it('should handle multiple modals', async () => {
    const TestComponent = () => {
      const { openModal, closeAllModals } = React.useContext(ModalContext)!;
      
      React.useEffect(() => {
        openModal(TestModal);
        openModal(TestModal);
      }, [openModal]);
      
      return (
        <button onClick={closeAllModals}>Close All</button>
      );
    };

    render(
      <ModalProvider>
        <TestComponent />
      </ModalProvider>
    );

    await waitFor(() => {
      const modals = screen.getAllByTestId('test-modal');
      expect(modals).toHaveLength(2);
    });
    
    fireEvent.click(screen.getByText('Close All'));
    
    await waitFor(() => {
      expect(screen.queryByTestId('test-modal')).not.toBeInTheDocument();
    });
  });
}); 