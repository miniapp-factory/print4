import { Metadata } from "next";

export const title = "Disney Princess Quiz";
export const description =
  "Find out which Disney princess you are most similar to by answering 5 fun questions!";

export const metadata: Metadata = {
  title,
  description,
  other: {
    "fc:miniapp": JSON.stringify({
      version: "next",
      imageUrl: `${process.env.NEXT_PUBLIC_URL}/icon.png`,
      ogTitle: title,
      ogDescription: description,
      ogImageUrl: `${process.env.NEXT_PUBLIC_URL}/icon.png`,
      button: {
        label: "Open in Mini App",
        url: `${process.env.NEXT_PUBLIC_URL}`,
      },
    }),
  },
};
