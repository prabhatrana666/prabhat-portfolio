import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";
import Footer2 from "../footer/Footer2";
import Navbar from "../navbar/Navbar";
import { db, storage } from "./firebase";
import { useEffect, useRef } from "react";
import "./Dashboard.css"
import { doc, setDoc, serverTimestamp,getDoc, onSnapshot } from "firebase/firestore";
import {
    Eye,
    Upload,
    FileText,
    Calendar,
    CheckCircle2
} from "lucide-react";

function Dashboard() {
    const [resumeData, setResumeData] = useState(null);
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef(null);

    // fetch latest resume

    useEffect(() => {

        const fetchResume = async () => {

            try {

                const docRef = doc(db, "settings", "resume");
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setResumeData(docSnap.data());
                }

            } catch (err) {
                console.error(err);
            }

        };

        fetchResume();

    }, []);
    const handleUpload = async (selectedFile) => {

        if (!selectedFile) {
            toast.error("Please select a resume.");
            return;
        }

        try {

            setLoading(true);

            const storageRef = ref(storage, "resume/latest_resume.pdf");

            await uploadBytes(storageRef, selectedFile);

            const downloadURL = await getDownloadURL(storageRef);

            await setDoc(doc(db, "settings", "resume"), {
                url: downloadURL,
                fileName: selectedFile.name,
                updatedAt: serverTimestamp(),
            });

            toast.success("Resume updated successfully 🚀");

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }

    };
    return (
        <>
            <Navbar />
            <div>
                <div className="resume-card">

                    {/* Header */}
                    <div className="resume-header">

                        <div className="resume-title">

                            <div className="resume-icon">
                                <FileText size={28} />
                            </div>

                            <div>
                                <h3>Latest Resume</h3>

                                <p>
                                    {resumeData
                                        ? resumeData.fileName
                                        : "No Resume Uploaded"}
                                </p>
                            </div>

                        </div>

                        <div className="resume-badge">
                            <CheckCircle2 size={16} />
                            Active
                        </div>

                    </div>

                    <div className="resume-divider"></div>

                    {/* Details */}
                    <div className="resume-details">

                        <div className="d-none">
                            <span>Storage</span>
                            <h6>Firebase Storage</h6>
                        </div>

                        <div>
                            <span>Status</span>
                            <h6>{resumeData ? "Available" : "Not Uploaded"}</h6>
                        </div>

                        <div>
                            <span>last Updated</span>
                            <h6>
                                {resumeData?.updatedAt
                                    ?.toDate()
                                    .toLocaleString() || "--"}
                            </h6>
                        </div>

                    </div>

                    <div className="resume-divider"></div>

                    {/* Actions */}
                    <div className="resume-buttons">

                        {resumeData && (
                            <a
                                href={resumeData.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="view-btn"
                            >
                                <Eye size={18} />
                                View Resume
                            </a>
                        )}

                        {/* Hidden File Input */}
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept=".pdf"
                            style={{ display: "none" }}
                            onChange={(e) => {
                                const selectedFile = e.target.files[0];

                                if (!selectedFile) return;

                                handleUpload(selectedFile);

                                // Allow selecting the same file again later
                                e.target.value = "";
                            }}
                        />

                        {/* Replace Button */}
                        <button
                            type="button"
                            className="replace-btn"
                            disabled={loading}
                            onClick={() => fileInputRef.current.click()}
                        >
                            {loading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2"></span>
                                    Uploading...
                                </>
                            ) : (
                                <>
                                    <Upload size={18} />
                                    Replace Resume
                                </>
                            )}
                        </button>

                    </div>

                </div>
            </div>
            <Footer2 />
        </>

    );
}

export default Dashboard;