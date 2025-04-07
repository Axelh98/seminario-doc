import { Navigation } from "@/components/app-sidebar";
import type { ReactNode } from "react";

interface DocsLayoutProps {
  content: ReactNode;
  questions: ReactNode;
}

export function DocsLayout({ content, questions }: DocsLayoutProps) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Navigation - Left Column */}
      <div className="w-full md:w-64 lg:w-90 border-r border-border bg-card md:h-screen md:overflow-y-auto sticky top-0">
        <Navigation />
      </div>

      {/* Main Content - Middle Column */}
      <div className="flex-1 min-w-0 overflow-auto">
        <div className="max-w-3xl mx-auto px-4 py-8">{content}</div>
      </div>

      {/* Questions - Right Column */}
      <div className="w-full md:w-64 lg:w-80 border-l border-border bg-muted md:h-screen md:overflow-y-auto sticky top-0 hidden lg:block">
        {questions}
      </div>
    </div>
  );
}