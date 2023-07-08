interface DoubleArrowLeftProps {
  height?: string
  width?: string
}

const DoubleArrowLeft = ({ height = '48', width = '48' }: DoubleArrowLeftProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 -960 960 960">
    <path d="M453-241 213-481l240-240 42 42-198 198 198 198-42 42Zm253 0L466-481l240-240 42 42-198 198 198 198-42 42Z" />
  </svg>
)

export default DoubleArrowLeft