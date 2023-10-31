import React from 'react'

import PropTypes from 'prop-types'

const Bodycorner = (props) => {
  return (
    <>
      <div className={`bodycorner-bodycorner ${props.rootClassName} `}>
        <div className="bodycorner-bodytexts">
          <h3 className="bodycorner-text">
            <span>Şık Takılar ile stilinize zarafet katın.</span>
          </h3>
          <span className="bodycorner-text02">
            <span>SAKURA</span>
          </span>
          <span className="bodycorner-text04">
            <span>GOLD</span>
          </span>
          <span className="bodycorner-text06">
            <span>
              Şık Takılar, en moda ve benzersiz takıları sizin için bir araya
              getiriyor. Her tarza ve her bütçeye uygun mücevherlerimizle sizi
              buluşturuyoruz. Özel tasarım yüzükler, kolyeler, bilezikler ve
              daha fazlasıyla kendinizi özel hissetmenizi sağlıyoruz. Kaliteli
              malzemeler kullanarak yarattığımız takılarımız, uzun ömürlü olacak
              şekilde tasarlanmıştır.
            </span>
          </span>
        </div>
        <div className="bodycorner-btns">
          <button className="bodycorner-button">
            <span className="bodycorner-text08">
              <span>SATIN AL</span>
            </span>
          </button>
          <button className="bodycorner-button1">
            <span className="bodycorner-text10">
              <span>DAHA FAZLA</span>
            </span>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .bodycorner-bodycorner {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            position: relative;
            max-width: 500px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .bodycorner-bodytexts {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bodycorner-text {
            color: rgba(195, 147, 91, 1);
            height: auto;
            font-size: 22px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 32px;
            font-stretch: normal;
            text-decoration: none;
          }
          .bodycorner-text02 {
            color: rgba(36, 36, 36, 1);
            height: auto;
            font-size: 64px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 75px;
            font-stretch: normal;
            text-decoration: none;
          }
          .bodycorner-text04 {
            color: rgba(36, 36, 36, 1);
            height: auto;
            font-size: 40px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 56px;
            font-stretch: normal;
            text-decoration: none;
          }
          .bodycorner-text06 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 22.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .bodycorner-btns {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .bodycorner-button {
            gap: 10px;
            display: flex;
            padding: 12px 25px;
            align-items: center;
            justify-content: center;
            background-color: rgba(33, 33, 33, 1);
          }
          .bodycorner-text08 {
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
          .bodycorner-button1 {
            gap: 10px;
            display: flex;
            padding: 12px 25px;
            align-items: center;
            border-color: rgba(233, 233, 233, 1);
            border-style: solid;
            border-width: 2px;
            justify-content: center;
          }
          .bodycorner-text10 {
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
          .bodycorner-root-class-name {
            flex: 1;
          }
          @media (max-width: 767px) {
            .bodycorner-bodycorner {
              width: auto;
              align-self: stretch;
            }
          }
        `}
      </style>
    </>
  )
}

Bodycorner.defaultProps = {
  rootClassName: '',
}

Bodycorner.propTypes = {
  rootClassName: PropTypes.string,
}

export default Bodycorner
