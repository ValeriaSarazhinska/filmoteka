export default function renderTrailerCard(key) {
  const YOUTUBE_URL = 'https://www.youtube.com/embed/';
  return `<iframe
      class="trailer__video"
      src="${YOUTUBE_URL}${key}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    >
    </iframe>`;
}
