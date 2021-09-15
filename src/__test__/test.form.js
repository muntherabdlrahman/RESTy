import React from 'react';
import App from "../App";
import Results from '../component/results/Results';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

it('Football team members of Argentena ', async () => {
  const raw = await fetch ('https://soccer.sportmonks.com/api/v2.0/countries/44/players?api_token=r4zxmEncdywT8AL3yUNlJXQifJlkE0IA8Bg77d2ifERHp4avOc0PbB4ihJNH&include=');
  let data = await raw.json();
  let people = data.results;
  let results = Object.entries(people);

  render(<Results src={results} />);

  expect(results).toBeTruthy();
});