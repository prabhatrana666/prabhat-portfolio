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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46510.7623565456!2d77.3356386143719!3d28.600139047081285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45f97fb7b77%3A0x57e50ec90fd80e55!2sNoida%20Sector-15!5e1!3m2!1sen!2sin!4v1783074226021!5m2!1sen!2sin"
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