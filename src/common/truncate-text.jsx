export const TruncateText = (text, max_length) => {
  if (text.length > max_length) return text.slice(0, max_length) + "...";
};