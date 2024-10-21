import axios from "axios";
import GitHubRepo from "../models/GitHubRepoModel";
import { catchAxiosError, checkDataBackend } from "./config";

/**
 *
 * @param obtener los repositorios públicos de git
 *
 * @throws {AxiosError}
 *
 * @return {Array<GitHubRepo>}
 */
export async function fetchGitHubRepoIndex(): Promise<Array<GitHubRepo>> {
  try {
    // Ruta
    const url = "https://api.github.com/users/Astralzz/repos?sort=updated&direction=desc";
    //https://api.github.com/users/Astralzz/repos?sort=updated&direction=desc

    // Enviamos
    const res = await axios.get(url);

    // Comprobamos data
    checkDataBackend(res?.data);

    return res?.data;

    // ! Error
  } catch (er: unknown | any) {
    return await catchAxiosError(er);
  }
}
