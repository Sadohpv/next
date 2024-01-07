import axios from "@/hooks/customAxios";

function handleGetAllNotifyService(idUser: number) {
  return axios.get(`/notify/allNotify/${idUser}`);
}
function handleReadNotifyService(index: number) {
  return axios.get(`/notify/readNotify/${index}`);
}
function handleNumberNoReadNotifyService(index: number) {
  return axios.get(`/notify/numberNoRead/${index}`);
}
export default {
  handleGetAllNotifyService,
  handleReadNotifyService,
  handleNumberNoReadNotifyService,
};
