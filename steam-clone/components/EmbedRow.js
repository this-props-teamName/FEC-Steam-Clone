import shareStyles from "../styles/EmbedRow.module.css"
import React, { useState } from "react"


const EmbedRow = () => {
    const [shareBox, setShareBox] = useState(false);
    const [showEmbed, setEmbedBox] = useState(false);
    const [showBase, setBaseBox] = useState(false)
    const [showDeluxe, setDeluxeBox] = useState(false)
    const [showReport, setReportBox] = useState(false);
    const [selectedRadioBtn, setSelectedRadioBtn] = useState('radio1');

    const isRadioSelected = (value) => selectedRadioBtn === value;
    const handleRadioClick = (event) => setSelectedRadioBtn(event.target.value);


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
                <span 
                className = {` ${shareStyles.btn_medium} ${shareStyles.span}`}
                onClick={() => setReportBox(true)}
                >
                    <i className = {shareStyles.icol16}></i>
                    {/* "&nbsp;" */}
                </span>
            </a>
            </div>

{/* {Modal for share button} */}
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
                                                <label for= "linkShareValue" hidden>Link to the game's store page</label>
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

{/* Modal for the Embed Btn*/}
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
                                        <input 
                                        type= "radio"
                                        value= 'radio1'
                                        checked= {isRadioSelected('radio1')}
                                        onChange= {handleRadioClick}                                      
                                        />
                                        <label> Hogwarts Legacy </label>
                                    </div>
                                    <div className = {shareStyles.w_option}>
                                        <input 
                                        type= "radio"
                                        value= 'radio2'
                                        checked= {isRadioSelected('radio2')}
                                        onChange= {handleRadioClick}  
                                        />
                                        <label> Hogwarts Legacy Deluxe Edition </label>
                                    </div>
                                </div>
                                <p className = {shareStyles.paragraph2}> Enter up to 375 characters to add a description to your widget: </p>
                                <div className = {shareStyles.app_embed_dialog_description}>
                                    <textarea className = {shareStyles.w_text} placeholder ="Hogwarts Legacy is an immersive, open-world action RPG. Now you can take control of the action and be at the center of your own adventure in the wizarding world."></textarea>
                                </div>
                                <div className = {shareStyles.btn_container}>
                                    <a 
                                    onClick= 
                                    {() => {
                                        setBaseBox(true);
                                        console.log('click')
                                    }}
                                    
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

{/* Modal for the Create Widget*/}
            {showBase ? (
                <div className = {shareStyles.createModal}>
                    <div className = {shareStyles.top_bar}></div>
                </div>
            ): null}

            {/* Report This Prodcut */}
            {showReport ? (
                <div className= {shareStyles.reportModal}>
                     <div className = {shareStyles.top_bar}></div>
                        <div>
                            <div className ={shareStyles.header}>
                                <div 
                                    onClick={() => setReportBox(false)}
                                    className = {shareStyles.close}>
                                </div>
                                <div className = {shareStyles.title}>Report this Product</div>
                            </div>
                                <div className = {shareStyles.content_border}>
                                    <div className = {shareStyles.content}>
                                        <div>
                                            <div className= {shareStyles.app_report_dialog}>

                                                <div className= {shareStyles.app_report_dialog_intro}> Please choose a reason why you are reporting this product.
                                                    <div className= {shareStyles.app_report_dialog_option}>
                                                        <div className= {shareStyles.app_report_dialog_option_input}>
                                                            <input
                                                                type= "radio"
                                                                name= "report_type"
                                                                value="2"
                                                                id= "report_type_2"
                                                            ></input>
                                                            <div className= {shareStyles.app_report_dialog_option_text}>
                                                                <label for="report_type_2">
                                                                    Harmful - 
                                                                    <span className= {shareStyles.sub}>This software modifies a customer's computer in unexpected or harmful ways (e.g. is malware or a virus)</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                     <div className= {shareStyles.app_report_dialog_option}>
                                                        <div className= {shareStyles.app_report_dialog_option_input}>
                                                            <input
                                                                type= "radio"
                                                                name= "report_type"
                                                                value="6"
                                                                id= "report_type_6"
                                                            ></input>
                                                            <div className= {shareStyles.app_report_dialog_option_text}>
                                                                <label for="report_type_6">
                                                                    Defamatory - 
                                                                    <span className= {shareStyles.sub}>Contains Libelous or defamatory statements</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className= {shareStyles.app_report_dialog_option}>
                                                        <div className= {shareStyles.app_report_dialog_option_input}>
                                                            <input
                                                                type= "radio"
                                                                name= "report_type"
                                                                value="1"
                                                                id= "report_type_1"
                                                            ></input>
                                                            <div className= {shareStyles.app_report_dialog_option_text}>
                                                                <label for="report_type_1">
                                                                    Fraud -  
                                                                    <span className= {shareStyles.sub}>This software fraudulently attempts to gather sensitive information, such as your Steam credentials or financial data (e.g. credit card information).</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className= {shareStyles.app_report_dialog_option}>
                                                        <div className= {shareStyles.app_report_dialog_option_input}>
                                                            <input
                                                                type= "radio"
                                                                name= "report_type"
                                                                value="11"
                                                                id= "report_type_11"
                                                            ></input>
                                                            <div className= {shareStyles.app_report_dialog_option_text}>
                                                                <label for="report_type_11">
                                                                    Legal Violation - 
                                                                    <span className= {shareStyles.sub}>Contains content that violates the laws in your jurisdiction.</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className= {shareStyles.app_report_dialog_option}>
                                                        <div className= {shareStyles.app_report_dialog_option_input}>
                                                            <input
                                                                type= "radio"
                                                                name= "report_type"
                                                                value="5"
                                                                id= "report_type_5"
                                                            ></input>
                                                            <div className= {shareStyles.app_report_dialog_option_text}>
                                                                <label for="report_type_5">
                                                                    Adult Content - 
                                                                    <span className= {shareStyles.sub}>Contains adult content that isn't appropriately labeled and age-gated</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className= {shareStyles.app_report_dialog_option}>
                                                        <div className= {shareStyles.app_report_dialog_option_input}>
                                                            <input
                                                                type= "radio"
                                                                name= "report_type"
                                                                value="8"
                                                                id= "report_type_8"
                                                            ></input>
                                                            <div className= {shareStyles.app_report_dialog_option_text}>
                                                                <label for="report_type_8">
                                                                    "Child Exploitation - "
                                                                    <span className= {shareStyles.sub}>Contains content that exploits children in any way</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className= {shareStyles.app_report_dialog_option}>
                                                        <div className= {shareStyles.app_report_dialog_option_input}>
                                                            <input
                                                                type= "radio"
                                                                name= "report_type"
                                                                value="13"
                                                                id= "report_type_13"
                                                            ></input>
                                                            <div className= {shareStyles.app_report_dialog_option_text}>
                                                                <label for="report_type_13">
                                                                    Broken -  
                                                                    <span className= {shareStyles.sub}>Does not download, launch, or run correctly, even on a machine that meets the minimum system requirements.</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className= {shareStyles.app_report_dialog_intro}>
                                                        You may enter additional information that you feel is relevant here:
                                                    </div>
                                                    <textarea className= {shareStyles.app_report_dialog_reason}></textarea>
                                                    <div classNaem= {shareStyles.app_report_dialog_dmca}>
                                                    If you'd like to report Copyright Infringement and are the copyright holder, please proceed to our DMCA compliant notice of copyright infringement form 
                                                        <a href="https://steamcommunity.com/dmca/create/">here</a>
                                                        .
                                                    </div>
                                                </div>
                                            </div>
                                            <div className= {shareStyles.btn_container}>
                                                <div className= {shareStyles.green_btn}>
                                                    <span className= {shareStyles.green_btn_medium}>Report</span>
                                                </div>
                                                <div className= {shareStyles.gray_btn}>
                                                    <span className= {shareStyles.gray_btn_medium}>
                                                        Cancel
                                                    </span>
                                                </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                ): null}
            </div>
    )
}

export default EmbedRow