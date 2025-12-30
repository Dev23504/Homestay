import { useState } from "react";
import emailjs from "emailjs-com";
import image from "../image/devraj.jpg";



export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EMAIL SEND
    emailjs
      .send(
        "service_sp1z2p5",      // 👈 EmailJS Service ID
        "template_411dird",     // 👈 EmailJS Template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "M99LljjMMuHX1hniU"       // 👈 EmailJS Public Key
      )
      .then(() => {
        // WHATSAPP MESSAGE
        const whatsappText = `Hello Dev Heritage Stay 👋%0A
Name: ${form.name}%0A
Email: ${form.email}%0A
Message: ${form.message}`;

        const whatsappURL = `https://wa.me/919098987675?text=${whatsappText}`;
        window.open(whatsappURL, "_blank");

        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message");
      });
  };

  return (
    <div className="container mx-auto p-4 mt-20">
      {/* HEADER */}
      <div className="bg-purple-200 shadow rounded p-4 mb-8">
        <div className="row items-center text-center md:text-left">
          <div className="col-md-3 mb-3">
            <img
              src={image}
              alt="Owner"
              className="rounded-full mx-auto md:mx-0 w-40 h-45 object-cover"
            />
          </div>

          <div className="col-md-9">
            <h1 className="text-3xl font-bold">Dev Heritage Stay</h1>
            <p className="text-gray-600">Ujjain, Madhya Pradesh, India</p>

            <div className="mt-2">
              <p><strong>Owner:</strong> Devraj Singh</p>
              <p><strong>Phone:</strong> +91 9098987675</p>
              <p><strong>Email:</strong> devheritagestay@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="p-4 shadow rounded bg-white">
            <h3 className="text-xl font-semibold mb-3 text-center">
              Send Message
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  className="form-control"
                  required
                ></textarea>
              </div>

              <button className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
