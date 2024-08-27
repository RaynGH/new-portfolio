import React, { useEffect } from 'react';
import { FaCircleArrowUp } from "react-icons/fa6";

function ScrolltoTopBtn() {

    useEffect(() => {
        const mybtn = document.getElementById("btnScroll");

        const scrollFunction = () => {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                mybtn.classList.remove('hidden');
            } else {
                mybtn.classList.add('hidden');
            }
        };

        const backtoTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        mybtn.addEventListener("click", backtoTop);
        window.addEventListener("scroll", scrollFunction);

        return () => {
            mybtn.removeEventListener("click", backtoTop);
            window.removeEventListener("scroll", scrollFunction);
        };
    }, []);

    return (
        <div>
            <button type="button" className="!fixed bottom-5 end-5 hidden rounded-full bg-green-500 p-3 text-xl 
            font-medium uppercase leading-none text-white shadow-md transition duration-150 ease-in-out
             hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
             active:bg-green-800 active:shadow-lg dark:bg-yellow-300 dark:hover:bg-yellow-300 
             dark:active:bg-yellow-300 dark:text-gray-950" id="btnScroll"><FaCircleArrowUp/></button>
        </div>
    )
}

export default ScrolltoTopBtn;
