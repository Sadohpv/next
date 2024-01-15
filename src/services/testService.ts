import axios from "@/hooks/customAxios";

function handleGetAllNotifyService(idUser: number) {
  return axios.get<IUser, FailResponse>(`/users`);
}
function handleReadNotifyService(index: number) {
  return axios.get(`/notify/readNotify/${index}`);
}
function handleNumberNoReadNotifyService(index: number) {
  return axios.get(`/notify/numberNoRead/${index}`);
}
function handleGetDataUserService(idUser:number) {
	return axios.get<IUser, FailResponse>(`/users`);
}
export default {
  handleGetAllNotifyService,
  handleReadNotifyService,
  handleNumberNoReadNotifyService,
  handleGetDataUserService
};
