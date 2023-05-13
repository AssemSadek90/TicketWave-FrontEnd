// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';

// import SignIn from '../SignIn.js';
// const MockAdapter = require('axios-mock-adapter');
// //const axios = require('axios');
// describe.skip('SignIn component', () => {
//   let mock;

//   beforeAll(() => {
//     mock = new MockAdapter(axios);
//   });

//   afterEach(() => {
//     mock.reset();
//   });

//   afterAll(() => {
//     mock.restore();
//   });

//   it('renders without crashing', () => {
//     render(<SignIn />);
//   });
// });

import { render } from '@testing-library/react';
import SignIn from '../SignIn.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
test('renders sign in without crashing', async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
});
