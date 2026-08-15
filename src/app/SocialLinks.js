import { FaGithub, FaYoutube, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const iconStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    color: '#000',
    fontSize: '1.5rem',
    textDecoration: 'none',
    transition: 'transform 0.2s ease',
};


function GithubIcon() {
    return <a href="https://github.com/eldritchtools" target="_blank" rel="noopener noreferrer" style={iconStyle} title="GitHub" >
        <FaGithub />
    </a>;
}

async function getDiscordLink() {
    try {
        const response = await fetch("https://shared.eldritchtools.com/links.json");
        const data = await response.json();
        return data.discord;
    } catch (e) {
        console.error("Fetch failed", e);
        return "#";
    }
}

async function DiscordIcon() {
    const url = await getDiscordLink();
    return <a href={url} target="_blank" rel="noopener noreferrer" style={{ ...iconStyle, color: '#5865F2' }} title="Discord" >
        <FaDiscord />
    </a>
}

function YoutubeIcon() {
    return <a href="https://www.youtube.com/@EldritchPlays" target="_blank" rel="noopener noreferrer" style={{ ...iconStyle, color: 'red' }} title="YouTube" >
        <FaYoutube />
    </a>
}

function XIcon() {
    return <a href="https://x.com/EldritchTools" target="_blank" rel="noopener noreferrer" style={iconStyle} title="Twitter / X" >
        <FaXTwitter />
    </a>
}

function KoFiButton() {
    return <a href='https://ko-fi.com/J3J31IBV7N' target='_blank' rel='noreferrer' >
        <img height='36' style={{ border: '0px', height: "36px" }} src='https://storage.ko-fi.com/cdn/kofi6.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' />
    </a>
}

export default async function SocialLinks() {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <GithubIcon />
            <DiscordIcon />
            <YoutubeIcon />
            <XIcon />
            <KoFiButton />
        </div>
    );
}
