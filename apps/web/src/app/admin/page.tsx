export default function AdminPage() {
  return (
    <div className="grow self-stretch -m-8 min-h-screen">
      <iframe
        className="w-full h-full"
        src={process.env.NEXT_PUBLIC_PAYLOAD_ADDRESS}
      ></iframe>
    </div>
  );
}
