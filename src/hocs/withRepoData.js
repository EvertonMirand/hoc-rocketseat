import React, { useState, useEffect } from 'react';

export default function withRepoData(username) {
  return WrappedComponent => {
    return props => {
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);

      async function fetchData() {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
      }

      useEffect(() => {
        fetchData();
      }, []);

      const repoData = {
        data,
        loading,
      };

      return <WrappedComponent repoData={repoData} {...props} />;
    };
  };
}
