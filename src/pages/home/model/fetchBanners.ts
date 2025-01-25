export const fetchBanners = async () => {
  const response = await fetch("/api/banners");
  return response.json();
};
