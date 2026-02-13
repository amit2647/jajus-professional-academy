import { Link } from "react-router-dom";
import { MessageCircleQuestion } from "lucide-react";
// import { X } from "lucide-react";

// import { useState } from "react";

const FloatingEnquiryButton = () => {

    // const [visible, setVisible] = useState(true);

    // hide only for current visit
    // if (!visible) return null;

    return (
        <div
            className="
                fixed
                z-[999]
                bottom-10 right-7
                sm:bottom-10 sm:right-10
                flex flex-col items-center gap-2
            "
        >

            {/* Desktop Bubble */}
            <div className="hidden sm:block animate-bounce z-10">
                <div
                    className="
                        bg-yellow-400
                        text-gray-900
                        font-semibold
                        text-sm
                        px-4 py-2
                        rounded-full
                        shadow-xl
                        whitespace-nowrap
                    "
                >
                    Enquire Today
                </div>
            </div>

            {/* Mobile Label */}
            <div
                className="
                    sm:hidden
                    bg-yellow-400
                    text-gray-900
                    font-semibold
                    text-xs
                    px-3 py-1.5
                    rounded-full
                    shadow-lg
                    animate-bounce
                    z-10
                "
            >
                Enquire Today
            </div>

            {/* Main Enquiry Button */}
            <Link
                to="/admission#application-form"
                aria-label="Enquire Now"
                className="
                    group
                    relative
                    flex items-center justify-center
                    w-16 h-16
                    sm:w-[70px] sm:h-[70px]
                    rounded-full
                    bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-400
                    shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                    hover:scale-110
                    active:scale-95
                    transition-all duration-300
                "
            >
                {/* Ripple (non-click blocking) */}
                <span className="
                    pointer-events-none
                    absolute inline-flex h-full w-full rounded-full
                    bg-yellow-300 opacity-40 animate-ping
                "></span>

                {/* Glow */}
                <span className="
                    pointer-events-none
                    absolute w-[115%] h-[115%] rounded-full
                    bg-yellow-300 opacity-25 blur-md
                "></span>

                {/* Icon */}
                <MessageCircleQuestion
                    className="
                        w-8 h-8 sm:w-9 sm:h-9
                        text-gray-900
                        relative z-10
                        group-hover:rotate-12
                        transition-transform duration-300
                    "
                />
            </Link>

            {/* CLOSE BUTTON */}
            {/* <button
                onClick={() => setVisible(false)}
                aria-label="Close enquiry button"
                className="
        w-7 h-7
        rounded-full
        backdrop-grayscale
        shadow-md
        flex items-center justify-center
        hover:scale-110
        active:scale-95
        transition-all duration-200
    "
            >
                <X className="w-4 h-4 text-white" strokeWidth={3} />
            </button> */}


        </div>
    );
};

export default FloatingEnquiryButton;
