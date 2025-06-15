export default function StripeSubscribe() {
  return (
    <div className="bg-gray-800 mt-2  text-white p-2 shadow-lg font-sans md:w-100 w-full flex items-center justify-between">
      <span className="text-4xl mt-0 relative bottom-1.5">💳</span>
      <button type="button" className="btn btn-success btn-sm tooltip" data-tip="Subscribe with Stripe">Subscribe</button>
    </div>
  );
}
