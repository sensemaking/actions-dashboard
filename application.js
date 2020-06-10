import React, { useState, useEffect } from 'react'
import { useRepositories } from './repositories.js'

export const Application = () => {
  const repositories = useRepositories();

  return <p>
    <label>
    Select Repository:
    <select>
        {repositories.map((r) => <option>{r.name}</option>)}
    </select>
    </label>
</p>;
};
