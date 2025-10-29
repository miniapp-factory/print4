import { Metadata } from "next";

export const title = "Disney Princess Quiz";
export const description =
  "Find out which Disney princess you are most similar to by answering 5 fun questions!";
export const url = process.env.NEXT_PUBLIC_URL ?? "";

export const metadata: Metadata = {
  title,
  description,
  other: {
    "fc:miniapp": JSON.stringify({
      version: "next",
      imageUrl: `${url}/icon.png`,
      ogTitle: title,
      ogDescription: description,
      ogImageUrl: `${url}/icon.png`,
      button: {
        label: "Open in Mini App",
        url: url,
      },
    }),
  },
};
