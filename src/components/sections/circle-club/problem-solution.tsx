'use client';

export default function CircleClubProblemSolution() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container px-4 mx-auto">
        {/* Section B: The Problem */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
            Even the Best Leaders Have Blind Spots.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Growing a business is rewarding, but it can also be isolating. Without a sounding board, decision-making becomes harder, and growth can stall. You don't have to navigate the complexities of scaling alone.
          </p>
        </div>

        {/* Section C: The Solution */}
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-20 sm:px-12 lg:px-20 text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Welcome to <span className="text-[#D4AF37]">The Circle Club</span>.
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              A collaborative environment designed for action. This isn't just a networking group; it is a strategic alliance where we solve challenges, share deep insights, and develop actionable strategies for sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
