import React from 'react'

import PropTypes from 'prop-types'

const Indirimcorner = (props) => {
  return (
    <>
      <div className={`indirimcorner-indirimcorner ${props.rootClassName} `}>
        <div className="indirimcorner-texts">
          <div className="indirimcorner-subtitle">
            <h2 className="indirimcorner-text">
              <span>20%</span>
            </h2>
            <h2 className="indirimcorner-text02">
              <span>İNDİRİM</span>
            </h2>
          </div>
          <h2 className="indirimcorner-text04">
            <span>TÜM ALTIN YÜZÜKLERDE</span>
          </h2>
          <span className="indirimcorner-text06">
            <span>
              Tarzınıza ve bütçenize uygun altın yüzükler şimdi çok daha uygun
              fiyatlarla! Tüm altın yüzüklerde geçerli %20 indirim fırsatını
              kaçırmayın. Sevdiklerinize hediye edin ya da kendinizi şımartın.
              Altın yüzüklerdeki bu özel teklifi kaçırmak istemeyeceksiniz.
            </span>
          </span>
        </div>
        <div className="indirimcorner-btns">
          <button className="indirimcorner-button">
            <span className="indirimcorner-text08">
              <span>SATIN AL</span>
            </span>
          </button>
          <button className="indirimcorner-button1">
            <span className="indirimcorner-text10">
              <span>DAHA FAZLA</span>
            </span>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .indirimcorner-indirimcorner {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 500px;
            display: flex;
            position: relative;
            flex-grow: 1;
            max-width: 500px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .indirimcorner-texts {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .indirimcorner-subtitle {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .indirimcorner-text {
            color: rgba(195, 147, 91, 1);
            width: 141px;
            height: auto;
            font-size: 63px;
            font-style: Regular;
            text-align: left;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 75px;
            font-stretch: normal;
            text-decoration: none;
          }
          .indirimcorner-text02 {
            color: rgba(36, 36, 36, 1);
            width: 266px;
            height: auto;
            font-size: 64px;
            font-style: Regular;
            text-align: left;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 75px;
            font-stretch: normal;
            text-decoration: none;
          }
          .indirimcorner-text04 {
            color: rgba(36, 36, 36, 1);
            height: auto;
            font-size: 40px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 56px;
            font-stretch: normal;
            text-decoration: none;
          }
          .indirimcorner-text06 {
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
          .indirimcorner-btns {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .indirimcorner-button {
            gap: 10px;
            display: flex;
            padding: 12px 25px;
            align-items: center;
            justify-content: center;
            background-color: rgba(33, 33, 33, 1);
          }
          .indirimcorner-text08 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 13px;
            font-style: SemiBold;
            text-align: left;
            font-family: Lora;
            font-weight: 600;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .indirimcorner-button1 {
            gap: 10px;
            display: flex;
            padding: 12px 25px;
            align-items: center;
            border-color: rgba(233, 233, 233, 1);
            border-style: solid;
            border-width: 2px;
            justify-content: center;
          }
          .indirimcorner-text10 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 13px;
            font-style: SemiBold;
            text-align: left;
            font-family: Lora;
            font-weight: 600;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .indirimcorner-indirimcorner {
              width: auto;
            }
            .indirimcorner-root-class-name {
              width: 100vw;
              max-width: auto;
            }
          }
          @media (max-width: 479px) {
            .indirimcorner-indirimcorner {
              width: auto;
              align-self: stretch;
            }
          }
        `}
      </style>
    </>
  )
}

Indirimcorner.defaultProps = {
  rootClassName: '',
}

Indirimcorner.propTypes = {
  rootClassName: PropTypes.string,
}

export default Indirimcorner
