//serverside rendering
import { GetServerSideProps } from "next";

export default function Home({ repositories }) {
  return (
    <section>
      <ul>
        {repositories.map((repo) => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(
    "https://api.github.com/users/PedroMarquesFr/repos"
  );
  const data = await response.json();

  const repositoryNames = data.map((item) => item.name);

  return {
    props: {
      repositories: repositoryNames,
    },
  };
};
