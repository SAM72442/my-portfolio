import { useState } from "react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(3);

  return (
    <section
      id="contact"
      className="bg-[#f9fafb] py-12 sm:py-16 md:py-20 lg:py-24 w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-[#1f2937]">
            Let's Talk
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#6b7280]">
            Tell me what i can help you with
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 items-center">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitted(true);

              setCountdown(3);
              const interval = setInterval(() => {
                setCountdown((prev) => {
                  if (prev <= 1) {
                    clearInterval(interval);
                    setIsSubmitted(false);
                    return 3;
                  }
                  return prev - 1;
                });
              }, 1000);

              const form = e.target;

              try {
                const response = await fetch("/api/emails", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    firstName: form.firstName.value,
                    lastName: form.lastName.value,
                    contact: form.contact.value,
                    email: form.email.value,
                    message: form.message.value,
                  }),
                });

                if (!response.ok) throw new Error("Server error");

                form.reset();

                setTimeout(() => {
                  setIsSubmitted(false);
                }, 3000);
              } catch (error) {
                alert("Submission failed. Please try again later.");
                console.log(error);
                setIsSubmitted(false);
              }
            }}
            className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2 bg-linear-to-r from-white to-[#f9fafb] border-[#e5e7e6]"
          >
            {isSubmitted && (
              <div className="flex flex-col items-center">
                <span>Thank you for reaching out.</span>
                <span className="text-7xl my-5 text-gray-400">{countdown}</span>
              </div>
            )}
            {!isSubmitted && (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="bg-[#faede3] border-[#d1d5db] text-[#1f2937] w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="bg-[#faede3] border-[#d1d5db] text-[#1f2937] w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="bg-[#faede3] border-[#d1d5db] text-[#1f2937] w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-3 sm:mb-4"
                  required
                />

                <input
                  type="tel"
                  name="contact"
                  placeholder="Phone Number"
                  className="bg-[#faede3] border-[#d1d5db] text-[#1f2937] w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-3 sm:mb-4"
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  className="bg-[#faede3] border-[#d1d5db] text-[#1f2937] w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-4 sm:mb-6 resize-none"
                  required
                />
              </>
            )}
            <button
              type="submit"
              disabled={isSubmitted}
              className={`w-full py-2 sm:py-3 text-white font-bold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all ${isSubmitted ? "bg-green-500" : "bg-[#f59e0b]"}`}
            >
              {isSubmitted ? "Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
