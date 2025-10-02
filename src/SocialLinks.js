import { FaGithub, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const iconClass = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: "50%",
    width: "2.25rem",
    height: "2.25rem",
    margin: "0 0.5rem",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    color: "#000",
    fontSize: "1.5rem",
    textDecoration: "none",
    transition: "transform 0.2s ease-in-out",
}

function GithubIcon() {
    return <a
        href={"https://github.com/eldritchtools"}
        target="_blank"
        rel="noopener noreferrer"
        style={iconClass}
        title="GitHub"
    >
        <FaGithub />
    </a>
}

function YoutubeIcon() {
    return <a
        href="https://www.youtube.com/@EldritchPlays"
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...iconClass, color: "red" }}
        title="YouTube"
    >
        <FaYoutube />
    </a>
}

function XIcon() {
    return <a
        href="https://x.com/EldritchTools"
        target="_blank"
        rel="noopener noreferrer"
        style={iconClass}
        title="Twitter / X"
    >
        <FaXTwitter />
    </a>
}

function KoFiButton() {
    return <a
        href="https://ko-fi.com/J3J31IBV7N"
        target="_blank"
        rel="noreferrer"
        style={{ display: "inline-block" }}
    >
        <img height='36' style={{ border: '0px', height: "36px" }} src='https://storage.ko-fi.com/cdn/kofi6.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' />
    </a>;
}

export default function SocialLinks() {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <GithubIcon />
            <YoutubeIcon />
            <XIcon />
            <KoFiButton />
        </div>
    );
}
