//Nextjs api route support WTF
export default async (req, res) => {
  await res.unstable_revalidate("/");

  res.status(200).json({ name: "Hello, world!" });
};
