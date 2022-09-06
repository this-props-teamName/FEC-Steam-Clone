import shareStyles from "../styles/EmbedRow.module.css"
import React, { useState } from "react"


const EmbedRow = () => {
    const [shareBox, setShareBox] = useState(false);
    const [showEmbed, setEmbedBox] = useState(false);
    const [showReport, setReportBox] = useState(false);


    return (
        <div className = {shareStyles.box}>
            <div>
            <a className = {shareStyles.sharedBtn}>
                <span 
                onClick={() => setShareBox(true)}
                className = {` ${shareStyles.btn_medium} ${shareStyles.span}`}> Share
                </span>
            </a>
            <a className = {shareStyles.sharedBtn}>
                <span
                onClick={() => setEmbedBox(true)}
                className = {` ${shareStyles.btn_medium} ${shareStyles.span}`}>Embed
                </span>
            </a>
            <a className = {shareStyles.sharedBtn2}>
                <span className = {` ${shareStyles.btn_medium} ${shareStyles.span}`}>
                    <i className = {shareStyles.icol16}></i>
                    {/* "&nbsp;" */}
                </span>
            </a>
            </div>

{/* {modal for share button} */}
            {shareBox ? (
                        <div className = {shareStyles.newModal}>
                        <div className = {shareStyles.top_bar}></div>
                        <div>
                            <div className = {shareStyles.header}>
                                <div 
                                onClick={() => setShareBox(false)}
                                className = {shareStyles.close}></div>
                                <div className = {shareStyles.title}>Share</div>
                            </div>
                        </div>
                        <div className = {shareStyles.content_border}>
                            <div className = {shareStyles.content}>
                                <div> 
                                    <div className ={shareStyles.shareModal}>
                                        <div>
                                            <a href = "https://store.steampowered.com/share/facebook/app/990080" className = {shareStyles.share}>
                                                <img src = "https://store.akamai.steamstatic.com/public/images/social/facebook_large.png" className = {shareStyles.share_img}/>
                                            </a>
                                            <a href = "https://store.steampowered.com/share/twitter/app/990080" className = {shareStyles.share}>
                                                <img src = "https://store.akamai.steamstatic.com/public/images/social/twitter_large.png" className = {shareStyles.share_img}/>
                                            </a>
                                            <a href = "https://store.steampowered.com/share/reddit/app/990080" className = {shareStyles.share}>
                                                <img src = "https://store.akamai.steamstatic.com/public/images/social/reddit_large.png" className = {shareStyles.share_img}/>
                                            </a>
                                            <div className= {shareStyles.share_dialog}>
                                                <label>Link to the game's store page</label>
                                                <textarea className= {shareStyles.share_dialog_value}>https://store.steampowered.com/app/990080/Hogwarts_Legacy/</textarea>
                                            </div>
                                            <div className= {shareStyles.share_dialog_results}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className= {shareStyles.newmodal_buttons}>
                                    <div 
                                    onClick={() => setShareBox(false)}
                                    className= {shareStyles.btn_grey_steamui}
                                    >
                                        <span className= {shareStyles.btn_grey_steamui_span}>OK</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            ) : null}

            {showEmbed ? (
                <div className = {shareStyles.embedModal}>
                    <div className = {shareStyles.top_bar}></div>
                    <div>
                        <div className ={shareStyles.header}>
                        <div 
                            onClick={() => setEmbedBox(false)}
                            className = {shareStyles.close}></div>
                            <div className = {shareStyles.title}>Create Widget to Embed</div>
                        </div>
                    </div>
                <div className = {shareStyles.content_border}>
                    <div className = {shareStyles.content}>
                        <div className = {shareStyles.embed_modal}>
                            <div className = {shareStyles.widget_create}>
                                <p className = {shareStyles.paragraph1}> You can use this widget-maker to generate a bit of HTML that can be embedded in your website to easily allow customers to purchase this game on Steam. </p>
                                <p className = {shareStyles.paragraph2}> There is more than one way to buy this game. Please select a specific package to create a widget for: </p>
                                <div className = {shareStyles.w_options}>
                                    <div className = {shareStyles.w_option}>
                                        <input type= "radio"/>
                                        <label> Hogwarts Legacy </label>
                                    </div>
                                    <div className = {shareStyles.w_option}>
                                        <input type= "radio"/>
                                        <label> Hogwarts Legacy Deluxe Edition </label>
                                    </div>
                                </div>
                                <p className = {shareStyles.paragraph2}> Enter up to 375 characters to add a description to your widget: </p>
                                <div className = {shareStyles.app_embed_dialog_description}>
                                    <textarea className = {shareStyles.w_text} placeholder ="Hogwarts Legacy is an immersive, open-world action RPG. Now you can take control of the action and be at the center of your own adventure in the wizarding world."></textarea>
                                </div>
                                <div className = {shareStyles.btn_container}>
                                    <a 
                                    onClick={() => setEmbedBox(false)}
                                    className = {shareStyles.btn_blue}>
                                        <span className = {shareStyles.btn_medium}>Create widget</span>
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
        
    )
}



export default EmbedRow