import { Package, Activity, FolderTree, ShieldCheck } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Easy Product Management",
      desc: "Add, edit and manage all your products from one place.",
      icon: Package,
    },
    {
      title: "Real-time Tracking",
      desc: "Monitor your product updates and activity instantly.",
      icon: Activity,
    },
    {
      title: "Smart Organization",
      desc: "Categorize and filter products efficiently.",
      icon: FolderTree,
    },
    {
      title: "Secure Access",
      desc: "Protected dashboard with authentication.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <div
                key={i}
                className="p-6 bg-card text-card-foreground border border-border rounded-xl hover:shadow-lg transition"
              >
                <div className="mb-4 w-14 h-14 flex items-center justify-center rounded-lg bg-muted">
                  <Icon className="w-10 h-10" />
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  {f.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}