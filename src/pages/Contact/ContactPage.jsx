import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "your_service_id", // replace with your EmailJS service ID
                "your_template_id", // replace with your EmailJS template ID
                formData,
                "your_user_id" // replace with your EmailJS public key (user ID)
            )
            .then(
                (response) => {
                    setStatus("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    setStatus("Failed to send message. Please try again later.");
                }
            );
    };

    return (
        <section className="bg-white py-16 px-4 md:px-8">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full border border-gray-300 rounded-md p-2"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>

                    {status && (
                        <p className="text-center text-sm mt-4 text-green-600">{status}</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default ContactPage;
