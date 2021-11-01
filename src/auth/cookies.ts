import { setAdminSession, setSession, setSuperUserSession } from "@/auth/setAuth";
import { Rol } from "@/types/enums/Rol";
import { unsetSession } from "./unsetAuth";

export function setCookies(rol: Rol): void {
  setSession();
  if (rol === Rol.AUDITOR || rol === Rol.ADMIN) {
    setSuperUserSession();
  }
  if (rol === Rol.ADMIN) {
    setAdminSession()
  }
}

export function unsetCookies() : void {
  unsetSession();
}