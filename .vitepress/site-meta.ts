const image = "https://pub.lbkrs.com/files/202205/bHQKu1TbTP5prjuH/preview.png";
const title = "Longbridge Whale docs";
const description =
  "Whale 為券商提供一站式、開箱即用的產品和解決方案，包含 App、交易、風控、清結算、CRM、智能營銷等前中後台系統，以及行情報價、資訊、基本面等數據服務，同時 Whale 也集成了銀行通道業務、股票通道業務、期權通道業務、基金通道業務、KYC/AML 等服務";
const url = "https://longbridgewhale.com/zh-HK/docs";

export const siteMetadata: any = [
  //   facebook
  ["meta", { property: "og:type", content: "website" }],
  [
    "meta",
    {
      property: "og:url",
      content: url,
    },
  ],
  [
    "meta",
    {
      property: "og:title",
      content: title,
    },
  ],
  [
    "meta",
    {
      property: "og:description",
      content: description,
    },
  ],
  [
    "meta",
    {
      property: "og:image",
      content: image,
    },
  ],

  // twitter
  [
    "meta",
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
  ],
  [
    "meta",
    {
      property: "twitter:url",
      content: url,
    },
  ],
  [
    "meta",
    {
      property: "twitter:title",
      content: title,
    },
  ],
  [
    "meta",
    {
      property: "twitter:description",
      content: description,
    },
  ],
  [
    "meta",
    {
      property: "twitter:image",
      content: image,
    },
  ],
];
