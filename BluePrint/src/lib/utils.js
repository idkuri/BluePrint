// Shared utility function to generate URL-friendly slugs
// This ensures consistency across your app
export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}