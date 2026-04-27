export default function Testimonials() {
  const reviews = [
    {
      name: "John Doe",
      text: "This app made product management super easy.",
    },
    {
      name: "Sarah Smith",
      text: "Clean UI and very fast performance.",
    },
    {
      name: "David Lee",
      text: "Perfect tool for managing inventory.",
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          What Users Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-6 bg-card border rounded-xl hover:shadow-lg transition"
            >
              <p className="text-gray-600 mb-4">
                "{r.text}"
              </p>

              <h4 className="font-semibold">
                ~ {r.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}