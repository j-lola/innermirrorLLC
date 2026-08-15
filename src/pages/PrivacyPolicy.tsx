import { LegalPage } from "../components/LegalPage";
import { getLegalDoc } from "../content/legal";

export function PrivacyPolicy() {
  return <LegalPage doc={getLegalDoc("privacy")} />;
}

export default PrivacyPolicy;
