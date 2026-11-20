const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const plain = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

/** $42,490 */
export const formatUsd = (n: number) => usd.format(n);

/** 12,500₮ */
export const formatMnt = (n: number) => `${plain.format(Math.round(n))}₮`;

/** 17,386 */
export const formatNumber = (n: number) => plain.format(n);

/** "+$1,000" for paid options, "Үнэгүй" for included ones */
export const formatOptionPrice = (n: number) => (n === 0 ? "Үнэгүй" : `+${formatUsd(n)}`);
