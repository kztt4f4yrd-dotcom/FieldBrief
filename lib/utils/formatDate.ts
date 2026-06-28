export function formatDate(value: string | null) {
  if (!value) {
    return "Not listed";
  }

  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}