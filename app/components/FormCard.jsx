export default function FormCard({ title, children }) {
  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 w-380px border-t-4 border-accent">
      <h2 className="text-2xl font-bold mb-6 text-primary text-center">
        {title}
      </h2>
      {children}
    </div>
  );
}
