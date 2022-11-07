import { withLDConsumer } from "launchdarkly-react-client-sdk";

const partnerLogo = ({ flags, ldClient /*, ...otherProps */ }) => {
  let showFeature = ldClient.variation("reactShowPartnerLogo");
  let logo = ldClient.variation("reactPartnerLogo");

  return showFeature ? (
  <div>
    <img src={logo} className="partner-logo" alt="partnerLogo" />
  </div>
  ) : (
  <div />
  );
};

export default withLDConsumer()(partnerLogo);