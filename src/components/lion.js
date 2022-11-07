import { withLDConsumer } from "launchdarkly-react-client-sdk";
import lion from "./../images/lion.png";

const showLion = ({ flags, ldClient /*, ...otherProps */ }) => {
  let showFeature = ldClient.variation("reactShowLion");

  return showFeature ? (
  <div>
    <img src={lion} className="lion" alt="lion" />
  </div>
  ) : (
  <div />
  );
};

export default withLDConsumer()(showLion);