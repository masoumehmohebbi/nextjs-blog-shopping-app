export default function toLocalDate(date: Date | string | number): string {
  return new Date(date).toLocaleDateString("fa-IR");
}
