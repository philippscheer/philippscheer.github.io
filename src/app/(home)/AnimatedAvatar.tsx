"use client"

import { useEffect, useState } from "react";


function randInterval(min: number, max: number): number {
  return Math.random() * (max - min + 1) + min;
}


function shuffle<T>(unshuffled: T[]): T[] {
  return unshuffled
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}


interface BaseApp {
  icon: string;
  name: string;
  emphasis: "high" | "medium" | "low";
  startAngle: number;
  speed?: number;
  size?: number;
  distance?: number;
};


const baseApps: BaseApp[] = [
  // high emphasis
  { icon: "python.svg", name: "Python",   emphasis: "high",   startAngle: 0   },
  { icon: "react.svg",  name: "React",    emphasis: "high",   startAngle: 100 },
  { icon: "docker.svg", name: "Docker",   emphasis: "high",   startAngle: 240 },

  // medium emphasis
  { icon: "vscode.svg", name: "VS Code",  emphasis: "medium", startAngle: 40  },
  { icon: "nextjs.svg", name: "Next.js",  emphasis: "medium", startAngle: 180 },
  { icon: "vercel.svg", name: "Vercel",   emphasis: "medium", startAngle: 280 },

  // low emphasis
  { icon: "mysql.svg",  name: "MySQL",    emphasis: "low",    startAngle: 20 },
  { icon: "github.svg", name: "GitHub",   emphasis: "low",    startAngle: 60 },
  { icon: "tux.svg",    name: "Linux",    emphasis: "low",    startAngle: 200 },
  { icon: "bash.svg",   name: "Bash",     emphasis: "low",    startAngle: 300 },
];


export default function AnimatedAvatar() {
  const popoutAnimationDuration = 1;

  // Use state to store the randomized app data
  const [animatedApps, setAnimatedApps] = useState<BaseApp[]>([]);

  useEffect(() => {
    // Generate the randomized app data only on the client side
    const generatedApps: BaseApp[] = shuffle(baseApps).map((app) => ({
      ...app,
      speed:    app.emphasis === "high" ? randInterval(90, 90)   : app.emphasis === "medium" ? randInterval(90, 90)   : randInterval(90, 90),
      size:     app.emphasis === "high" ? randInterval(130, 135) : app.emphasis === "medium" ? randInterval(90, 100)  : randInterval(50, 60),
      distance: app.emphasis === "high" ? randInterval(170, 175) : app.emphasis === "medium" ? randInterval(190, 210) : randInterval(210, 230),
    }));
    setAnimatedApps(generatedApps);

    // Dynamically inject orbit animation styles
    const styleTag = document.createElement("style");
    styleTag.id = "dynamic-orbit-styles";
    styleTag.innerHTML = generatedApps
      .map(
        (app, index) => `
        @keyframes orbit-${index} {
          from {
            transform: translate(-50%, -50%) rotate(${app.startAngle}deg) translateX(${app.distance}px) rotate(-${app.startAngle}deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(${app.startAngle + 360}deg) translateX(${app.distance}px) rotate(-${app.startAngle + 360}deg);
          }
        }

        @keyframes pop-in-${index} {
            0% {
              opacity: 0;
              transform: translate(-50%, -50%) rotate(${app.startAngle}deg) translateX(0px) rotate(-${app.startAngle}deg) scale(0);
            }
            50% {
              opacity: 1;
              /* Pop out slightly further than final distance, and scale up */
              transform: translate(-50%, -50%) rotate(${app.startAngle}deg) translateX(${(app.distance ?? 0) + 20}px) rotate(-${app.startAngle}deg) scale(1.2);
            }
            100% {
              opacity: 1;
              /* Settle at final distance and normal size */
              transform: translate(-50%, -50%) rotate(${app.startAngle}deg) translateX(${app.distance}px) rotate(-${app.startAngle}deg) scale(1);
            }
        }
      `,
      )
      .join("\n");
    document.head.appendChild(styleTag);

    return () => {
      const existingStyle = document.getElementById("dynamic-orbit-styles");
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  return (
    <div className="absolute left-0 right-0 top-0 bottom-0 m-auto w-0.5 h-0.5">
      {/* App Icons */}
      {animatedApps.map((app, index) => {
        const initialTransform = `translate(-50%, -50%) rotate(${app.startAngle}deg) translateX(0px) rotate(-${app.startAngle}deg) scale(0)`;
        const popInDelay = `${index * 0.075}s`; // Staggered pop-in
        const orbitDelay = `${popoutAnimationDuration + index * 0.075}s`; // Orbit starts after pop-in finishes and is staggered

        return (
          <div
            key={index}
            className="absolute"
            style={{
              width: `${app.size}px`,
              height: `${app.size}px`,
              opacity: 0, // Set initial opacity to 0
              transform: initialTransform, // Set initial transform to match 0% keyframe
              animation: `pop-in-${index} ${popoutAnimationDuration}s ease-out forwards ${popInDelay}, orbit-${index} ${app.speed}s linear infinite ${orbitDelay}`,
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 hover:shadow-xl transition-all duration-200 hover:scale-110">
              <img src={"/icons/" + app.icon} className="w-3/5 h-3/5 text-gray-700" alt="" />
            </div>
          </div>
        );
      })}

      {/* Central Avatar */}
      <div className="absolute z-10 avatar-image-container" style={{ transform: "translate(-50%, -50%)" }}>
        <div
          className="p-4 rounded-full overflow-hidden w-fit shadow-2xl"
          style={{ background: "#fdfbf9", height: 256, width: 256 }}>
          <img src="/images/avatar-original.webp" width={256} alt="Philipp Scheer Avatar" />
        </div>
      </div>
    </div>
  );
}