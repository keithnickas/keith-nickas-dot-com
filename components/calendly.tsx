import { InlineWidget } from "react-calendly";

export default function Calendly() {
  return (
    <section className="relative lg:mb-0 text-left lg:text-left lg:w-no-max">
      <InlineWidget url="https://calendly.com/keithnickas/introductions?hide_gdpr_banner=1" styles={{minWidth: 320, height: 700}} />
    </section>
  );
}
