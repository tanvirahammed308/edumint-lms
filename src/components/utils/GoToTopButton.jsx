import { useState, useEffect } from "react";

const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={goToTop}
        className="fixed bottom-6 right-6  w-8 p-3 bg-[#FDC800] text-white rounded-full shadow-md hover:bg-blue-700 transition"
      >
        ↑
      </button>
    )
  );
};

export default GoToTopButton;
