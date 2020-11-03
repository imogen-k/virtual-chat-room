import {useEffect} from "react";

export default function KeyPressed(fn) {
    useEffect(() => {
        window.addEventListener("keydown", fn)
        return () => window.removeEventListener("keydown", fn);
    }, [fn])
}