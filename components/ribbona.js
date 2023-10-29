import React from 'react'

const Ribbona = (props) => {
  return (
    <>
      <div className="ribbona-ribbona">
        <span className="ribbona-text">
          <span>Yenİ</span>
        </span>
      </div>
      <style jsx>
        {`
          .ribbona-ribbona {
            gap: 10px;
            width: 50px;
            height: 50px;
            display: flex;
            padding: 7px 5px;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-radius: 35px;
            justify-content: center;
            background-color: rgba(67, 142, 68, 1);
          }
          .ribbona-text {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 14px;
            font-style: Medium;
            text-align: center;
            font-family: Lora;
            font-weight: 500;
            line-height: 16.799999237060547px;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Ribbona
