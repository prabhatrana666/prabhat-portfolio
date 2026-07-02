import { useEffect, useRef, useState } from "react";

const LazyGoogleMap = () => {
    const containerRef = useRef(null);
    const [loadMap, setLoadMap] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoadMap(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                threshold: 0.1,
                rootMargin: "200px",
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className="h11f-map"
            style={{ minHeight: "220px" }}
        >
            {loadMap ? (
                <iframe
                    title="Cherry Paws Kennel Location"
                    src="https://www.google.com/maps?q=Sarvodaya+Nagar,+Allahpur,+Prayagraj&output=embed"
                    width="100%"
                    height="220"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                />
            ) : (
                <div
                    style={{
                        height: "220px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#f5f5f5",
                        borderRadius: "12px",
                    }}
                >
                    Loading map...
                </div>
            )}
        </div>
    );
};

export default LazyGoogleMap;