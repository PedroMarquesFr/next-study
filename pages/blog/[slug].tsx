import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

export default function BlogPost({ date }) {
  return <h1>{date}</h1>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  //*pegar os posts mais lidos*
  //ele precis saber qua a rota por isso isso e nercessario
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      date: new Date().toISOString(),
    },
    revalidate: 5,
  };
};
