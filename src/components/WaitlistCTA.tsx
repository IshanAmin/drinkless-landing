import SignupForm from "./SignupForm";

const WaitlistCTA = () => {
  return (
    <div className="py-24 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight px-4">
            Ready to start your
            <span className="block">success story?</span>
          </h2>
          <SignupForm />
          <p className="text-sm text-slate-600 mt-2">
            Reserve your spot now to gain access to the app while we're still in beta!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaitlistCTA;