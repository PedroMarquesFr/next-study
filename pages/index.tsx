//static side generation
//quando for igual pra todos uma SSG quando nao for usa o client side
import { GetServerSideProps } from "next";

export default function Home({ repositories, date }) {
  return (
    <section>
      <h4>{date}</h4>
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
      date: new Date().toISOString(),
    },
  };
};
