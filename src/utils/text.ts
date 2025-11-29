export function truncateToWords(text: string, wordCount = 500): string {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length <= wordCount) return text;
  return words.slice(0, wordCount).join(" ") + "…";
}
