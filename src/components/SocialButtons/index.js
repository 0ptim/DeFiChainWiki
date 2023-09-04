import React from "react";
import SocialButton from "../SocialButton";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function SocialButtons() {
  return (
    <div className="absolute right-4 top-4 z-10 flex gap-2">
      <SocialButton
        href="https://github.com/0ptim/DeFiChainWiki"
        label="Link to Github"
        icon={faGithub}
      />
      <SocialButton
        href="https://twitter.com/DMCUniverse_"
        label="Link to Twitter"
        icon={faXTwitter}
      />
      <SocialButton
        href="mailto:your-email@example.com"
        label="Send email"
        icon={faPaperPlane}
      />
    </div>
  );
}
