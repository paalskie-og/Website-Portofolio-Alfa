export function Footer() {
  return (
    <footer className="py-12 bg-muted/50 border-t">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-xl mb-4">Alfa Rizki</h3>
            <p className="text-muted-foreground">
              Students who are studying to become Full Stack Developers enjoy experimenting with design and coding to create exciting digital experiences.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              Email
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2025 Alfa Rizki. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}