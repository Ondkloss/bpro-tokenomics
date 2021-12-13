
import React from 'react'
import { Github, Discord } from 'react-bootstrap-icons'

const github = "https://github.com/Ondkloss/bpro-tokenomics"
const discord = "https://discord.gg/bJ4guuw"

const links = () => <div>
    <a href={github}><Github size={32} className="mx-2" /></a>
    <a href={discord}><Discord size={32} className="mx-2" /></a>
</div>

export default links
