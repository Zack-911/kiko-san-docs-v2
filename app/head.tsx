// head.tsx
import Head from "next/head";

export const metadata = {
  title: "Kiko San - The Ultimate Discord Bot for Your Server",
  description:
    "Kiko San is a powerful and easy-to-use Discord bot designed to enhance your server's experience. Get started with amazing features today!",
  keywords: "Kiko San, Discord bot, server bot, automation, fun bot, moderation, custom commands",
  openGraph: {
    title: "Kiko San - The Ultimate Discord Bot",
    description:
      "Discover Kiko San, the most feature-packed and user-friendly Discord bot. Automate, moderate, and entertain your server with ease.",
    image: "https://kikosan.zack911.xyz/favicon.png",
    url: "https://kikosan.zack911.xyz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiko San - The Ultimate Discord Bot",
    description:
      "Kiko San brings a collection of powerful features for your Discord server. Perfect for moderation, entertainment, and server management!",
    image: "https://kikosan.zack911.xyz/favicon.png",
  },
  icon: "/favicon.png",
};

const HeadComponent: React.FC = () => {
  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta property="og:description" content={metadata.openGraph.description} />
      <meta property="og:image" content={metadata.openGraph.image} />
      <meta property="og:url" content={metadata.openGraph.url} />
      <meta name="twitter:card" content={metadata.twitter.card} />
      <meta name="twitter:title" content={metadata.twitter.title} />
      <meta name="twitter:description" content={metadata.twitter.description} />
      <meta name="twitter:image" content={metadata.twitter.image} />
      <link rel="icon" href={metadata.icon} />
    </Head>
  );
};

export default HeadComponent;
