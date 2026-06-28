export default function DetailRow({
  label,
  value,
}: {
  label: string;
  value: string | null;
}) {
  return (
    <p>
      <span className="text-zinc-500">{label}:</span> {value ?? "Not listed"}
    </p>
  );
}