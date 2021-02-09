export function getCount() {
  let count = 2000;
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    count = params.has('count') ? Number(params.get('count')) : count;
  }
  return count;
}
