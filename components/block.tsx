/**
 * example child element: <p className="text-lg text-gray-400 text-center"></p>
 */

export const Block = ({
  children,
  icon,
  title,
}: {
  children: React.ReactNode;
  icon: React.ReactElement;
  title: string;
}) => (
  <div
    className="relative flex flex-col items-center"
    data-aos="zoom-in"
    data-aos-delay="300"
    data-aos-anchor="[data-aos-id-blocks]"
  >
    {icon}
    <h2 className="h4 mb-2">{title}</h2>
    {children}
  </div>
);

