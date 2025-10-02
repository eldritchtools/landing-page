import './App.css';

import SocialLinks from "./SocialLinks";
import Card from "./Card";
import tools from "./tools.json";
import { Tooltip } from "react-tooltip";
import styles from "./components.module.css";

function App() {
    return (
        <div className="App">
            <div style={{ padding: "3.5rem", paddingBottom: "5rem" }}>
                <main style={{ display: "flex", flexDirection: "column", gap: "32px", alignItems: "center" }}>
                    <img style={{ borderRadius: "50%", width: "128px", height: "128px" }} src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo"/>

                    <div>A collection of free web tools for various games.</div>

                    <div className={styles.cardGrid}>
                        {tools.main.map((tool, index) => <Card key={index} title={tool.title} description={tool.description} longDescription={tool.longDescription} href={tool.href} />)}
                    </div>

                    <details style={{ marginTop: "3rem" }}>
                        <summary style={{ textAlign: "center", cursor: "pointer", fontSize: "1.125rem", fontWeight: 600 }}>
                            Experimental Tools
                        </summary>
                        Tools that are mostly functional but may not be complete and are not being actively maintained. They made be picked up again or completely remade sometime in the future.
                        <div className={styles.cardGrid}>
                            {tools.experimental.map((tool, index) => <Card key={index} title={tool.title} description={tool.description} longDescription={tool.longDescription} href={tool.href} experimental={true} />)}
                        </div>
                    </details>

                    <div style={{ display: "flex", flexDirection: "column", fontSize: "0.875rem", alignItems: "center", gap: "1rem" }}>
                        <span>Hi! I&apos;m Eld. I make free, accessible web tools for games. I also stream no-commentary gameplay of whatever I&apos;m playing from time to time.</span>
                        <span>If you’ve found my tools useful and would like to support me, consider checking out my ko-fi or other socials.</span>
                        <SocialLinks />
                    </div>

                    <Tooltip
                        id={"cardTooltip"}
                        style={{ textAlign: "start", outline: "1px #eee solid", whiteSpace: "pre-wrap", maxWidth: "42rem", backgroundColor: "black", borderRadius: "0.5rem", zIndex: 9999 }}
                    />
                </main>
            </div>
        </div>
    );
}

export default App;
