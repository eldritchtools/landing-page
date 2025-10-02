import styles from "./components.module.css";

export default function Card({ title, description, longDescription, href, experimental }) {
    return (
        <a data-tooltip-id={"cardTooltip"} data-tooltip-content={longDescription} href={href} style={{width: "100%", maxWidth: "24rem", color: "inherit", textDecoration: "none"}}>
            <div className={experimental ? styles.cardExperimental : styles.cardNormal}>
                <h2 style={{fontSize: "1.25rem", fontWeight: 600, margin: 0}}>{title}</h2>
                <p style={{marginTop: "0.5rem"}}>{description}</p>
            </div>
        </a>
    );
}