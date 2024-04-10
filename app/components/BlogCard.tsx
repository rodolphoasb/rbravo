import { Link } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";

export function BlogCard() {
  const blogCardRef = useRef<HTMLAnchorElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [mouseOnCard, setMouseOnCard] = useState(false);
  const [gradientCenter, setGradientCenter] = useState({
    cx: "50%",
    cy: "50%",
  });

  useEffect(() => {
    if (blogCardRef.current && cursor.x !== null && cursor.y !== null) {
      const cardRect = blogCardRef.current.getBoundingClientRect();
      const cxPercentage = (cursor.x / cardRect.width) * 100 - 24;
      const cyPercentage = (cursor.y / cardRect.height) * 100;
      setGradientCenter({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor, blogCardRef]);

  function handleMouseMove(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (blogCardRef.current !== null) {
      const rect = blogCardRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setCursor({ x: x, y: y });
    }
  }

  return (
    <Link
      to={"/blog"}
      ref={blogCardRef}
      onMouseEnter={() => setMouseOnCard(true)}
      onMouseLeave={() => setMouseOnCard(false)}
      onMouseMove={(event) => handleMouseMove(event)}
      className="bg-gray-50 flex justify-between no-underline hover:shadow-sm transition-all border border-gray-200/50 rounded-lg h-60 p-8 relative overflow-hidden"
    >
      <div className="font-mono text-neutral-400">
        <h2 className="text-xl">Blog</h2>
        <p className="text-sm pt-1">Thoughts on the things I'm learning</p>
      </div>
      <div className="absolute right-0 -bottom-12 scale-150 -rotate-45">
        <div className="h-full items-center flex stroke-[1] hover:stroke-[1.25]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            fill="none"
            viewBox="0 0 150 150"
            className="duration-300 transition-all"
          >
            <defs>
              <radialGradient
                id="amberBlogCard"
                gradientUnits="userSpaceOnUse"
                cx={gradientCenter.cx}
                cy={gradientCenter.cy}
                r={"40%"}
              >
                {mouseOnCard ? <stop stopColor="#f59e0b" /> : null}
                <stop offset="1" stopColor="#e4e4e7" />
              </radialGradient>
            </defs>
            <path
              stroke="url(#amberBlogCard)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M25 121.875v-93.75A15.625 15.625 0 0140.625 12.5H125v125H40.625A15.625 15.625 0 0125 121.875zm0 0a15.627 15.627 0 0115.625-15.625H125M50 43.75h37.5M50 68.75h50"
            ></path>
          </svg>
        </div>
      </div>
    </Link>
  );
}
