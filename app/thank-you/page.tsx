// app/thank-you/page.tsx
const ThankYou = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Thank you!</h1>
        <p className="text-lg text-gray-700">
          Your message has been sent successfully. We’ll get back to you soon.
        </p>
      </div>
    </section>
  );
};

export default ThankYou;
