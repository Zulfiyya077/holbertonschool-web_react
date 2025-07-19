import '@testing-library/jest-dom';

// Mock all image imports
jest.mock('./assets/holberton-logo.jpg', () => 'mocked-image.jpg');