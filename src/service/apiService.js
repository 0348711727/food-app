import axios from "axios";



export const callApi = async (props) => {
  const { body, url, config, method } = props;

  return await axios[method](url, body, config)
}