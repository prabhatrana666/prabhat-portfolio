import Swal from "sweetalert2";
import Modal from "bootstrap/js/dist/modal";

const BOT_TOKEN = "8778289101:AAH4I9bcqMGMOg7uQS_-FjbhmNle0JFn4_w";
const CHAT_ID = "1704641369";

export const sendTelegramEnquiry = async (
    formData,
    setLoading,
    resetForm,
    modalId = "enquiryModal"
) => {
    setLoading(true);
    resetForm();

    const modalElement = document.getElementById(modalId);

    if (modalElement) {
        const modal = Modal.getInstance(modalElement);

        modal?.hide();

        modalElement.addEventListener(
            "hidden.bs.modal",
            () => {
                // Remove leftover backdrop
                document
                    .querySelectorAll(".modal-backdrop")
                    .forEach((el) => el.remove());

                // Restore body
                document.body.classList.remove("modal-open");
                document.body.style.removeProperty("padding-right");
                document.body.style.removeProperty("overflow");
                // Loading Alert
                Swal.fire({
                    icon: "success",
                    title: "Enquiry Sent!",
                    text: "Thank you for contacting us.",
                    confirmButtonColor: "#524caf",
                });
            },
            { once: true }
        );
    }



    const text = `
📩 NEW WEBSITE ENQUIRY

👤 Name: ${formData.name}

📧 Email: ${formData.email}

📱 Mobile: ${formData.mobile}

💬 Message:
${formData.message}
`;

    try {
        const response = await fetch(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text,
                }),
            }
        );

        const result = await response.json();
        console.log(result)
        if (!result.ok) {
            throw new Error(result.description || "Telegram API Error");
        }

        // Close loading alert
        Swal.close();

        // Reset form
        resetForm();

        // Hide Bootstrap modal
        const modalElement = document.getElementById(modalId);
        const modal = window.bootstrap?.Modal.getInstance(modalElement);

        if (modal) {
            modalElement.addEventListener(
                "hidden.bs.modal",
                () => {
                    Swal.fire({
                        icon: "success",
                        title: "Enquiry Sent!",
                        text: "Thank you for contacting us. We'll get back to you shortly.",
                        confirmButtonColor: "#524caf",
                    });
                },
                { once: true }
            );

            modal.hide();
        } else {
            Swal.fire({
                icon: "success",
                title: "Enquiry Sent!",
                text: "Thank you for contacting us. We'll get back to you shortly.",
                confirmButtonColor: "#524caf",
            });
        }

    } catch (error) {
        console.error(error);

        Swal.fire({
            icon: "error",
            title: "Failed!",
            text: error.message || "Something went wrong.",
            confirmButtonColor: "#524caf",
        });
    } finally {
        setLoading(false);
    }
};