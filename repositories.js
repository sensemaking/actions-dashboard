import React, { useState, useEffect } from "react";
import { get } from './http.js'

export const useRepositories = _ => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    (async (_) => {
      const repoData = await get(`https://api.github.com/orgs/sensemaking/repos`);
      setRepositories(repoData);
    })();
  }, []);

  return repositories;
};
