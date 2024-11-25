// "use client";

// import { useState, useRef, ReactNode, MouseEvent } from "react";
// import { TiLocationArrow } from "react-icons/ti";

// // Define the BentoTilt component
// interface BentoTiltProps {
//   children: ReactNode;
//   className?: string;
// }

// export const BentoTilt: React.FC<BentoTiltProps> = ({
//   children,
//   className = "",
// }) => {
//   const [transformStyle, setTransformStyle] = useState<string>("");
//   const itemRef = useRef<HTMLDivElement | null>(null);

//   const handleMouseMove = (event: MouseEvent) => {
//     if (!itemRef.current) return;

//     const { left, top, width, height } =
//       itemRef.current.getBoundingClientRect();

//     const relativeX = (event.clientX - left) / width;
//     const relativeY = (event.clientY - top) / height;

//     const tiltX = (relativeY - 0.5) * 5;
//     const tiltY = (relativeX - 0.5) * -5;

//     const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
//     setTransformStyle(newTransform);
//   };

//   const handleMouseLeave = () => {
//     setTransformStyle("");
//   };

//   return (
//     <div
//       ref={itemRef}
//       className={className}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{ transform: transformStyle }}
//     >
//       {children}
//     </div>
//   );
// };

// // Define BentoCard component props
// interface BentoCardProps {
//   src: string;
//   title: ReactNode;
//   description?: string;
//   link?: string; // Added link prop
// }

// export const BentoCard: React.FC<BentoCardProps> = ({
//   src,
//   title,
//   description,
//   link,
// }) => {
//   const [cursorPosition, setCursorPosition] = useState<{
//     x: number;
//     y: number;
//   }>({ x: 0, y: 0 });
//   const [hoverOpacity, setHoverOpacity] = useState<number>(0);
//   const hoverButtonRef = useRef<HTMLDivElement | null>(null);

//   const handleMouseMove = (event: MouseEvent) => {
//     if (!hoverButtonRef.current) return;
//     const rect = hoverButtonRef.current.getBoundingClientRect();

//     setCursorPosition({
//       x: event.clientX - rect.left,
//       y: event.clientY - rect.top,
//     });
//   };

//   const handleMouseEnter = () => setHoverOpacity(1);
//   const handleMouseLeave = () => setHoverOpacity(0);

//   return (
//     <div className="relative size-full">
//       <video
//         src={src}
//         loop
//         muted
//         autoPlay
//         className="absolute left-0 top-0 size-full object-cover object-center"
//       />
//       <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
//         <div>
//           <h1 className="bento-title special-font">{title}</h1>
//           {description && (
//             <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
//           )}
//         </div>

//         {link && (
//           <a
//             href={link}
//             target="_blank"
//             rel="noopener noreferrer"
//             ref={hoverButtonRef}
//             onMouseMove={handleMouseMove}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
//           >
//             {/* Radial gradient hover effect */}
//             <div
//               className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
//               style={{
//                 opacity: hoverOpacity,
//                 background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
//               }}
//             />
//             <TiLocationArrow className="relative z-20" />
//             <p className="relative z-20">View Project</p>
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// const Projects: React.FC = () => (
//   <section id="projects" className="bg-black pb-52">
//     <div className="container mx-auto px-3 md:px-10">
//       <div className="px-5 py-32">
//         <p className="font-circular-web text-lg text-blue-50">Projects</p>
//         <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50"></p>
//       </div>

//       <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
//         <BentoCard
//           src="videos/feature-1.mp4"
//           title={<>AI Form Builder</>}
//           description="AI-powered form builder with question generation, feedback categorization, and real-time insights."
//           link="https://aiforms.21bubbles.com/"
//         />
//       </BentoTilt>

//       <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
//         <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
//           <BentoCard
//             src="videos/feature-2.mp4"
//             title={<>21Bubbles</>}
//             description="Software development agency offering efficient MVP development, focusing on customer-centric solutions."
//             link="https://21bubbles.com"
//           />
//         </BentoTilt>

