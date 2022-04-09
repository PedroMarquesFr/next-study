//client side rendering
import { useEffect, useState } from "react";

export default function Home() {
  const [repositories, setRepositories] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/PedroMarquesFr/repos")
      .then((res) => res.json())
      .then((data) => {
        const repositoryNames: string[] = data.map((item) => item.name);
        setRepositories(repositoryNames);
      });
  }, []);

  return (
    <ul>
      {repositories.map((repo) => (
        <li key={repo}>{repo}</li>
      ))}
    </ul>
  );
}
