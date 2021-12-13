
import React from 'react'
import { ListGroup } from 'react-bootstrap';

const bproGenesis = "https://forum.bprotocol.org/t/b-protocol-governance-token/48"
const secondLiquidityMining = "https://forum.bprotocol.org/t/bip-4-use-umas-kpi-options-program-for-users-liquidity-mining/167"

const sources = () => <ListGroup className="mx-5">
    <ListGroup.Item>
        <a href={bproGenesis}>B.Protocol Governance Token</a>
    </ListGroup.Item>
    <ListGroup.Item>
        <a href={secondLiquidityMining}>BIP #4 - Use UMA's KPI Options Program for users' Liquidity Mining</a>
    </ListGroup.Item>
</ListGroup>

export default sources