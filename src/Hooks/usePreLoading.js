import { useState } from "react";

export default function usePreLoading() {
    const [preLoading, setPreLoading] = useState(false);
    setTimeout(() => {
        setPreLoading(false);
    }, 2800);
    return preLoading;
}
