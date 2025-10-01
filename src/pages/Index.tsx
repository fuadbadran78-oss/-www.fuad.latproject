import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-web-design.jpg";
import responsiveDesign from "@/assets/responsive-design.jpg";
import uiuxDesign from "@/assets/uiux-design.jpg";
import webDevelopment from "@/assets/web-development.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="خدمات تصميم صفحات الويب الاحترافية" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            تصميم صفحات ويب احترافية
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            نحول أفكارك إلى مواقع إلكترونية عصرية وجذابة تساعدك على النجاح في عالم الإنترنت
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            ابدأ مشروعك الآن
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">خدماتنا</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            نقدم حلول تصميم ويب متكاملة لجميع احتياجاتك
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src={responsiveDesign} 
                  alt="تصميم متجاوب" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-2xl">تصميم متجاوب</CardTitle>
                <CardDescription className="text-base">
                  مواقع تعمل بشكل مثالي على جميع الأجهزة والشاشات
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  نضمن أن يبدو موقعك رائعاً على الحواسيب والأجهزة اللوحية والهواتف المحمولة
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src={uiuxDesign} 
                  alt="تصميم واجهات المستخدم" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-2xl">UI/UX تصميم</CardTitle>
                <CardDescription className="text-base">
                  واجهات مستخدم جذابة وسهلة الاستخدام
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  نصمم تجربة مستخدم استثنائية تجعل زوار موقعك يعودون مرة أخرى
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src={webDevelopment} 
                  alt="تطوير الويب" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-2xl">تطوير ويب متقدم</CardTitle>
                <CardDescription className="text-base">
                  حلول برمجية قوية وآمنة لموقعك
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  نستخدم أحدث التقنيات لبناء مواقع سريعة وآمنة وقابلة للتوسع
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            جاهز لبناء موقعك الإلكتروني؟
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            دعنا نساعدك في إنشاء موقع ويب احترافي يعكس هوية علامتك التجارية ويحقق أهدافك
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            تواصل معنا الآن
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 خدمات تصميم الويب. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
