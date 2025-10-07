import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// بيانات المشاريع - يمكنك تعديلها لاحقاً
const projects = [
  {
    id: 1,
    title: "منصة تجارة إلكترونية",
    description: "متجر إلكتروني متكامل مع نظام دفع آمن وإدارة المنتجات",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    liveUrl: "https://example.lovable.app",
    githubUrl: "https://github.com/username/project",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"]
  },
  {
    id: 2,
    title: "لوحة تحكم تحليلات",
    description: "Dashboard تحليلي متقدم لإدارة البيانات والإحصائيات",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    liveUrl: "https://example2.lovable.app",
    githubUrl: "https://github.com/username/project2",
    technologies: ["React", "Charts", "API Integration"]
  },
  {
    id: 3,
    title: "تطبيق حجوزات",
    description: "نظام حجوزات ذكي للمواعيد والخدمات مع إشعارات تلقائية",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    liveUrl: "https://example3.lovable.app",
    githubUrl: "https://github.com/username/project3",
    technologies: ["React", "Calendar", "Notifications"]
  },
  {
    id: 4,
    title: "موقع شركة ناشئة",
    description: "موقع تعريفي حديث لشركة تقنية مع تصميم عصري وأنيميشن سلس",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
    liveUrl: "https://example4.lovable.app",
    githubUrl: "https://github.com/username/project4",
    technologies: ["React", "Animations", "Responsive Design"]
  },
  {
    id: 5,
    title: "منصة تعليمية",
    description: "نظام إدارة تعليمي مع كورسات تفاعلية ومتابعة التقدم",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop",
    liveUrl: "https://example5.lovable.app",
    githubUrl: "https://github.com/username/project5",
    technologies: ["React", "Video Player", "Progress Tracking"]
  },
  {
    id: 6,
    title: "تطبيق إدارة مهام",
    description: "أداة إنتاجية لتنظيم المهام والمشاريع مع فريق العمل",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
    liveUrl: "https://example6.lovable.app",
    githubUrl: "https://github.com/username/project6",
    technologies: ["React", "Drag & Drop", "Team Collaboration"]
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
              المحفظة
            </Link>
            <Link to="/">
              <Button variant="outline">
                الرجوع للرئيسية
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            معرض أعمالي
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            مجموعة من المشاريع التي قمت بتصميمها وتطويرها باستخدام أحدث التقنيات
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-base px-4 py-2">React</Badge>
            <Badge variant="secondary" className="text-base px-4 py-2">TypeScript</Badge>
            <Badge variant="secondary" className="text-base px-4 py-2">Tailwind CSS</Badge>
            <Badge variant="secondary" className="text-base px-4 py-2">Lovable</Badge>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button 
                      size="icon" 
                      variant="secondary"
                      className="rounded-full"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button 
                      size="icon" 
                      variant="secondary"
                      className="rounded-full"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-2">
                  <Button className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      عرض المشروع
                      <ExternalLink className="mr-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            لديك مشروع في ذهنك؟
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            دعنا نتعاون لتحويل فكرتك إلى واقع رقمي مميز
          </p>
          <Link to="/">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              تواصل معي الآن
              <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 محفظة الأعمال. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;