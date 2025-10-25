import { Card, CardContent } from "./ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                My name is Alfa Rizki, and I am a student currently studying web development and design. I created this portfolio to document my progress and showcase the projects I have worked on. Through this learning process, I aim to build a strong foundation in web technologies and design principles.
              </p>
              <p className="text-lg mb-6">
                As a student, I am currently focusing on learning the fundamentals of web design and development. I strive to create simple, functional, and user-friendly projects that reflect my progress in this field.
              </p>
              <p className="text-lg">
                Outside of coding, I enjoy exploring design inspirations, learning from online tutorials, and trying out new technologies that help me grow step by step.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2">Experience</h3>
                  <p className="text-muted-foreground">Currently learning web development and design</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2">Projects</h3>
                  <p className="text-muted-foreground">Personal portfolio website (this site!)</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2">Focus</h3>
                  <p className="text-muted-foreground">Learning to create responsive websites</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}