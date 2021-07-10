import axios from "axios"
import config from '../config/config';

export const api = axios.create({
    baseURL: config,
})