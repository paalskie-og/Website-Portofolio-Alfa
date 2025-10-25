import { Card, CardContent } from "./ui/card";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Featured Projects
          </h2>
          
          <Card className="text-center py-16">
            <CardContent>
              <div className="space-y-4">
                <div className="text-6xl">🚀</div>
                <h3 className="text-2xl">Coming Soon</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  I'm currently working on some exciting projects. Check back soon to see what I've been building!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}