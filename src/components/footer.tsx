export default function Footer() {
  const currentDate = new Date();

  return (
    <footer className="bg-blue-900 text-white text-center font-bold p-4">
      Copyright © 2024
      {currentDate.getFullYear() !== 2024
        ? ` - ${currentDate.getFullYear()}`
        : ""}{" "}
      GSR General Services of RVA, LLC.
    </footer>
  );
}
