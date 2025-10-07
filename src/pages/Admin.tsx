import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Plus, Save, LogOut } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  live_url: string | null;
  github_url: string | null;
  technologies: string[];
  display_order: number;
  is_visible: boolean;
}

interface SiteContent {
  id: string;
  content_key: string;
  content_value: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>([]);
  const [siteContent, setSiteContent] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const { data: projectsData } = await supabase
        .from("projects")
        .select("*")
        .order("display_order");

      const { data: contentData } = await supabase
        .from("site_content")
        .select("*");

      if (projectsData) setProjects(projectsData);
      
      if (contentData) {
        const contentMap: Record<string, string> = {};
        contentData.forEach((item: SiteContent) => {
          contentMap[item.content_key] = item.content_value;
        });
        setSiteContent(contentMap);
      }
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const updateContent = async (key: string, value: string) => {
    const { error } = await supabase
      .from("site_content")
      .update({ content_value: value })
      .eq("content_key", key);

    if (error) {
      toast({
        variant: "destructive",
        title: "خطأ",
        description: "فشل في تحديث المحتوى",
      });
    } else {
      toast({
        title: "تم الحفظ",
        description: "تم تحديث المحتوى بنجاح",
      });
    }
  };

  const addProject = async () => {
    const newProject = {
      title: "مشروع جديد",
      description: "وصف المشروع",
      image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      live_url: "",
      github_url: "",
      technologies: ["React"],
      display_order: projects.length,
      is_visible: true,
    };

    const { error } = await supabase.from("projects").insert([newProject]);

    if (error) {
      toast({
        variant: "destructive",
        title: "خطأ",
        description: "فشل في إضافة المشروع",
      });
    } else {
      toast({ title: "تمت الإضافة", description: "تم إضافة مشروع جديد" });
      loadData();
    }
  };

  const updateProject = async (id: string, updates: Partial<Project>) => {
    const { error } = await supabase
      .from("projects")
      .update(updates)
      .eq("id", id);

    if (error) {
      toast({
        variant: "destructive",
        title: "خطأ",
        description: "فشل في تحديث المشروع",
      });
    } else {
      toast({ title: "تم الحفظ", description: "تم تحديث المشروع بنجاح" });
    }
  };

  const deleteProject = async (id: string) => {
    const { error } = await supabase.from("projects").delete().eq("id", id);

    if (error) {
      toast({
        variant: "destructive",
        title: "خطأ",
        description: "فشل في حذف المشروع",
      });
    } else {
      toast({ title: "تم الحذف", description: "تم حذف المشروع بنجاح" });
      loadData();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">لوحة التحكم</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => navigate("/")}>
              عرض الموقع
            </Button>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="ml-2 h-4 w-4" />
              تسجيل الخروج
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="content">محتوى الموقع</TabsTrigger>
            <TabsTrigger value="projects">المشاريع</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>تعديل نصوص الصفحة الرئيسية</CardTitle>
                <CardDescription>عدل النصوص الظاهرة في الصفحة الرئيسية</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>عنوان البداية</Label>
                  <Input
                    value={siteContent.hero_title || ""}
                    onChange={(e) => setSiteContent({ ...siteContent, hero_title: e.target.value })}
                  />
                  <Button onClick={() => updateContent("hero_title", siteContent.hero_title)}>
                    <Save className="ml-2 h-4 w-4" />
                    حفظ
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label>نص تحت العنوان</Label>
                  <Textarea
                    value={siteContent.hero_subtitle || ""}
                    onChange={(e) => setSiteContent({ ...siteContent, hero_subtitle: e.target.value })}
                    rows={3}
                  />
                  <Button onClick={() => updateContent("hero_subtitle", siteContent.hero_subtitle)}>
                    <Save className="ml-2 h-4 w-4" />
                    حفظ
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label>عنوان الدعوة للعمل</Label>
                  <Input
                    value={siteContent.cta_title || ""}
                    onChange={(e) => setSiteContent({ ...siteContent, cta_title: e.target.value })}
                  />
                  <Button onClick={() => updateContent("cta_title", siteContent.cta_title)}>
                    <Save className="ml-2 h-4 w-4" />
                    حفظ
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label>نص الدعوة للعمل</Label>
                  <Textarea
                    value={siteContent.cta_subtitle || ""}
                    onChange={(e) => setSiteContent({ ...siteContent, cta_subtitle: e.target.value })}
                    rows={3}
                  />
                  <Button onClick={() => updateContent("cta_subtitle", siteContent.cta_subtitle)}>
                    <Save className="ml-2 h-4 w-4" />
                    حفظ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">إدارة المشاريع</h2>
              <Button onClick={addProject}>
                <Plus className="ml-2 h-4 w-4" />
                إضافة مشروع
              </Button>
            </div>

            <div className="grid gap-6">
              {projects.map((project) => (
                <Card key={project.id}>
                  <CardContent className="pt-6 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>عنوان المشروع</Label>
                        <Input
                          value={project.title}
                          onChange={(e) => {
                            const updated = projects.map((p) =>
                              p.id === project.id ? { ...p, title: e.target.value } : p
                            );
                            setProjects(updated);
                          }}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>رابط الصورة</Label>
                        <Input
                          value={project.image_url}
                          onChange={(e) => {
                            const updated = projects.map((p) =>
                              p.id === project.id ? { ...p, image_url: e.target.value } : p
                            );
                            setProjects(updated);
                          }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>الوصف</Label>
                      <Textarea
                        value={project.description}
                        onChange={(e) => {
                          const updated = projects.map((p) =>
                            p.id === project.id ? { ...p, description: e.target.value } : p
                          );
                          setProjects(updated);
                        }}
                        rows={2}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>رابط المشروع</Label>
                        <Input
                          value={project.live_url || ""}
                          onChange={(e) => {
                            const updated = projects.map((p) =>
                              p.id === project.id ? { ...p, live_url: e.target.value } : p
                            );
                            setProjects(updated);
                          }}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>رابط GitHub</Label>
                        <Input
                          value={project.github_url || ""}
                          onChange={(e) => {
                            const updated = projects.map((p) =>
                              p.id === project.id ? { ...p, github_url: e.target.value } : p
                            );
                            setProjects(updated);
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex gap-2 justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deleteProject(project.id)}
                      >
                        <Trash2 className="ml-2 h-4 w-4" />
                        حذف
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => updateProject(project.id, project)}
                      >
                        <Save className="ml-2 h-4 w-4" />
                        حفظ التغييرات
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;