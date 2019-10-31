import React from 'react';
import withRepoData from '../hocs/withRepoData';

function RepoList({ repoData }) {
  console.log(repoData); // Just logging
  if (repoData.loading) return <p>Carregando...</p>;
  return repoData.data.map(repo => <p key={repo.id}>{repo.full_name}</p>);
}

export default withRepoData('EvertonMirand')(RepoList);
