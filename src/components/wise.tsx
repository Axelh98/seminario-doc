export function Wise() {
    return (
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">WISE</div>
          <span>/</span>
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">Empezando en Wise</div>
          <span>/</span>
          <div className="font-medium text-foreground">Introduction</div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Introduction</h1>
            <p className="text-lg text-muted-foreground">
              Welcome to the documentation for our framework. Get started building powerful applications quickly and
              efficiently.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">What is our framework?</h2>
            <p>
              Our framework is a full-stack web development framework built on top of React. It provides a set of tools
              and conventions to help you build modern web applications with ease.
            </p>
            <p>
              With our framework, you can build applications that are fast, scalable, and maintainable. It comes with
              built-in support for routing, data fetching, styling, and more.
            </p>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Key Features</h3>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>File-system based routing</li>
              <li>Server and client components</li>
              <li>Data fetching and caching</li>
              <li>CSS and Sass support</li>
              <li>API routes</li>
              <li>TypeScript support</li>
            </ul>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">System Requirements</h3>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>Node.js 16.8 or later</li>
              <li>macOS, Windows, or Linux operating systems</li>
            </ul>
            <div className="rounded-md bg-muted p-4">
              <div className="flex items-start">
                <div className="flex-1">
                  <p className="text-sm font-medium">Note</p>
                  <p className="text-sm text-muted-foreground">
                    This documentation assumes you have a basic understanding of React and JavaScript/TypeScript.
                  </p>
                </div>
              </div>
            </div>
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Next Steps</h2>
            <p>
              To get started with our framework, check out the installation guide. It will walk you through the process of
              setting up a new project.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                Installation Guide
              </a>
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  