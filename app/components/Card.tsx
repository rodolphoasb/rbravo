import { Link } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";

export function Card() {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [mouseOnCard, setMouseOnCard] = useState(false);
  const [gradientCenter, setGradientCenter] = useState({
    cx: "50%",
    cy: "50%",
  });

  useEffect(() => {
    if (cardRef.current && cursor.x !== null && cursor.y !== null) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const cxPercentage = (cursor.x / cardRect.width) * 100 - 24;
      const cyPercentage = (cursor.y / cardRect.height) * 100;
      setGradientCenter({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor, cardRef]);

  function handleMouseMove(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (cardRef.current !== null) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setCursor({ x: x, y: y });
    }
  }

  return (
    <Link
      to={"/lab"}
      ref={cardRef}
      onMouseEnter={() => setMouseOnCard(true)}
      onMouseLeave={() => setMouseOnCard(false)}
      onMouseMove={(event) => handleMouseMove(event)}
      className="bg-gray-50 flex justify-between border hover:shadow-sm no-underline border-gray-200/50 rounded-lg h-60 p-8 relative overflow-hidden"
    >
      <div className="font-mono text-neutral-400 z-10">
        <h2 className="text-xl">UI Lab</h2>
        <p className="text-sm pt-1">Experiments on Crafting Interfaces</p>
      </div>
      <div className="absolute right-0 -bottom-10 scale-[200%]">
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
                id="amberCard"
                gradientUnits="userSpaceOnUse"
                cx={gradientCenter.cx}
                cy={gradientCenter.cy}
                r={"40%"}
              >
                {mouseOnCard ? <stop stopColor="#f59e0b" /> : null}
                <stop offset="1" stopColor="#e4e4e7" />
              </radialGradient>
            </defs>
            <g stroke="url(#amberCard)">
              <circle cx="75" cy="74.948" r="3.5"></circle>
              <path
                stroke="url(#amberCard)"
                d="M93.99 55.749c14.438 14.437 25.317 29.668 31.244 42.607 2.965 6.472 4.679 12.345 4.995 17.243.316 4.9-.768 8.762-3.318 11.312-2.55 2.55-6.412 3.634-11.312 3.318-4.898-.317-10.771-2.03-17.242-4.995-12.94-5.927-28.17-16.806-42.608-31.244C41.31 79.552 30.432 64.322 24.505 51.382c-2.965-6.471-4.678-12.344-4.995-17.242-.316-4.9.768-8.762 3.318-11.312 2.55-2.55 6.412-3.634 11.312-3.318 4.898.316 10.771 2.03 17.242 4.995 12.94 5.927 28.17 16.806 42.608 31.244z"
              ></path>
              <path
                stroke="url(#amberCard)"
                d="M92.12 57.683c13.62 13.62 23.977 27.892 29.72 39.944 2.873 6.028 4.578 11.475 4.976 15.991.398 4.52-.518 8.034-2.792 10.308-2.274 2.274-5.788 3.19-10.308 2.792-4.516-.398-9.963-2.103-15.991-4.976-12.052-5.743-26.325-16.1-39.944-29.72-13.62-13.62-23.977-27.892-29.72-39.944-2.873-6.029-4.579-11.475-4.976-15.992-.398-4.52.518-8.033 2.792-10.307 2.274-2.274 5.788-3.19 10.307-2.792 4.517.397 9.964 2.103 15.992 4.976 12.052 5.743 26.324 16.1 39.944 29.72z"
              ></path>
              <path
                stroke="url(#amberCard)"
                d="M55.8 55.958C70.239 41.52 85.47 30.641 98.409 24.714c6.472-2.964 12.344-4.678 17.243-4.994 4.9-.317 8.762.767 11.312 3.317 2.55 2.55 3.634 6.412 3.317 11.312-.316 4.899-2.03 10.771-4.994 17.243-5.927 12.939-16.806 28.17-31.244 42.607-14.438 14.438-29.669 25.318-42.608 31.245-6.471 2.964-12.344 4.678-17.243 4.994-4.9.316-8.762-.767-11.312-3.317-2.55-2.551-3.633-6.413-3.317-11.312.316-4.899 2.03-10.772 4.994-17.243 5.927-12.94 16.807-28.17 31.245-42.608z"
              ></path>
              <path
                stroke="url(#amberCard)"
                d="M57.734 57.828c13.62-13.62 27.893-23.977 39.945-29.72 6.028-2.872 11.475-4.578 15.991-4.976 4.52-.398 8.034.518 10.308 2.792 2.274 2.274 3.19 5.788 2.792 10.308-.398 4.516-2.104 9.963-4.976 15.991-5.743 12.052-16.101 26.325-29.72 39.945-13.62 13.619-27.893 23.976-39.945 29.72-6.028 2.872-11.475 4.578-15.991 4.976-4.52.397-8.034-.519-10.308-2.792-2.273-2.274-3.19-5.788-2.792-10.308.398-4.516 2.104-9.963 4.976-15.991 5.744-12.052 16.1-26.325 29.72-39.945z"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </Link>
  );
}
