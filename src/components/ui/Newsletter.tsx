import { useState } from "react";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <section className="py-16 bg-[#f3f0ea]">
      <div className="container">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl uppercase tracking-wider font-normal mb-3">
            Join our newsletter
          </h2>
          <p className="font-normal text-shop-dark-gray mb-6">
            Be the first to know about new collections and exclusive offers.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-2 border border-shop-medium-gray focus:outline-none focus:border-black"
              required
            />
            <Button
              type="submit"
              className="bg-black font-normal tracking-widest hover:bg-black/90 px-6 py-2 rounded-none sm:rounded-r mt-2 sm:mt-0"
            >
              SUBSCRIBE
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
