//static side generation
//quando for igual pra todos uma SSG quando nao for usa o client side
import { GetStaticProps } from "next";

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

export const getStaticProps: GetStaticProps = async () => {
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
    revalidate: 5,
  };
};


//revalidacao statica so funciona em desenvolvimento, para simular umd eploy use:
//npm run build
//npm start

// o fundamento disso e o stale-while-ravalidate, pesquisa