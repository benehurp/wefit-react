export default function pluralText(
  count: number,
  singular: string,
  plural: string,
  neutral?: string
) {
  if (count === 0 && neutral) return neutral

  if (count > 1) return plural

  return singular
}
