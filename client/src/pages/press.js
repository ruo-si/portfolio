import React from "react";
import arrow from "../assets/link_out.svg";
import "./press.css";
import test from "../assets/V_KR_SEO_1.jpg";
import test2 from "../assets/V_KR_SEO_2.jpg";
import test3 from "../assets/V_ST_MET_1.jpg";
function Press() {
  return (
    <div className="index-wrap">
      <div className="press-head">Press</div>
      <div>
        <div class="title-wrap">
          <div className="year">2020</div>
          <a
            target="_blank"
            href="https://www.designboom.com/art/cai-guo-qiang-saraab-at-mathaf-arab-museum-of-modern-art-qatar/"
          >
            <div className="press-title">
              Why Tiffany & Co. is bringing its Blue Box Cafe to South Coast
              Plaza
              <img alt="linkout" src={arrow} class="linkout" />
            </div>
          </a>
          <img src={test} className="press-img" />
        </div>

        <div class="title-wrap">
          <div className="year">2020</div>
          <a
            target="_blank"
            href="http://www.designcurial.com/news/frank-gehry-4271271/"
          >
            <div className="press-title">
              SHoP Architects’ 9 DeKalb Avenue Makes Quick Vertical Progress In
              Downtown Brooklyn
              <img alt="linkout" src={arrow} class="linkout" />
            </div>
          </a>
          <img src={test2} className="press-img" />
        </div>

        <div class="title-wrap">
          <div className="year">2019</div>
          <a target="_blank" href="">
            <div className="press-title">
              Is this a photo—or a rendering
              <img alt="linkout" src={arrow} class="linkout" />
            </div>
          </a>
          <img src={test3} className="press-img" />
        </div>

        <div class="title-wrap">
          <div className="year">2018</div>
          <a target="_blank" href="">
            <div className="press-title">
              WeWork at Jongno Tower in Seoul
              <img alt="linkout" src={arrow} class="linkout" />
            </div>
          </a>
          <img src={test} className="press-img" />
        </div>

        <div class="title-wrap">
          <div className="year">2016</div>
          <a target="_blank" href="">
            <div className="press-title">
              Bringing History to Life
              <img alt="linkout" src={arrow} class="linkout" />
            </div>
          </a>
          <img src={test2} className="press-img" />
        </div>

        <div class="title-wrap">
          <div className="year">2016</div>
          <a target="_blank" href="">
            <div className="press-title">
              SHoP Architects will create a huge 3D printed gateway for this
              year's Design Miami festival
              <img alt="linkout" src={arrow} class="linkout" />
            </div>
          </a>
          <img src={test3} className="press-img" />
        </div>

        <div class="title-wrap">
          <div className="year">2016</div>
          <a
            target="_blank"
            href="https://www.archdaily.com/789977/shop-architects-to-design-national-veterans-resource-complex-at-syracuse-university"
          >
            <div className="press-title">
              SHoP Architects to Design National Veterans Resource Complex at
              Syracuse University,
              <img alt="linkout" src={arrow} class="linkout" />
            </div>
          </a>
          <img src={test} className="press-img" />
        </div>

        <div class="title-wrap">
          <div target="_blank" className="year">
            2016
          </div>
          <a href="https://www.designboom.com/art/cai-guo-qiang-saraab-at-mathaf-arab-museum-of-modern-art-qatar/">
            <div className="press-title">
              New Renderings Released For 38 Sixth Avenue In Pacific Park
              <img alt="linkout" src={arrow} class="linkout" />
            </div>
          </a>
          <img src={test2} className="press-img" />
        </div>

        <div class="title-wrap">
          <div target="_blank" className="year">
            2015
          </div>
          <a href="https://www.designboom.com/art/cai-guo-qiang-saraab-at-mathaf-arab-museum-of-modern-art-qatar/">
            <div className="press-title">
              New National Cancer Institute,” Architect Magazine
              <img alt="linkout" src={arrow} class="linkout" />
            </div>
          </a>
          <img src={test3} className="press-img" />
        </div>

        <div class="title-wrap">
          <div target="_blank" className="year">
            2014
          </div>
          <a href="https://www.designboom.com/art/cai-guo-qiang-saraab-at-mathaf-arab-museum-of-modern-art-qatar/">
            <div className="press-title">
              Frank Gehry Interview
              <img alt="linkout" src={arrow} class="linkout" />
            </div>
          </a>
          <img src={test} className="press-img" />
        </div>

        <div class="title-wrap">
          <div target="_blank" className="year">
            2011
          </div>
          <a href="https://www.designboom.com/art/cai-guo-qiang-saraab-at-mathaf-arab-museum-of-modern-art-qatar/">
            <div className="press-title">
              Cai Guo Qiang: Saraab At Mathaf Arab Museum Of Modern Art, Qatar,
              <img alt="linkout" src={arrow} class="linkout" />
            </div>
          </a>
          <img src={test2} className="press-img" />
        </div>
      </div>
    </div>
  );
}

export default Press;
