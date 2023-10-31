import React from 'react'

import PropTypes from 'prop-types'

const Slogan = (props) => {
  return (
    <>
      <div className="slogan-slogan">
        <div className="slogan-slogan1">
          <h2 className="slogan-text">
            <span>En Çok Talep Gören Ürünlerimizi Takip Edin</span>
          </h2>
          <span className="slogan-text2">
            <span>
              Sosyal medya hesaplarımızı takip ederek yeni ürünlerimizi keşfedin
              ve trendleri yakından takip edin.
            </span>
          </span>
          <div className="slogan-dc">
            <img
              alt={props.Rectangle_alt}
              src={props.Rectangle_src}
              className="slogan-rectangle"
            />
            <span className="slogan-text4">
              <span>
                Bir mücevher, her zaman bir hikaye anlatır ve bu hikaye, onu
                takan kişinin benzersizliğini yansıtır.
              </span>
            </span>
          </div>
        </div>
        <div className="slogan-socialimza">
          <div className="slogan-icons">
            <div className="slogan-facebookicon">
              <div className="slogan-group">
                <img
                  alt={props.Vector_alt}
                  src={props.Vector_src}
                  className="slogan-vector"
                />
                <img
                  alt={props.Ellipse1_alt}
                  src={props.Ellipse1_src}
                  className="slogan-ellipse1"
                />
              </div>
            </div>
            <img
              alt={props.instagramicon_alt}
              src={props.instagramicon_src}
              className="slogan-instagramicon"
            />
          </div>
          <span className="slogan-text6">
            <span>Sakura Gold</span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .slogan-slogan {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 587.5px;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .slogan-slogan1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .slogan-text {
            color: rgba(36, 36, 36, 1);
            height: auto;
            font-size: 38px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 48px;
            font-stretch: normal;
            text-decoration: none;
          }
          .slogan-text2 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Lora;
            font-weight: 400;
            line-height: 22.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .slogan-dc {
            gap: 25px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .slogan-rectangle {
            width: 4px;
            height: 45px;
          }
          .slogan-text4 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Lora;
            font-weight: 400;
            line-height: 22.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .slogan-socialimza {
            gap: 269px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .slogan-icons {
            gap: 10px;
            display: flex;
            align-items: flex-start;
          }
          .slogan-facebookicon {
            width: 30px;
            height: 30px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .slogan-group {
            top: 0px;
            left: 0px;
            width: 30px;
            height: 30px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .slogan-vector {
            top: 7.21539306640625px;
            left: 11.223944664001465px;
            width: 8px;
            height: 16px;
            position: absolute;
          }
          .slogan-ellipse1 {
            top: 0px;
            left: 0px;
            width: 30px;
            height: 30px;
            position: absolute;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 2px;
          }
          .slogan-instagramicon {
            width: 30px;
            height: 30px;
          }
          .slogan-text6 {
            color: rgba(36, 36, 36, 1);
            width: 78px;
            height: auto;
            font-size: 13px;
            font-style: Regular;
            text-align: right;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          @media (max-width: 767px) {
            .slogan-slogan {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .slogan-slogan {
              width: auto;
              align-self: stretch;
            }
          }
        `}
      </style>
    </>
  )
}

Slogan.defaultProps = {
  Rectangle_src: '/external/rectangle1614-3k2b-200w.png',
  instagramicon_alt: 'instagramicon1618',
  Ellipse1_alt: 'Ellipse1I161',
  Vector_src: '/external/vectori161-sl8m.svg',
  Vector_alt: 'VectorI161',
  instagramicon_src: '/external/instagramicon1618-kme.svg',
  Rectangle_alt: 'Rectangle1614',
  Ellipse1_src: '/external/ellipse1i161-9mfa-200h.png',
}

Slogan.propTypes = {
  Rectangle_src: PropTypes.string,
  instagramicon_alt: PropTypes.string,
  Ellipse1_alt: PropTypes.string,
  Vector_src: PropTypes.string,
  Vector_alt: PropTypes.string,
  instagramicon_src: PropTypes.string,
  Rectangle_alt: PropTypes.string,
  Ellipse1_src: PropTypes.string,
}

export default Slogan
