import shareStyles from "../styles/Shared.module.css"
import shareBox from './shareBox'
import React, { useState } from "react"

const remarkBox = () => {
    const [showShare, setShareBox] = useState(false);
    const [showEmbed, setEmbedBox] = useState(false);
    const [showReport, setReportBox] = useState(false);

    return (
        <div className = {shareStyles.box}>
            <a className = {shareStyles.sharedBtn}>
                <span className = {` ${shareStyles.btn_medium} ${shareStyles.span}`}>Share</span>
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
    )
}



export default remarkBox