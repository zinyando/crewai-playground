import { redirect } from "react-router";

export function loader() {
  return redirect("/agents");
}

export default function RedirectToAgents() {
  return null;
}
