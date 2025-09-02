/* new tiny helper to keep 'VaderTech' styling consistent */
export function BrandName({ className = "" }: { className?: string }) {
  return <span className={`text-brand ${className}`}>VaderTech</span>
}
