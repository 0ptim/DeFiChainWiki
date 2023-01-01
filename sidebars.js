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
        "auto/Introduction",
        "auto/Ecosystem",
        "auto/Block_Rewards",
        {
          type: "category",
          label: "Staking",
          link: {
            type: "generated-index",
            description:
              "Generate yield and help secure the network by staking.",
          },
          items: ["auto/Staking", "auto/Target_multiplier"],
        },
        {
          type: "category",
          label: "Decentralized Exchange",
          link: {
            type: "generated-index",
            description:
              "The decentralized exchange to trade assets without the control of a single entity.",
          },
          items: ["auto/DEX", "auto/DEX_Fee_Structure"],
        },
        {
          type: "category",
          label: "Liquidity Mining",
          link: {
            type: "generated-index",
            description: "Get a passive income with liquidity mining.",
          },
          items: [
            "auto/Liquidity_Mining",
            "auto/Liquidity_Token",
            "auto/Liquidity_Mining_versus_Staking",
            "auto/Impermanent_Loss",
          ],
        },
        {
          type: "category",
          label: "dToken System",
          link: {
            type: "generated-index",
            description: "All about dTokens (Tokenized assets on DeFiChain).",
          },
          items: [
            "auto/Decentralized_Assets",
            "auto/Tradable_dAssets_on_DeFiChain",
            "auto/Vaults_Loans",
            "auto/Collateral_Ratio",
            "auto/Future_Swap",
          ],
        },
        {
          type: "category",
          label: "Papers",
          link: {
            type: "generated-index",
            description: "Read the technical papers about DeFiChain.",
          },
          items: [
            "auto/Original_White_Paper",
            "auto/Updated_White_Paper",
            "auto/Pink_Paper",
          ],
        },
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
        "auto/Beginners_Guide",
        "auto/DeFiChain_Advanced_Tutorial",
        "auto/DeFiChain_Basics_Tutorial",
        "auto/DeFiChain_Intermediate_Tutorial",
        "auto/Investing_Trading",
        "auto/Cashflow_Options",
        "auto/Jellyfish_tutorial",
        "auto/Lightwallet",
        "auto/Lightwallet_change_Ocean",
        "auto/Testnet",
        "auto/CustomTransaction",
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
            "auto/App_on_Windows_Cloud_Server",
            "auto/App_on_Raspberry-Pi",
            "auto/Saiivelive",
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
            "auto/Wallet_Encryption",
            "auto/Backup_Wallet",
            "auto/Restore_Wallet",
            "auto/Password_Setting",
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
            "auto/Create_address",
            "auto/Listaccounts",
            "auto/Suggestion_for_using_the_DeFi_app",
            "auto/Masternode",
            "auto/Payout_DFI_in_Euro",
            "auto/Send_all_coins",
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
            "auto/API",
            "auto/CLI_Commands",
            "auto/CLI_Vault_and_Loan",
            "auto/Bitcoin_Anchoring",
            "auto/Blockchain_folder",
            "auto/Dual_setup_App_and_Node",
            "auto/Fullnode",
            "auto/Criticism",
            "auto/Masternode_installation_extended",
            "auto/Read_out_private_key",
            "auto/Import_BTC_private_key_to_Electrum",
            "auto/Atomic_Swap",
            "auto/Update_Masternode",
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
            "auto/Debug.log",
            "auto/DeFi_Wallet_error_messages",
            "auto/DeFi_Wallet_errors",
            "auto/Show_hidden_folders",
            "auto/Unable_to_start_blockchain",
            "auto/App_Sync_Boost",
            "auto/corrupt_salvage_failed",
            "auto/Delete_DeFi_App",
            "auto/Kill_defid_Daemon",
            "auto/Sync_stops",
            "auto/How_to_rescue_stuck_DFI",
            "auto/Delete_dot_defi",
            "auto/Collected_questions_for_the_developers",
          ],
        },
        {
          type: "category",
          label: "Version Specific Hints",
          link: {
            type: "generated-index",
            description: "Information for specific app versions.",
          },
          items: ["auto/V2.3.1", "auto/V2.3.2"],
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
        "auto/Proposals",
        "auto/Taxes",
        "auto/Services",
        "auto/DeFiChain-Masternode-Monitor",
        "auto/DeFiChain-Portfolio",
        "auto/Punks",
        "auto/Masternode-Tracking-Google-Sheet",
        "auto/Community_Calendar",
        "auto/Masternode_service",
        "auto/LOCK_Staking",
        {
          type: "category",
          label: "DFX",
          link: {
            type: "generated-index",
            description: "Information about DFX and how to use it.",
          },
          items: [
            "auto/DFI_Staking_at_DFX",
            "auto/DFX_FAQ",
            "auto/DFX_manual_registration",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "External Documentation",
      link: {
        type: "generated-index",
        description: "Documentation resources on other websites.",
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
      items: ["auto/Sharing_is_caring", "auto/Contribute"],
    },
    "auto/Links",
  ],
};

module.exports = sidebars;
