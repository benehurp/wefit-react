import { SpinnerPosition } from './styles'

export const PageSpinner = () => {
  return (
    <SpinnerPosition>
      <svg
        viewBox="0 0 200 200"
        color="white"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="spinner-secondHalf">
            <stop offset="0%" stopOpacity="0" stopColor="currentColor" />
            <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
          </linearGradient>
          <linearGradient id="spinner-firstHalf">
            <stop offset="0%" stopOpacity="1" stopColor="currentColor" />
            <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
          </linearGradient>
        </defs>

        <g strokeWidth="8">
          <path
            stroke="url(#spinner-secondHalf)"
            d="M 4 100 A 96 96 0 0 1 196 100"
          />
          <path
            stroke="url(#spinner-firstHalf)"
            d="M 196 100 A 96 96 0 0 1 4 100"
          />

          <path stroke="currentColor" d="M 4 100 A 96 96 0 0 1 4 98" />
        </g>

        <animateTransform
          from="0 0 0"
          to="360 0 0"
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1200ms"
        />
      </svg>
    </SpinnerPosition>
  )
}
