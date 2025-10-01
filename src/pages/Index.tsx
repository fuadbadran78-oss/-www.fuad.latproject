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

      {/* Importance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            لماذا تحتاج إلى موقع إلكتروني احترافي؟
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
                    94% من الانطباعات الأولى عن عملك تتعلق بتصميم موقعك. التصميم الاحترافي يبني الثقة ويعكس مصداقية علامتك التجارية من أول ثانية.
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
                    في عصر الإنترنت، موقعك هو واجهتك الرقمية. أكثر من 80% من العملاء يبحثون عن الخدمات عبر الإنترنت قبل اتخاذ قرار الشراء.
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
                    موقع ويب محسّن يعمل كمندوب مبيعات يعمل 24/7. التصميم الجيد يزيد من معدلات التحويل ويحول الزوار إلى عملاء فعليين.
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
                    88% من المستخدمين لا يعودون لموقع بعد تجربة سيئة. التصميم الاحترافي يضمن تجربة سلسة تجعل العملاء يعودون مراراً.
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
                    موقع إلكتروني عصري ومتطور يميزك عن منافسيك. التصميم الاحترافي يظهر أنك جاد في عملك وملتزم بالجودة.
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
                    موقع منظم جيداً يوفر على عملائك الوقت في إيجاد المعلومات، وعليك الوقت في الرد على الأسئلة المتكررة.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <div className="bg-accent/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">الاستثمار في التصميم هو استثمار في نجاحك</h3>
              <p className="text-lg text-muted-foreground">
                موقع الويب ليس مجرد بطاقة عمل رقمية، بل هو أداة تسويقية قوية تعمل على مدار الساعة. التصميم الاحترافي يبني الثقة، يزيد المبيعات، ويوسع نطاق عملك ليصل إلى العالم بأسره.
              </p>
            </div>
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
