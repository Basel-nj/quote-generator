import { Fragment } from "react";
import {
   FacebookShareButton,
   FacebookIcon,
   WhatsappShareButton,
   WhatsappIcon,
   LinkedinShareButton,
   LinkedinIcon,
} from "react-share";

function ShareButtons({ quote, author }) {
   let basicURL = "http://localhost:3000";
   let hashtag = "#" + author.replaceAll(" ", "_");

   return (
      <div className="btn">
         <FacebookShareButton url={basicURL} quote={quote} hashtag={hashtag}>
            <FacebookIcon size={32} round />
         </FacebookShareButton>
         <WhatsappShareButton url={basicURL} title={quote} separator=":: ">
            <WhatsappIcon size={32} round />
         </WhatsappShareButton>
         <LinkedinShareButton url={basicURL} title={quote}>
            <LinkedinIcon size={32} round />
         </LinkedinShareButton>
      </div>
   );
}

export default ShareButtons;
