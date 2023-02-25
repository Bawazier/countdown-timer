import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('Countdown Component', () => {
  it.todo('should renders the Countdown component');
  it.todo(
    "should toggle display a list time option when the 'listtime' button is clicked"
  );
  it.todo(
    "should toggle display a list sound option when the 'listsound' button is clicked"
  );
  it.todo("should starts the countdown when the 'start' button is clicked");
  it.todo(
    "should display button 'pause' & 'stop' when the 'start' button is clicked"
  );
  it.todo(
    "should pauses the countdown and display 'start' button when the 'pause' button is clickeed"
  );
  it.todo(
    "should stops the countdown and display back to the beginning when the 'stop' button is clicked"
  );
  it.todo(
    "should change display value time when the 'time-value' button is clicked"
  );
  it.todo("should change value sound when the 'sound-value' button is clicked");
});
