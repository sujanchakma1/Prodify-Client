import { Package, Users, LayoutGrid, Headphones } from "lucide-react";

export default function Stats() {
  const stats = [
    { number: "500+", label: "Products", icon: Package },
    { number: "120+", label: "Users", icon: Users },
    { number: "50+", label: "Categories", icon: LayoutGrid },
    { number: "24/7", label: "Support", icon: Headphones },
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">

        {stats.map((s, i) => {
          const Icon = s.icon;

          return (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-3 p-6 bg-card border border-border rounded-xl"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted">
                <Icon className="w-6 h-6" />
              </div>

              <h3 className="text-3xl font-bold">
                {s.number}
              </h3>

              <p className="text-muted-foreground">
                {s.label}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}