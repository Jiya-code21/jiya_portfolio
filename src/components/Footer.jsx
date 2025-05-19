import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-center items-center gap-6">
     <style>
  {`
    @keyframes heartbeat {
      0%, 100% {
        transform: scale(1);
      }
      25% {
        transform: scale(1.2);
      }
      50% {
        transform: scale(0.95);
      }
      75% {
        transform: scale(1.1);
      }
    }

    .pumping-heart {
      animation: heartbeat 2.5s infinite;
      transform-origin: center;
    }
  `}
</style>


      <p className="text-lg font-semibold select-none flex items-center gap-2">
        Made with{" "}
        <span
          role="img"
          aria-label="love"
          className="pumping-heart"
          style={{
            fontSize: "1.5rem",
            display: "inline-block",
            color: "#d6336c",
          }}
        >
          ❤️
        </span>{" "}
        by Jiya Agrawal
      </p>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={24} />
      </a>
    </footer>
  );
};
