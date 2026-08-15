import { LegalPage } from "../components/LegalPage";
import { getLegalDoc } from "../content/legal";

export function Disclaimer() {
  return <LegalPage doc={getLegalDoc("disclaimer")} />;
}

export default Disclaimer;
