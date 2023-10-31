import React from 'react'

const Covercorner = (props) => {
  return (
    <>
      <div className="covercorner-covercorner">
        <div className="covercorner-covertexts">
          <h3 className="covercorner-text">
            <span>Her Parçada Zerafet</span>
          </h3>
          <h1 className="covercorner-text02">
            <span>İçinizdeki Kadın İçin Mücevherler</span>
          </h1>
          <span className="covercorner-text04">
            <span>
              En Şık Kaliteli, Takı Ve Aksesuarları Sizin İçin Seçtik. Altın,
              Gümüş, Pırlanta, Zümrüt Ve Daha Birçok Değerli Taşın Yer Aldığı
              Koleksiyonumuzu Keşfedin.
            </span>
          </span>
        </div>
        <div className="covercorner-coverbtns">
          <button className="covercorner-button">
            <span className="covercorner-text06">
              <span>SATIN AL</span>
            </span>
          </button>
          <button className="covercorner-button1">
            <span className="covercorner-text08">
              <span>DAHA FAZLA</span>
            </span>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .covercorner-covercorner {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 490px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .covercorner-covertexts {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .covercorner-text {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 21px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Lora;
            font-weight: 400;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .covercorner-text02 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 54px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 60px;
            font-stretch: normal;
            text-decoration: none;
          }
          .covercorner-text04 {
            color: rgba(255, 255, 255, 0.800000011920929);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Lora;
            font-weight: 400;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .covercorner-coverbtns {
            gap: 30px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .covercorner-button {
            gap: 10px;
            display: flex;
            padding: 12px 25px;
            align-items: center;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .covercorner-text06 {
            color: rgba(0, 0, 0, 1);
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
          .covercorner-button1 {
            gap: 10px;
            display: flex;
            padding: 12px 25px;
            align-items: center;
            border-color: rgba(255, 255, 255, 0.800000011920929);
            border-style: solid;
            border-width: 2px;
            justify-content: center;
          }
          .covercorner-text08 {
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
          @media (max-width: 991px) {
            .covercorner-text {
              text-align: center;
            }
            .covercorner-text02 {
              text-align: center;
            }
            .covercorner-text04 {
              text-align: center;
            }
            .covercorner-coverbtns {
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .covercorner-covercorner {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default Covercorner
