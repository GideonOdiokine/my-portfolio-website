import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "zv7xmxln",
  dataset: "production", apiVersion: '2021-08-31', // use a UTC date string
  // token: 'sanity-auth-token', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

