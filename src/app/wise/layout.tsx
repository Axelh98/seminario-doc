import { DocsLayout } from "@/components/docs-layout";


export default function GettingStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DocsLayout
      content={children}
      questions={<div>Preguntas frecuentes...</div>}
    />
  );
}