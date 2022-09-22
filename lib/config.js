import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const config = sanityClient({
  projectId: "zsak643h",
  dataset: "production",
  apiVersion: "2022-04-26",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(config);

export const urlFor = (source) => builder.image(source);
