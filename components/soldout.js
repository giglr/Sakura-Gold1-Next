import React from 'react'

const Soldout = (props) => {
  return (
    <>
      <div className="soldout-soldout">
        <span className="soldout-text">
          <span>Tükendİ</span>
        </span>
      </div>
      <style jsx>
        {`
          .soldout-soldout {
            gap: 10px;
            display: flex;
            padding: 10px;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .soldout-text {
            color: rgba(36, 36, 36, 1);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 14.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Soldout
