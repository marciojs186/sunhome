import api from "../../../services/api";

export const GetImagesCarousel = async () => {
  const resp = await api.get(
    `/image-carousel/${process.env.REACT_APP_TOKEN_URL}`
  );

  const { data } = resp;
  return data;
};
