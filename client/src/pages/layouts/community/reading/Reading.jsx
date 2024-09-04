import React, { useState } from "react";
import "./reading.css";
import { Link } from "react-router-dom";
import {
  MdOutlineKeyboardBackspace,
  MdOutlineQuickreply,MdOutlineUnfoldMoreDouble,
  PiHandsClappingLight,
  FaRegEye,
  FaRegComments,
  BsShare,
} from "../../../../middlewares/icons";
import videoFrame from "../../../../assets/videos/notes__laptop.mp4";

const Reading = () => {
  const [reportOption, setReportOption] = useState("");

  const isReportOption = (value) => value === reportOption;
  const onChangeReportOption = ({ target: { value } }) => {
    setReportOption(value);
  };
  return (
    <div className="reading">
      <div className="inner">
        <Link to={"/community/"} className="link">
          <MdOutlineKeyboardBackspace className="icon" />
          <span>Get back</span>
        </Link>
        <div className="actions">
          <span>Status : Published on Mon 29 Apr 2024 at 10:04 PM</span>
          <button className="button">Unpublished</button>
        </div>
        <div className="r-head">
          <h3 className="title t-2">
            My Creative Collection of 2021 Design. More collections are coming
            soon.
          </h3>
          <div className="author">
            <img src={process.env.PUBLIC_URL + "/user.png"} alt="img-banner" />
            <h3 className="title t-2">Community Admin.</h3>
            <span>4 min read.</span>
            <span>12 Hours ago.</span>
          </div>
          <div className="down">
            <div className="side">
              <div className="tag">
                <PiHandsClappingLight className="icon" />
                <span>125</span>
              </div>
              <div className="tag">
                <FaRegEye className="icon" />
                <span>125</span>
              </div>
              <div className="tag">
                <FaRegComments className="icon" />
                <span>125</span>
              </div>
            </div>
            <div className="side">
              <div className="tag">
                <BsShare className="icon" />
                <span>125</span>
              </div>
            </div>
          </div>
        </div>
        <iframe src={videoFrame} title="Post title" frameBorder="0" allowFullScreen className="img"></iframe>
        <div className="r-details"></div>
      </div>
      {/* <div className="outer">
        <div className="container">
          <div className="oc-head">
            <h3 className="title t-2">Comments (125)</h3>
            <span>&times;</span>
          </div>
          <form>
            <div className="author">
              <img
                src={process.env.PUBLIC_URL + "/user.png"}
                alt="img-banner"
              />
              <h3 className="title t-2">Community Admin.</h3>
            </div>
            <textarea
              cols={10}
              rows={5}
              placeholder="Type your comment..."
            ></textarea>
            <button className="button">Comment</button>
          </form>
          <div className="oc-body">
            <div className="oc-item">
              <div className="author">
                <img
                  src={process.env.PUBLIC_URL + "/user.png"}
                  alt="img-banner"
                />
                <h3 className="title t-2">Community Admin.</h3>
                <span>Author</span>
              </div>
              <span>12 Hours ago.</span>
              <p className="title t-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis consequatur odio ab culpa, assumenda id earum, ex
                quae eos illum esse maiores nostrum numquam. Repudiandae dolorem
                exercitationem ullam natus soluta.
              </p>
              <div className="down">
                <div className="side">
                  <div className="tag">
                    <PiHandsClappingLight className="icon" />
                    <span>125</span>
                  </div>
                  <div className="tag">
                    <FaRegComments className="icon" />
                    <span>125 replies</span>
                  </div>
                </div>
                <div className="side">
                  <div className="tag">
                    <MdOutlineQuickreply className="icon" />
                    <span>reply</span>
                  </div>
                  <div className="tag">
                    <MdOutlineUnfoldMoreDouble className="icon" />
                    <span>report this response</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="oc-item">
              <div className="author">
                <img
                  src={process.env.PUBLIC_URL + "/user.png"}
                  alt="img-banner"
                />
                <h3 className="title t-2">Community Admin.</h3>
              </div>
              <span>12 Hours ago.</span>
              <p className="title t-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis consequatur odio ab culpa, assumenda id earum, ex
                quae eos illum esse maiores nostrum numquam. Repudiandae dolorem
                exercitationem ullam natus soluta.
              </p>
              <div className="down">
                <div className="side">
                  <div className="tag">
                    <PiHandsClappingLight className="icon" />
                    <span>125</span>
                  </div>
                  <div className="tag">
                    <FaRegComments className="icon" />
                    <span>125 replies</span>
                  </div>
                </div>
                <div className="side">
                  <div className="tag">
                    <MdOutlineQuickreply className="icon" />
                    <span>reply</span>
                  </div>
                  <div className="tag">
                    <MdOutlineUnfoldMoreDouble className="icon" />
                    <span>report this response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="further">
        <div className="container">
          <h3 className="title t-2">Report Response</h3>
          <div className="tile">
            <div className="radio-tile">
              <input
                type="radio"
                value={"harassment"}
                checked={isReportOption("harassment")}
                onChange={onChangeReportOption}
              />
              <label>Harassment</label>
            </div>
            <div className="radio-tile">
              <input
                type="radio"
                value={"rules violation"}
                checked={isReportOption("rules violation")}
                onChange={onChangeReportOption}
              />
              <label>Rules Violation</label>
            </div>
            <div className="radio-tile">
              <input
                type="radio"
                value={"spam"}
                checked={isReportOption("spam")}
                onChange={onChangeReportOption}
              />
              <label>Spam</label>
            </div>
          </div>
          <div className="check-tile">
            <input type="checkbox" />
            <label>Also block the author of this response</label>
          </div>
          <div className="buttons">
            <button className="button">Cancel</button>
            <button className="button">Report</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Reading;
