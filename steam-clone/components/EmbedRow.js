import shareStyles from "../styles/Shared.module.css"
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
                <span className = {` ${shareStyles.btn_medium} ${shareStyles.span}`}>Embed</span>
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
                                <div className = {shareStyles.close}></div>
                                <div className = {shareStyles.title}></div>
                            </div>
                        </div>
                        <div className = {shareStyles.content_border}>
                            <div className = {shareStyles.conent}>
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
                                    <div className= {shareStyles.btn_grey_steamui}>
                                        <span>OK</span>
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