//         <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
//           <BentoCard
//             src="videos/feature-3.mp4"
//             title={<>Brotein Bistro</>}
//             description="SaaS platform for cafe subscriptions with meal tracking, user plans, and admin dashboard."
//             link="https://broteinbistro.com/"
//           />
//         </BentoTilt>

//         <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
//           <BentoCard
//             src="videos/feature-4.mp4"
//             title={<>DigiPalettee</>}
//             description="A platform designed to create interactive, engaging digital content for businesses."
//             link="https://www.digipalettes.com/"
//           />
//         </BentoTilt>

//         <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
//           <BentoCard
//             src="videos/feature-4.mp4"
//             title={<>AI Tools List</>}
//             description="Self-curated platform showcasing a collection of AI tools."
//             link="https://aitools.21bubbles.com"
//           />
//         </BentoTilt>

//         <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
//           <BentoCard
//             src=""
//             title={<>Nyaysutra</>}
//             description="SIH landing page built to represent solutions for judicial efficiency."
//             link="https://nyaysutra.netlify.app"
//           />
//         </BentoTilt>
//       </div>
//     </div>
//   </section>
// );

// export default Projects;

"use client";

import { useState, useRef, ReactNode, MouseEvent } from "react";
import { TiLocationArrow } from "react-icons/ti";

// Define the BentoTilt component
interface BentoTiltProps {
  children: ReactNode;
  className?: string;
}

export const BentoTilt: React.FC<BentoTiltProps> = ({
  children,
  className = "",
}) => {
  const [transformStyle, setTransformStyle] = useState<string>("");
  const itemRef = useRef<HTMLAnchorElement | null>(null);

  const handleMouseMove = (event: MouseEvent) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

// Define BentoCard component props
interface BentoCardProps {
  src: string;
  title: ReactNode;
  description?: string;
  link?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  src,
  title,
  description,
  link,
}) => {
  const [cursorPosition, setCursorPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState<number>(0);
  const hoverButtonRef = useRef<HTMLAnchorElement | null>(null);

  const handleMouseMove = (event: MouseEvent) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <img
        src={src}
        alt={typeof title === "string" ? title : "Project Image"}
        className="absolute left-0 top-0 size-full object-cover object-center rounded-lg border border-neutral-600"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/50"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">View Project</p>
          </a>
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => (
  <section id="projects" className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-6xl text-blue-50">Projects</p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50"></p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] transition-transform duration-300 ease-out">
        <BentoCard
          src="/aiform.png"
          title={<>AI Form Builder</>}
          description="AI-powered form builder with question generation, feedback categorization, and real-time insights."
          link="https://aiforms.21bubbles.com/"
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="border-hsla row-span-1 md:col-span-1 md:row-span-2 rounded-md transition-transform duration-300 ease-out">
          <BentoCard
            src="/21b.png"
            title={<>21Bubbles</>}
            description="Software development agency offering efficient MVP development, focusing on customer-centric solutions."
            link="https://21bubbles.com"
          />
        </BentoTilt>

        <BentoTilt className="border-hsla row-span-1 ms-32 md:col-span-1 md:ms-0 rounded-md transition-transform duration-300 ease-out">
          <BentoCard
            src="/bb.png"
            title={<>Brotein Bistro</>}
            description="SaaS platform for cafe subscriptions with meal tracking, user plans, and admin dashboard."
            link="https://broteinbistro.com/"
          />
        </BentoTilt>

        <BentoTilt className="border-hsla rounded-md transition-transform duration-300 ease-out me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="/digi.png"
            title={<>DigiPalettee</>}
            description="A platform designed to create interactive, engaging digital content for businesses."
            link="https://www.digipalettes.com/"
          />
        </BentoTilt>

        <BentoTilt className="border-hsla rounded-md transition-transform duration-300 ease-out me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="/21b.png"
            title={<>AI Tools List</>}
            description="Self-curated platform showcasing a collection of AI tools."
            link="https://aitools.21bubbles.com"
          />
        </BentoTilt>

        <BentoTilt className="border-hsla rounded-md transition-transform duration-300 ease-out me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="/nyay.png"
            title={<>Nyaysutra</>}
            description="SIH landing page built to represent solutions for judicial efficiency."
            link="https://nyaysutra.netlify.app"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Projects;
