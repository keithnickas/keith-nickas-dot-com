import hash from "object-hash";
import { HighlightItem } from "./helpers/highlight-item";
import { Highlight } from "./types/resume-types";

export default function ResumeHighlights({
  highlights,
}: {
  highlights: Highlight[];
}) {
  const HighlightItems = () => {
    if ((highlights && highlights.length === 0) || !highlights) return null;
    return highlights.map((highlight, _) => (
      <HighlightItem key={hash(highlight)} highlight={highlight} />
    ));
  };

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h1 font-light mb-4">Highlights</h2>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            <HighlightItems />
            {/* Download Button */}
            <div className="flex items-center md:grid md:grid-cols-12 md:gap-6">
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto col-start-6 col-end-12"
                data-aos="fade-right"
              >
                <a
                  href="https://1drv.ms/w/s!AlNLwqrOUfGHjQ7VJVqkT-lHyXSd?e=SivKyi"
                  className="p-4 bg-teal-400 text-white border-transparent border hover:bg-transparent hover:border-teal-400 hover:border hover:btn-lift"
                  type="button"
                  id="download-resume"
                  target="_blank"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
