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
      type: "category",
      label: "Fundamentals",
      link: {
        type: "generated-index",
        description: "Learn about the fundamental concepts of DeFiChain.",
      },
      items: [
        "Ecosystem",
        "DeFiChain",
        "Original_White_Paper",
        "Updated_White_Paper",
        "Pink_Paper",
        "Liquidity_Mining",
        "Vaults_Loans",
        "Collateral_Ratio",
        "Block_Rewards",
        "Liquidity_Mining_versus_Staking",
        "Impermanent_Loss",
        "FAQ",
        "Decentralized_Assets",
        "DEX",
        "DEX_Fee_Structure",
        "Liquidity_Token",
        "Staking",
        "Target_multiplier",
        "Tradable_dAssets_on_DeFiChain",
        "Lightwallet_change_Ocean",
        "CustomTransaction",
        "Future_Swap",
      ],
    },
    {
      type: "category",
      label: "Guides",
      link: {
        type: "generated-index",
        description: "Guides which help you understand concepts better.",
      },
      items: [
        "Beginners_Guide",
        "DeFiChain_Advanced_Tutorial",
        "DeFiChain_Basics_Tutorial",
        "DeFiChain_Intermediate_Tutorial",
        "Investing_Trading",
        "Cashflow_Options",
        "Jellyfish_tutorial",
        "Lightwallet",
        "Testnet",
      ],
    },
    {
      type: "category",
      label: "DeFi Wallet",
      link: {
        type: "generated-index",
        description: "Everything about the DeFiChain desktop wallet.",
      },
      items: [
        {
          type: "category",
          label: "Installation",
          link: {
            type: "generated-index",
            description: "Installation guides.",
          },
          items: [
            "App_on_Windows_Cloud_Server",
            "App_on_Raspberry-Pi",
            "Saiivelive",
          ],
        },
        {
          type: "category",
          label: "Security",
          link: {
            type: "generated-index",
            description: "Important topics about security.",
          },
          items: [
            "Wallet_Encryption",
            "Backup_Wallet",
            "Restore_Wallet",
            "Password_Setting",
          ],
        },
        {
          type: "category",
          label: "Usage",
          link: {
            type: "generated-index",
            description: "How to use the DeFiChain desktop wallet.",
          },
          items: [
            "Create_address",
            "Listaccounts",
            "Suggestion_for_using_the_DeFi_app",
            "Masternode",
            "Payout_DFI_in_Euro",
            "Send_all_coins",
          ],
        },
        {
          type: "category",
          label: "Advanced Usage",
          link: {
            type: "generated-index",
            description: "Advanced usage of the DeFiChain desktop wallet.",
          },
          items: [
            "API",
            "CLI_Commands",
            "Bitcoin_Anchoring",
            "Blockchain_folder",
            "Dual_setup_App_and_Node",
            "Fullnode",
            "Criticism",
            "Masternode_installation_extended",
            "Read_out_private_key",
            "Import_BTC_private_key_to_Electrum",
            "Atomic_Swap",
            "Update_Masternode",
          ],
        },
        {
          type: "category",
          label: "Problems",
          link: {
            type: "generated-index",
            description: "Common and known problems and how to solve them.",
          },
          items: [
            "Debug.log",
            "DeFi_Wallet_error_messages",
            "DeFi_Wallet_errors",
            "Show_hidden_folders",
            "Unable_to_start_blockchain",
            "App_Sync_Boost",
            "corrupt_salvage_failed",
            "Delete_DeFi_App",
            "Kill_defid_Daemon",
            "Sync_stops",
            "How_to_rescue_stuck_DFI",
            "Delete_dot_defi",
            "Collected_questions_for_the_developers",
          ],
        },
        {
          type: "category",
          label: "Version Specific Hints",
          link: {
            type: "generated-index",
            description: "Information for specific app versions.",
          },
          items: ["V2.3.1", "V2.3.2"],
        },
      ],
    },
    {
      type: "category",
      label: "Community",
      link: {
        type: "generated-index",
        description: "Voting, projects and more.",
      },
      items: [
        "Proposals",
        "Taxes",
        "Services",
        "DeFiChain_ecosystem",
        "DeFiChain-Masternode-Monitor",
        "DeFiChain-Portfolio",
        "Punks",
        "Masternode-Tracking-Google-Sheet",
        "Community_Calendar",
        "Masternode_service",
        "LOCK_Staking",
        {
          type: "category",
          label: "DFX",
          link: {
            type: "generated-index",
            description: "Information about DFX and how to use it.",
          },
          items: [
            "DFI_Staking_at_DFX",
            "DFX_FAQ",
            "DFX_manual_registration",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "External Documentation",
      link: {
        type: "generated-index",
        description: "Documentation resources on other websites .",
      },
      items: [
        {
          type: "link",
          label: "Jellyfish Documentation",
          href: "https://jellyfish.defichain.com/",
        },
        {
          type: "link",
          label: "Chain Documentation",
          href: "https://github.com/DeFiCh/ain/wiki ",
        },
      ],
    },
    {
      type: "category",
      label: "❤ Contribute",
      link: {
        type: "generated-index",
        description: "Learn how you can help improve the wiki.",
      },
      items: ["Sharing_is_caring", "Contribute"],
    },
  ],
};

module.exports = sidebars;
