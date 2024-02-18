import axios from "axios";
import { URL_SERVER } from "./constants/env";

export default async function fetchingGet(key: string){
    const res = await axios.get(URL_SERVER + "/" + key)
    if(res.status != 200) throw new Error("there are a error in " + res.data)
    const data = res.data;
    return data;
}