export default function LidoLogo({ w, h }: { w?: number; h?: number }) {
  const width = w ?? 24
  const height = h ?? 24
  return (
    <svg width={width} height={height} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="256" cy="256" r="256" fill="#F69988" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M256.119 75L345.919 215.234L256.115 267.446L166.321 215.232L256.119 75ZM193.81 208.601L256.119 111.297L318.429 208.601L256.115 244.83L193.81 208.601Z"
        fill="white"
      />
      <path
        d="M255.987 298.269L151.816 237.696L148.972 242.138C116.888 292.242 124.053 357.859 166.199 399.898C215.795 449.367 296.205 449.367 345.801 399.898C387.947 357.859 395.112 292.242 363.028 242.138L360.183 237.695L255.991 298.272L255.987 298.269Z"
        fill="white"
      />
    </svg>
  )
}
