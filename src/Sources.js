
import React from 'react'
import { ListGroup } from 'react-bootstrap';

const bproGenesis = "https://forum.bprotocol.org/t/b-protocol-governance-token/48"
const v2NativeIntegrations = "https://forum.bprotocol.org/t/bip-3-allocating-bpro-to-reward-v2-native-integrations/166"
const secondLiquidityMining = "https://forum.bprotocol.org/t/bip-4-use-umas-kpi-options-program-for-users-liquidity-mining/167"
const growthSquad = "https://forum.bprotocol.org/t/bip-5-growth-squad-fund/168"
const immunefiBugBounty = "https://forum.bprotocol.org/t/bip-6-backing-b-protocol-immunefi-bug-bounty-program/169"
const hatsFinance = "https://forum.bprotocol.org/t/bip-7-b-protocol-white-hat-incentive-vault-funding-proposal/181"
const smartContracts = "https://docs.bprotocol.org/technical-documentation/smart-contracts"
const ventureCapital = "https://medium.com/b-protocol/b-protocol-secures-2-2m-5e275ca0d979"
const nexusMutualMining = "https://forum.bprotocol.org/t/bip-11-nexus-mutual-cover-for-b-protocol-smart-contracts/227"

const sources = () => <ListGroup className="mx-5">
    <ListGroup.Item>
        <a href={bproGenesis}>B.Protocol Governance Token</a>
    </ListGroup.Item>
    <ListGroup.Item>
        <a href={v2NativeIntegrations}>BIP #3 - Allocating BPRO to reward v2 native integrations</a>
    </ListGroup.Item>
    <ListGroup.Item>
        <a href={secondLiquidityMining}>BIP #4 - Use UMA's KPI Options Program for users' Liquidity Mining</a>
    </ListGroup.Item>
    <ListGroup.Item>
        <a href={growthSquad}>BIP #5 - Growth Squad Fund</a>
    </ListGroup.Item>
    <ListGroup.Item>
        <a href={immunefiBugBounty}>BIP #6 - Backing B.Protocol-Immunefi Bug Bounty Program</a>
    </ListGroup.Item>
    <ListGroup.Item>
        <a href={hatsFinance}>BIP #7 - B.protocol white hat incentive vault funding proposal</a>
    </ListGroup.Item>
    <ListGroup.Item>
        <a href={nexusMutualMining}>BIP #11 - Nexus Mutual Cover for B.Protocol smart contracts</a>
    </ListGroup.Item>
    <ListGroup.Item>
        <a href={ventureCapital}>B.Protocol Secures $2.2M in a Seed Round, Led by 1kx, To Make DeFi Liquidations Safer and More Efficient</a>
    </ListGroup.Item>
    <ListGroup.Item>
        <a href={smartContracts}>B.Protocol Smart Contracts</a>
    </ListGroup.Item>
</ListGroup>

export default sources