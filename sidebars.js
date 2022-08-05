/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "welcome", // document id
      label: "Welcome", // sidebar label
    },
    {
      type: "category",
      label: "Output",
      items: ["output_final/Blockchain_folder"],
    },
    {
      type: "category",
      label: "Finalized",
      items: [
        "finalized/defi_Ordner_löschen",
        "finalized/API",
        "finalized/Addnode",
        "finalized/Adresse_erstellen",
        "finalized/Alle_Adressen_mit_Guthaben_anzeigen_lassen",
        "finalized/Alle_Coins_versenden",
        "finalized/App_auf_RaspberryPi",
        "finalized/App_auf_Windows_Cloud_Server",
        "finalized/App_on_Raspberry-Pi",
        "finalized/App_on_Windows_Cloud_Server",
        "finalized/Atomic_Swap",
        "finalized/Auszahlung_DFI_in_Euro",
        "finalized/Backup_Wallet",
        "finalized/Beginners_Guide",
        "finalized/Bitcoin_Anchoring",
        "finalized/Block_Rewards",
      ],
    },
  ],
};

module.exports = sidebars;
