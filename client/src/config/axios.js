import axios from "axios";
const newaxios = axios.create({
	// baseURL: "http://localhost:9000/",
	baseURL: "http://192.168.43.78:9000/",
});
// export { newaxios };
export default newaxios;
