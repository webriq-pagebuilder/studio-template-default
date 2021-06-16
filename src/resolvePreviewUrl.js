export default function resolveProductionUrl(document) {
  const previewUrl = `api/preview?secret=secret&slug=${document.slug.current}&fetch=true`
  if (window.location.hostname.includes("localhost")) {
    return `http://localhost:3000/${previewUrl}`
  }

  return `https://webriq-atis.webriq.me/${previewUrl}`
}
