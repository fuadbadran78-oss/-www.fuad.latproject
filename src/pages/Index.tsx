import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-web-design.jpg";
import responsiveDesign from "@/assets/responsive-design.jpg";
import uiuxDesign from "@/assets/uiux-design.jpg";
import webDevelopment from "@/assets/web-development.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
              تصميم احترافي
            </Link>
            <Link to="/portfolio">
              <Button variant="outline">
                معرض الأعمال
              </Button>
            </Link>
          </div>
        </div>
      </nav>

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
            تصميم واجهات مستخدم احترافية
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            أصمم صفحات جذابة وسهلة الاستخدام تحول أفكارك إلى تجارب بصرية لا تُنسى
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            ابدأ مشروعك الآن
          </Button>
        </div>
      </section>

      {/* Specialty Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">تخصصي</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            تصميم واجهات مستخدم (UI/UX) احترافية ومبتكرة
          </p>
          
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <img 
                  src={uiuxDesign} 
                  alt="تصميم واجهات المستخدم" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <CardTitle className="text-3xl mb-2">تصميم واجهات مستخدم UI/UX</CardTitle>
                <CardDescription className="text-lg">
                  أحول أفكارك إلى تصاميم بصرية جميلة وسهلة الاستخدام
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg mb-6">
                  أركز على خلق تجارب مستخدم استثنائية من خلال تصاميم نظيفة وحديثة تجمع بين الجمال والوظائف العملية. كل تصميم يُصنع بعناية فائقة لضمان تجربة سلسة وممتعة للمستخدمين.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-3xl">🎨</span>
                </div>
                <CardTitle className="text-xl">تصميم بصري احترافي</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  تصاميم عصرية وجذابة تعكس هوية علامتك التجارية بشكل مميز ومحترف
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-3xl">✨</span>
                </div>
                <CardTitle className="text-xl">تصميم تجربة المستخدم</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  تصاميم سهلة الاستخدام وواضحة توفر تجربة مريحة وممتعة للمستخدمين
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            لماذا تحتاج إلى تصميم صفحات احترافي؟
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">الانطباع الأول يهم</h3>
                  <p className="text-muted-foreground">
                    94% من الانطباعات الأولى عن عملك تتعلق بتصميم واجهتك. التصميم الاحترافي يبني الثقة ويعكس مصداقية علامتك التجارية من أول ثانية.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">تواجد رقمي قوي</h3>
                  <p className="text-muted-foreground">
                    في عصر الإنترنت، صفحتك هي واجهتك الرقمية. أكثر من 80% من العملاء يبحثون عن الخدمات عبر الإنترنت قبل اتخاذ قرار الشراء.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">زيادة المبيعات</h3>
                  <p className="text-muted-foreground">
                    صفحة ويب محسّنة تعمل كمندوب مبيعات يعمل 24/7. التصميم الجيد يزيد من معدلات التحويل ويحول الزوار إلى عملاء فعليين.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">تجربة مستخدم متميزة</h3>
                  <p className="text-muted-foreground">
                    88% من المستخدمين لا يعودون لصفحة بعد تجربة سيئة. التصميم الاحترافي يضمن تجربة سلسة تجعل العملاء يعودون مراراً.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">التفوق على المنافسين</h3>
                  <p className="text-muted-foreground">
                    صفحة ويب عصرية ومتطورة تميزك عن منافسيك. التصميم الاحترافي يظهر أنك جاد في عملك وملتزم بالجودة.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  6
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">توفير الوقت والجهد</h3>
                  <p className="text-muted-foreground">
                    صفحة منظمة جيداً توفر على عملائك الوقت في إيجاد المعلومات، وعليك الوقت في الرد على الأسئلة المتكررة.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <div className="bg-accent/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">الاستثمار في التصميم هو استثمار في نجاحك</h3>
              <p className="text-lg text-muted-foreground">
                صفحة الويب ليست مجرد بطاقة عمل رقمية، بل هي أداة تسويقية قوية تعمل على مدار الساعة. التصميم الاحترافي يبني الثقة، يزيد المبيعات، ويوسع نطاق عملك ليصل إلى العالم بأسره.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            جاهز لتصميم صفحتك؟
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            دعني أساعدك في تصميم صفحة احترافية تعكس هوية علامتك التجارية وتسعد مستخدميك
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            تواصل معي الآن
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 تصميم صفحات احترافية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
