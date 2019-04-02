import React, { Component } from 'react';
import { PhotoView } from "cake-ui"; 
import CodeStatus from "~/components/codeStatus.jsx"
import CodeLight from "~/components/codeLight.jsx"

var  codeString = `

class PhotoViewDemo extends Component {
    render() {
        return (
            <div >
                <PhotoView detailText={"<p></p><div class=\"media-wrap image-wrap\"><img src=\"http://192.168.7.146:8080/data/getData?reqCode=10002&amp;img_key=51639790E0CF4354BCD1053F107BDC1A\"/></div><p></p>"} />
            </div>
        );
    }

}

`;

class PhotoViewDemo extends CodeStatus{
    render() {
        const { isCodeCollpase } = this.state
        return (
            <div >
                <PhotoView detailText={`<p></p>
                                           <div class=\"media-wrap image-wrap\">
                                                <img src=\"https://img5.duitang.com/uploads/item/201303/09/20130309193622_XYZyt.jpeg\"/>
                                           </div>
                                        <p></p>`} />
                 {this.controlCode()}
                <CodeLight isCodeCollpase={isCodeCollpase} codeString={codeString}/>
            </div>
        );
    }

}

export default PhotoViewDemo;