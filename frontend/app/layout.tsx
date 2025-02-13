import "../styles/globals.css"; // ✅ Import correct du CSS

export const metadata = {
  title: "Smithair Concept",
  description: "Boutique en ligne premium pour perruques et accessoires capillaires",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
