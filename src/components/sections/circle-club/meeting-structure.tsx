'use client';

const timeline = [
  {
    time: '15 Minutes',
    title: 'Opening',
    description: 'Quick wins and progress updates to set a positive tone.',
  },
  {
    time: '30 Minutes',
    title: 'Specialist Guest Speaker',
    description: '30 minutes with an expert covering specialist business growth subjects.',
  },
  {
    time: '60 Minutes',
    title: 'Main Discussion',
    description: 'The "Hot Seat." Each member presents a challenge, followed by intense group brainstorming and action planning.',
  },
  {
    time: '15 Minutes',
    title: 'Wrap-Up',
    description: 'Identification of key takeaways and commitment to next steps.',
  },
];

export default function CircleClubMeetingStructure() {
  return (
    <section className="py-20 sm:py-32 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">
            A Proven Framework for Results.
          </h2>
          <p className="text-lg text-muted-foreground">
            Every monthly session follows a strict 2-hour agenda to maximize efficiency and impact.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-ml-px"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center md:justify-between`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 -ml-5 bg-background border-4 border-[#D4AF37] rounded-full flex items-center justify-center z-10 shrink-0">
                  <div className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full"></div>
                </div>

                {/* Content */}
                <div className={`pl-16 md:pl-0 w-full md:w-[42%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                   <span className="inline-block px-3 py-1 mb-2 text-sm font-semibold text-[#D4AF37] bg-[#D4AF37]/10 rounded-full">
                    {item.time}
                  </span>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                
                {/* Empty space for the other side */}
                <div className="hidden md:block w-[42%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
