import { DocsLayout } from "@/components/docs-layout"
import { MainContent } from "@/components/main-content"
import { Navigation } from "@/components/app-sidebar"
import { Questions } from "@/components/questions"

export default function Home() {
  return <DocsLayout content={<MainContent />} questions={<Questions />} />
}

