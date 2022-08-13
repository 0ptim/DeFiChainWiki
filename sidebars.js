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
      items: ["output_final/Wallet_Encryption"],
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
        "finalized/Blockchain_folder",
        "finalized/Cli_commands",
        "finalized/Collected_questions_for_the_developers",
        "finalized/Community",
        "finalized/Community_Funding_Proposals",
        "finalized/Create_address",
        "finalized/CustomTransaction",
        "finalized/DEX_Fee_structure",
        "finalized/DFI-Punks",
        "finalized/DFI_Staking_at_DFX",
        "finalized/DFI_Staking_bei_DFX",
        "finalized/DFX",
        "finalized/DeFiChain-Masternode-Monitor",
        "finalized/DeFiChain-Portfolio",
        "finalized/DeFiChain_TR",
        "finalized/DeFiChain_Advanced_Tutorial",
        "finalized/DeFiChain_Basics_Tutorial",
        "finalized/DeFiChain_Intermediate_Tutorial",
        "finalized/DeFiChain_Tutorials",
        "finalized/DeFiChain_ecosystem",
        "finalized/DeFi_App_löschen",
        "finalized/Debug.log",
        "finalized/Delete_.defi",
        "finalized/Delete_DeFi_App",
        "finalized/Dual_setup_App_and_Node",
        "finalized/FAQ",
        "finalized/Fullnode",
        "finalized/Fundamentals",
        "finalized/How_to_rescue_stuck_DFI",
        "finalized/Impermanent_Loss",
        "finalized/Import_BTC_private_key_to_Electrum",
        "finalized/Improvement_Proposals",
        "finalized/Jellyfish_tutorial",
        "finalized/Kritik",
        "finalized/LM_TR",
        "finalized/Lightwallet_change_Ocean",
        "finalized/Liquidity_Mining",
        "finalized/Liquidity_Mining_versus_Staking",
        "finalized/Liquidity_Token",
        "finalized/Masternode",
        "finalized/Masternode-Tracking-Google-Sheet",
        "finalized/Masternode_Uebersicht",
        "finalized/Masternode_installation_extended",
        "finalized/Masternode_installation_extended_de",
        "finalized/Masternode_service",
        "finalized/Original_White_Paper",
        "finalized/Password_Setting",
        "finalized/Private_key_read_out_of_the_app",
        "finalized/Privatkey_auslesen",
        "finalized/Punks",
        "finalized/Restore_Wallet",
        "finalized/Saiivelive",
        "finalized/Send_all_coins",
        "finalized/Sharing_is_caring_-_DeFiChain_Wiki_Updates",
        "finalized/Show_hidden_folders",
        "finalized/Staking",
        "finalized/Steuern_Schweiz",
        "finalized/Suggestion_for_using_the_DeFi_app",
        "finalized/Sync_stops",
        "finalized/Target_multiplier",
        "finalized/Tradable_dAssets_on_DeFiChain",
        "finalized/Unable_to_start_blockchain",
        "finalized/Updated_White_Paper",
        "finalized/V2.3.1",
        "finalized/V2.3.2",
        "finalized/Versteckte_Ordner_anzeigen",
        "finalized/Vorschlag_zur_Verwendung_der_DeFi_App",
      ],
    },
  ],
};

module.exports = sidebars;
