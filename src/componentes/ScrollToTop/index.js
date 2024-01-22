import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to top quando for feita a navegação entre paginas sempre será redirecionado ao topo
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}


export default ScrollToTop