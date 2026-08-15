import { LegalPage } from "../components/LegalPage";
import { getLegalDoc } from "../content/legal";

export function TermsOfService() {
  return <LegalPage doc={getLegalDoc("terms")} />;
}

export default TermsOfService;
